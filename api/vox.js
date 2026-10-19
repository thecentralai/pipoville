// DNB-808 Live: the owner's private vocal pack, read from a private Vercel Blob store (prefix vox/).
// The audio never lives in this repository. Preview deployments sit behind Vercel Authentication; production
// always answers 404, so a merge never exposes the files. Without a connected store the route answers 404 too.
//   GET /api/vox           -> { files: [{ name, size }] }
//   GET /api/vox?f=<name>  -> the file's bytes
import { list, get } from '@vercel/blob';

const PREFIX = 'vox/';
const AUDIO = /\.(wav|aif|aiff|mp3|ogg|flac|m4a|zip)$/i;

export default async function handler(req, res) {
  if (process.env.VERCEL_ENV === 'production' || !(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID)) return res.status(404).end();
  if (req.method !== 'GET') return res.status(405).end();
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  try {
    const f = typeof req.query.f === 'string' ? req.query.f : '';
    if (!f) {
      const files = [];
      let cursor;
      do {
        const r = await list({ prefix: PREFIX, cursor, limit: 1000 });
        r.blobs.forEach(b => { const name = b.pathname.slice(PREFIX.length); if (name && !name.includes('/') && AUDIO.test(name)) files.push({ name, size: b.size }); });
        cursor = r.hasMore ? r.cursor : undefined;
      } while (cursor);
      return res.status(200).json({ files });
    }
    if (f.includes('/') || f.includes('\\') || f.startsWith('.') || !AUDIO.test(f) || f.length > 200) return res.status(400).end();
    const r = await get(PREFIX + f, { access: 'private' });
    if (!r || r.statusCode !== 200 || !r.stream) return res.status(404).end();
    res.setHeader('Content-Type', r.blob.contentType || 'application/octet-stream');
    if (r.blob.size) res.setHeader('Content-Length', String(r.blob.size));
    const rd = r.stream.getReader();
    for (;;) { const { done, value } = await rd.read(); if (done) break; res.write(Buffer.from(value)); }
    return res.end();
  } catch (e) {
    return res.status(500).json({ error: 'vox store unavailable' });
  }
}
