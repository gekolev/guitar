const sourceUrl = 'https://tabs.ultimate-guitar.com/tab/nickelback/how-you-remind-me-chords-1830045'
const artistUrl = 'https://www.ultimate-guitar.com/artist/nickelback_782'

type Chord = { name: string; frets: Array<number | 'x'>; fingers: string }

const chords: Chord[] = [
  { name: 'Am', frets: ['x', 0, 2, 2, 1, 0], fingers: 'x 0 2 3 1 0' },
  { name: 'C', frets: ['x', 3, 2, 0, 1, 0], fingers: 'x 3 2 0 1 0' },
  { name: 'G', frets: [3, 2, 0, 0, 0, 3], fingers: '2 1 0 0 0 3' },
  { name: 'D/F#', frets: [2, 'x', 0, 2, 3, 2], fingers: '1 x 0 2 3 1' },
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

export default function SongsPage() {
  return <main className="page-layout song-page-layout">
    <aside className="chapter-sidebar song-library"><p className="eyebrow">Songs</p><nav aria-label="Song tutorials"><button type="button" className="chapter-link active"><span>01</span><span>How You Remind Me</span></button></nav></aside>
    <article className="article song-tutorial">
      <header className="article-header song-hero">
        <div className="article-meta"><p className="eyebrow">Song tutorial 01</p><span>Intermediate · 20 min</span></div>
        <h1>How You Remind Me</h1><p className="song-byline">by <a href={artistUrl} target="_blank" rel="noreferrer">Nickelback</a></p>
        <p className="dek">Build the whole arrangement from one four-chord engine, then shape each section with dynamics, attack, and space.</p>
        <div className="song-facts"><div><span>Capo</span><strong>3rd fret</strong></div><div><span>Shapes</span><strong>Am · C · G · D/F#</strong></div><div><span>Sounding key</span><strong>C minor</strong></div><div><span>Tuning</span><strong>Standard</strong></div></div>
      </header>
      <div className="article-body">
        <section id="chords"><p className="eyebrow">Chord toolkit</p><h2>Four shapes for the whole song</h2><p>Place the capo at fret 3 and read every diagram as if the capo were the nut. Numbers show frets relative to the capo; an × means mute that string and ○ means play it open.</p><div className="chord-grid">{chords.map((chord) => <ChordDiagram chord={chord} key={chord.name} />)}</div><div className="technique-note"><strong>D/F# shortcut</strong><p>Fret the low E string with your thumb or first finger and avoid the A string. If that interrupts the rhythm, use a regular D shape first, then add the F# bass once the changes are steady.</p></div></section>
        <section id="rhythm"><p className="eyebrow">Rhythm</p><h2>Start simple, then add weight</h2><div className="strum-card"><span>Count</span><strong>1 &amp; 2 &amp; 3 &amp; 4 &amp;</strong><span>Pattern</span><strong>↓ · ↓↑ · ↑↓↑</strong></div><p>Use the pattern as a practice framework rather than a rigid transcription. Keep your hand moving in eighth notes, make the downbeats heavier in the chorus, and reduce the stroke size in the verses.</p></section>
        <section id="breakdown"><p className="eyebrow">Arrangement map</p><h2>Song breakdown</h2><div className="song-breakdown">{sections.map((section, index) => <article key={section.name} className="breakdown-row"><div className="breakdown-title"><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.name}</h3><p>{section.repeats}</p></div><div><div className="progression" aria-label={`${section.name} chord progression`}>{['Am', 'C', 'G', 'D/F#'].map((chord) => <strong key={chord}>{chord}</strong>)}</div><p>{section.note}</p></div></article>)}</div></section>
        <section className="practice-section" id="practice"><p className="eyebrow">Practice plan</p><h2>Learn it in four passes</h2><ol><li>Loop Am-C-G-D/F# with one downstroke per chord until every change lands cleanly.</li><li>Add steady eighth-note hand motion and keep the muted upstrokes moving through the gaps.</li><li>Play verse to chorus, making the chorus clearly louder without changing tempo.</li><li>Run the complete arrangement from the map above, recovering at the next Am if you lose your place.</li></ol></section>
        <section className="sources-section"><h2>Reference chord chart</h2><p>This tutorial uses the capo-3 chord version as a structural reference and adds original fingering, rhythm, dynamics, and practice guidance. The source chart contains the complete lyric-aligned arrangement.</p><ul><li><a href={sourceUrl} target="_blank" rel="noreferrer">Ultimate Guitar: How You Remind Me Chords <span aria-hidden="true">↗</span></a></li></ul></section>
      </div>
    </article>
    <aside className="article-outline"><p className="eyebrow">On this page</p><ol><li>Chord shapes</li><li>Rhythm approach</li><li>Song breakdown</li><li>Practice plan</li></ol></aside>
  </main>
}
