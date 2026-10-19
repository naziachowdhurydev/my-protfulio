import Link from "next/link";
import PrintButton from "./print-button";

export default function ResumePage() {
  return (
    <main className="resume-main">
      <div className="resume-toolbar page-width">
        <Link href="/">← Back to portfolio</Link>
        <PrintButton />
      </div>
      <article className="resume-sheet">
        <header>
          <h1 className="resume-name">Nazia Chowdhury</h1>
          <p className="resume-role">Virtual Assistant</p>
          <div className="resume-contact">
            <a href="mailto:naziachywork@gmail.com">naziachywork@gmail.com</a>
            <br />
            <a href="https://www.google.com/maps/search/?api=1&query=Court%20Road%2C%20Moulvibazar" target="_blank" rel="noreferrer">
              Court Road, Moulvibazar
            </a>
          </div>
        </header>
        <section className="resume-section">
          <h2>Objective</h2>
          <p>
            Motivated and hardworking individual looking for an opportunity to
            grow professionally, use my skills in web development, data entry,
            and customer support, and contribute positively to a professional
            team. I am eager to learn new skills, take on new challenges, and
            build my experience while delivering reliable and quality work.
          </p>
        </section>
        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Web Designer &amp; Developer · Independent Projects</h3>
              <span>Project-based</span>
            </div>
            <ul className="resume-list">
              <li>Designed and built responsive, user-friendly web applications.</li>
              <li>Developed interfaces and features using React, Next.js, and TypeScript.</li>
              <li>Created and deployed projects including <a href="https://bazar-dor-beta-ten.vercel.app/" target="_blank" rel="noreferrer">Bazar Dor</a>, <a href="https://explore-technologies.netlify.app/" target="_blank" rel="noreferrer">Explore Technologies</a>, and <a href="https://b14-a6-fit-log-virid.vercel.app/" target="_blank" rel="noreferrer">FitLog</a>.</li>
            </ul>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Personal Projects &amp; Learning</h3>
              <span>Ongoing</span>
            </div>
            <ul className="resume-list resume-list-stacked">
              <li>Building full-stack applications with Next.js.</li>
              <li>Working with MongoDB and authentication.</li>
              <li>Practicing TypeScript and modern frontend development.</li>
              <li>Learning new tools and improving through real projects.</li>
            </ul>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Virtual Assistant · IntWins</h3>
              <span>2022 — Present</span>
            </div>
            <ul className="resume-list">
              <li>Managing CMS</li>
              <li>Client support</li>
              <li>Data entry</li>
            </ul>
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Undergraduate · National University of Bangladesh</h3>
            </div>
            <p>Major: English Literature</p>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Higher Secondary Certificate · Humanities</h3>
              <span>2022</span>
            </div>
            <p>GPA: 5.0</p>
          </div>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>Secondary School Certificate · Science</h3>
              <span>2020</span>
            </div>
            <p>GPA: 3.98</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>Skills &amp; Capabilities</h2>
          <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, responsive web design, component-based development, dynamic routing, React Context API.</p>
          <p><strong>Backend &amp; database:</strong> REST API integration, Next.js API routes, MongoDB, authentication and authorization, Better Auth, CRUD operations, server-side and client-side rendering.</p>
          <p><strong>Tools &amp; workflow:</strong> Git, GitHub, Vercel, Netlify, VS Code, npm, JSON, React Toastify, Lucide Icons.</p>
          <p><strong>Office &amp; languages:</strong> Microsoft Word, Excel, PowerPoint; Bangla and English.</p>
        </section>
        <section className="resume-section">
          <h2>Activities</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <h3>English Literature · Member</h3>
              <span>2025</span>
            </div>
            <p>Network with alumni.</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>Interests</h2>
          <p>Soccer</p>
        </section>
      </article>
    </main>
  );
}
