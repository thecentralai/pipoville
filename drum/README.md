# DNB-808 Live

A small Ableton-style DAW for drum & bass, built for teaching rave and jump-up DnB.
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
- 8 tracks x 8 scenes of clips (9 in the masterclass, up to 64 after a MIDI import). The triangle launches a clip, the square
  stops the track, the scene buttons launch a whole row
- Launch quantization (none to 4 bars), so clips always land on the beat
- Mixer under the clips: volume, pan, two sends, track on/off (buttons 1-8), solo, meters

**Arrangement view**
- Timeline lanes per track. Paint clips with a click, drag to move,
  double-click to delete
- **ARR REC**: launch clips in Session view and they are written into the
  timeline bar by bar
- Loop brace, start marker, **SCENES → ARR** to sketch a song in one click.
  It rebuilds the timeline with 8 bars per scene, so it replaces a longer
  arrangement. Ctrl+Z undoes it
- Session clips override the arrangement per track, and **↩ Arrangement** hands
  control back to the timeline, like Ableton's *Back to Arrangement*

**Clip view**
- Step grid for drum racks: paint with the mouse, shift+click for
  ghost / normal / accent hits, velocity lane
- Piano roll for synths: scale highlighting, draw / move / resize /
  delete notes, transpose, note length
- **⚡ GENERATE** writes a fresh DnB pattern in the set's key

**Devices**
- Drum Rack: 8 synthesized pads per kit, with tune, decay, level, pan,
  open hat choke and sidechain trigger. Five kits: DnB Kit, Pro DnB Kit,
  Break Kit, Rave FX and Vox Chops
- **Pro DnB Kit**: eight new voices for a modern two-step.
  - KICK: a fast pitch drop for the punch, then a clean sub tail on Ab1.
  - SNARE: a tonal body on Ab3, wires, a clap layer and a short gated room.
  - CLAP: several hands that never hit together. It is wide, but it keeps a centre.
  - C-HAT, O-HAT and RIDE: six detuned square waves, like an analog drum machine.
    A closed hat chokes the open hat.
  - TOPS: a shaker stroke one 16th long, for a constant top loop.
  - GHOST: a soft snare stroke for the notes between the backbeats.
  - Everything with low end stays in the centre. The tuned pads are in F minor at TUNE 0.
- The Vox Chops pads are tuned to the A440 grid: TUNE 0 sings D3
- Three synth engines, each with its own presets. They are original
  designs, not copies of the sound or the presets of any plugin:
  - **Classic**: unison detune (Reese), resonant filter + envelope,
    tempo-synced LFO (wobble), drive, glide, sub oscillator, mono mode
  - **Polar VA** (multi-oscillator virtual analog): 4 oscillators in two
    parts, up to 8 unison voices per oscillator with stereo spread, a
    filter and an amp envelope per part, 2 mod envelopes and 2 LFOs
  - **Tidal WT** (wavetable): 3 wavetable oscillators with
    a morphing position, FM, sub and noise, 2 filters in series or in
    parallel, a mod envelope, 2 LFOs and a 16-step stepper
- **Nine new presets** for the masterclass. Each one reaches its track at about the same
  loudness, so the faders do the mix:
  - Polar Rave Hoover: detuned saws, a pulse one octave down, a pitch dive into every note and glide
  - Tidal Talker Gate: a vowel wavetable that talks, cut into bursts by a 16-step gate
  - Tidal FM Growl: a growl whose harmonics keep moving
  - Tidal Donk: a short, bouncy bass for offbeat 8ths
  - Polar Rave Stab: one key plays the note, its fifth and its octave (chord memory)
  - Sub Pure Mono: a clean mono sine for the sub
  - Polar Switch Reese: slow, beating saws that roll
  - Polar Dark Pad: a dark bed that opens slowly
  - Polar Hook Pluck: a short hook that leaves room for the MC
- Per track: Auto Filter, Saturator, Chorus, Compressor, Sidechain
  ducking from the kick
- Master: DJ filter, glue compressor, drive, 8-bit crusher (AudioWorklet),
  limiter. Return A reverb, return B ping-pong delay

**Templates**: Rave DnB Masterclass and Empty Set.
- **Rave DnB Masterclass** is an original 128-bar rave / jump-up DnB teaching track,
  at 174 BPM in F minor. It is the set a new user sees first.
- It uses genre conventions only. It does not copy the riffs, melodies, chords,
  lyrics or sounds of any real record.
- Eight scenes: INTRO, BUILD, DROP A, MC VERSE, SWITCH-UP, DROP B, BREAKDOWN and FINAL DROP.
  A ninth scene stays empty for your own clips.
- The arrangement reuses them in 8- and 16-bar phrases. The intro and the outro
  last 16 bars each, so a DJ can mix them.
- DROP A leaves gaps in the bass for an MC. DROP B switches the bass sound.
  The build plays three times, and the energy falls in the verse and the breakdown.
- The lanes are DRUMS (Pro DnB Kit), VOX (chants and shouts), BASS (the talking
  mid-bass), SUB, STAB, PAD, LEAD (the hoover) and FX (risers, impacts, crashes).
- The mix and the master are set: the track reaches about -7 LUFS with no clipping.

**Lesson** (detail tab "Lesson")
- A 12-step lesson that goes with the Rave DnB Masterclass, in Italian or English.
- The steps cover tempo and phrases, the two-step, groove and the drum bus, the sub
  and the sidechain, the talking mid-bass, the hoover, stabs and pads, FX and
  transitions, the arrangement, the mix, the master, and the reference.
- **Show me** opens what the step talks about. **Listen** plays its scene or section.
- **Check** compares the set with the step's targets and lists what to change.
- **Measure** renders the set offline and compares its loudness with the targets.
- **Mark done** ticks a step. The progress and the language stay in this browser.
- The last page has exercises, notes and presets to try. **Try** loads a preset with its FX
  and mixer settings. Ctrl+Z undoes it.
- If another set is open, the lesson offers to open the template. Ctrl+Z brings your set back.

**Reference** (menu button and detail tab "Reference")
- Open a finished track that you own (WAV, MP3, AAC, OGG or FLAC), or drop it on the window.
- The file is decoded and analysed in the browser. It is never uploaded, and it is never in a
  WAV export or a capture. The browser keeps it until you press Remove.
- The reference plays in sync with your set, at your tempo, from the start marker.
- **B** switches between your set and the reference. **Both** plays them together.
- **Auto** lines up its first bar line with bar 1. The nudge buttons and a click on the
  waveform move it by a bar, a beat or 10 ms.
- **Match** plays the reference at the loudness of your set, so you compare sound, not level.
  **Trim** adds extra gain.
- The panel shows the detected tempo and key, the loudness of both (short-term and
  integrated, LUFS) and both spectra in 1/6-octave bands.
- **Compare offline** renders the loop region and measures it against the same part of the reference.
- **Use tempo** sets your tempo to the reference.
- **Match key** moves every note and the tuned drums to the reference's key, the shorter way.
  With a major reference and a minor set, the set goes to the relative minor. Drum patterns stay.
- **Transpose − / +** moves the set by one semitone, at most 6 up or 6 down.
- A move that would push a tuned drum past its TUNE range is refused, so every move can come back exactly.
- Every change is one undo step: Ctrl+Z puts the notes and the key back.

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
| Shift+Tab | Next detail tab (Clip, Device, Reference, Lesson) |
| B | Set / reference (when a reference is open) |
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
2. project model, templates, the lesson data and the clip generator
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
9. reference player: signal processing, analysis (tempo, bars, key,
   loudness, spectrum) and the Reference panel
10. lesson panel
11. input (keyboard, MIDI), export, persistence, boot

A set is plain JSON (`P`), so undo, autosave and file export all
serialize the same object.
