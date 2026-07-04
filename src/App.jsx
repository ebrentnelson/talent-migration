import { useState, useEffect } from 'react'
import './App.css'
import {
  NAV_ITEMS,
  THEORIES,
  SOURCES,
  IMPACTS,
  RESULTS_2025,
  REFERENCES,
} from './content.js'

/* Scroll-spy: highlights the nav link for the section in view. */
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function SectionHead({ lane, title }) {
  return (
    <div className="section-head">
      <span className="lane" aria-hidden="true">
        {lane}
      </span>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function Figure({ src, alt, caption }) {
  return (
    <figure className="figure">
      <img className="figure__img" src={src} alt={alt ?? ''} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function Nav({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#home">
          IMPORTED <span>TALENT</span>
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default function App() {
  const active = useScrollSpy(NAV_ITEMS.map(n => n.id))
  const [paperMode, setPaperMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('paper-mode', paperMode)
    return () => document.body.classList.remove('paper-mode')
  }, [paperMode])

  return (
    <>
      <Nav active={active} />

      {/* ---------- HERO / HOME ---------- */}
      <header className="hero" id="home">
        <div className="hero__inner">
          <p className="hero__eyebrow">
            Sociology of Sport · A Case Study in Global Sport Migration
          </p>
          <h1>
            <em>Imported</em> Talent
          </h1>
          <p className="hero__lede">
            How American universities recruit distance-running talent from
            around the world and what a start line full of international
            athletes reveals about power and opportunity in modern college
            athletics.
          </p>
          <p>
            <a className="plain" href="#introduction">
              Read the case study ↓
            </a>
          </p>
        </div>
      </header>

      {/* ---------- INTRODUCTION ---------- */}
      <section className="section" id="introduction">
        <div className="wrap">
          <SectionHead lane="01" title="Identifying the Case" />
          <div className="grid-2">
            <div className="prose">
              <p className="lead">
                In 2025, the Oklahoma State Cowboys won the NCAA men's cross
                country championship. Of their five scoring runners, four were
                international athletes and only one was American.
              </p>
              <p>
                Oklahoma State wasn't alone in this disproportionate ratio of
                international to American athletes, though. Of the top ten
                individual finishers, eight were international athletes.
                Furthermore, of the top 30 finishers in 2025, over 83% came from
                outside the United States. In the past decade, the number of
                international athletes in the top 40 of men's and women's cross
                country has more than doubled. This trend extends beyond cross
                country and can likely be found across most college sports.
              </p>
              <p>
                So what is going on? Recent changes to NCAA regulations have led
                to an increase in what sociologists call global sport migration.
                In short, this is a sociological framework holding that sport
                creates a reason for individuals to leave their home countries
                and migrate to another. This framework, along with world-systems
                theory, globalization, habitus, and neocolonialism, combines to
                give us a clear picture of why these trends in college athletics
                continue to increase.
              </p>
              <p>
                The following is a look into the sociology and data behind this
                ongoing trend.
              </p>
            </div>
            <Figure
              src="/ncaa-xc-2025-1.jpg"
              alt="2025 NCAA Cross Country Finals"
              caption="Fig. 1: 2025 NCAA Cross Country Finals"
            />
          </div>
        </div>
      </section>

      {/* ---------- SOCIOLOGICAL ANALYSIS ---------- */}
      <section className="section section--navy" id="analysis">
        <div className="wrap">
          <SectionHead lane="02" title="Sociological Analysis" />
          <p
            className="lead"
            style={{ maxWidth: '64ch', marginBottom: '2.5rem' }}
          >
            While any single one of these sociological ideas might shed light on
            the topic, the combination of the following five theories works
            naturally together to give a more complete understanding of why
            college athletics is seeing a significant increase in imported
            talent.
          </p>
          <article className="card card--primary">
            <span className="tag">{THEORIES[0].thinker}</span>
            <h3>{THEORIES[0].name}</h3>
            <p dangerouslySetInnerHTML={{ __html: THEORIES[0].description }} />
            <p className="reveal">
              <strong>What it reveals: </strong>
              {THEORIES[0].reveals}
            </p>
          </article>
          <div className="grid-2">
            {THEORIES.slice(1).map(t => (
              <article className="card" key={t.name}>
                <span className="tag">{t.thinker}</span>
                <h3>{t.name}</h3>
                <p>{t.description}</p>
                <p className="reveal">
                  <strong>What it reveals: </strong>
                  {t.reveals}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EVIDENCE & RESEARCH ---------- */}
      <section className="section" id="evidence">
        <div className="wrap">
          <SectionHead lane="03" title="Evidence & Research" />

          {/* Results table — full width */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                color: 'var(--navy)',
                marginBottom: '1.2rem',
                fontSize: '1.4rem',
              }}
            >
              2025 NCAA D-I Men's XC Championships: Individual Top 10
            </h3>
            <div className="table-scroll">
              <table className="results">
                <thead>
                  <tr>
                    <th className="pos">#</th>
                    <th>Athlete</th>
                    <th>Team</th>
                    <th>Nationality</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS_2025.map(r => (
                    <tr key={r.pos}>
                      <td className="pos">{r.pos}</td>
                      <td>{r.name}</td>
                      <td>{r.team}</td>
                      <td className="flag">{r.nat}</td>
                      <td className="time">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note" style={{ marginTop: '0.8rem' }}>
              Source:{' '}
              <a className="plain" href="#references">
                (NCAA DI Cross Country Championships, n.d.)
              </a>
              .
            </p>
          </div>

          {/* Pie chart + slope charts — 3-column row */}
          {(() => {
            const slopeData = [
              {
                title: '2015–25 NCAA D-I XC Regionals: Top 10 Trend',
                lines: [
                  { label: 'Men', y2015: 30, y2025: 60, color: 'var(--navy)' },
                  {
                    label: 'Women',
                    y2015: 21.1,
                    y2025: 62.2,
                    color: 'var(--gold-deep)',
                  },
                ],
              },
              {
                title:
                  '2015–25 NCAA D-I XC Nationals: All-America Top 40 Trend',
                lines: [
                  {
                    label: 'Men',
                    y2015: 30,
                    y2025: 72.5,
                    color: 'var(--navy)',
                  },
                  {
                    label: 'Women',
                    y2015: 32.5,
                    y2025: 62.5,
                    color: 'var(--gold-deep)',
                  },
                ],
              },
            ]
            const W = 220
            const H = 200
            const padTop = 30
            const padBot = 24
            const x1 = 52
            const x2 = W - 44
            const toY = pct =>
              padTop + ((100 - pct) / 100) * (H - padTop - padBot)
            const minGap = 16

            const spreadLabels = positions => {
              const sorted = [...positions].sort((a, b) => a.raw - b.raw)
              for (let i = 1; i < sorted.length; i++) {
                const diff = sorted[i].adj - sorted[i - 1].adj
                if (diff < minGap) {
                  const shift = (minGap - diff) / 2
                  sorted[i - 1].adj -= shift
                  sorted[i].adj += shift
                }
              }
              return positions
            }

            return (
              <div className="charts-row" style={{ marginBottom: '3rem' }}>
                {/* Pie */}
                <div>
                  <h3
                    style={{
                      color: 'var(--navy)',
                      marginBottom: '1.2rem',
                      fontSize: '1.4rem',
                    }}
                  >
                    2025 NCAA D-I Men's XC Championships: Top 30 Breakdown
                  </h3>
                  <div className="pie-wrap pie-wrap--stacked">
                    <div className="pie" />
                    <ul className="pie-legend">
                      <li>
                        <span className="pie-swatch pie-swatch--intl" />
                        International — 83.3%
                      </li>
                      <li>
                        <span className="pie-swatch pie-swatch--usa" />
                        USA — 16.7%
                      </li>
                    </ul>
                  </div>
                  <p className="note" style={{ marginTop: '1rem' }}>
                    Source:{' '}
                    <a className="plain" href="#references">
                      (NCAA DI XC Championships, n.d.)
                    </a>
                  </p>
                </div>

                {/* Slope charts */}
                {slopeData.map(chart => {
                  const leftLabels = chart.lines.map(l => {
                    const raw = toY(l.y2015)
                    return { label: l, raw, adj: raw }
                  })
                  const rightLabels = chart.lines.map(l => {
                    const raw = toY(l.y2025)
                    return { label: l, raw, adj: raw }
                  })
                  spreadLabels(leftLabels)
                  spreadLabels(rightLabels)

                  return (
                    <div className="slope-chart" key={chart.title}>
                      <h3
                        style={{
                          color: 'var(--navy)',
                          marginBottom: '1.2rem',
                          fontSize: '1.4rem',
                        }}
                      >
                        {chart.title}
                      </h3>
                      <svg
                        viewBox={`0 0 ${W} ${H}`}
                        className="slope-svg"
                        aria-label={`Slope chart: ${chart.title}`}
                      >
                        <text
                          x={x1}
                          y={16}
                          textAnchor="middle"
                          className="slope-year"
                        >
                          2015
                        </text>
                        <text
                          x={x2}
                          y={16}
                          textAnchor="middle"
                          className="slope-year"
                        >
                          2025
                        </text>
                        <line
                          x1={x1}
                          y1={padTop}
                          x2={x1}
                          y2={H - padBot}
                          stroke="#d0d0d0"
                          strokeWidth="1"
                        />
                        <line
                          x1={x2}
                          y1={padTop}
                          x2={x2}
                          y2={H - padBot}
                          stroke="#d0d0d0"
                          strokeWidth="1"
                        />
                        {chart.lines.map(l => {
                          const ya = toY(l.y2015)
                          const yb = toY(l.y2025)
                          const leftAdj = leftLabels.find(
                            p => p.label === l
                          ).adj
                          const rightAdj = rightLabels.find(
                            p => p.label === l
                          ).adj
                          return (
                            <g key={l.label}>
                              <line
                                x1={x1}
                                y1={ya}
                                x2={x2}
                                y2={yb}
                                stroke={l.color}
                                strokeWidth="2.5"
                              />
                              <circle cx={x1} cy={ya} r="4" fill={l.color} />
                              <circle cx={x2} cy={yb} r="4" fill={l.color} />
                              <text
                                x={x1 - 8}
                                y={leftAdj + 4}
                                textAnchor="end"
                                className="slope-val"
                              >
                                {l.y2015}%
                              </text>
                              <text
                                x={x2 + 8}
                                y={rightAdj + 4}
                                textAnchor="start"
                                className="slope-val"
                              >
                                {l.y2025}%
                              </text>
                            </g>
                          )
                        })}
                      </svg>
                      <ul className="slope-legend">
                        <li>
                          <span className="slope-swatch slope-swatch--navy" />
                          Men
                        </li>
                        <li>
                          <span className="slope-swatch slope-swatch--gold" />
                          Women
                        </li>
                      </ul>
                      <p className="note" style={{ marginTop: '1rem' }}>
                        Source:{' '}
                        <a className="plain" href="#references">
                          (Hollobaugh, 2025)
                        </a>
                      </p>
                    </div>
                  )
                })}
              </div>
            )
          })()}

          <blockquote className="pull">
            “Globalization spearheaded professionalization and commercialization
            of sports, which has contributed and elevated sport labour migration
            out of Africa. People move far from their home base to improve their
            standards of living, form new identities, and to enhance national
            pride” (
            <a href="#references" className="plain">
              Chepyator-Thomson & Ariyo, 2016
            </a>
            ).
          </blockquote>

          {/* Sources */}
          <h3
            style={{
              color: 'var(--navy)',
              margin: '1rem 0 1.3rem',
              fontSize: '1.5rem',
            }}
          >
            Key sources & findings
          </h3>
          <ul className="sources">
            {SOURCES.map(s => (
              <li className="source" key={s.title}>
                <span
                  className={`kind ${s.type === 'media' ? 'kind--media' : ''}`}
                >
                  {s.type === 'media' ? 'Media' : 'Peer-reviewed'}
                </span>
                <div>
                  <h4>{s.title}</h4>
                  <p className="meta">{s.cite}</p>
                  <p className="finding">{s.finding}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- REAL-WORLD IMPACT ---------- */}
      <section className="section section--band" id="impact">
        <div className="wrap">
          <SectionHead lane="04" title="Real-World Impact" />
          <div className="grid-2">
            {IMPACTS.map(i => (
              <article className="card" key={i.who}>
                <h3>{i.who}</h3>
                <p>{i.body}</p>
              </article>
            ))}
          </div>
          <div
            className="prose"
            style={{ marginTop: '2.5rem', maxWidth: '72ch' }}
          >
            <p className="note">
              [Dummy text] Close with implications for decision-making,
              leadership, and policy: scholarship allocation, eligibility rules,
              and how governing bodies might respond.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CRITICAL REFLECTION ---------- */}
      <section className="section section--navy" id="reflection">
        <div className="wrap">
          <SectionHead lane="05" title="Critical Reflection" />
          <div className="grid-2">
            <div className="prose">
              <p className="lead">
                What does this case reveal about sport as a social institution?
              </p>
              <p>
                [Dummy text] Reflect on how the pipeline exposes the structure
                of opportunity in global sport — who is granted mobility, on
                whose terms, and what that says about sport's promise of
                meritocracy.
              </p>
            </div>
            <div className="prose">
              <p className="lead">Who benefits, who is disadvantaged?</p>
              <p>
                [Dummy text] Weigh the exploitation-versus-opportunity tension:
                athlete agency and education and remittances on one side;
                eligibility-driven recruitment, displaced domestic runners, and
                extraction from sending nations on the other.
              </p>
              <p>
                <strong style={{ fontFamily: 'var(--display)', color: '#fff' }}>
                  Ethical issues ·{' '}
                </strong>
                [Dummy text] fairness, consent, commodification of the body.
              </p>
              <p>
                <strong style={{ fontFamily: 'var(--display)', color: '#fff' }}>
                  Future ·{' '}
                </strong>
                [Dummy text] how NIL, rule changes, and global development might
                reshape the flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- REFERENCES ---------- */}
      <section className="section" id="references">
        <div className="wrap">
          <SectionHead lane="06" title="References" />
          <ol className="refs">
            {REFERENCES.map((r, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: r }} />
            ))}
          </ol>
          <p className="note" style={{ marginTop: '2rem' }}>
            Image credits: Fig. 1
            https://ncaaxcchampionships.runnerspace.com/eprofile.php?event_id=509&do=photos&photo_id=1465083
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>Imported Talent · A Case Study in Global Sport Migration</span>
          <span>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                setPaperMode(p => !p)
                window.scrollTo({ top: 0 })
              }}
            >
              {paperMode ? 'View as Website' : 'View as Paper'}
            </a>
            {' · '}
            <a href="#home">Back to top ↑</a>
          </span>
        </div>
      </footer>
    </>
  )
}
