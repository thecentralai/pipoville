# DNB-808 Live

A small Ableton-style DAW for drum & bass, built for teaching rave and jump-up DnB.
It is one self-contained `index.html`: Web Audio only, no build step.
Most sounds are synthesized; the Acoustic Kit and the Jungle Breaks use
CC0 drum samples that are stored inside the page.

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
- **GENERATE NOTES** (synth lanes) and **GENERATE BEAT** (drum lanes) write parts you can
  study: every synth lane follows one chord progression, every drum lane plays a named style.
  See [The generator](#the-generator-harmony-scales-progressions-and-drum-styles) below

**Devices**
- Drum Rack: 8 synthesized pads per kit, with tune, decay, level, pan,
  open hat choke and sidechain trigger. Seven kits: DnB Kit, Pro DnB Kit,
  Break Kit, Rave FX, Vox Chops, Jungle Breaks and Acoustic Kit (the last two
  play CC0 samples)
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
    parts, up to 16 unison voices per oscillator (classic or supersaw spread),
    hard sync, FM 2>1 and 4>3, a filter (with a ladder mode) and a drive with
    5 types before or after the filter per part, 2 mod envelopes and 2 LFOs
  - **Tidal WT** (wavetable): 3 wavetable oscillators with a morphing position
    (8 more 16-frame tables: Neuro Growl, Neuro Tear, Talk U-O-A-E-I, Sync Sweep,
    Sync Square, Sync Tri, PWM Sweep, Metallic), warp per oscillator (fold, sine fold,
    bend, hard clip), FM from osc 2 or 3, a sub with 5 shapes, noise, 2 filters in
    series or in parallel (ladder, comb, formant A-E-I-O-U, notch sweep and the
    classic types), a post drive, a mod envelope, 2 LFOs and a 16-step stepper
  - Both: new LFO shapes (Wobble, Neuro steps, Random steps, Pump...), rates up to 4/1,
    a "once" mode that plays one cycle (an LFO used as a tempo-synced envelope), and
    **LOW MONO** (the sound turns mono below a chosen frequency)
  - Heavy patches (the new features above) are limited to a few live voices: the oldest
    releasing tail fades first, a held note is never cut. Old presets and exports are not limited
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
- **Eight heavy presets** for modern basses and leads, each at about the same loudness:
  Neuro Reese Wide, Festival Hoover 16, Jump-Up Talker FM, Growl Formant, Supersaw Rave Stab,
  Sub Square Grit, Neuro Metal Bass and Rolling Reese
- Per track: Auto Filter, Saturator, Chorus, Compressor, Sidechain
  ducking from the kick (with a hold time per track), and five stages that start off,
  so an old set sounds the same:
  - **Distortion**: tube, hard clip, foldback, rectify and bitcrush, with DRIVE above the
    track's own level, TONE, MIX and OUTPUT. 4x oversampling keeps high notes clean
  - **EQ**: low cut and high cut (12, 24 or 48 dB/oct), two shelves and two bells. Drag the
    points on the curve
  - **OTT**: 3-band upward and downward compression, for the bright "fizz" of a neuro bass
  - **Phaser / Flanger**: free or tempo-synced, locked to the bar
  - **Width**: wider highs, mono lows below a frequency you choose
- Master: DJ filter, glue compressor, drive, 8-bit crusher (AudioWorklet).
  Return A reverb, return B ping-pong delay
- **Mastering chain** (master device view), off on old sets:
  - Presets **Club loud** (about -6 LUFS on the drop), **Streaming** (-9 LUFS on the song),
    **Gentle** (-11 LUFS) and **Off** (the classic limiter)
  - **M/S Tone** (mono below a frequency, tilt, width of the highs), **Multiband** (3 bands,
    with solo), **Clipper** (4x oversampled, hard to soft knee) and a **true-peak limiter**
    with lookahead. The ceiling is -1 dBTP
  - **PUSH** drives the clipper and the limiter: it is the loudness knob
  - **LEARN** renders the song once, finds the loudest 16 bars (the drop) and sets PUSH so
    the master reaches the TARGET. Change the set or the preset while it runs and it applies nothing
  - Meters: true peak, short-term and integrated loudness, PLR and the gain reduction of each stage
  - Exports and the lesson's Measure go through the same chain as what you hear

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

**Credits** (menu bar and browser)
- Shows the credits of the bundled samples. A set opened from the old library (removed in this version) keeps its
  author, licence, source and changes, and Credits still shows them.

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

## The generator: harmony, scales, progressions and drum styles

GENERATE fills a clip with a part that you can study, play and change. It does not throw random notes at the grid. Every
synth lane follows one chord progression, and every drum lane plays a named style. The clip panel shows what was made and
why, so the generator also works as a harmony lesson.

### Where it is

Select a clip. The clip panel (on the left of the piano roll) has the generator block under LAUNCH:

- **GENERATE NOTES** (blue) on the synth lanes: BASS, SUB, STAB, PAD, LEAD.
- **GENERATE BEAT** (red) on the drum lanes. A lane with the Rave FX kit shows **GENERATE FX**; a lane with the Vox Chops kit
  shows **GENERATE CHOPS**.
- The gear button shows or hides the settings. The browser remembers your choice.
- An empty slot offers **CREATE + GENERATE**.

Every press is one undo step (CTRL+Z). A change of a setting is its own undo step. Nothing in a set changes until you press
a generate button, so old sets load and sound as before.

### Key and scale

The transport's KEY and scale menus decide the notes. The generator uses them for every lane. The scale menu has these
scales (each one has a teaching line in the info bar when you point at the menu):

| Scale | Notes from the root | Sound and use |
|---|---|---|
| Minor (natural minor) | 1 2 b3 4 5 b6 b7 | The home of DnB. i, iv and v are minor chords; bIII, bVI and bVII are major. |
| Phrygian | 1 b2 b3 4 5 b6 b7 | The half step from the root to b2: the darkest colour. Neuro and techstep. |
| Dorian | 1 2 b3 4 5 6 b7 | The major 6th makes IV a major chord. Minor but hopeful: soulful liquid. |
| Harmonic minor | 1 2 b3 4 5 b6 7 | The major 7th makes V a major chord that pulls back to i. Dramatic. |
| Major | 1 2 3 4 5 6 7 | Bright. Liquid and old-skool piano chords. |
| Melodic minor | 1 2 b3 4 5 6 7 | Smooth and jazzy. The minor chord with a major 7th is a liquid colour. |
| Minor pentatonic | 1 b3 4 5 b7 | 5 notes, no half steps. Leads stay on them; the chords, the sub and the bass come from natural minor. |
| Locrian | 1 b2 b3 4 b5 b6 b7 | The home chord is diminished and never rests. Tense riffs over one sub note. |
| Phrygian dominant | 1 b2 3 4 5 b6 b7 | A major home chord with b2 above it. Tense and exotic. |
| Hungarian minor | 1 2 b3 #4 5 b6 7 | Two steps of a minor 3rd inside the scale. Exotic and dramatic. |
| Mixolydian | 1 2 3 4 5 6 b7 | bVII is a major chord a tone under I. Bright rave stabs. |
| Lydian | 1 2 3 #4 5 6 7 | Dreamy, no pull home. Intros and breakdowns. |
| Chromatic | all 12 | The piano roll marks no rows. The generator takes chords and melodies from natural minor. |

The piano roll now names the scale notes as the key spells them: in F minor a row reads Ab3, not G#3. The lesson texts use
the same names.

### Roman numerals

A roman numeral names a chord by the scale degree of its root. The generator counts from the **major scale of the key**:

- **I II III IV V VI VII** are the degrees of the major scale. A **b** in front means a semitone lower: in F, bVI is Db.
- **Upper case** means a major 3rd (a major chord). **Lower case** means a minor 3rd (a minor chord).
- **°** is diminished, **ø7** is half-diminished (m7b5), **+** is augmented.
- A number after the numeral is the chord type: i7, bVImaj7, bVII7, i9.

So in F minor the seven chords are: i (Fm), ii° (Gdim), bIII (Ab), iv (Bbm), v (Cm), bVI (Db), bVII (Eb). The same numerals
work in any key: that is why a progression can move to another key with Match key or Transpose and stay the same song.

### Progressions

PROG chooses the song progression. It is shared by every synth lane of the set (it is saved with the set). The menu shows
each progression with its numerals and its chord names in the current key. The card under the menus shows the chords as
they will sound (with the CHORDS setting), how long each chord lasts, the teaching note, and the scale.

Each progression is written for one scale. In another scale the same degrees change their quality: in natural minor the V
of "Dramatic minor" becomes a minor v. The card then offers a button to switch the set to the written scale.

The table shows each progression in F, in its written scale.

| Progression | Family | Written in | Numerals | Triads in F | Default chords in F | Bars per chord |
|---|---|---|---|---|---|---|
| Minor loop | Rollers | Natural minor | i-bVI-bIII-bVII | Fm Db Ab Eb | 7ths: Fm7 Dbmaj7 Abmaj7 Eb7 | 2 |
| Two-chord vamp | Rollers | Natural minor | i-bVII | Fm Eb | 7ths: Fm7 Eb7 | 2 |
| Deep minor | Rollers | Natural minor | i-v-bVI-bVII | Fm Cm Db Eb | 7ths: Fm7 Cm7 Dbmaj7 Eb7 | 2 |
| Rave anthem | Anthems | Natural minor | i-bVII-bVI-bVII | Fm Eb Db Eb | Triads | 1 |
| Festival build | Anthems | Natural minor | i-i-bVI-bVII | Fm Fm Db Eb | Sus: Fsus2 Fsus2 Dbsus2 Ebsus2 | 2 |
| Liquid ii-v-i | Liquid | Natural minor | ii°-v-i-i | Gdim Cm Fm Fm | 9ths: Gm7b5 Cm7 Fm9 Fm9 | 2 |
| Liquid sway | Liquid | Natural minor | i-iv | Fm Bbm | 9ths: Fm9 Bbm9 | 2 |
| Liquid major | Liquid | Major | IV-iii-vi-vi | Bb Am Dm Dm | 7ths: Bbmaj7 Am7 Dm7 Dm7 | 2 |
| Dorian lift | Liquid | Dorian | i-IV | Fm Bb | 7ths: Fm7 Bb7 | 2 |
| Dramatic minor | Dark | Harmonic minor | i-iv-bVI-V | Fm Bbm Db C | 7ths: Fm(maj7) Bbm7 Dbmaj7 C7 | 2 |
| Dark minor | Dark | Harmonic minor | i-bVI-iv-V | Fm Db Bbm C | Triads | 2 |
| Neuro half-step | Neuro | Phrygian | i-bII | Fm Gb | Power: F5 Gb5 | 1 |
| Dominant menace | Neuro | Phrygian dominant | I-bII-I-bvii | F Gb F Ebm | Triads | 1 |
| Jump-up pedal | Jump-up | Natural minor | i-i-i-bVI | Fm Fm Fm Db | Power: F5 F5 F5 Db5 | 1 |
| Rave major | Bright | Mixolydian | I-bVII-IV-I | F Eb Bb F | Triads | 1 |
| Lydian float | Bright | Lydian | I-II | F G | 7ths: Fmaj7 G7 | 2 |

How a progression fits a clip: the chords keep their written length while the whole progression fits the clip. In a shorter
clip each chord gets half as long (down to half a bar). A 1-bar clip holds 2 chords; the card says how many fit. Give lanes
that play together the same clip length, so their chords change at the same time (GENERATE SCENE does this for you).

### Chords (CHORDS)

| Setting | Notes | Sound |
|---|---|---|
| Triads | root, 3rd, 5th | The plainest, strongest chords. |
| 7ths | + the 7th | Warmer: maj7, m7, 7, m7b5. |
| 9ths | 7th chord + 9th, without the 5th | The soft liquid colour. A b9 (a semitone above the root) is left out. |
| 11ths | 9th chord + 11th, without the 5th | Deep, open pads. An 11th over a major 3rd would clash, so it is left out. |
| Sus2 / Sus4 | the 3rd replaced by the 2nd or 4th | Neither major nor minor: open, good for builds. |
| Power (1-5-8) | root, 5th, octave | Hard and neutral. On a degree without a perfect 5th: octaves only. |
| Stacked 5ths | root, 5th, the 5th above it | Wide and hollow rave and neuro stabs. |
| Stacked 4ths | three scale notes a 4th apart | Modern and cold. |

AUTO uses the chord type the progression was written with.

### Voicing and voice leading

Each chord takes the inversion that is **nearest to the chord before**. The common notes stay where they are and the others
move by a step. Example in F minor with 7ths: Fm7 (F Ab C Eb) goes to Dbmaj7 (F Ab C Db): only Eb moves, one semitone down.
Over all progressions and keys, close voicing moves 0.9 semitones per voice per chord change on average. Root-position blocks
would move 2.1, more than twice as much.

VOICING (PAD and STAB): **Close** keeps the notes within an octave. **Open** moves one note an octave down (a "drop 2"), so
the chord spreads wider and softer. AUTO plays a pad open and the other lanes close.

### What each lane plays (RHYTHM)

All lanes follow the same chords. AUTO picks a rhythm from the progression's family, a different one each press.

- **SUB**: only roots, one note at a time, in the octave E1 to Eb2. Long roots, two-step lock (with the kick on 1 and on
  the "and" of 3), one per bar, half bars.
- **BASS**: the root on every chord change. Between changes: the octave, the 5th or the 3rd, and a passing note (the scale
  note next to the next chord's root) just before the change. Patterns: roller, two-step bounce, neuro stepper (16ths with
  octave jumps), jump-up wobble (long notes, the synth's LFO does the wobble), liquid walking (quarter notes), long notes.
- **PAD**: held chords, every bar, or half bars.
- **STAB**: offbeats, 3-3-2, anthem (two bars, syncopated), hits on 1 and on the "and" of 2, push.
- **LEAD**: a motif in **call and answer**: a one-bar rhythm repeats with the same shape. Chord tones fall on the beats,
  scale steps fall between them. The call ends open (on the 3rd or the 5th), the answer comes home to the root. Or an
  arpeggio (up, down, up-down, random) in 16ths or 8ths over the chord tones.

After GENERATE NOTES the ruler of the piano roll shows each chord by name and numeral. The names stay while the notes are
the generated ones; they disappear when you edit the clip.

### Drum styles (STYLE, FILL, DENSITY)

Each press with STYLE on **Auto** picks a style other than the last one, and a new variation. **LOCK** keeps the style of the
last press and only changes its variation. The info line names what you got, for example "Generated: Neuro stepper,
variation 3 of 27 (2 bars, fill: snare pickup)".

| Style | Signature |
|---|---|
| Two-step | Kick on 1 and on the "and" of 3, snare on 2 and 4; the second bar pushes an extra kick. |
| Roller | The two-step with a kick on the last 16ths that rolls into the next bar; ghost snares; 16th hats. |
| Halftime | The snare on beat 3 only: the beat feels half as fast. |
| Neuro stepper | Tight kicks on the 16ths between the beats, hard snares, sparse hats. |
| Jump-up | A bouncy kick on the "and" of 2, claps on the backbeat. |
| Liquid shuffle | Soft kick and snare, quiet ghost notes, a swung ride (dotted 8th + 16th). |
| Jungle chop | Busy break-style kicks and snares. On the Jungle Breaks kit: the 8 chops played in a new order. |
| Minimal dancefloor | Kick, snare and one hat, nothing else. |

The styles are written for the **sound** of each pad, not its number, so they work on every kit: a ghost note goes to the
GHOST pad (or softly to the snare), tops go to TOPS or SHAKER (or the closed hat). On **Jungle Breaks** the pads are the 8
chops of one break (one 8th each: kick, hat, snare, kick, kick, ghost, snare, snare). "Jungle chop" re-sequences them:
straight bars, edits (a beat restarts, a beat repeats, a chop comes early), and at the end a reversed fill or a stutter. The
other styles swap the kick, snare and ghost chops in where the style plays them.

FILL: none, phrase end (the last bar ends with a snare pickup, a stop, a tom run or a ghost roll; an 8-bar clip also gets a
small fill after 4 bars), or a snare roll that builds through the last bar. DENSITY: low (fewer ghosts and hats), mid (the
style as written), high (an extra 16th tops layer and an open hat).

**FX** lanes: Drop hit (impact and crash on bar 1, a shout at the end), Build-up (a riser timed to end with the clip),
Breakdown (downlifter, crash, soft vocal pads), Hype (horn, siren and laser on the last bar's offbeats). **Vox** lanes:
offbeat chops, call and response, stutter.

### DICE and GENERATE SCENE

- **DICE** picks random settings for this lane (chords, voicing, rhythm; or style, fill, density) and generates. The song
  progression stays.
- **SCENE** generates every lane of the selected scene at the selected clip's length, on the song progression, as one undo
  step. Drum lanes on Auto get a style from the progression's family (the same style on every kit lane; a re-sequenced break
  on the Jungle Breaks kit).

### Ideas for a class

1. Choose "Minor loop", press SCENE, and play it. Then change only CHORDS on the PAD: triads, 7ths, 9ths. What changes, and
   what stays? (The roots and the bass stay; the colour changes.)
2. Choose "Dramatic minor" in natural minor, generate, listen. Press "WRITTEN IN HARMONIC MIN: USE IT" and generate again.
   The v becomes V: listen for the leading tone (E) pulling back to F.
3. Turn VOICING to Close, then Open, on the same pad. Look at the piano roll: the same chord names, different spacing.
4. Press GENERATE BEAT five times on Auto and name each style before you read the info line.
5. LOCK a style you like and press again: the signature stays (kick and snare), the details move (ghosts, hats, fills).

## Move clips between tracks

- **Session view:** drag a clip to any slot of any track. Alt (Option) + drag copies it. On a phone, hold the clip 0.4 s, then
  drag; hold over 1 s to copy. Esc cancels
- **Arrangement:** drag a clip up or down to another lane; it keeps its bar. Alt + drag copies
- The notes follow the target: drums to drums by sound (KICK to B.KICK...), synth to drums by pitch order, drums to synth as
  scale notes from the root. The info line says what happened
- **A .mid file** dropped on a slot or a lane becomes one clip there (a small picker asks which part if the file has several).
  Dropped anywhere else it opens as a new set, as before
- **Ctrl+C / Ctrl+V** paste onto any track with the same conversion. Every move is one undo step

## Styles, GENERATE SONG, MATCH and VARIATION

The generator now listens before it plays. A lane matches what the other lanes of the scene already play. A style sets the
whole vibe of a song, and GENERATE SONG builds a complete set in one click. VARIATION makes a second version of a scene
(for example of a drop) with the same chords. Every press is one undo step (CTRL+Z).

### Styles

A style is a vibe you can try in one click. It holds:

- the tempo, the swing and the keys it likes,
- the progressions it uses and the chord type of each lane (for example 9ths on a liquid pad),
- a drum style mix (which beat styles AUTO picks from) and the rhythms of the bass, sub, stab, pad and lead,
- a preset for each synth lane and a kit for each drum lane,
- track FX (distortion, OTT, phaser, width, EQ) and the mastering preset,
- an arrangement and an energy curve.

The rule is "inspired by, original material". A style can name the artist whose sound inspired it. It matches tempo, groove,
sound design, arrangement and energy. Every riff, melody, chord loop and pattern is new: the generator writes them.

| Style | Tempo | What makes the vibe |
|---|---|---|
| Festival jump-up rave (inspired by Chase & Status) | 175 | A two-step beat, a talking FM bass that bounces with every kick, huge supersaw hoovers and stabs on anthem chords. The drop comes fast. |
| Dark rave anthem (inspired by Chase & Status) | 174 | Harmonic-minor anthems: the major V pulls back to a dark home chord. A switching Reese under rave hoovers, a halftime breakdown. |
| Neurofunk (inspired by Mefjus) | 174 | Syncopated neuro steppers, metallic FM and formant basses that change every 16th, phrygian half steps, almost no chords. |
| Tech-neuro roller (inspired by Pirapus) | 174 | One rolling Reese line over two chords, a tight roller beat with ghost snares, very little on top. |
| Brostep 140 (inspired by Skrillex) | 140 | Halftime (the snare on beat 3), folded formant growls in short blasts with gaps, a screaming lead, risers into each drop. |
| Liquid | 174 | 9th and 7th chords that move by step, a walking bass, a swung ride and ghost notes, keys and pads in the drop. Gentle mastering. |
| Jungle | 165 | The break leads: chops of the Jungle Breaks kit cut, repeated and reversed over a deep sub and a simple Reese, with swing. |
| Jump-up | 174 | A pedal bass on the root that talks with its LFO, a bouncy kick on the "and" of 2, claps on the backbeat, donk stabs. |

The presets come from the app: for example Supersaw Rave Stab and Polar Rave Hoover (festival), Neuro Reese Wide (dark rave),
Neuro Metal Bass and Growl Formant (neurofunk), Rolling Reese (tech roller), Growl Formant and Sub Square Grit (brostep),
Jump-Up Talker FM (festival and jump-up).

### GENERATE SONG

**Generate Song** in the menu bar opens a list of the styles. The browser also has a **Styles** section under Templates: a
click there generates a song at once. The new set has:

- six scenes: INTRO, BUILD, DROP A, BREAKDOWN, DROP B, OUTRO, and two empty rows for your variations,
- a clip on every lane that plays in each section (8 bars each), all on one progression of the style,
- the presets, kits, track FX, mix and mastering preset of the style,
- the arrangement laid out, for example 16 bars of intro, 16 of build, 32 of drop, 16 of breakdown, 16 of build, 32 of drop
  and 16 of outro.

The sections also bring lanes in and out. The intro starts with the break, the pad and the FX; the DRUMS lane with its kick
comes in halfway (DJ-friendly).
The build plays a snare roll that gets faster and louder, with a riser, and its last beat is silent. The drop starts with an
impact. The breakdown has no break and a halftime beat in its second half. The outro ends with drums only.

The energy curve sets how hard each section plays (velocity and drum density): intro about 40 %, build 60 %, drop 100 %,
breakdown 30 %, drop B 100 %, outro 45 %. The set opens in the arrangement, like a template. CTRL+Z gives back the set you had.

### STYLE in the generator panel

The generator panel (the clip panel, under LAUNCH) now starts with **STYLE**. It is the style of the song, the same on every
lane. With a style, every AUTO setting follows it: the beat styles come from its drum mix, the rhythms and the chord types
from its lists. A progression that the style does not use changes to the style's first one. On a drum lane the lane's own
pattern menu is now called **BEAT**.

### MATCH: the generator listens to the scene

**MATCH** is on by default. Before it generates a lane, the generator reads the other lanes of the same scene:

- **The chords that sound.** It reads the notes of the pad, stab, bass and sub half a bar at a time and finds the chord of
  the scale that fits best. The bass note counts double. A chord outside the scale (the major V of harmonic minor, for
  example) is used only when the scene clearly plays its outside note. A lead alone does not count: a melody does not say
  which chords sound. Without chords in the scene, the song progression plays.
- **The kick and the snare.** The bass and the sub put a note on every kick. On AUTO the sub uses **Kick lock**: a root on
  each kick, held to the next one. A lead and a stab leave the snare's steps free: the note moves a 16th later, or an
  arpeggio rests for that 16th.
- **The section and its energy.** The scene name says the section (intro, build, drop, breakdown, outro, verse). A busy beat
  raises the energy, a sparse one lowers it. A quiet section plays softer, with lower drum density; a build gets a snare
  roll; a breakdown gets a halftime beat, long sub notes and a slow hook.
- **The key, the tempo and the style** of the set.

The info line says what it matched, for example: "Matched DROP A (drop, energy 100%) in F natural minor at 174 BPM: Fm Db Eb
Cm from SUB, STAB and LEAD, kick of DRUMS, Neurofunk style. Generated: Kick lock on the scene's chords...". The panel card
also shows "The scene plays: ..." before you press. Turn MATCH off to hear the song progression only.

### VARIATION

Select any clip of a scene and press **VARIATION**. Tick the lanes to make again (drums, bass and lead are ticked at first),
choose the amount and press **MAKE VARIATION**. The new scene goes into the next empty row and gets a name such as
"DROP A var 2". The app adds a new row when every row is full.

- The other lanes are copied as they are.
- The chords stay: every new lane plays the chords of the original scene.
- The tempo, the key and the style stay. The bass locks to the new kick.
- **Subtle**: the same style. The drums keep their kick and snare and get new ghosts, hats and fills. The synth lanes keep
  their first half and get a new second half.
- **Medium**: the same style or rhythm, a new variation of it.
- **Bold**: another style or rhythm, and other chord types on the pad and the stab. The chords stay.

### Ideas for a class

1. Press Generate Song in two styles, for example Neurofunk and Liquid. Compare tempo, chords, drums and mastering. Which
   one has more chords? Which one has more space?
2. In DROP A, press GENERATE NOTES on the BASS with MATCH on, then with MATCH off. Look at the kick lane: with MATCH on, every
   kick has a bass note.
3. Make three VARIATIONS of a drop: subtle, medium and bold. Launch them one after the other and name what changed.
4. Change STYLE on a set you made yourself and press GENERATE on one lane. Listen to how the style's rhythms fit your scene.

## Tidal Pro (wavetable synth)

A web page cannot load VST or AU plugins, so DNB-808 Live has its own large wavetable synth, **Tidal Pro**. It is an
original design in the same class as the big commercial wavetable synths: its tables, presets and layout are made here.
Pick it in the engine menu of a synth lane (Classic, Polar VA, Tidal WT, **Tidal Pro**) or click one of its presets in the
browser (Instruments > Tidal Pro).

**Sound sources**
- **Two wavetable oscillators.** Each one has a table, POSITION (morphs through the frames), OCT, SEMI, FINE, LEVEL and PAN.
- **Unison** up to 16 voices: DETUNE, BLEND (side voices against the centre), WIDTH, and four modes: Classic, Supersaw,
  Octaves and Fifths (the voices stack at octaves or fifths).
- **PHASE** (start phase) and **RANDOM** (random start per voice and note; 0 gives the same punchy start every note).
- **Warp**, one per oscillator, with a WARP amount:
  - Sync, Bend +, Bend -, PWM, Asym, Mirror, Flip, Quantize and Remap change the frames themselves. The result is
    band-limited, so a warped wave does not alias, even at C7.
  - FM, AM and RM use the other oscillator (its table, position and pitch, at any level) or the sub.
- **Sub** (5 shapes, 0/-1/-2 octaves) and **noise** with a TONE knob. Each source picks its filters: both filters, filter 1,
  filter 2, or no filter.

**Tables**
- 18 built-in tables: Tidal's 15, plus Basic Shapes (sine > triangle > saw > square), Harmonic Climb and Formant Saw.
- **Your own tables** (TABLE page):
  - LOAD FILE reads a wavetable `.wav` (frames of 2048 samples, as wavetable synths export them; its `clm` chunk is read),
    a single cycle, or any sound. For a sound, the page finds its pitch and takes 16 cycles from start to end.
  - FROM PAD makes a table from a sample pad of a drum lane.
  - Draw a frame with the pointer. SINE / SAW / SQUARE / TRIANGLE fill it, SMOOTH keeps 48 harmonics, MORPH makes the frames
    between FROM and TO into crossfades, NORMALIZE sets the level.
  - SAVE stores the table in this browser (IndexedDB, next to your samples) and puts it on the oscillator. A saved set keeps
    only the table's key, never the audio. A set opened in another browser plays Saw > Square in its place and says the
    table is missing: keep the .wav to use it elsewhere.

**Filters**
- Two filters in serial or parallel. Each has CUTOFF, RES, DRIVE, MIX (dry / filtered) and KEYTRACK.
- Types: LP / HP / BP 12 and 24 dB, Ladder, Diode, Notch, Phaser, Comb + / -, Formant (with a VOWEL knob) and Off.

**Modulation**
- 4 envelopes with hold (Env 1 is the volume of each note) and 4 LFOs.
- You draw each LFO shape: click to add a point, drag it, drag the ring in the middle of a line to bend it, double-click (or
  hold) to delete it. There are shape buttons and a 1/16 snap. The rate is a note length at the song tempo or Hz. The modes
  are Retrigger, Free and Once (an envelope you draw).
- Other sources: velocity, note, a random value per note, the mod wheel (MIDI CC 1 or the WHEEL knob) and 4 macros.
- **Drag a source chip** (E1-E4, L1-L4, VEL, KEY, RND, MW, M1-M4) onto any knob that can move. On a phone, tap the chip, then
  tap the knob. The knob then shows a coloured ring for each modulation.
- The MATRIX page lists the slots (16 at most): source, target, AMOUNT (- moves the other way) and BIPOLAR (the target swings
  both ways round its knob).

**FX rack**
- Each instance has its own rack: Distortion, EQ, Compressor, OTT, Chorus, Phaser/Flanger, Delay (tempo-synced, ping-pong) and
  Reverb.
- Tap an effect to edit it. Its dot turns it on or off. Drag it (or use the arrows) to change the order.
- The distortion, EQ, OTT and phaser are the same processors as the track devices. The rack plays before the track's own
  devices.

**Presets** (original sounds, about -18 LUFS like the other presets)
- Basses: TP Neuro Reese, TP Growl Mod, TP Talker FM, TP Metal RM Bass, TP Wobble 1/8, TP Quantize Grit, TP Reese Phaser,
  TP FM Donk, TP Deep Sub.
- Leads and others: TP Rave Hoover, TP Supersaw Lead, TP Sync Screech, TP Glass Pluck, TP Air Pad, TP Riser Sweep.

**CPU**
- A Tidal Pro voice uses the same live safety net as Polar and Tidal: at most 8 sounding notes per lane, and a global budget
  that first fades old release tails and then thins the unison of new notes.
- The tables a patch can reach are built ahead in idle time, so the first note starts on time.
- A rack at rest sleeps: when an instance has been silent for longer than its effects' tails, its rack stops using the CPU, and
  the next note wakes it.
- The export renders every voice in full and sounds the same as the live play.
- FM on a bright wave aliases on very high notes, as every FM does (the same as Tidal's FM). On a sine it stays clean.

## Vocals and your own sample packs

Open a drum lane, then the **Devices** tab. The drum rack has a group named **VOCALS + PACKS**.

### Your files stay in your browser
- Every file you load stays in this browser (IndexedDB). It is never uploaded.
- A saved set holds only a key for each file (`user:<hash>`), never the audio.
- Open the set in another browser and the pads say "Missing". Load the same file again and the pads come back.
- This is how licensed packs (for example Splice downloads) are meant to be used: you keep them, the set file does not carry them.

### Load pack...
- Pick several audio files (WAV, MP3, OGG, FLAC, AIFF) or a `.zip` of them.
- The zip is unpacked in the browser. Folders and macOS `__MACOSX` files are skipped.
- The first 8 files go on the 8 pads, in name order. The pad name comes from the file name (`..._Bass_Hype.wav` -> `HYPE`).
- One undo step. Up to 64 files per pack.

### Pack browser
- Lists every pack you loaded, with length, tempo and key from the file names.
- ▶ plays a file through the lane, with its track FX.
- **To pad...** puts a file on any pad. **Chops...** opens Vocal chops for a loop.

### Vocal chops...
- Load a vocal loop. The tempo comes from the file name (`_175BPM_`, `_174_`), or from an analysis of the audio.
- The key comes from the file name (`F`, `Cm`, `F#m`, `Bbmin`).
- **FIT** stretches the loop to the set's tempo and moves it to the set's key. Tempo and pitch change separately.
- **SAME NOTES** keeps the loop inside the set's scale. Example: an F major loop in an F minor set moves +3 semitones (Ab major uses the same notes as F minor).
- **SAME TONIC** moves the loop's tonic onto the set's tonic.
- **REPITCH** plays the loop faster or slower, like a turntable: the tempo and the pitch change together.
- **SLICE**: GRID cuts 8 equal chops. HITS starts each chop on the first transient of its part, snapped to the 16th grid.
- The 8 chops go on the pads as VOX 1-8, in choke group 1. **GENERATE CHOPS** in the clip panel plays them (Offbeat, Call and response, Stutter).

### Mic record...
- Records your microphone onto a pad. Use headphones.
- While the set plays, the take starts on the next bar (or beat) and ends on a whole beat.
- **LATENCY MS** moves the take earlier so it lines up with what you heard. Auto uses the latency the browser reports.
- The meter shows the input level. Keep the peaks out of the red.
- **NORMALIZE** raises a quiet take to -1 dBFS.

### Make VOCALS
- Turns any drum lane into a vocal lane named VOCALS. Its sample pads become vocal chops for the generator.
- It adds a light sidechain (25 %) and a reverb send (20 %) when the lane has none.
- Without samples on the lane, it loads the synthesized Vox Chops kit until you load a pack or chops.
- The track FX, the sidechain and the master work as on every lane. One undo step.

## Wave 3: composition, keys, PRO sounds, audio loops

**Songs that are composed, not stacked**
- GENERATE SONG follows a production rulebook (arrangement, registers, mix) built from about 40 public articles and guides
- One new layer at most every 8 bars, density caps per section (a drop is drums, bass, chords and one hook), and the outro
  takes layers away in reverse order
- One chord progression per song, played by a KEYS lane in every section: 11 hand-written 8-bar progressions with
  turnarounds, rootless voicings over the bass, open voicings without it, comping rhythms per genre
- One melody: phrases built from hand-written motifs, chord tones on the strong beats, steps in between, an open first
  phrase and a closed second one (A A' A A'' and a B part), rests between phrases
- Every section boundary has a transition: drum fills, risers that end on the downbeat, reverse swells, impacts, the sub
  out 2 bars before the drop and a beat of silence
- A default mix per genre: levels, EQ, sidechain, glue, sends, and a hall reverb on Return A for new songs

**Keys engine**
- Piano samples: Upright Piano KW by Gonzalo and Roberto (FreePats), CC0 1.0 (https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html)
- Presets: Grand Piano, Soft Piano, Dark Piano, EP Warm, EP Tremolo, Wurli Bite (synthesized electric pianos),
  Strings Soft, Choir Pad (additive)
- Return A has reverb types Classic (the old one, kept for old sets), Plate, Hall and Room, with PRE-DELAY, DAMP and LOW CUT

**23 PRO presets (Tidal Pro)**: smooth pads, leads, basses, plucks and risers, each a finished sound with its own EQ,
chorus, delay and reverb, low end mono, about -18 LUFS: Air Atmos, Bell Lead, Choir Drift, Clean Wobble, Down Sweep,
Evolving Strings, Glass Halo Pad, Glass Keys, Glide Lead, Liquid Keys, Liquid Sub, Neuro Clean, Rave Lead, Riser 4 Bars,
Silk Lead, Silk Pad, Smooth Growl, Smooth Hoover, Soft Pluck, Talking Bass, Velvet Dark Pad, Velvet Reese, Vocal Lead

**Audio tracks and song packs**
- "+ Audio track" (up to 4, after the 8 lanes) or drop a .wav on a slot or lane: audio clips launch, loop, move and play
  in the arrangement like MIDI clips
- Warp: BPM and key from the file name (for example _174BPM_Cm) or detected; STRETCH keeps the pitch and moves the loop to
  the set's key, REPITCH changes speed and pitch, OFF plays the file as it is; start, gain, reverse, fades, length
- A SONG PACK is a .zip with song.json and its audio files: import it (or drop it) and the set opens with its loops;
  export one to move a set with loops to another browser. The audio stays in this browser (IndexedDB)

## Wave 3b: Spectra, groove, arpeggiator, mix

**Spectra (additive synth engine)**
- A fourth synth engine: each voice is a bank of up to 256 sine partials, shaped by spectral filters, comb, formant,
  phaser and distortion, with envelopes, LFOs (tempo synced, triplets too) and a 12-slot mod matrix. No aliasing
- 20 presets for growls, reeses, wobbles and leads: SP Clean Growl, SP Dark Growl, SP Deep Sub, SP FM Bell, SP Glass Pluck,
  SP Hoover, SP Liquid Lead, SP Metal Comb Bass, SP Neuro Reese, SP Neuro Stepper, SP Razor Lead, SP Resample Stack,
  SP Rolling Reese, SP Scream Lead, SP Spectral Pad, SP Sub-Aware Mid, SP Talking Bass, SP Wobble 1/4T, SP Wobble 1/8,
  SP Yoi Growl

**Groove: off the 4/4 grid**
- Notes can start and end between steps (1/48 of a step), and each note can carry a pitch bend or a glide
- Each clip has a GROOVE: grid (1/16, 1/8T, 1/16T and more), swing and humanize. Swing and humanize act when the clip
  plays; BAKE writes them into the notes. Live playback and the WAV export use the same timing
- MIDI import and export keep the off-grid timing
- New styles: Dubstep halftime 140, Halftime DnB, Future bass / wonky (triplet chords, bends, laid-back drums)

**Arpeggiator**
- Per synth lane: 13 modes (Up, Down, Up-down, Down-up, Converge, Diverge, Random, Random walk, As played, Chord,
  Pinky, Thumb, Strum), rates from 1/4 to 1/32 with dotted and triplet values, 1 to 4 octaves, gate, swing, latch
- A step lane: on/off, velocity, accent, tie, ratchet, octave and transpose per step
- 8 pattern presets: Trance gate, Rave arp, Liquid ripple, Broken triplets, House offbeat, Afro 3 over 4, Neuro stutter,
  Plain 16ths

**Mix buses and AUTO MIX**
- Four buses (DRUMS, BASS, MUSIC, FX), each with kick and snare ducking, EQ, glue compressor, parallel compression,
  soft clip and a meter. Old sets sound as before: a bus that is off is not in the audio graph
- MIX SIDECHAIN on every track: duck from the kick and the snare separately, 5 curves, and a split duck that only
  ducks the lows (for example below 200 Hz on the bass)
- BASS SPLIT: a mono clean low band with an optional sine sub, and a high band with distortion, OTT and a filter
- AUTO MIX (menu Mix, one undo step): renders the set, sets the faders, cuts where two lanes mask each other, sets the
  genre's ducking and the bus compressors. After it, press LEARN on the master to get back to the loudness target
- MATCH: an EQ curve toward the reference track in the Reference panel, on the master or on one bus (at most 4 dB)

## Automation, long notes and the loop library

**Automation**
- Clip envelopes: an automation lane under the piano roll (choose a target, pencil, line, shapes, CLR). The envelope loops
  with the clip. Curves: linear, smooth, or steps (S&H)
- Arrangement automation: the A button on a track shows its lane in the arrangement, for sweeps over many bars (a filter that
  opens over 16 bars, a reverb send that rises in a build). A clip envelope on the same target wins over it
- Targets on every track: volume, pan, send A, send B, track filter cutoff and resonance. Per engine: classic cutoff,
  resonance, LFO rate and depth; Polar cutoff; Tidal cutoff and wavetable position; Tidal Pro cutoff and macros 1-4; keys
  brightness; Spectra cutoff, resonance, morph and macros 1-4. Held notes follow the automation too
- Shapes, tempo synced from 2 bars to 1/32 with triplets: wobble, triangle, saw, ramp, square, S&H, rise, fall
- Live playback and the WAV export play the same automation. Every stroke is one undo step

**Talking wobble and the WOBBLE BUILDER**
- Two more targets on every synth track: VOWEL (U, O, A, E, I) and TALK (how much the mouth acts). They drive a formant
  filter (a talk box) that joins the track only when a vowel or talk lane plays; Spectra with a formant in its first
  processor uses its own formant
- WOBBLE BUILDER (clip panel) writes the cutoff, vowel, talk and volume lanes in one go from a pattern of half-beat or beat
  cells: per cell a rate (1/4, 1/8, 1/8T, 1/16, 1/16T, 1/32, hold, off, tie), a depth, a shape and the vowels. The wobble
  lengthens and shortens with the pattern; INTENSITY scales every depth
- FOLLOW DRUMS reads the kick and snare of the scene's drum clip: a long open wobble after the kick, a fast stutter before
  the snare, closed on the snare
- 14 presets; PREVIEW plays the clip with the lanes, APPLY is one undo step

**Long notes and legato**
- Notes many bars long play to their end on every engine
- LEGATO in the clip editor: overlapping notes play as one voice with no new attack, and glide from one pitch to the next
  (in ms, up to 2000, or in steps)

**Loop library (Loops button in the menu bar, or the Loops section of the browser)**
- 140 built-in loops made by the app's own sounds, 14 for each of 10 styles: drums, tops, percussion, bass, sub, growl, chords,
  pads, arps, leads, FX and vocal chops. A loop is rendered the first time you use it (2 to 7 seconds) and kept in this browser
- My loops: your own files and your Splice downloads, read from the packs in this browser, with BPM, key and role read from the
  file names. Search and favourites
- Filters: source, style, role, key, bars, BPM range. Preview plays at the set's tempo and starts on the bar
- Place a loop with +, TO SLOT, TO ARRANGE, AS MIDI or MIDI + SOUND, or drag it to a slot or an arrangement lane. On an audio
  track it plays in STRETCH, in the set's key; on its MIDI lane it becomes an editable clip moved to the set's key

## House, orchestra, generated automation and song templates

**Afro house and Swedish house**
- Styles in GENERATE SONG: afrohouse (inspired by Keinemusik, &ME, Adam Port, Rampa), afrodeep, swedish (inspired by
  Swedish House Mafia) and swedeprog (inspired by Avicii and Arno Cost). Original progressions with extended, suspended
  and slash chords, pedal points and held common tones; the Swedish hook is the top voice of the stacked chords; long
  DJ-friendly arrangements (176 to 200 bars) with builds, rolls and a beat of silence before the drop
- Kits: Afro House Kit, Afro Perc Kit (16 pads), Swedish House Kit, House FX. New synthesized voices: house kicks tuned to
  the set's key, house claps, congas, bongos, djembe, afro tom, shakers, tambourine, cowbell, agogo, clave, wood
- Per-pad groove in the drum device (GROOVE): swing, nudge in 1/48 steps, chance, drop of weak hits, humanize, accent
  templates, choke group, key tracking. Live and export play the same hits
- 26 house presets: log drum, marimba, kalimba, flutes, chant pads, Afro EP, house piano, Swedish supersaw chords and lead,
  plucks, house basses, deep pads

**GENERATE writes automation**
- GENERATE SONG has an Automation menu (full, subtle, off) and a Growl menu (Auto, Long, Chew & burst). Bass-led styles get
  talking-wobble lanes that follow the drums and grow from the build to the second drop; pads and keys get filter and
  reverb swells in the builds. The same seed gives the same automation
- Chew & burst (the brostep default): slow, fat chewing wobbles with short fast bursts, stops and dives inside each 4-bar
  phrase. Long: slow sweeps and held notes in 2- and 4-bar call-and-response figures (the DnB default)

**Orchestra (engine Orchestra, sampled)**
- 35 presets: Concert Grand (Salamander Grand Piano), Grand Light (Steinway B), strings (sustain, spiccato, tremolo),
  horns, low brass, braam, woodwinds, choir, harp, celesta, glockenspiel, tubular bells, timpani, epic tutti. EXPRESSION is
  an automation target
- Kits of 16 pads: Orchestral Epic, Taiko Ensemble, World Frame, Cinematic FX
- The samples load the first time an instrument plays and stay in the browser; a badge shows the loading; the WAV export
  waits for every sample it needs. Credits: Salamander Grand Piano by Alexander Holm (CC BY 3.0), VSCO 2 Community
  Edition and VCSL by Versilian Studios (CC0), FluidR3_GM by Frank Wen (MIT) - see the Credits dialog and orch/v1/LICENSES.txt
- Cinematic styles: Cinematic trailer, Epic DnB (an orchestral intro into 174 drops where the orchestra plays over
  chained growls), Cinematic dubstep, Orchestral liquid

**Loops and song templates**
- The loop library has 261 loops, now also for the house and cinematic styles
- TEMPLATES (Loops panel, or "Song templates..." in the browser): 18 starter sets, one per style, with tempo, key, sounds,
  mix, scenes INTRO / BUILD / DROP / BREAKDOWN / DROP 2 / OUTRO filled with library loops, a 64-bar arrangement and a filter
  build. One undo step. GENERATE then fills empty slots in the same style

## World: African and Egyptian / Arabic

- Engine World with plucked strings (oud with slides, kora, qanun with tremolo picking), winds (ney, mizmar), mallets
  (balafon, mbira, kalimba, marimba), melodic drums (talking drum) and bells. Some instruments are synthesized, others use
  VCSL samples (Versilian Studios, CC0) that load from orch/w1/ the first time they play
- Kits of 16 pads: Darbuka Ensemble (doum, tek, ka, slaps, rolls), Riq & Frame, West African (djembe, dunun, kenkeni,
  sangban, bell, shekere), Talking Drum & Bells
- Maqam scales: Hijaz, Hijaz Kar, Bayati, Rast, Saba, Nahawand, Kurd, Sikah, plus African pentatonic and hexatonic modes.
  QUARTER TONES plays the half-flat degrees of Bayati, Rast, Saba and Sikah; off, the nearest semitone plays
- Rhythms: maqsum, baladi, saidi, malfuf, ayoub, chiftetelli, West African 12/8 feels, afrobeats and amapiano grooves
- Styles in GENERATE SONG: Middle-eastern dubstep 140, Desert DnB 174, Afro DnB, Afro house world
- 135 world loops in the loop library (percussion and melodic riffs at 120, 140 and 174 BPM)

## Styles from the owner's reference playlist

Nine more styles in GENERATE SONG, built from research on public tutorials, interviews and articles about the owner's
reference tracks. Inspired-by only: every note and progression is original.

| Style | BPM | Inspired by |
| --- | --- | --- |
| Heavy halftime riddim 145 | 145 | Zeds Dead and the heavy dubstep of the playlist |
| UK skank 140 | 140 | Hamdi and the 140 UK bass of the playlist |
| Neurofunk 174 (intensity 0-2) | 174 | Mefjus and the neurofunk of the playlist |
| MC jump-up 175 | 175 | Bou and the MC-led jump-up of the playlist |
| UK rave clash 174 | 174 | Chase & Status |
| Liquid / melodic 174 | 174 | Etherwood and the melodic DnB of the playlist |
| Jungle revival 172 | 172 | Nia Archives |
| Emotive UK 130 | 130 | Fred again.. |
| Afro / Middle-Eastern bass fusion | 140 | Dog Blood and the fusion tracks of the playlist |

UK rave clash 174 also follows techniques from two tutorials the owner shared: Rave Fifth Lead (root and fifth saws, a
retriggered dotted-8th filter LFO), Jump Wob Mid and Jump Wob Mid Hi (the higher change-up), Nasal Sub, Rave Reese Step, Rave
Chord Stab, Bass Flick, Top Bass Ping, Wail Vox Pad and a 16-pad Rave Clash Kit (layered clap, noise layer, two hats, ride, skip
hits). The sub holds the root from beat 1 while the wob enters on beat 2, the bass pauses and comes back higher halfway through
each 16-bar drop half, and the build stacks two claps over a kick that ends four-on-the-floor.

Each style has its arrangement template (intro, builds, drops, switch-ups, DJ intro and outro), its drums, bass rhythms,
harmony families, sounds and growl feel, loops in the loop library and a song template in TEMPLATES.

## Whole sound bank and a different arrangement on every GENERATE

- GENERATE SONG has two more choices. SOUNDS: "Style only" or "Whole bank" (default for new songs): every style draws a
  coherent set of sounds from the whole bank (205 presets of all engines, the kits and the loops) by role, character and
  genre, with one sub, one mid-bass family per drop and a CPU budget. The older styles (festival, darkrave, jump-up,
  neurofunk, techroller, brostep, liquid, jungle, future bass, halftime DnB) get modern kits, ducking and master targets.
  VARIATION: Subtle, Normal or Wild: the arrangement changes with the seed (7 shapes; intro 8, 16 or 32 bars; 2 or 3 drops;
  build types; drop entries; switch-ups; bass-out bars; single-snare turnarounds; silences; DJ or short outros). Drops stay on
  the 16-bar grid and the same seed and choices always give the same song
- With a vocal pack loaded in this browser (Load pack...), GENERATE places your vocals in the vocal moments, moved to the
  set's tempo and key: a pre-echo stutter before the drop, tags on the drop, a phrase in the breakdown. Without a pack it uses
  the synthetic vocal chops
- A white-noise burst on the first downbeat of each drop, echo throws only at transitions, and a drum reverb send that changes
  per section

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
   (CC0 one-shots and breaks as MP3 data), the sampler, the mastering chain,
   the track FX and the generator (harmony, progressions, drum styles). It only
   depends on the `AudioContext` it receives, so the same code drives live
   playback and the offline WAV export
4. transport: lookahead scheduler, clip launching, arrangement playback
   and recording
5. UI: control bar, browser, session view, mixer
6. UI: arrangement
7. UI: clip editor (canvas) and device view (knobs, faders, synth pages)
8. MIDI file import (parser, lane assignment, dialog)
9. reference player: signal processing, analysis (tempo, bars, key,
   loudness, spectrum) and the Reference panel
10. lesson panel
11. credits (the samples, and the credit a set carries)
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
