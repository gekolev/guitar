export type Song = { title: string; artist: string; focus: string; approach: string }
export type LessonSection = { title: string; paragraphs?: string[]; points?: string[] }
export type Lesson = {
  id: string
  chapter: number
  title: string
  shortTitle: string
  summary: string
  readTime: string
  outcome: string
  screenshot?: string
  sections: LessonSection[]
  practice: string[]
  songs: Song[]
  sources: { label: string; url: string }[]
}

export const lessons: Lesson[] = [
  {
    id: 'fretboard-notes', chapter: 1, title: 'Memorizing the Notes on the Guitar Neck', shortTitle: 'Fretboard notes', readTime: '7 min read',
    summary: 'Turn the fretboard from a grid of anonymous frets into a map you can navigate deliberately.',
    outcome: 'Find natural notes on the sixth and fifth strings without counting from an open string.',
    sections: [
      { title: 'Start with the musical alphabet', paragraphs: [
        'Music uses seven natural note names: A, B, C, D, E, F, and G. The sequence repeats in both directions. Most neighboring natural notes are two frets apart; B to C and E to F are the exceptions and sit one fret apart. Every fret raises a note by one semitone.',
        'Standard tuning, from the thickest string to the thinnest, is E-A-D-G-B-E. Say those names aloud before every practice session. The 12th fret repeats the open-string notes one octave higher, so you only need to learn one repeating 12-fret pattern.',
      ]},
      { title: 'Use landmarks instead of brute force', points: [
        'Learn the sixth-string natural notes first: open E, F at fret 1, G at 3, A at 5, B at 7, C at 8, and D at 10.',
        'Learn the fifth-string natural notes next: open A, B at fret 2, C at 3, D at 5, E at 7, F at 8, and G at 10.',
        'Use the dot markers as visual addresses, but always attach a note name to the location.',
        'Find the same pitch elsewhere by using octave shapes; this gradually connects the remaining strings.',
      ]},
      { title: 'Name the note before you play it', paragraphs: [
        'Random recall is more useful than running up the strings in order. Pick one note, such as C, and locate every C you can find below the 12th fret. Then reverse the task: point to a random fret and name it before sounding it. Accuracy matters more than speed.',
      ]},
    ],
    practice: ['2 minutes: recite the open strings forward and backward.', '4 minutes: find one chosen natural note on all six strings.', '3 minutes: quiz random frets on the sixth and fifth strings.', '1 minute: play a familiar riff while saying each note name.'],
    songs: [
      { title: 'My Girl', artist: 'The Temptations', focus: 'Named single notes', approach: 'The recognizable opening phrase is short and melodic, making it ideal for saying each note as you pick it.' },
      { title: 'Smoke on the Water', artist: 'Deep Purple', focus: 'Fret landmarks', approach: 'Use the compact riff to notice how a repeated shape moves between precise fret locations.' },
      { title: 'When I Come Around', artist: 'Green Day', focus: 'Low-string navigation', approach: 'Begin with the simplified single-note riff and identify every note on the E and A strings.' },
    ],
    sources: [
      { label: 'Fender: How to Play Notes on Guitar', url: 'https://www.fender.com/articles/techniques/how-top-play-notes-on-guitar' },
      { label: 'Fender: Beginner Guitar Riffs', url: 'https://www.fender.com/articles/songs/guitar-riffs' },
    ],
  },
  {
    id: 'open-chords', chapter: 2, title: 'Knowing the Basic Open Chords', shortTitle: 'Open chords', readTime: '8 min read',
    summary: 'Build clear, relaxed chord shapes and connect them without losing the beat.',
    outcome: 'Play and switch between C, A, G, E, D, Am, Em, and Dm with clean notes.',
    sections: [
      { title: 'Why open chords come first', paragraphs: [
        'An open chord combines fretted notes with one or more open strings. Those ringing strings give the guitar a full sound without requiring the fretting hand to hold every note. The guide introduces five major shapes - C, A, G, E, and D - plus A minor, E minor, and D minor.',
        'A chord is not just a hand shape. It is a collection of notes, and the lowest intended note usually tells you where to begin strumming. For example, start C from the fifth string and D from the fourth. Muted strings are part of the shape too.',
      ]},
      { title: 'Make every string earn its place', points: ['Place fingertips close behind the fret wire, not on top of it.', 'Arch the fingers so they do not accidentally touch neighboring strings.', 'Pick through the chord one string at a time and repair only the note that buzzes or dies.', 'Use the lightest pressure that still produces a clean sound; excess force slows changes.']},
      { title: 'Practice the movement, not the pause', paragraphs: ['Chord changes are a timing skill. Choose two shapes, make the change slowly, and look for a finger that can stay in place or guide the hand. When the motion is reliable, strum once per bar with a metronome. Add more strums only after the change lands on time.']},
    ],
    practice: ['2 minutes: sound each chord string by string.', '3 minutes: alternate G and C with one slow strum per chord.', '3 minutes: loop D-A-G-A while keeping the beat continuous.', '2 minutes: play Em-C-G-D and circle the change that needs tomorrow’s attention.'],
    songs: [
      { title: 'Love Me Do', artist: 'The Beatles', focus: 'G-C-D changes', approach: 'A small chord set keeps attention on steady time and relaxed transitions.' },
      { title: 'Bad Moon Rising', artist: 'Creedence Clearwater Revival', focus: 'D-A-G progression', approach: 'Three common open chords create a repeatable workout for clean, even switching.' },
      { title: 'All of Me', artist: 'John Legend', focus: 'Major-minor contrast', approach: 'The guitar arrangement uses Em, C, G, D, and Am, letting you hear major and minor colors in one progression.' },
    ],
    sources: [
      { label: 'Fender: Essential G, C, and D Chords', url: 'https://www.fender.com/articles/chords/essential-beginner-chords-g-c-d' },
      { label: 'Fender: Easy Acoustic Songs', url: 'https://www.fender.com/articles/songs/10-easy-songs-to-learn-on-acoustic-guitar' },
      { label: 'Gibson: Easy Acoustic Guitar Songs', url: 'https://www.gibson.com/blogs/gibson-gazette/easy-acoustic-guitar-songs' },
    ],
  },
  {
    id: 'power-chords', chapter: 3, title: 'Reviewing and Understanding Power Chords', shortTitle: 'Power chords', readTime: '7 min read',
    summary: 'Use movable two-note shapes to play tight rock rhythm anywhere on the neck.',
    outcome: 'Move E-, A-, and D-string-root power chords while muting every unused string.',
    sections: [
      { title: 'A big sound made from two notes', paragraphs: [
        'A power chord contains a root and its perfect fifth, often with the root doubled an octave higher. Because it leaves out the third - the note that normally defines major or minor - the shape sounds neutral, direct, and especially clear with distortion.',
        'The guide shows open E5, A5, and D5 shapes, then movable F5 shapes with roots on the E, A, and D strings. The chord name follows the root: put an E-string-root shape at the third fret and the result is G5 because the sixth-string note there is G.',
      ]},
      { title: 'Muting is half the technique', points: ['Let the index finger lightly touch strings that should remain silent.', 'Keep the picking motion narrow so it passes only across the intended strings.', 'Release fretting pressure between hits without lifting away; this creates a clean rhythmic stop.', 'Add light palm muting near the bridge for a controlled, percussive sound.']},
      { title: 'Move by root, not by shape alone', paragraphs: ['Say the root names as the shape moves. This links Chapter 1 to rhythm playing and prevents power chords from becoming anonymous boxes. Practice the same I-IV-V movement in several keys by starting on different frets.']},
    ],
    practice: ['2 minutes: alternate a ringing E5 with a short, muted E5.', '3 minutes: move F5-G5-A5 on the sixth string without changing the hand shape.', '3 minutes: play A5-D5-E5 with roots on the fifth and sixth strings.', '2 minutes: add steady eighth-note downstrokes at a comfortable tempo.'],
    songs: [
      { title: 'Blitzkrieg Bop', artist: 'Ramones', focus: 'A5-D5-E5-B5', approach: 'Repeated eighth-note strumming turns four power chords into a focused rhythm and endurance drill.' },
      { title: 'When I Come Around', artist: 'Green Day', focus: 'Movable fifth chords', approach: 'The full riff applies movable power chords, palm muting, and syncopation after you master the single-note version.' },
      { title: 'Mannish Boy', artist: 'Muddy Waters', focus: 'Open-position power chords', approach: 'A repeating blues riff lets you concentrate on attack, groove, and two-note chord clarity.' },
    ],
    sources: [
      { label: 'Fender: Blitzkrieg Bop Lesson', url: 'https://www.fender.com/play/lessons/song-blitzkrieg-bop' },
      { label: 'Fender: Beginner Guitar Riffs', url: 'https://www.fender.com/articles/songs/guitar-riffs' },
      { label: 'Berklee: Guitar Chords 101', url: 'https://online.berklee.edu/courses/guitar-chords-101/' },
    ],
  },
  {
    id: 'barre-chords', chapter: 4, title: 'Reviewing and Understanding Barre Chords', shortTitle: 'Barre chords', readTime: '8 min read',
    summary: 'Turn familiar open-chord shapes into movable major and minor chords.',
    outcome: 'Form E-shape and A-shape barre chords and move them by reading the root note.',
    sections: [
      { title: 'Your index finger becomes the nut', paragraphs: [
        'A barre chord uses one finger - usually the index - to hold several strings at the same fret. The remaining fingers create a familiar E- or A-family shape in front of that movable nut. This is why one fingering can produce every major or minor chord of the same shape family.',
        'For an E-shape chord, the root sits on the sixth string. For an A-shape chord, it sits on the fifth. Find that note first, place the barre, and then build the rest of the chord. The chapter diagram demonstrates C, G, A minor, and F in both root families.',
      ]},
      { title: 'Use leverage, not a crushing grip', points: ['Roll the index finger slightly toward its bony thumb-side edge.', 'Keep the thumb behind the neck and roughly opposite the middle finger.', 'Pull the fretting arm gently back while the picking arm steadies the guitar body.', 'Begin around fret 5, where the frets are closer and string tension feels friendlier, then move toward fret 1.']},
      { title: 'Build the chord in layers', paragraphs: ['First make the barre alone and check the outer strings. Add the remaining shape only when those notes are clean. Short, frequent attempts are better than holding through hand pain. Fatigue is normal; sharp pain is a signal to stop and reset.']},
    ],
    practice: ['2 minutes: make a relaxed partial barre across the top two, then three strings.', '3 minutes: play F-G-A major using the E shape at frets 1, 3, and 5.', '3 minutes: switch between A minor at fret 5 and C major at fret 8 using E-family shapes.', '2 minutes: alternate one open chord and one barre chord without stopping the beat.'],
    songs: [
      { title: 'House of the Rising Sun', artist: 'The Animals', focus: 'The F-barre milestone', approach: 'Most of the progression uses familiar open chords, so the recurring F becomes a focused barre-chord checkpoint.' },
      { title: 'I Need My Girl', artist: 'The National', focus: 'Open-to-barre transitions', approach: 'A simplified Am-C-F-G version makes the F chord the one deliberate challenge inside a manageable loop.' },
      { title: 'Creep', artist: 'Radiohead', focus: 'Movable major and minor shapes', approach: 'Its repeating G-B-C-Cm progression is a stretch goal that teaches how one movable family changes quality.' },
    ],
    sources: [
      { label: 'Berklee: Guitar Chords 101', url: 'https://online.berklee.edu/courses/guitar-chords-101/' },
      { label: 'Fender: Easy Songs Collection', url: 'https://www.fender.com/articles/songs/40-of-the-easiest-songs-to-learn-on-guitar' },
      { label: 'Gibson: Choosing Beginner Songs', url: 'https://www.gibson.com/blogs/gibson-gazette/easy-acoustic-guitar-songs' },
    ],
  },
  {
    id: 'triads', chapter: 5, title: 'Exploring Essential Major and Minor Triads', shortTitle: 'Major & minor triads', readTime: '8 min read',
    summary: 'See chords as three related notes and unlock compact shapes across the fretboard.',
    outcome: 'Build major and minor triads and play three compact inversions on the top strings.',
    sections: [
      { title: 'The three notes inside the chord', paragraphs: [
        'A triad contains a root, a third, and a fifth. A major triad uses a major third above the root; a minor triad lowers that third by one semitone. The root and fifth stay the same. That one-note difference creates the bright major and darker minor character.',
        'The guide maps C major and C minor triads across the neck and labels each note by function: root, third, and fifth. Learn the function as well as the fingering. If you can identify the third, you can deliberately change a major shape into minor.',
      ]},
      { title: 'Inversions keep the chord, change the bass', points: ['Root position places the root as the lowest note.', 'First inversion places the third at the bottom.', 'Second inversion places the fifth at the bottom.', 'All three contain the same chord tones, but each has a different contour and connects differently to the next chord.']},
      { title: 'Think like an arranger', paragraphs: ['Compact triads avoid the low strings, leaving space for a bass player or another guitar. Choose the inversion nearest to your next chord rather than jumping to a distant shape. This voice-leading approach makes a simple progression sound smooth and intentional.']},
    ],
    practice: ['2 minutes: say root-third-fifth while playing a C major triad one note at a time.', '3 minutes: lower the third to hear C major become C minor.', '3 minutes: move through three C-major inversions on strings 1-2-3.', '2 minutes: connect G, C, and D using the nearest available triad shapes.'],
    songs: [
      { title: 'Island in the Sun', artist: 'Weezer', focus: 'Top-three-string triads', approach: 'Most of the signature rhythm part uses compact triads on strings 1, 2, and 3, directly matching the chapter.' },
      { title: 'Brown Eyed Girl', artist: 'Van Morrison', focus: 'G-C-D triad movement', approach: 'Arrange the progression with small upper-string shapes and listen for smooth movement between chord tones.' },
      { title: 'Three Little Birds', artist: 'Bob Marley & The Wailers', focus: 'A-D-E triads', approach: 'The simple three-chord loop is ideal for replacing full open chords with bright, clipped triad voicings.' },
    ],
    sources: [
      { label: 'Berklee: Guitar Chords 101', url: 'https://online.berklee.edu/courses/guitar-chords-101/' },
      { label: 'Berklee: Guitar Fundamentals', url: 'https://online.berklee.edu/courses/guitar-fundamentals' },
      { label: 'Andy Guitar: Island in the Sun', url: 'https://www.andyguitar.co.uk/videos/weezer-islands-in-the-sun' },
    ],
  },
  {
    id: 'minor-pentatonic-e-root', chapter: 6, title: 'Minor Pentatonic with a Root on the E String', shortTitle: 'A minor pentatonic', readTime: '8 min read',
    summary: 'Learn the essential five-note lead-guitar shape and make the root note feel like home.',
    outcome: 'Play the A minor pentatonic box at the fifth fret and create a short phrase that resolves to A.',
    screenshot: '/lesson-pages/chapter-06.png',
    sections: [
      { title: 'Five notes, many musical possibilities', paragraphs: [
        'The minor pentatonic formula is 1-b3-4-5-b7. In A, those notes are A, C, D, E, and G. Removing two notes from the natural minor scale leaves a compact collection that works especially well for rock and blues riffs, fills, and solos.',
        'The PDF calls this the “home row” because the index finger anchors the fifth fret while the first A root sits under it on the low E string. The same two-notes-per-string pattern repeats in every key: move the root to another fret on the sixth string and the entire box moves with it.',
      ]},
      { title: 'Make the red roots your landmarks', points: [
        'Start and finish phrases on one of the red A roots to hear a clear sense of resolution.',
        'Use index-pinky for three-fret stretches and index-ring for two-fret stretches.',
        'Keep one finger assigned to each fret instead of sliding a single finger through the whole box.',
        'Pause between two- or three-note ideas; a scale becomes music when it has rhythm and space.',
      ]},
      { title: 'Move beyond running the box', paragraphs: ['Play the shape up and down once to learn its geography, then break the order. Repeat a note, skip a string, reverse direction, or end a phrase early. Put on a slow A minor backing track and limit yourself to three notes until you can make them sound intentional.']},
    ],
    practice: ['2 minutes: play the shape ascending and descending, saying A on every root.', '3 minutes: alternate pick the scale in steady eighth notes.', '3 minutes: improvise using only A, C, and D.', '2 minutes: create one phrase and answer it with a slightly different ending.'],
    songs: [
      { title: 'Stairway to Heaven', artist: 'Led Zeppelin', focus: 'A minor pentatonic phrasing', approach: 'Study a small fragment of the solo to hear how bends and pauses turn the box into a vocal phrase.' },
      { title: 'Californication', artist: 'Red Hot Chili Peppers', focus: 'Simple A-minor melody', approach: 'The sparse lead ideas reward accurate timing and help you hear notes against an A-minor-centered progression.' },
      { title: 'Sunshine of Your Love', artist: 'Cream', focus: 'Movable pentatonic riff', approach: 'Learn the recognizable riff slowly, then relate its notes to the same minor-pentatonic intervals in a different key.' },
    ],
    sources: [
      { label: 'Fender: A Minor Pentatonic Scale', url: 'https://www.fender.com/articles/scales/a-minor-pentatonic-guitar-scale' },
      { label: 'Fender: Lead Guitar Tips', url: 'https://www.fender.com/articles/techniques/top-tips-for-playing-lead-guitar' },
    ],
  },
  {
    id: 'minor-pentatonic-a-root', chapter: 7, title: 'Minor Pentatonic with a Root on the A String', shortTitle: 'E minor pentatonic', readTime: '8 min read',
    summary: 'Connect a second pentatonic position to the first by finding the root on the fifth string.',
    outcome: 'Play the E minor pentatonic around frets 7–10 and connect it to another E minor position.',
    screenshot: '/lesson-pages/chapter-07.png',
    sections: [
      { title: 'A new address for the same five notes', paragraphs: [
        'E minor pentatonic contains E, G, A, B, and D. In this position the lowest root is E at the seventh fret of the A string, so the visual anchor moves from the sixth string to the fifth. The interval labels in the PDF show that the musical formula has not changed.',
        'Learning another position is not about collecting an unrelated box. It is about seeing where the same five notes continue across the neck. The high notes of one position overlap the low notes of its neighbor, giving you a route between registers.',
      ]},
      { title: 'Connect roots before connecting everything', points: [
        'Locate every red E root in the position before playing the full pattern.',
        'Play from one root to the next rather than always beginning on the lowest available note.',
        'Slide into the position on one string, then continue through the new shape.',
        'Listen for E as the point of rest; the same notes can sound like G major if G becomes home.',
      ]},
      { title: 'Practice a narrow bridge', paragraphs: ['Choose just the G and B strings and find a two- or three-note route between this position and a neighboring E minor box. Make a short phrase below the seventh fret, slide into the new area, and answer it there. This is more useful than racing through two complete patterns.']},
    ],
    practice: ['2 minutes: find and play only the E roots in the diagram.', '3 minutes: play root-to-root fragments across the position.', '3 minutes: connect into the shape with one slide on the G string.', '2 minutes: improvise and require every phrase to resolve to E.'],
    songs: [
      { title: 'Wish You Were Here', artist: 'Pink Floyd', focus: 'E-minor/G-major vocabulary', approach: 'Use its melodic fills to hear how pentatonic notes connect open-position rhythm with higher-register phrases.' },
      { title: 'Black', artist: 'Pearl Jam', focus: 'Expressive E-minor lead', approach: 'Work on a short lead phrase slowly and notice how sustained notes create emotion without fast playing.' },
      { title: 'Another Brick in the Wall, Part 2', artist: 'Pink Floyd', focus: 'Movable minor-pentatonic shape', approach: 'Its lead language demonstrates how the same fingering concept can be moved to a different minor key.' },
    ],
    sources: [
      { label: 'Fender: E Minor Pentatonic Scale', url: 'https://www.fender.com/articles/scales/e-minor-pentatonic-scale' },
      { label: 'Fender: How to Solo on Guitar', url: 'https://www.fender.com/articles/techniques/how-to-guitar-solo' },
    ],
  },
  {
    id: 'open-e-minor-pentatonic', chapter: 8, title: 'Open Position of the E Minor Pentatonic', shortTitle: 'Open E pentatonic', readTime: '7 min read',
    summary: 'Use ringing open strings to make your first scale phrases feel relaxed, wide, and bluesy.',
    outcome: 'Play E minor pentatonic in open position with alternate picking and clean pull-offs.',
    screenshot: '/lesson-pages/chapter-08.png',
    sections: [
      { title: 'The beginner-friendly version of a classic scale', paragraphs: [
        'The open E minor pentatonic uses E, G, A, B, and D across open strings and frets 2–3. The small fret span makes it mechanically approachable, while the open strings give riffs a large, resonant sound.',
        'Open strings are notes, not empty space. In the diagram they supply several roots, fifths, and other scale tones. Learn their interval roles so you can deliberately return to an open E rather than simply letting every string ring.',
      ]},
      { title: 'Control the ringing strings', points: [
        'Use a fretting-hand finger to lightly stop an open string when the next phrase needs silence.',
        'Keep alternate picking through string changes instead of restarting with a downstroke.',
        'Try a pull-off from fret 3 to the open string, keeping both notes even in volume.',
        'End on low or high open E and listen to the phrase settle.',
      ]},
      { title: 'Build a one-bar riff', paragraphs: ['Choose three notes, create a rhythm that fits four beats, and repeat it. Change only the final note on the fourth repetition. This teaches phrasing and memory while keeping your attention on tone rather than on finding more notes.']},
    ],
    practice: ['2 minutes: ascend and descend while naming E-G-A-B-D.', '3 minutes: alternate pick with a metronome at a relaxed tempo.', '3 minutes: practice fret-3-to-open pull-offs on both E strings.', '2 minutes: invent and repeat a one-bar E minor riff.'],
    songs: [
      { title: 'Back in Black', artist: 'AC/DC', focus: 'E minor pentatonic vocabulary', approach: 'Learn a small riff fragment and identify the scale notes rather than memorizing only fret numbers.' },
      { title: 'Rumble', artist: 'Link Wray', focus: 'Open-position attitude', approach: 'Its spacious phrasing and strong attack show how a few notes can carry more weight than a fast run.' },
      { title: 'How Many More Times', artist: 'Led Zeppelin', focus: 'E pentatonic riffing', approach: 'Use the central riff as an ear-training example of how repeated pentatonic notes lock into a groove.' },
    ],
    sources: [
      { label: 'Fender: Five Essential Guitar Scales', url: 'https://www.fender.com/articles/scales/5-essential-guitar-scales-for-beginners' },
      { label: 'Fender: E Minor Pentatonic Scale', url: 'https://www.fender.com/articles/scales/e-minor-pentatonic-scale' },
    ],
  },
  {
    id: 'c-major-scale', chapter: 9, title: 'The C Major Scale', shortTitle: 'C major scale', readTime: '8 min read',
    summary: 'Learn the seven natural notes that organize melody, harmony, and the keys you already use.',
    outcome: 'Play C major from root to root and recognize its whole-step and half-step pattern.',
    screenshot: '/lesson-pages/chapter-09.png',
    sections: [
      { title: 'Seven notes with no sharps or flats', paragraphs: [
        'C major contains C, D, E, F, G, A, and B. Its interval pattern is whole-whole-half-whole-whole-whole-half. The half steps occur between E-F and B-C, the same neighboring pairs you learned while mapping the fretboard.',
        'The PDF spreads the scale across open position and highlights C roots in red. Do not treat the lowest available note as the automatic beginning. Start on a red C, climb to the next C, and you will hear the complete major-scale sound from tonic to octave.',
      ]},
      { title: 'Turn the scale into melodies', points: [
        'Sing each note before you play it to connect your ear with the fretboard.',
        'Number the notes 1–7 as well as naming them; melodies are easier to transpose when you know scale degrees.',
        'Notice how scale degree 7 wants to rise by a half step to the root.',
        'Use short rhythmic patterns instead of playing only straight up and down.',
      ]},
      { title: 'Hear the chords hiding inside', paragraphs: ['The C, F, and G major chords are built from this note collection, as are Am, Dm, and Em. Hold a C chord, then find its C-E-G notes in the scale diagram. Connecting chords to the parent scale makes theory visible and prepares you to create chord-aware melodies.']},
    ],
    practice: ['2 minutes: play C-D-E-F-G-A-B-C and sing the note names.', '3 minutes: play the scale in groups of three notes.', '3 minutes: find C-E-G, then F-A-C and G-B-D inside the diagram.', '2 minutes: pick out a familiar nursery or folk melody by ear.'],
    songs: [
      { title: 'Lean on Me', artist: 'Bill Withers', focus: 'C-major stepwise melody', approach: 'The central melodic idea makes it easy to hear neighboring scale tones moving up and down.' },
      { title: 'Ode to Joy', artist: 'Traditional / Beethoven', focus: 'Scale-degree recognition', approach: 'Play a simple C-major arrangement and say the scale degree of each note as you learn the melody.' },
      { title: 'When the Saints Go Marching In', artist: 'Traditional', focus: 'Melody by ear', approach: 'Its familiar tune is ideal for finding C-major notes without relying on tablature.' },
    ],
    sources: [
      { label: 'Fender: Major Scales and CAGED', url: 'https://www.fender.com/articles/scales/major-guitar-scales' },
      { label: 'Fender: Free Guitar Lessons', url: 'https://www.fender.com/articles/songs/free-guitar-lessons' },
    ],
  },
  {
    id: 'movable-major-scale', chapter: 10, title: 'Major Scale Position with a Root on the E String', shortTitle: 'Movable major scale', readTime: '8 min read',
    summary: 'Move one complete major-scale fingering to any key by anchoring its root on the sixth string.',
    outcome: 'Play the PDF position in B major, then move the same interval pattern to G and C.',
    screenshot: '/lesson-pages/chapter-10.png',
    sections: [
      { title: 'One pattern, twelve major keys', paragraphs: [
        'The diagram places B at the seventh fret of the low E string. From that root, the shape supplies the notes B, C-sharp, D-sharp, E, F-sharp, G-sharp, and A-sharp. The finger pattern expresses the same major-scale interval formula used in C major.',
        'Because the pattern contains no open strings, it is movable. Put its lowest root at the third fret for G major, the fifth fret for A major, or the eighth fret for C major. Name the new root before playing so the shape stays connected to musical keys.',
      ]},
      { title: 'Keep the shift organized', points: [
        'Treat the root fret as position one and keep the hand relaxed as the pattern crosses strings.',
        'Mark every root note inside the shape; they divide the long pattern into smaller musical zones.',
        'Practice in one key long enough to hear it before moving the fingering elsewhere.',
        'Land on chord tones - especially 1, 3, and 5 - when improvising over a major chord.',
      ]},
      { title: 'Transpose a phrase, not just a scale', paragraphs: ['Create a four-note phrase in G major with the shape rooted at fret 3. Move the entire phrase two frets higher and play it in A major. The relationship between your fingers stays constant while every note name changes. That is the practical value of a movable position.']},
    ],
    practice: ['2 minutes: play the B-major pattern shown in the PDF.', '3 minutes: move it to G at fret 3 and name the G-major notes.', '3 minutes: create a four-note G-major phrase and transpose it to A.', '2 minutes: improvise over one major chord, ending each phrase on its root or third.'],
    songs: [
      { title: 'Wonderful Tonight', artist: 'Eric Clapton', focus: 'G-major lead melody', approach: 'Use the G-major version of the movable shape to locate the slow, singable lead notes around the chord changes.' },
      { title: 'Let It Be', artist: 'The Beatles', focus: 'C-major melodic resolution', approach: 'Move the shape to C and listen for phrases that resolve to C, E, or G over the progression.' },
      { title: 'Brown Eyed Girl', artist: 'Van Morrison', focus: 'G-major vocabulary', approach: 'Relate the bright intro and fills to nearby G-major scale notes rather than viewing them as isolated frets.' },
    ],
    sources: [
      { label: 'Fender: Major Scales and CAGED', url: 'https://www.fender.com/articles/scales/major-guitar-scales' },
      { label: 'Fender: Beginner Soloing Tips', url: 'https://www.fender.com/articles/techniques/how-to-guitar-solo' },
    ],
  },
]
