import Link from "next/link";
import PrintButton from "./print-button";

const skills = [
  {
    label: "Web development",
    items: "HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, responsive web design, dynamic routing, React Context API",
  },
  {
    label: "Backend & database",
    items: "REST API integration, Next.js API routes, MongoDB, authentication, Better Auth, CRUD operations, JSON",
  },
  {
    label: "Tools",
    items: "Git, GitHub, Vercel, Netlify, VS Code, npm, React Toastify, Lucide Icons",
  },
  {
    label: "Professional skills",
    items: "CMS management, data entry, client support, communication, problem solving, attention to detail, time management, teamwork, willingness to learn",
  },
  {
    label: "Languages",
    items: "Bangla, English",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-main">
      <div className="resume-toolbar page-width">
        <Link href="/">← Back to portfolio</Link>
        <PrintButton />
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <div className="resume-header-top">
            <div>
              <p className="resume-kicker">Curriculum vitae</p>
              <h1 className="resume-name">Nazia Chowdhury</h1>
              <p className="resume-role">Frontend Developer <span>|</span> Virtual Assistant</p>
            </div>
            <span className="resume-monogram" aria-hidden="true">NC</span>
          </div>
          <div className="resume-contact">
            <a href="mailto:naziachywork@gmail.com">naziachywork@gmail.com</a>
            <span className="resume-contact-divider" />
            <a href="https://www.google.com/maps/search/?api=1&query=Court%20Road%2C%20Moulvibazar" target="_blank" rel="noreferrer">
              Court Road, Moulvibazar
            </a>
          </div>
        </header>

        <section className="resume-section resume-objective">
          <h2>Objective</h2>
          <p>
            I’m a motivated and curious person who enjoys learning new things
            and improving through hands-on experience. I have experience working
            as a Virtual Assistant, where I’ve developed skills in CMS
            management, data entry, client support, and organized day-to-day
            work.
          </p>
          <p>
            Alongside my professional experience, I have been building my skills
            in web development and working on personal projects using React,
            Next.js, TypeScript, and modern web technologies. I enjoy solving
            problems, paying attention to small details, and learning from
            things that don’t work the first time.
          </p>
          <p>
            I’m looking for an opportunity where I can contribute my existing
            skills, continue learning, and grow with a supportive and
            professional team.
          </p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-education-grid">
            <div className="resume-education-entry">
              <h3>Undergraduate</h3>
              <p>National University of Bangladesh</p>
              <span>Major: English Literature · Currently pursuing</span>
            </div>
            <div className="resume-education-entry">
              <h3>Higher Secondary Certificate</h3>
              <p>Humanities · 2022</p>
              <span>GPA: 5.00</span>
            </div>
            <div className="resume-education-entry">
              <h3>Secondary School Certificate</h3>
              <p>Science · 2020</p>
              <span>GPA: 3.98</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Skills &amp; Capabilities</h2>
          <div className="resume-skills-grid">
            {skills.map((skill) => (
              <div className="resume-skill-group" key={skill.label}>
                <h3>{skill.label}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section resume-lower-grid">
          <div>
            <h2>Activities</h2>
            <div className="resume-entry">
              <h3>English Literature · Member</h3>
              <p>
                2025 · Participated in academic and networking activities and
                connected with alumni and other students.
              </p>
            </div>
          </div>
          <div>
            <h2>Interests</h2>
            <div className="resume-interest-tags">
              <span>Web development</span>
              <span>Learning new technologies</span>
              <span>Creative problem-solving</span>
              <span>Soccer</span>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
