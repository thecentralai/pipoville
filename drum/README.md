# DNB-808 Live

A small Ableton-style DAW for drum & bass, in the spirit of Chase & Status.
It is one self-contained `index.html`: Web Audio only, every sound is
synthesized, no samples and no build step.

This branch is independent from the Pipoville game. It shares the
repository, not the code or the history.

## Run it

Open `index.html` in Chrome, Edge, Firefox or Safari, then press
**PRESS START / POWER ON** (browsers only allow audio after a click).

A static server works too, for example `npx serve .`

## What is inside

**Session view** (like Ableton's)
- 8 tracks x 8 scenes of clips. The triangle launches a clip, the square
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
- Drum Rack: 8 synthesized pads per kit (DnB kit, break kit, rave FX)
  with tune, decay, level, pan, open hat choke and sidechain trigger
- Poly Synth: unison detune (Reese), resonant filter + envelope,
  tempo-synced LFO (wobble), drive, glide, sub oscillator, mono mode
- Per track: Auto Filter, Saturator, Sidechain ducking from the kick
- Master: DJ filter, glue compressor, drive, 8-bit crusher (AudioWorklet),
  limiter. Return A reverb, return B ping-pong delay

**Templates**: Chase & Status 2-Step, Neurofunk Reese Drop, Jungle Amen
Roll, Liquid Roller, Halftime Stepper. Each one has 6 scenes and a full
64-bar arrangement.

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
3. audio engine (`Engine`): drum voices, poly synth, effects, master bus.
   It only depends on the `AudioContext` it receives, so the same code
   drives live playback and the offline WAV export
4. transport: lookahead scheduler, clip launching, arrangement playback
   and recording
5. UI: control bar, browser, session view, mixer
6. UI: arrangement
7. UI: clip editor (canvas) and device view (knobs, faders)
8. input (keyboard, MIDI), export, persistence, boot

A set is plain JSON (`P`), so undo, autosave and file export all
serialize the same object.
