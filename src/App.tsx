import { useEffect, useState } from 'react'
import { lessons } from './lessons'
import SongsPage from './SongsPage'

function MenuIcon({ open }: { open: boolean }) {
  return <span className="menu-icon" aria-hidden="true"><span className={open ? 'line line-top open' : 'line line-top'} /><span className={open ? 'line line-bottom open' : 'line line-bottom'} /></span>
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [screenshotOpen, setScreenshotOpen] = useState(false)
  const [view, setView] = useState<'chapters' | 'songs'>(() => window.location.hash === '#songs' ? 'songs' : 'chapters')
  const lesson = lessons[activeIndex]

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [activeIndex, view])
  useEffect(() => {
    if (!screenshotOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setScreenshotOpen(false) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', closeOnEscape) }
  }, [screenshotOpen])
  const chooseLesson = (index: number) => { setActiveIndex(index); setMenuOpen(false); setScreenshotOpen(false) }
  const chooseView = (nextView: 'chapters' | 'songs') => { setView(nextView); window.history.replaceState(null, '', nextView === 'songs' ? '#songs' : window.location.pathname); setMenuOpen(false); setScreenshotOpen(false) }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={() => { chooseView('chapters'); chooseLesson(0) }}><span className="brand-mark" aria-hidden="true">G</span><span>Guitar Study</span></button>
        <nav className="primary-nav" aria-label="Primary navigation"><button type="button" className={view === 'chapters' ? 'active' : ''} onClick={() => chooseView('chapters')}>Chapters</button><button type="button" className={view === 'songs' ? 'active' : ''} onClick={() => chooseView('songs')}>Songs</button></nav>
        {view === 'chapters' && <div className="header-progress" aria-label={`Chapter ${lesson.chapter} of ${lessons.length}`}>
          <span>{String(lesson.chapter).padStart(2, '0')}</span><span className="progress-track"><span style={{ width: `${(lesson.chapter / lessons.length) * 100}%` }} /></span><span>{String(lessons.length).padStart(2, '0')}</span>
        </div>}
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close chapter navigation' : 'Open chapter navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}><MenuIcon open={menuOpen} /></button>
      </header>

      <nav className={menuOpen ? 'mobile-nav open' : 'mobile-nav'} aria-label="Chapters">
        <button className={view === 'songs' ? 'active' : ''} type="button" onClick={() => chooseView('songs')}><span>♪</span>Songs</button>
        {lessons.map((item, index) => <button className={view === 'chapters' && activeIndex === index ? 'active' : ''} type="button" key={item.id} onClick={() => { chooseView('chapters'); chooseLesson(index) }}><span>{String(item.chapter).padStart(2, '0')}</span>{item.shortTitle}</button>)}
      </nav>

      {view === 'songs' ? <SongsPage /> : <main className="page-layout">
        <aside className="chapter-sidebar">
          <p className="eyebrow">Chapters</p>
          <nav aria-label="Lesson chapters">
            {lessons.map((item, index) => <button type="button" key={item.id} className={activeIndex === index ? 'chapter-link active' : 'chapter-link'} onClick={() => chooseLesson(index)}><span>{String(item.chapter).padStart(2, '0')}</span><span>{item.shortTitle}</span></button>)}
          </nav>
        </aside>

        <article className="article" key={lesson.id}>
          <header className="article-header">
            <div className="article-meta"><p className="eyebrow">Chapter {lesson.chapter}</p><span>{lesson.readTime}</span></div>
            <h1>{lesson.title}</h1>
            <p className="dek">{lesson.summary}</p>
            <div className="outcome-card"><span>Learning outcome</span><p>{lesson.outcome}</p></div>
            {lesson.screenshot && <figure className="lesson-page">
              <div className="lesson-page-toolbar"><div><span>PDF lesson page</span><p>Use the original diagram while you practice</p></div><button type="button" onClick={() => setScreenshotOpen(true)}>View fullscreen <span aria-hidden="true">↗</span></button></div>
              <button className="lesson-page-image" type="button" onClick={() => setScreenshotOpen(true)} aria-label={`Open chapter ${lesson.chapter} PDF page fullscreen`}><img src={lesson.screenshot} alt={`Chapter ${lesson.chapter} diagram from The Ultimate Guitar Guide`} /></button>
              <figcaption>Chapter {lesson.chapter} · The Ultimate Guitar Guide by Marty Schwartz</figcaption>
            </figure>}
          </header>

          <div className="article-body">
            {lesson.sections.map((section) => <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul className="concept-list">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>)}

            <section className="practice-section">
              <p className="eyebrow">10-minute routine</p><h2>Practice this chapter</h2>
              <ol>{lesson.practice.map((step) => <li key={step}>{step}</li>)}</ol>
            </section>

            <section className="songs-section">
              <div className="section-heading"><div><p className="eyebrow">Apply it</p><h2>Three songs to learn</h2></div><p>Chosen to reinforce this chapter</p></div>
              <div className="song-grid">{lesson.songs.map((song, index) => <article className="song-card" key={song.title}>
                <span className="song-number">0{index + 1}</span><p className="song-focus">{song.focus}</p><h3>{song.title}</h3><p className="artist">{song.artist}</p><p>{song.approach}</p>
              </article>)}</div>
            </section>

            <section className="sources-section">
              <h2>Further reading</h2><p>The chapter topic comes from Marty Schwartz’s <em>The Ultimate Guitar Guide</em>. These sources add technique, theory, and song context.</p>
              <ul>{lesson.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
            </section>
          </div>

          <footer className="article-footer">
            <button type="button" disabled={activeIndex === 0} onClick={() => chooseLesson(activeIndex - 1)}><span>Previous</span>{activeIndex > 0 ? lessons[activeIndex - 1].shortTitle : '—'}</button>
            <button className="next" type="button" disabled={activeIndex === lessons.length - 1} onClick={() => chooseLesson(activeIndex + 1)}><span>Next</span>{activeIndex < lessons.length - 1 ? lessons[activeIndex + 1].shortTitle : 'Complete'}</button>
          </footer>
        </article>

        <aside className="article-outline">
          <p className="eyebrow">On this page</p>
          <ol>{lesson.sections.map((section) => <li key={section.title}>{section.title}</li>)}<li>Practice this chapter</li><li>Three songs to learn</li></ol>
        </aside>
      </main>}

      <footer className="site-footer"><span>Guitar Study</span><span>Technique chapters · Song tutorials</span></footer>
      {screenshotOpen && lesson.screenshot && <div className="fullscreen-viewer" role="dialog" aria-modal="true" aria-label={`Chapter ${lesson.chapter} PDF lesson page`} onClick={() => setScreenshotOpen(false)}>
        <div className="fullscreen-toolbar"><div><span>Chapter {lesson.chapter}</span><strong>{lesson.shortTitle}</strong></div><button type="button" autoFocus onClick={() => setScreenshotOpen(false)} aria-label="Close fullscreen lesson page">Close <span aria-hidden="true">×</span></button></div>
        <div className="fullscreen-canvas"><img src={lesson.screenshot} alt={`Chapter ${lesson.chapter} diagram from The Ultimate Guitar Guide`} onClick={(event) => event.stopPropagation()} /></div>
      </div>}
    </div>
  )
}

export default App
