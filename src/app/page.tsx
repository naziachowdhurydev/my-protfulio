import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Bazar Dor",
    type: "Market price tracker",
    tone: "mint",
    href: "https://bazar-dor-beta-ten.vercel.app/",
  },
  {
    number: "02",
    title: "Explore Technologies",
    type: "Technology discovery",
    tone: "peach",
    href: "https://explore-technologies.netlify.app/",
  },
  {
    number: "03",
    title: "FitLog",
    type: "Workout library",
    tone: "blue",
    href: "https://b14-a6-fit-log-virid.vercel.app/",
  },
];

const experience = [
  {
    role: "Web Designer & Developer",
    company: "Independent projects",
    period: "Project-based",
    details: "Responsive websites · React · Next.js · TypeScript",
  },
  {
    role: "Personal Projects & Learning",
    company: "Ongoing",
    period: "Ongoing",
    details: "Full-stack Next.js · MongoDB & authentication · TypeScript · Continuous learning",
  },
  { role: "Virtual Assistant", company: "IntWins", period: "2022 — Present" },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend development",
    description: "Modern, responsive interfaces built with reusable components.",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive design",
      "Component-based development",
      "Dynamic routing",
      "React Context API",
    ],
  },
  {
    number: "02",
    title: "Backend & data",
    description: "APIs, authentication, and data-driven application features.",
    skills: [
      "REST API integration",
      "Next.js API routes",
      "MongoDB",
      "Authentication & authorization",
      "Better Auth",
      "CRUD operations",
      "Server & client rendering",
    ],
  },
  {
    number: "03",
    title: "Tools & workflow",
    description: "A practical toolkit for building, testing, and shipping.",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Netlify",
      "VS Code",
      "npm",
      "JSON",
      "React Toastify",
      "Lucide Icons",
    ],
  },
  {
    number: "04",
    title: "Virtual assistance",
    description: "Reliable support and clear communication for day-to-day work.",
    skills: [
      "CMS management",
      "Client support",
      "Data entry",
      "Microsoft Word",
      "Microsoft Excel",
      "PowerPoint",
      "Bangla & English",
    ],
  },
];

const capabilities = [
  "Build responsive, interactive web applications",
  "Create reusable React components and dynamic routes",
  "Integrate APIs, authentication, and database features",
  "Debug, improve, and deploy production websites",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Go to home">
          <span className="wordmark-mark">N</span>
          <span>Nazia Chowdhury</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open to opportunities</p>
          <h1>
            Hello, I&apos;m
            <br />
            <span>Nazia.</span>
          </h1>
          <p className="hero-description">
            A responsible and friendly virtual assistant with strong
            communication, customer-handling, and computer skills.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button-quiet" href="/resume">
              View resume <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Thoughtful work. Clear outcomes.</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-shape art-shape-one" />
          <div className="art-shape art-shape-two" />
          <div className="art-stamp">A little<br />more about<br />me <span>✳</span></div>
          <div className="portrait-placeholder">
            <Image
              className="portrait-photo"
              src="/profile.png"
              alt="Portrait wearing a pink hijab and glasses"
              width={768}
              height={768}
              priority
            />
          </div>
          <span className="art-caption">CREATIVE · CURIOUS · ALWAYS LEARNING</span>
        </div>
        <a className="scroll-cue" href="#work"><span /> Scroll to explore</a>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I&apos;ve worked on</p>
              <h2>Selected <span>work.</span></h2>
            </div>
            <p className="section-intro">
              A selection of digital projects spanning useful tools, discovery,
              and fitness.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                key={project.number}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} project in a new tab`}
              >
                <div className={`project-art project-${project.tone}`}>
                  <span className="project-number">{project.number} / SELECTED WORK</span>
                  <span className="project-art-title">{project.title}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                  <span className="project-decoration" />
                </div>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><p>{project.type}</p></div>
                  <span className="text-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="page-width about-grid">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2>Curious by nature.<br /><span>Always learning,<br />always growing.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Nazia Chowdhury, a curious and motivated person who enjoys
              learning new things and turning ideas into something useful. I’m
              currently studying English Literature while building my skills
              in web development and professional work.
            </p>
            <p>
              I enjoy working with modern web technologies like React, Next.js,
              TypeScript, and Tailwind CSS. Building projects has taught me to
              be patient, pay attention to details, solve problems, and keep
              learning when something doesn’t work the first time.
            </p>
            <p>
              I also have experience with virtual assistance, CMS management,
              data entry, and client support. I value clear communication,
              reliability, and organized work.
            </p>
            <p>
              I’m still growing as a developer, and that’s something I genuinely
              enjoy. I’m always open to learning new technologies, taking on new
              challenges, and improving a little with every project.
            </p>
            <div className="about-tags" aria-label="Areas of interest">
              <span>Web development</span>
              <span>Creative problem-solving</span>
              <span>Continuous learning</span>
            </div>
            <a className="inline-link" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="page-width">
          <div className="skills-heading">
            <p className="eyebrow"><span className="status-dot" /> What I bring</p>
            <h2>Skills &amp; <span>capabilities.</span></h2>
            <p>
              I build modern, responsive web applications using React,
              Next.js, and TypeScript. I enjoy turning ideas and designs into
              clean, functional, user-friendly interfaces.
            </p>
          </div>
          <div className="capability-grid">
            {skillGroups.map((group) => (
              <article className="capability-card" key={group.number}>
                <div className="capability-topline">
                  <span className="capability-number">{group.number}</span>
                  <span className="capability-spark" aria-hidden="true">✳</span>
                </div>
                <h3>{group.title}</h3>
                <p className="capability-description">{group.description}</p>
                <div className="capability-skills">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="what-i-do">
            <div className="what-i-do-heading">
              <p className="eyebrow">From idea to launch</p>
              <h3>What I can <span>do.</span></h3>
            </div>
            <ul className="capability-list">
              {capabilities.map((capability, index) => (
                <li key={capability}>
                  <span className="capability-check">{String(index + 1).padStart(2, "0")}</span>
                  {capability}
                  <span className="capability-list-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="page-width experience-grid">
          <div className="experience-title">
            <p className="eyebrow">Where I&apos;ve been</p>
            <h2>Experience &amp;<br /><span>expertise.</span></h2>
            <Link className="button button-outline" href="/resume">Full resume <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="experience-content">
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.role}>
                  <span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                    {"details" in item && <p className="timeline-detail">{item.details}</p>}
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </article>
              ))}
            </div>
            <div className="activity-block">
              <p className="eyebrow activity-label">Activity · 2025</p>
              <p className="activity-copy"><strong>English Literature</strong> · Member — Networking with alumni</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="page-width contact-inner">
          <p className="eyebrow"><span className="status-dot" /> Have a project in mind?</p>
          <h2>Let&apos;s make<br /><span>something meaningful.</span></h2>
          <p>Interested in working together? Get in touch by phone or email.</p>
          <div className="contact-details">
            <a href="mailto:naziachywork@gmail.com">naziachywork@gmail.com</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Court%20Road%2C%20Moulvibazar" target="_blank" rel="noreferrer">Court Road, Moulvibazar ↗</a>
          </div>
          <a className="button button-light contact-resume" href="/resume">View resume <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-decoration" aria-hidden="true">✳</div>
      </section>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home"><span className="wordmark-mark">N</span><span>Nazia Chowdhury</span></a>
        <p>Designed with intention. © 2026</p>
        <a className="footer-link" href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
