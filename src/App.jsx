import { useState, useEffect } from 'react'
import './App.css'
import {
  NAV_ITEMS,
  THEORIES,
  SOURCES,
  IMPACTS,
  RESULTS_2025,
  TREND_DATA,
  REFERENCES,
} from './content.js'

/* Scroll-spy: highlights the nav link for the section in view. */
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

/* Decorative running-track lane lines for the hero. */
function HeroLanes() {
  return (
    <svg className="hero__lanes" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
      {[80, 160, 240, 320, 400, 480, 560].map((y) => (
        <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#c8963e" strokeWidth="1.5" opacity="0.35" />
      ))}
    </svg>
  )
}

function SectionHead({ lane, title, sub }) {
  return (
    <div className="section-head">
      <span className="lane" aria-hidden="true">{lane}</span>
      <div>
        <h2>{title}</h2>
        {sub && <p className="sub">{sub}</p>}
      </div>
    </div>
  )
}

function Figure({ label, caption }) {
  return (
    <figure className="figure">
      <div className="figure__ph">{label}</div>
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
          THE&nbsp;BRAWN&nbsp;<span>DRAIN</span>
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={() => setOpen(false)}
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
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id))

  return (
    <>
      <Nav active={active} />

      {/* ---------- HERO / HOME ---------- */}
      <header className="hero" id="home">
        <HeroLanes />
        <div className="hero__inner">
          <p className="hero__eyebrow">Sociology of Sport · Case Study</p>
          <h1>The <em>Brawn</em> Drain</h1>
          <p className="hero__lede">
            How American universities recruit distance-running talent from around
            the world — and what a start line full of international athletes reveals
            about power, opportunity, and extraction in modern sport.
          </p>
          <div className="hero__meta">
            <div className="hero__stat">
              <div className="n"><em>7</em>/10</div>
              <div className="l">Top individual finishers born outside the U.S., 2025 NCAA D-I XC (illustrative)</div>
            </div>
            <div className="hero__stat">
              <div className="n">3</div>
              <div className="l">Sociological theories applied</div>
            </div>
            <div className="hero__stat">
              <div className="n">5+</div>
              <div className="l">Peer-reviewed scholarly sources</div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- INTRODUCTION ---------- */}
      <section className="section" id="introduction">
        <div className="wrap">
          <SectionHead lane="01" title="Identifying the Case" sub="Background · why it matters" />
          <div className="grid-2">
            <div className="prose">
              <p className="lead">
                [Dummy text] Introduce the case here: what athletic talent migration is,
                where it shows up most visibly, and why the NCAA distance-running pipeline
                makes such a sharp example.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provide the reader
                a thorough background: the scale of international recruitment, the sports most
                affected, and the historical arc from the mid-20th century to today. Explain the
                "brawn drain" framing and how it echoes debates about the global movement of labor.
              </p>
              <p>
                Sed do eiusmod tempor incididunt. State clearly why this issue matters in sport
                today — for fairness debates, for governing-body policy, and for the athletes and
                communities on both ends of the pipeline.
              </p>
            </div>
            <Figure
              label="[ IMAGE PLACEHOLDER ]  Hero photo — start line of a collegiate cross country race"
              caption="Fig. 1 — Replace with a licensed or original race photograph."
            />
          </div>
        </div>
      </section>

      {/* ---------- SOCIOLOGICAL ANALYSIS ---------- */}
      <section className="section section--navy" id="analysis">
        <div className="wrap">
          <SectionHead lane="02" title="Sociological Analysis" sub="Three theories, one start line" />
          <p className="lead" style={{ maxWidth: '64ch', marginBottom: '2.5rem' }}>
            [Dummy text] Briefly frame why these three theories, together, explain the case
            better than any one alone. Each card gives a short description of the theory and
            what it reveals about talent migration.
          </p>
          <div className="grid-3">
            {THEORIES.map((t) => (
              <article className="card" key={t.name}>
                <span className="tag">{t.thinker}</span>
                <h3>{t.name}</h3>
                <p>{t.description}</p>
                <p className="reveal">
                  <strong>What it reveals — </strong>{t.reveals}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EVIDENCE & RESEARCH ---------- */}
      <section className="section" id="evidence">
        <div className="wrap">
          <SectionHead lane="03" title="Evidence & Research" sub="Scholarship, data, and reporting" />

          <div className="grid-2" style={{ marginBottom: '3rem', alignItems: 'start' }}>
            {/* Results table */}
            <div>
              <div className="table-scroll">
              <table className="results">
                <caption>2025 NCAA D-I Men's XC — individual top 10 (illustrative)</caption>
                <thead>
                  <tr><th className="pos">#</th><th>Athlete</th><th>Team</th><th>Nat.</th><th>Time</th></tr>
                </thead>
                <tbody>
                  {RESULTS_2025.map((r) => (
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
                Replace with verified official results. Source: NCAA (2025).
              </p>
            </div>

            {/* CSS bar chart */}
            <div>
              <p className="eyebrow" style={{ color: 'var(--gold-deep)' }}>Infographic</p>
              <h3 style={{ color: 'var(--navy)', marginBottom: '1.2rem', fontSize: '1.4rem' }}>
                Share of international athletes (placeholder data)
              </h3>
              <div className="chart">
                {TREND_DATA.map((d) => (
                  <div className="chart__row" key={d.year}>
                    <span className="chart__yr">{d.year}</span>
                    <div className="chart__track">
                      <div className="chart__fill" style={{ width: `${d.pct}%` }}>{d.pct}%</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="note" style={{ marginTop: '1rem' }}>
                Illustrative only — swap in verified NCAA participation figures.
              </p>
            </div>
          </div>

          <blockquote className="pull">
            [Pull quote] A memorable line from your research that captures the stakes of the case.
          </blockquote>

          {/* Sources */}
          <h3 style={{ color: 'var(--navy)', margin: '1rem 0 1.3rem', fontSize: '1.5rem' }}>
            Key sources & findings
          </h3>
          <ul className="sources">
            {SOURCES.map((s) => (
              <li className="source" key={s.title}>
                <span className={`kind ${s.type === 'media' ? 'kind--media' : ''}`}>
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
          <SectionHead lane="04" title="Real-World Impact" sub="Who feels this, and how" />
          <div className="grid-3">
            {IMPACTS.map((i) => (
              <article className="card" key={i.who}>
                <span className="tag">Stakeholder</span>
                <h3>{i.who}</h3>
                <p>{i.body}</p>
              </article>
            ))}
          </div>
          <div className="prose" style={{ marginTop: '2.5rem', maxWidth: '72ch' }}>
            <p className="note">
              [Dummy text] Close with implications for decision-making, leadership, and policy:
              scholarship allocation, eligibility rules, and how governing bodies might respond.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CRITICAL REFLECTION ---------- */}
      <section className="section section--navy" id="reflection">
        <div className="wrap">
          <SectionHead lane="05" title="Critical Reflection" sub="Sport as a social institution" />
          <div className="grid-2">
            <div className="prose">
              <p className="lead">What does this case reveal about sport as a social institution?</p>
              <p>[Dummy text] Reflect on how the pipeline exposes the structure of opportunity in
                global sport — who is granted mobility, on whose terms, and what that says about
                sport's promise of meritocracy.</p>
            </div>
            <div className="prose">
              <p className="lead">Who benefits, who is disadvantaged?</p>
              <p>[Dummy text] Weigh the exploitation-versus-opportunity tension: athlete agency and
                education and remittances on one side; eligibility-driven recruitment, displaced
                domestic runners, and extraction from sending nations on the other.</p>
              <p><strong style={{ fontFamily: 'var(--display)', color: '#fff' }}>Ethical issues · </strong>
                [Dummy text] fairness, consent, commodification of the body.</p>
              <p><strong style={{ fontFamily: 'var(--display)', color: '#fff' }}>Future · </strong>
                [Dummy text] how NIL, rule changes, and global development might reshape the flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- REFERENCES ---------- */}
      <section className="section" id="references">
        <div className="wrap">
          <SectionHead lane="06" title="References" sub="APA · scholarly and media sources" />
          <ol className="refs">
            {REFERENCES.map((r, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: r }} />
            ))}
          </ol>
          <p className="note" style={{ marginTop: '2rem' }}>
            Image credits: Fig. 1–n — replace placeholders with attributed or original media.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>The Brawn Drain · Sociology of Sport Case Study</span>
          <span>Built with React + Vite · <a href="#home">Back to top ↑</a></span>
        </div>
      </footer>
    </>
  )
}
