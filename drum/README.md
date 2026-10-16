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
- **Loop a clip**: drag its right edge. A dashed line marks each new loop.
  Every copy and every loop plays the same clip, so one edit changes all
  of them. **UNIQUE** gives the selected copy its own clip
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
- **Sample pads** (voice "Sample"): a pad plays a recorded sound or one slice of a break,
  with START / END, TUNE, DECAY, REVERSE, PAN and LEVEL. A new hit cuts the last one of the
  same pad (3 ms fade), so re-sequenced breaks stay tight.
  - **Jungle Breaks** kit: the 8 eighth-note slices of a 1-bar break. Re-order them in the
    step grid to chop the break, the classic jungle technique.
  - **Acoustic Kit**: eight acoustic one-shots (kick, snare, ghost, hats, ride, crash, tom).
  - **Load sample...** puts your own audio file on a pad (for example a break you own).
    The app finds its slices, and **To pads** spreads them over the 8 pads. The file stays in
    this browser: a saved set holds only a key, never the audio.
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
- **Rave DnB Masterclass** is an original 160-bar rave / jump-up DnB teaching track,
  at 174 BPM in F minor. It is the set a new user sees first.
- It uses genre conventions only. It does not copy the riffs, melodies, chords,
  lyrics or sounds of any real record.
- Eight scenes: INTRO, BUILD, DROP A, MC VERSE, SWITCH-UP, DROP B, BREAKDOWN and FINAL DROP.
  A ninth scene stays empty for your own clips.
- The arrangement reuses them in 8- and 16-bar phrases. The intro lasts 32 bars and
  the outro 24, so a DJ can mix them. Both drops last 32 bars.
- DROP A leaves gaps in the bass for an MC. DROP B switches the bass sound.
  The builds have no kick and end with one silent beat. The 16-bar breakdown starts
  without drums and sub, about 8 LU under the drops.
- The lanes are DRUMS (Pro DnB Kit), BREAK (a sliced CC0 break, re-sequenced), BASS
  (the talking mid-bass), SUB, STAB, PAD, LEAD (the hoover) and FX (risers, impacts,
  crashes and two vocal chops).
- The mix and the master are set: no clipper on the master, about -12.8 LUFS, a crest
  factor near 11 dB in the drops and no clipping.

**Lesson** (detail tab "Lesson")
- A 13-step lesson that goes with the Rave DnB Masterclass, in Italian or English.
- The steps cover tempo and phrases, the two-step, groove and the drum bus, the break
  and its chops, the sub and the sidechain, the talking mid-bass, the hoover, stabs and pads, FX and
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

**Library** (browser section "Library")
- Openly licensed drum & bass songs that open as ready sets in one click: 6 songs by
  Aalasteir (CC BY 4.0), 4 tracker songs by congusbongus (CC0, CC BY), 3 by Scott DeathBoy
  (public domain), "Strawberry" by Xcalibur (CC BY) and "Grooves", 8 drummer grooves from the
  Groove MIDI Dataset (CC BY 4.0).
- Only the notes ship, never a sound of the originals: every sound is made by this app.
- **Credits** shows the open set's author, licence, source and the changes made. Keep that
  credit when you share music made from a library set.

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
   master bus, then the Polar VA and Tidal WT engines, the sample bank
   (CC0 one-shots and breaks as MP3 data) and the sampler. It only depends
   on the `AudioContext` it receives, so the same code drives live playback
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
11. library (openly licensed songs as MIDI data, their credits)
12. input (keyboard, MIDI), export, persistence, boot

A set is plain JSON (`P`), so undo, autosave and file export all
serialize the same object.

## Credits

### Samples

- Acoustic Kit and jungle breaks: samples from Virtuosity Drums by Versilian Studios LLC,
  drummer Austin McMahon, recorded at Virtuosity Musical Instruments, Boston
  ([CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)) -
  <https://github.com/sfzinstruments/virtuosity_drums>
- Jungle breaks "Roller 172", "Ride Chop 170" and "Shuffle 174": original sequences, mix and
  processing by DNB-808 Live, built only from those CC0 samples (no record samples)

### Library

The **Library** in the browser opens openly licensed drum & bass songs as ready sets.
The app ships the notes only (Standard MIDI Files inside `index.html`), never a sound of the originals.
Every sound is made by DNB-808 Live. The **Credits** button shows the credit of the open set.
Keep the credit line when you share music made from a library set, and say what you changed.

| Set | Author | Licence | Source |
|---|---|---|---|
| O-Two | Aalasteir | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/o-two-aalasteir> |
| CORESTEP | Scott DeathBoy | [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/) | <https://archive.org/details/DeathBoyXMs> |
| REESE | Scott DeathBoy | [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/) | <https://archive.org/details/DeathBoyXMs> |
| Strawberry | Xcalibur (XcaliburLord) | [CC BY (version not stated)](https://creativecommons.org/licenses/) | <https://lmms.io/lsp/?action=show&file=18978> |
| Subterrain | congusbongus | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | <https://opengameart.org/content/subterrain> |
| System Daemon | congusbongus | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) | <https://opengameart.org/content/system-daemon> |
| Ah Seh | Aalasteir | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/ah-seh-Aalasteir> |
| Roll back the Tape | Aalasteir | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/roll-back-the-tape-Aalasteir> |
| Stone5 | Aalasteir, drums by DynamiteGrizzly (Ruby Mello) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/Stone5> |
| Y4J | Aalasteir | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/y4j-Aalasteir> |
| Greene | Aalasteir | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://archive.org/details/Greene-Aalasteir> |
| Null Function | congusbongus | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://opengameart.org/content/null-function> |
| Shuffle | congusbongus | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://opengameart.org/content/shuffle> |
| CLEAN2 | Scott DeathBoy | [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/) | <https://archive.org/details/DeathBoyXMs> |
| Grooves | Google LLC: Groove MIDI Dataset (Gillick, Roberts, Engel, Tran, Bamman 2019) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | <https://magenta.withgoogle.com/datasets/groove> |

### O-Two

- **Credit line:** "O-Two" by Aalasteir, CC BY 4.0, https://archive.org/details/o-two-aalasteir (MIDI parts merged and drums moved to channel 10)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/o-two-aalasteir>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 170 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - Empty first bar removed
  - "2 Bass+FX" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Two FX notes of "2 Bass+FX" (above B3) left out

### CORESTEP

- **Credit line:** "CORESTEP" by Scott DeathBoy, from "DeathBoy XM Module Archive - '95 - '99" (https://archive.org/details/DeathBoyXMs), public domain (credit as courtesy).
- **Licence:** [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/)
- **Source:** <https://archive.org/details/DeathBoyXMs>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 175 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Systembe.iff" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - "Systembe" part played as a bass line on A1

### REESE

- **Credit line:** "REESE" by Scott DeathBoy, DeathBoy XM Module Archive (https://archive.org/details/DeathBoyXMs), public domain (credit as courtesy).
- **Licence:** [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/)
- **Source:** <https://archive.org/details/DeathBoyXMs>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 165 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "inst 3" doubled on the REESE and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Part left out: "Apachecl.iff (break hits)"
  - Quiet "Tr808-01" hits played as closed hats
  - Pitched parts moved to the pitch of their samples and to the octave of their lane

### Strawberry

- **Credit line:** "\[DRUM & BASS\] Strawberry" by Xcalibur (XcaliburLord), Creative Commons BY, LMMS Sharing Platform, https://lmms.io/lsp/?action=show&file=18978 (converted to MIDI)
- **Licence:** [CC BY (version not stated)](https://creativecommons.org/licenses/)
- **Source:** <https://lmms.io/lsp/?action=show&file=18978>
- **Changes:**
  - LMMS project converted to MIDI: Beat/Bassline patterns expanded, factory drum samples mapped to General MIDI drum notes, muted "sforzando" track left out
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 174 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Good Old Times" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Parts left out: "BB TripleOscillator", "Harp", "soft_piano.ds"
  - "Cowbell.ds" melody played by a pluck synth

### Subterrain

- **Credit line:** "Subterrain" by congusbongus (https://opengameart.org/content/subterrain), CC0 (credit optional).
- **Licence:** [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
- **Source:** <https://opengameart.org/content/subterrain>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes, octaves of the pitched parts set by role
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 160 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - First 6 empty bars removed
  - "Novation Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Part left out: "FX Filter Sweep"
  - Power-chord samples played as root and fifth
  - "FX Bounce" moved up a fifth to the pitch of its sample

### System Daemon

- **Credit line:** "System Daemon" by congusbongus (https://opengameart.org/content/system-daemon), CC BY 3.0. Converted from .xm to MIDI (notes only).
- **Licence:** [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- **Source:** <https://opengameart.org/content/system-daemon>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 170 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Bass" doubled on the BASS and SUB lanes
  - "TB-303 Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Parts left out: "arp", "Synth Low Strings", "FX Zap (break hits)", "SH-101 Sweep", "Phily Stab"
  - Sampled break not included: the BREAK lane plays a simple two-step break, written for this library, where the original break plays
  - Pitched parts moved to the pitch of their samples and to the octave of their lane

### Ah Seh

- **Credit line:** "Ah Seh" by Aalasteir, CC BY 4.0, https://archive.org/details/ah-seh-Aalasteir (MIDI parts merged and drums moved to channel 10)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/ah-seh-Aalasteir>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 170 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - Empty first bar removed
  - "2 Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)

### Roll back the Tape

- **Credit line:** "Roll back the Tape" by Aalasteir (vocals in the audio by MegapiemanPHD), CC BY 4.0, https://archive.org/details/roll-back-the-tape-Aalasteir (MIDI parts merged and drums moved to channel 10)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/roll-back-the-tape-Aalasteir>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 180 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - Empty first bar removed
  - SUB notes moved into one octave (E1 to Eb2)

### Stone5

- **Credit line:** "Stone5" by Aalasteir, drums by DynamiteGrizzly (Ruby Mello), CC BY 4.0, https://archive.org/details/Stone5 (MIDI parts merged and drums moved to channel 10)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/Stone5>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 160 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - Empty first bar removed
  - "Bassline" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Long notes of part "3" moved to the CHORDS lane

### Y4J

- **Credit line:** "Y4J" by Aalasteir, CC BY 4.0, https://archive.org/details/y4j-Aalasteir (MIDI parts merged and drums moved to channel 10)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/y4j-Aalasteir>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 160 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - First 2 empty bars removed
  - "Bassline" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)

### Greene

- **Credit line:** "Greene" by Aalasteir, CC BY 4.0, https://archive.org/details/Greene-Aalasteir (MIDI parts merged, drums moved to channel 10, snare note 37 changed to 38)
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://archive.org/details/Greene-Aalasteir>
- **Changes:**
  - MIDI parts of the download merged into one file, drums moved to channel 10, snare note 37 changed to 38
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 165 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - Empty first bar removed
  - "3 Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Part "2" moved up an octave

### Null Function

- **Credit line:** "Null Function" by congusbongus (https://opengameart.org/content/null-function), CC BY 4.0. Converted from .xm to MIDI (notes only).
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://opengameart.org/content/null-function>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 162 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Parts left out: "bass accent", "arp", "milky"
  - Sampled break not included: the BREAK lane plays a simple two-step break, written for this library, where the original break plays
  - "Jungle Chord" sample played by a stab synth (root and fifth)
  - "Bright Piano f" played louder
  - Pitched parts moved to the pitch of their samples and to the octave of their lane

### Shuffle

- **Credit line:** "Shuffle" by congusbongus (https://opengameart.org/content/shuffle), CC BY 4.0. Converted from .xm to MIDI (notes only).
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://opengameart.org/content/shuffle>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 160 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Bass" doubled on the BASS and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Parts left out: "bbbass", "check (break hits)"
  - Sampled break not included: the BREAK lane plays a simple two-step break, written for this library, where the original break plays
  - Quiet "Juno106 Synth" and "High Hat Closed" parts played louder
  - Pitched parts moved to the pitch of their samples and to the octave of their lane

### CLEAN2

- **Credit line:** "CLEAN2" by Scott DeathBoy, DeathBoy XM Module Archive (https://archive.org/details/DeathBoyXMs), public domain (credit as courtesy).
- **Licence:** [Public domain (PD Mark 1.0)](https://creativecommons.org/publicdomain/mark/1.0/)
- **Source:** <https://archive.org/details/DeathBoyXMs>
- **Changes:**
  - Notes read from the .xm module patterns (no samples), drum samples mapped to General MIDI drum notes
  - Notes quantized to 16ths and cut into 8-bar scenes, the whole song laid out in the arrangement at 165 BPM
  - All sounds made by the app's own kits and synths (no sound of the original)
  - "Dred1.wav" doubled on the DRED and SUB lanes
  - SUB notes moved into one octave (E1 to Eb2)
  - Parts left out: "Screamsc.iffvcln.vcl", "Praisech.iff"
  - "909rim" played on the TOPS pad, "Sinecz" played as ghost snares
  - "Dred1" sample played as a bass line two octaves lower

### Grooves

- **Credit line:** Drums: Groove MIDI Dataset by Google LLC (Gillick, Roberts, Engel, Tran, Bamman 2019), CC BY 4.0 https://creativecommons.org/licenses/by/4.0/. Scenes 1-8: drummer1/session1/80_dance-breakbeat_170_beat_4-4.mid, drummer1/session1/81_dance-breakbeat_170_beat_4-4.mid, drummer5/eval_session/1_funk-groove1_138_beat_4-4.mid, drummer7/session3/65_funk_112_beat_4-4.mid, drummer5/eval_session/10_soul-groove10_102_beat_4-4.mid, drummer7/session3/130_soul_105_beat_4-4.mid, drummer1/session1/126_funk-fast_125_beat_4-4.mid, drummer5/eval_session/6_hiphop-groove6_87_beat_4-4.mid.
- **Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Source:** <https://magenta.withgoogle.com/datasets/groove>
- **Changes:**
  - Excerpted, remapped to General MIDI drum notes and tempo-scaled for this library
  - Bars 1-8 of each excerpt made into one scene, all at 172 BPM (recorded at 170, 170, 138, 112, 102, 105, 125, 87 BPM, the 87 BPM groove read as halftime)
  - Notes quantized to 16ths
  - All sounds made by the app's own kits and synths (no sound of the original)

Notes on the licences:

- CC BY asks for the credit, a link to the licence and a note that the work was changed: the credit line and the changes above do that.
- "Strawberry" is labelled "Creative Commons (by)" on the LMMS Sharing Platform with no version number: credit it as CC BY.
- Scott DeathBoy put the Public Domain Mark on his own modules. The credit is a courtesy. Subterrain is CC0: credit optional.
- The tracker modules (.xm) also hold samples of unknown origin. The library has their notes only, never their samples.
