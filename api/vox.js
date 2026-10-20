// DNB-808 Live: the owner's private vocal pack, read from a private Vercel Blob store (any folder).
// The audio never lives in this repository. Preview deployments sit behind Vercel Authentication; production
// always answers 404, so a merge never exposes the files. Without a connected store the route answers 404 too.
//   GET /api/vox                    -> { files: [{ name, size }] }   vocals: any folder except loops/ (file names only)
//   GET /api/vox?kind=loops         -> the same for the tactical loops, kept under a loops/ folder
//   GET /api/vox?f=<name>[&kind=..] -> the file's bytes
import { list, get } from '@vercel/blob';

const AUDIO = /\.(wav|aif|aiff|mp3|ogg|flac|m4a|zip)$/i;

export default async function handler(req, res) {
  if (process.env.VERCEL_ENV === 'production' || !(process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID)) return res.status(404).end();
  if (req.method !== 'GET') return res.status(405).end();
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  try {
    const f = typeof req.query.f === 'string' ? req.query.f : '';
    const loops = req.query.kind === 'loops', inLoops = p => p.split('/').includes('loops');
    if (f && (/[\/\\]/.test(f) || f.startsWith('.') || !AUDIO.test(f) || f.length > 200)) return res.status(400).end();
    const paths = new Map(); // file name -> the first blob path holding it
    let cursor;
    do {
      const r = await list({ cursor, limit: 1000 });
      r.blobs.forEach(b => { const name = b.pathname.split('/').pop(); if (inLoops(b.pathname) === loops && AUDIO.test(name) && !paths.has(name)) paths.set(name, { path: b.pathname, size: b.size }); });
      cursor = r.hasMore ? r.cursor : undefined;
    } while (cursor);
    if (!f) return res.status(200).json({ files: [...paths].map(([name, v]) => ({ name, size: v.size })) });
    const hit = paths.get(f);
    if (!hit) return res.status(404).end();
    const r = await get(hit.path, { access: 'private' });
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
