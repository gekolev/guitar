import { useState } from 'react'

const sourceUrl = 'https://tabs.ultimate-guitar.com/tab/nickelback/how-you-remind-me-chords-1830045'
const dropDTutorialUrl = 'https://csgacademyplus.com/lessons/how-you-remind-me-by-nickelback/'
const dropDTabUrl = 'https://www.gotabs.com/nickelback/how-you-remind-me-tab'
const artistUrl = 'https://www.ultimate-guitar.com/artist/nickelback_782'

type Chord = { name: string; frets: Array<number | 'x'>; fingers: string }

const chords: Chord[] = [
  { name: 'Am', frets: ['x', 0, 2, 2, 1, 0], fingers: 'x 0 2 3 1 0' },
  { name: 'C', frets: ['x', 3, 2, 0, 1, 0], fingers: 'x 3 2 0 1 0' },
  { name: 'G', frets: [3, 2, 0, 0, 0, 3], fingers: '2 1 0 0 0 3' },
  { name: 'D/F#', frets: [2, 'x', 0, 2, 3, 2], fingers: '1 x 0 2 3 1' },
]

const dropDChords: Chord[] = [
  { name: 'C5', frets: ['x', 3, 5, 5, 'x', 'x'], fingers: 'x 1 3 4 x x' },
  { name: 'F5', frets: [3, 3, 3, 'x', 'x', 'x'], fingers: '1 1 1 x x x' },
  { name: 'B♭5', frets: ['x', 1, 3, 3, 'x', 'x'], fingers: 'x 1 3 4 x x' },
  { name: 'E♭5', frets: [1, 1, 1, 'x', 'x', 'x'], fingers: '1 1 1 x x x' },
]

const sections = [
  { name: 'Verse', repeats: 'Repeat the four-chord cycle', note: 'Keep the first verse restrained. Use one downstroke per half-bar while learning, then move to quiet eighth notes. Let the F# bass note make the final chord pull naturally back to Am.' },
  { name: 'Pre-chorus', repeats: 'Same harmony, stronger lift', note: 'The section begins with a shorter Am-C-G statement before settling into the full cycle. Increase the strum width and volume so the arrangement grows without rushing.' },
  { name: 'Chorus', repeats: 'Four-chord cycle throughout', note: 'Use full, even strums and make beat one obvious. The harmony stays familiar; the contrast comes from dynamics, a more continuous pattern, and a stronger backbeat.' },
  { name: 'Verse 2', repeats: 'Return to the verse feel', note: 'Pull the energy back, but keep more motion than in verse one. Aim for clean bass notes and avoid letting open strings ring across the D/F# to Am reset.' },
  { name: 'Instrumental', repeats: 'Two cycles', note: 'Treat this as a chorus without vocals. Lock the chord changes to the pulse and use the repeated cycle to practice consistent attack.' },
  { name: 'Refrain / outro', repeats: 'Build, then finish firmly', note: 'Follow the vocal phrasing with small gaps, then return to the complete cycle. End with a decisive final hit rather than allowing every open string to ring uncontrolled.' },
]

function ChordDiagram({ chord }: { chord: Chord }) {
  return <article className="chord-card">
    <h3>{chord.name}</h3>
    <svg viewBox="0 0 150 168" role="img" aria-label={`${chord.name} chord diagram`}>
      {[0, 1, 2, 3, 4, 5].map((string) => <line key={`s${string}`} x1={25 + string * 20} y1="30" x2={25 + string * 20} y2="145" />)}
      {[0, 1, 2, 3, 4, 5].map((fret) => <line key={`f${fret}`} className={fret === 0 ? 'nut' : ''} x1="25" y1={30 + fret * 23} x2="125" y2={30 + fret * 23} />)}
      {chord.frets.map((fret, string) => fret === 'x'
        ? <text key={string} x={25 + string * 20} y="20">×</text>
        : fret === 0
          ? <text key={string} x={25 + string * 20} y="20">○</text>
          : <circle key={string} cx={25 + string * 20} cy={41.5 + (fret - 1) * 23} r="7" />)}
    </svg>
    <p><span>Strings</span>{chord.frets.join(' ')}</p><p><span>Fingers</span>{chord.fingers}</p>
  </article>
}

function HowYouRemindMe({ onSelect }: { onSelect: (song: 'how-you-remind-me' | 'leave-her-johnny') => void }) {
  return <main className="page-layout song-page-layout">
    <aside className="chapter-sidebar song-library"><p className="eyebrow">Songs</p><nav aria-label="Song tutorials"><button type="button" className="chapter-link active" onClick={() => onSelect('how-you-remind-me')}><span>01</span><span>How You Remind Me</span></button><button type="button" className="chapter-link" onClick={() => onSelect('leave-her-johnny')}><span>02</span><span>Official Leave Her Johnny</span></button></nav></aside>
    <article className="article song-tutorial">
      <header className="article-header song-hero">
        <div className="article-meta"><p className="eyebrow">Song tutorial 01</p><span>Intermediate · 20 min</span></div>
        <h1>How You Remind Me</h1><p className="song-byline">by <a href={artistUrl} target="_blank" rel="noreferrer">Nickelback</a></p>
        <p className="dek">Learn an approachable capo arrangement first, then move to the heavier Drop D power-chord approach used for the original-style guitar part.</p>
        <div className="song-facts"><div><span>Easy version</span><strong>Capo 3 · standard</strong></div><div><span>Easy shapes</span><strong>Am · C · G · D/F#</strong></div><div><span>Original style</span><strong>Drop D · power chords</strong></div><div><span>Sounding key</span><strong>C minor</strong></div></div>
      </header>
      <div className="article-body">
        <section id="chords"><p className="eyebrow">Chord toolkit</p><h2>Four shapes for the whole song</h2><p>Place the capo at fret 3 and read every diagram as if the capo were the nut. Numbers show frets relative to the capo; an × means mute that string and ○ means play it open.</p><div className="chord-grid">{chords.map((chord) => <ChordDiagram chord={chord} key={chord.name} />)}</div><div className="technique-note"><strong>D/F# shortcut</strong><p>Fret the low E string with your thumb or first finger and avoid the A string. If that interrupts the rhythm, use a regular D shape first, then add the F# bass once the changes are steady.</p></div></section>
        <section id="rhythm"><p className="eyebrow">Rhythm</p><h2>Start simple, then add weight</h2><div className="strum-card"><span>Count</span><strong>1 &amp; 2 &amp; 3 &amp; 4 &amp;</strong><span>Pattern</span><strong>↓ · ↓↑ · ↑↓↑</strong></div><p>Use the pattern as a practice framework rather than a rigid transcription. Keep your hand moving in eighth notes, make the downbeats heavier in the chorus, and reduce the stroke size in the verses.</p></section>
        <section id="drop-d"><p className="eyebrow">Original-style alternative</p><h2>Play it in Drop D with power chords</h2><p>The capo arrangement above is convenient for singing and acoustic practice, but it is not the only way to play the song. For the heavier, record-like guitar approach, remove the capo and tune the sixth string down one whole step, from E to D. Your tuning from the thickest string to the thinnest is <strong>D–A–D–G–B–E</strong>.</p><div className="chord-grid">{dropDChords.map((chord) => <ChordDiagram chord={chord} key={chord.name} />)}</div><p>Diagram strings run from the thick sixth string on the left to the thin first string on the right. An × means do not play that string. For F5 and E♭5, lay one finger flat across only the three lowest strings; the Drop D tuning supplies the root, fifth, and octave at one fret.</p><div className="technique-note"><strong>Power-chord framework</strong><p>Loop C5–F5–B♭5–E♭5. C5 and B♭5 use fifth-string-root shapes; F5 and E♭5 use the Drop D low-string barre. Keep unused strings muted, use a lighter or cleaner attack in the verse, and bring in firm downstrokes and distortion for the chorus.</p></div><p>The recorded arrangement contains extra suspended notes, rhythmic accents, and layered guitar parts, so treat these four power chords as the foundation rather than a note-for-note transcription. The linked lesson below specifically teaches the song with power chords in Drop D; the companion tab is useful for studying the detailed voicings and section changes.</p></section>
        <section id="breakdown"><p className="eyebrow">Arrangement map</p><h2>Song breakdown</h2><div className="song-breakdown">{sections.map((section, index) => <article key={section.name} className="breakdown-row"><div className="breakdown-title"><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.name}</h3><p>{section.repeats}</p></div><div><div className="progression" aria-label={`${section.name} chord progression`}>{['Am', 'C', 'G', 'D/F#'].map((chord) => <strong key={chord}>{chord}</strong>)}</div><p>{section.note}</p></div></article>)}</div></section>
        <section className="practice-section" id="practice"><p className="eyebrow">Practice plan</p><h2>Learn it in four passes</h2><ol><li>Loop Am-C-G-D/F# with one downstroke per chord until every change lands cleanly.</li><li>Add steady eighth-note hand motion and keep the muted upstrokes moving through the gaps.</li><li>Play verse to chorus, making the chorus clearly louder without changing tempo.</li><li>Run the complete arrangement from the map above, recovering at the next Am if you lose your place.</li></ol></section>
        <section className="sources-section"><h2>Tutorials and references</h2><p>The first chart supports the approachable capo-3 arrangement. The lesson and tab that follow cover the Drop D, power-chord approach used for the original-style part.</p><ul><li><a href={sourceUrl} target="_blank" rel="noreferrer">Ultimate Guitar: capo-3 chord chart <span aria-hidden="true">↗</span></a></li><li><a href={dropDTutorialUrl} target="_blank" rel="noreferrer">Center Stage Guitar Academy: Drop D power-chord lesson <span aria-hidden="true">↗</span></a></li><li><a href={dropDTabUrl} target="_blank" rel="noreferrer">GoTabs: detailed Drop D tab tutorial <span aria-hidden="true">↗</span></a></li></ul></section>
      </div>
    </article>
    <aside className="article-outline"><p className="eyebrow">On this page</p><ol><li>Chord shapes</li><li>Rhythm approach</li><li>Drop D version</li><li>Song breakdown</li><li>Practice plan</li></ol></aside>
  </main>
}

const leaveHerJohnnySources = {
  songsterr: 'https://www.songsterr.com/a/wsa/sean-dagher-leave-her-johnny-vocal-tab-s4272640',
  guitarTuna: 'https://guitartuna.com/chords/leave-her-johnny-traditional-easy-guitar-chords-61c1f1a82656a3cdf92d9db2',
  museScore: 'https://musescore.com/user/36515706/scores/6987473?srsltid=AYCX9vLG0J1phWJVe9SsAPFi_UF2gUs4u5EEId9rCAlrJ8DnNZSLvZo_',
}

const leaveHerJohnnyChords: Chord[] = [
  { name: 'E♭', frets: ['x', 6, 5, 3, 4, 3], fingers: 'x 4 3 1 2 1' },
  { name: 'B♭', frets: ['x', 1, 3, 3, 3, 1], fingers: 'x 1 2 3 4 1' },
  { name: 'A♭', frets: [4, 6, 6, 5, 4, 4], fingers: '1 3 4 2 1 1' },
  { name: 'E♭/B♭', frets: ['x', 1, 5, 3, 4, 3], fingers: 'x 1 4 2 3 2' },
  { name: 'B♭7', frets: ['x', 1, 3, 1, 3, 1], fingers: 'x 1 3 1 4 1' },
]

const leaveHerJohnnyBeginnerChords: Chord[] = [
  { name: 'C', frets: ['x', 3, 2, 0, 1, 0], fingers: 'x 3 2 0 1 0' },
  { name: 'G', frets: [3, 2, 0, 0, 0, 3], fingers: '2 1 0 0 0 3' },
  { name: 'F', frets: ['x', 'x', 3, 2, 1, 1], fingers: 'x x 3 2 1 1' },
]

const leaveHerJohnnySections = [
  { name: 'Verse', repeats: 'Lead vocal, one line at a time', note: 'Keep the first phrase sparse and leave room after each sung line. Resolve clearly to E♭ before the response enters.' },
  { name: 'Response', repeats: 'Answer each lead phrase', note: 'Bring the strum in a little more strongly under the repeated title. The call-and-response shape matters more than filling every beat.' },
  { name: 'Chorus', repeats: 'Full group sound', note: 'Use the same harmonic vocabulary with a broader attack. Let A♭ provide the lift, then make the B♭ or B♭7 turnaround point decisively home.' },
  { name: 'Next verse', repeats: 'Repeat for each lyric stanza', note: 'Reset the dynamics for every new lead line, then rebuild through the response. This repeated contrast keeps the long strophic form moving.' },
  { name: 'Final refrain', repeats: 'Slow and settle on E♭', note: 'Widen the last phrase slightly without losing the pulse. Finish together on a clean E♭ and mute the strings deliberately.' },
]

function LeaveHerJohnny({ onSelect }: { onSelect: (song: 'how-you-remind-me' | 'leave-her-johnny') => void }) {
  return <main className="page-layout song-page-layout">
    <aside className="chapter-sidebar song-library"><p className="eyebrow">Songs</p><nav aria-label="Song tutorials"><button type="button" className="chapter-link" onClick={() => onSelect('how-you-remind-me')}><span>01</span><span>How You Remind Me</span></button><button type="button" className="chapter-link active" onClick={() => onSelect('leave-her-johnny')}><span>02</span><span>Official Leave Her Johnny</span></button></nav></aside>
    <article className="article song-tutorial">
      <header className="article-header song-hero">
        <div className="article-meta"><p className="eyebrow">Song tutorial 02</p><span>Beginner · 15 min</span></div>
        <h1>Official Leave Her Johnny</h1><p className="song-byline">Traditional sea shanty · Seán Dagher arrangement reference</p>
        <p className="dek">Learn the official chord set in E♭ major and use a restrained call-and-response strum that leaves room for the lead and group vocals.</p>
        <div className="song-facts"><div><span>Key</span><strong>E♭ major</strong></div><div><span>Tuning</span><strong>Standard · no capo</strong></div><div><span>Tempo</span><strong>60 BPM</strong></div><div><span>Official chords</span><strong>E♭ · B♭ · A♭ · E♭/B♭ · B♭7</strong></div></div>
      </header>
      <div className="article-body">
        <section id="chords"><p className="eyebrow">Chord toolkit</p><h2>Five voicings for the official version</h2><p>The official GuitarTuna chart uses E♭, B♭, A♭, E♭/B♭, and B♭7 in standard tuning without a capo. These movable shapes preserve that key; an × means mute the string and ○ means play it open.</p><div className="chord-grid">{leaveHerJohnnyChords.map((chord) => <ChordDiagram chord={chord} key={chord.name} />)}</div><div className="technique-note"><strong>Official-version shortcut</strong><p>First practice only E♭, B♭, and A♭. Add E♭/B♭ for a steadier bass line and B♭7 when the three main changes are comfortable.</p></div></section>
        <section id="beginner-chords"><p className="eyebrow">Beginner version</p><h2>Use three easier shapes with capo 3</h2><p>Place a capo at fret 3 and play C, G, and the small four-string F shape below. They sound as E♭, B♭, and A♭, so you stay in the official key while avoiding the full barre chords. Treat the capo as the nut and count every fret from it.</p><div className="chord-grid">{leaveHerJohnnyBeginnerChords.map((chord) => <ChordDiagram chord={chord} key={chord.name} />)}</div><div className="technique-note"><strong>Simplified progression</strong><p>Whenever the official chart shows E♭, play C; for B♭ or B♭7, play G; and for A♭, play F. Use C in place of E♭/B♭ until you are ready to add bass-note inversions.</p></div></section>
        <section id="rhythm"><p className="eyebrow">Rhythm</p><h2>Make space for the response</h2><div className="strum-card"><span>Count</span><strong>1 &amp; 2 &amp; 3 &amp; 4 &amp;</strong><span>Pattern</span><strong>↓ · ↓↑ · ↑↓↑</strong></div><p>Begin with one soft downstroke on each change at 60 BPM. Add the eighth-note pattern only after the chord changes feel secure, keeping the lead lines lighter and the communal responses broader.</p></section>
        <section id="breakdown"><p className="eyebrow">Arrangement map</p><h2>Song breakdown</h2><div className="song-breakdown">{leaveHerJohnnySections.map((section, index) => <article key={section.name} className="breakdown-row"><div className="breakdown-title"><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.name}</h3><p>{section.repeats}</p></div><div><div className="progression" aria-label={`${section.name} chord progression`}>{['E♭', 'B♭', 'A♭', 'E♭'].map((chord) => <strong key={chord}>{chord}</strong>)}</div><p>{section.note}</p></div></article>)}</div></section>
        <section className="practice-section" id="practice"><p className="eyebrow">Practice plan</p><h2>Learn it in four passes</h2><ol><li>Loop E♭–B♭–A♭–E♭ slowly with one downstroke per chord.</li><li>Add the E♭/B♭ inversion and B♭7 turnaround from the official chart.</li><li>Alternate quiet lead phrases with stronger response phrases at 60 BPM.</li><li>Follow the vocal part in the Songsterr reference, then play the complete form from the score.</li></ol></section>
        <section className="sources-section"><h2>Tutorials and references</h2><p>Use the chord chart for the official harmony, the vocal tab for phrasing, and the score for the complete notated arrangement.</p><ul><li><a href={leaveHerJohnnySources.guitarTuna} target="_blank" rel="noreferrer">GuitarTuna: official and simplified chord charts <span aria-hidden="true">↗</span></a></li><li><a href={leaveHerJohnnySources.songsterr} target="_blank" rel="noreferrer">Songsterr: Seán Dagher vocal tab <span aria-hidden="true">↗</span></a></li><li><a href={leaveHerJohnnySources.museScore} target="_blank" rel="noreferrer">MuseScore: sheet music <span aria-hidden="true">↗</span></a></li></ul></section>
      </div>
    </article>
    <aside className="article-outline"><p className="eyebrow">On this page</p><ol><li>Official chord shapes</li><li>Beginner chord shapes</li><li>Rhythm approach</li><li>Song breakdown</li><li>Practice plan</li></ol></aside>
  </main>
}

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = useState<'how-you-remind-me' | 'leave-her-johnny'>('how-you-remind-me')
  return selectedSong === 'leave-her-johnny' ? <LeaveHerJohnny onSelect={setSelectedSong} /> : <HowYouRemindMe onSelect={setSelectedSong} />
}
