# DNB-808 Live

A small Ableton-style DAW for drum & bass, in the spirit of Chase & Status.
It is one self-contained `index.html`: Web Audio only, every sound is
synthesized, no samples and no build step.

It is a private study tool. It lives only on this branch and on its
Vercel preview, which asks for a Vercel login. It is not on the public
Pipoville site, so do not merge this branch into `main`.

## Run it

Open `index.html` in Chrome, Edge, Firefox or Safari, then press
**PRESS START / POWER ON** (browsers only allow audio after a click).

A static server works too, for example `npx serve .`

## What is inside

**Session view** (like Ableton's)
- 8 tracks x 8 scenes of clips (up to 64 scenes after a MIDI import). The triangle launches a clip, the square
  stops the track, the scene buttons launch a whole row
- Launch quantization (none to 4 bars), so clips always land on the beat
- Mixer under the clips: volume, pan, two sends, track on/off, solo, meters

**Arrangement view**
- Timeline lanes per track. Paint clips with a click, drag to move,
  double-click to delete
- **ARR REC**: launch clips in Session view and they are written into the
  timeline bar by bar
- Loop brace, start marker, **SCENES → ARR** to sketch a song in one click
- Session clips override the arrangement per track, and **↩ ARR** hands
  control back to the timeline, like Ableton's *Back to Arrangement*

**Clip view**
- Step grid for drum racks: paint with the mouse, shift+click for
  ghost / normal / accent hits, velocity lane
- Piano roll for synths: scale highlighting, draw / move / resize /
  delete notes, transpose, note length
- **⚡ GENERATE** writes a fresh DnB pattern in the set's key

**Devices**
- Drum Rack: 8 synthesized pads per kit (DnB kit, break kit, rave FX,
  vox chops) with tune, decay, level, pan, open hat choke and sidechain
  trigger
- Three synth engines, each with its own presets. They are original
  designs in the spirit of classic plugins, not copies of their sound or
  presets:
  - **Classic**: unison detune (Reese), resonant filter + envelope,
    tempo-synced LFO (wobble), drive, glide, sub oscillator, mono mode
  - **Polar VA** (virtual analog, Sylenth-style): 4 oscillators in two
    parts, up to 8 unison voices per oscillator with stereo spread, a
    filter and an amp envelope per part, 2 mod envelopes and 2 LFOs
  - **Tidal WT** (wavetable, Massive-style): 3 wavetable oscillators with
    a morphing position, FM, sub and noise, 2 filters in series or in
    parallel, a mod envelope, 2 LFOs and a 16-step stepper
- Per track: Auto Filter, Saturator, Chorus, Compressor, Sidechain
  ducking from the kick
- Master: DJ filter, glue compressor, drive, 8-bit crusher (AudioWorklet),
  limiter. Return A reverb, return B ping-pong delay

**Templates**: Baddadan-Style Rave (an original 100-bar rave DnB track in
that style, not a transcription of the song) and Empty Set.

**MIDI file import**
- **Import MIDI** (or drop a `.mid` file on the window) turns a file into
  a new set: one scene per section, the whole song in the arrangement
- A dialog picks a lane for each part. Drums on channel 10 use the GM
  drum map, chord parts go to STAB / PAD, bass and melodies to the
  matching lanes
- The file never leaves the browser. Use files you have the rights to

**Recording and export**
- Computer keyboard as a MIDI keyboard (A W S E D F T G Y H U J K O L P),
  Z / X octave, C / V velocity. Web MIDI controllers work too
- Session record (●) writes what you play into the playing clip
- **EXPORT WAV** renders the arrangement offline
- **CAPTURE** records everything you hear, live
- Undo / redo, autosave in the browser, save / open sets as `.json`

## Shortcuts

| Key | Action |
| --- | --- |
| Space | Play / stop |
| Tab | Session / Arrangement |
| Shift+Tab | Clip / Device |
| Enter | Launch the selected clip |
| Arrows | Move the selection |
| Delete | Delete the selected clip or arrangement clip |
| Ctrl+D | Duplicate the clip into the next empty slot |
| Ctrl+C / Ctrl+V | Copy / paste a clip |
| Ctrl+Z / Ctrl+Shift+Z | Undo / redo |
| Ctrl+S | Save the set as `.json` |

## Code map

Everything lives in `index.html`, in this order:

1. utils and constants (scales, kits, synth presets, track lanes)
2. project model, templates and the clip generator
3. audio engine (`Engine`): drum voices, the classic synth, effects,
   master bus, then the Polar VA and Tidal WT engines. It only depends on
   the `AudioContext` it receives, so the same code drives live playback
   and the offline WAV export
4. transport: lookahead scheduler, clip launching, arrangement playback
   and recording
5. UI: control bar, browser, session view, mixer
6. UI: arrangement
7. UI: clip editor (canvas) and device view (knobs, faders, synth pages)
8. MIDI file import (parser, lane assignment, dialog)
9. input (keyboard, MIDI), export, persistence, boot

A set is plain JSON (`P`), so undo, autosave and file export all
serialize the same object.
