import { links, facts, rank, skills } from './data.js'

const nav = [['about', 'About'], ['work', 'Work'], ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']]

function Spec({ rows }) {
  return (
    <dl className="spec">
      {rows.map(([k, v]) => (<div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>))}
    </dl>
  )
}

function RankTable() {
  return (
    <div className="scroll">
      <table>
        <thead><tr><th scope="col">Road</th><th scope="col">Flood depth</th><th scope="col">FloodOps priority score</th></tr></thead>
        <tbody>
          {rank.map(([road, depth, score], i) => (
            <tr key={road} className={i === 0 ? 'top' : undefined}>
              <th scope="row">{road}</th>
              <td><span className="bar" style={{ '--w': `${depth}%` }} /><b>{depth} cm</b></td>
              <td><span className="bar s" style={{ '--w': `${score}%` }} /><b>{score.toFixed(1)}</b></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function App() {
  return (
    <>
      <header>
        <div className="wrap">
          <a className="brand" href="#top">Mahardika Putra Qohar</a>
          <nav aria-label="Sections">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        </div>
      </header>

      <main id="top"><div className="wrap">
        <div className="hero">
          <h1>I ask what the user needs before I write the first line of code.</h1>
          <p className="sub">I am a full-stack and mobile developer from Yogyakarta with a requirements analysis background, building software that fits how people actually work.</p>
          <div className="cta">
            <a className="btn p" href={links.upwork} rel="noopener">Hire me on Upwork</a>
            <a className="btn s" href={links.github} rel="noopener">See my code on GitHub</a>
          </div>
          <dl className="facts">{facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>

        <section id="about">
          <h2>About</h2>
          <div className="about">
            <p>My first real project taught me that most software problems start as unclear requirements. I took on the interviews, the questionnaires and the transcription for a community app, and that habit stayed with me.</p>
            <p>On the engineering side I work with React, Node.js, Laravel and Flutter, with relational and document databases, and with Docker on Linux. I like owning a feature from the first conversation with the user to the deployed result.</p>
          </div>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <p className="intro">Three projects, from an award-winning system to the research behind a community app.</p>

          <article className="case">
            <h3>FloodOps: flood impact analysis and road repair prioritization</h3>
            <p className="badge">Gold medal, Software Application Development category, KMM 2026</p>
            <p>Flood response is often ranked by water depth alone, but a shallow road can be the only link between a neighborhood and its hospital. FloodOps ranks roads by depth, access to critical facilities and the availability of alternative routes, and explains every score in plain language.</p>
            <figure>
              <figcaption>The same six reports, ranked two ways. FloodOps puts a 25 cm road first because it is the only access to the Cijerah neighborhood.</figcaption>
              <RankTable />
              <p className="note">Synthetic test data from the prototype, Bandung test area. The score weighs depth at 40%, access impact at 35% and alternative routes at 25%.</p>
            </figure>
            <Spec rows={[
              ['What it does', 'A road-closure simulation built on Dijkstra’s algorithm shows detour distance, extra travel time and the replacement route on a map. Four role-based portals enforce permissions on the server, and citizens can report flooding without an account, with photo upload and a tracking code.'],
              ['My part', 'Member of the three-person team. I wrote the final competition report covering the system analysis and design.'],
              ['Stack', 'React, Vite, Leaflet with OpenStreetMap, Chart.js, Express.js, JWT and bcrypt, PWA, Docker, GitHub Actions'],
              ['Quality', '23 automated test groups pass, covering the scoring logic, the simulation and the API permissions.'],
            ]} />
            <div className="links">
              <a href={links.demo} rel="noopener">Open the live demo</a>
              <a href={links.repo} rel="noopener">Read the source code</a>
            </div>
          </article>

          <div className="pair">
            <article className="case">
              <h3>Community app for student organizations</h3>
              <p className="badge">Team project, requirements lead</p>
              <Spec rows={[
                ['Problem', 'Student organizations needed a lightweight way to run community activities, but the real needs were not written down anywhere.'],
                ['My part', 'I ran user interviews, designed the questionnaires, then transcribed and processed the data into requirements the team could build from.'],
                ['Outcome', 'A requirements base grounded in what members and organizers said they needed.'],
              ]} />
            </article>
            <article className="case">
              <h3>Diabetes risk prediction app</h3>
              <p className="badge">Coursework project</p>
              <Spec rows={[
                ['Problem', 'Give a user a quick risk estimate from health inputs and keep the records for later review.'],
                ['My part', 'Built the full desktop application, from the interface to the stored predictions.'],
                ['Stack', 'Python, Tkinter, SQLite'],
              ]} />
            </article>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p className="intro">The tools I reach for, and the analysis that decides which ones are worth using.</p>
          <div className="skills">{skills.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="edu">
            <div><h3>Universitas Muhammadiyah Yogyakarta</h3><p>Bachelor’s degree in progress, Information Technology.</p></div>
            <div><h3>Relevant coursework</h3><p>Object-Oriented Programming, Database Implementation, Multiplatform Programming.</p></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Work with me</h2>
          <p className="intro">Send me a short description of what you need. I will reply with questions before I propose anything, because the right scope usually matters more than the first estimate. I work comfortably in English and Bahasa Indonesia.</p>
          <div className="cta" style={{ marginBottom: 0 }}>
            <a className="btn p" href={links.upwork} rel="noopener">Hire me on Upwork</a>
            <a className="btn s" href={links.github} rel="noopener">GitHub</a>
          </div>
        </section>
      </div></main>
      <footer><div className="wrap">Mahardika Putra Qohar, Yogyakarta, Indonesia</div></footer>
    </>
  )
}