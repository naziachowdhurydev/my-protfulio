import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectSourceLink } from "@/components/project-source-link";

export const metadata: Metadata = {
  title: "Projects — Nazia Chowdhury",
  description: "Live web development projects by Nazia Chowdhury.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Return to home">
          <span className="wordmark-mark">N</span>
          <span>Nazia Chowdhury</span>
        </Link>
        <nav className="main-nav" aria-label="Project navigation">
          <Link href="/#work">Featured work</Link>
          <Link href="/#contact" className="nav-contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>

      <section className="projects-page-hero page-width">
        <Link className="projects-back-link" href="/#work">← Back to portfolio</Link>
        <div className="projects-page-hero-row">
          <div>
            <p className="eyebrow"><span className="status-dot" /> A growing collection</p>
            <h1>Ideas made<br /><span>into useful things.</span></h1>
          </div>
          <p className="projects-page-intro">
            Web projects shaped by curiosity, practice, and a love for turning
            ideas into thoughtful, useful experiences.
          </p>
        </div>
        <div className="projects-page-stats">
          <span><strong>{String(projects.length).padStart(2, "0")}</strong> live projects</span>
          <span>Built with curiosity <i>✳</i></span>
        </div>
      </section>

      <section className="projects-page-list page-width" aria-label="All projects">
        {projects.map((project) => (
          <article className={`project-list-card project-list-${project.tone}`} key={project.slug}>
            <div className={`project-list-art project-${project.tone} project-live-preview`}>
              <span className="project-card-number">{project.number}<i> / {String(projects.length).padStart(2, "0")}</i></span>
              <span className="project-card-graphic" aria-hidden="true"><span>{project.number}</span></span>
              <iframe
                src={project.href}
                title={`${project.title} live website preview`}
                loading="lazy"
                tabIndex={-1}
                sandbox="allow-scripts allow-same-origin"
              />
              <Link className="project-preview-cta" href={project.href} target="_blank">
                View live project <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="project-list-content">
              <div className="project-labels">
                <span className="project-category">{project.category}</span>
                <span className="project-year"><i /> Live</span>
              </div>
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p className="project-description">{project.description}</p>
              <div className="project-card-footer">
                <span>{project.type}</span>
                <div className="project-card-actions">
                  <Link className="project-card-link" href={project.href} target="_blank" rel="noreferrer">
                    Visit site <span aria-hidden="true">↗</span>
                  </Link>
                  <ProjectSourceLink href={project.repositoryHref} />
                </div>
              </div>
            </div>
          </article>
        ))}
        <article className="project-upcoming-card">
          <span className="upcoming-orbit upcoming-orbit-one" />
          <span className="upcoming-orbit upcoming-orbit-two" />
          <span className="upcoming-plus" aria-hidden="true">+</span>
          <p className="eyebrow">Currently creating</p>
          <h2>Something new<br /><span>is on the way.</span></h2>
          <p>Check back soon for the next project.</p>
          <span className="upcoming-status"><i /> In progress</span>
        </article>
      </section>

      <section className="projects-add-note page-width">
        <span className="projects-add-icon" aria-hidden="true">✳</span>
        <div>
          <h2>Have an idea in mind?</h2>
          <p>I’m always open to new projects, collaborations, and opportunities to learn.</p>
        </div>
        <Link className="button button-primary" href="/#contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </section>

      <footer className="site-footer page-width">
        <Link className="wordmark" href="/"><span className="wordmark-mark">N</span><span>Nazia Chowdhury</span></Link>
        <p>Designed with intention. © 2026</p>
        <Link className="footer-link" href="/#home">Back to top ↑</Link>
      </footer>
    </main>
  );
}
