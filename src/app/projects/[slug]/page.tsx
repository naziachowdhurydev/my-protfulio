import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectSourceLink } from "@/components/project-source-link";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found — Nazia Chowdhury" };
  }

  return {
    title: `${project.title} — Projects — Nazia Chowdhury`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

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
        <Link className="projects-back-link" href="/projects">← All projects</Link>
        <div className="projects-page-hero-row">
          <div>
            <p className="eyebrow"><span className="status-dot" /> {project.category}</p>
            <h1>{project.title}</h1>
          </div>
          <p className="projects-page-intro">{project.description}</p>
        </div>
        <div className="projects-page-stats">
          <span><strong>{project.number}</strong> {project.type}</span>
          <span>Live project <i>✳</i></span>
        </div>
      </section>

      <section className="projects-page-list page-width" aria-label={`${project.title} project details`}>
        <article className={`project-list-card project-detail-card project-list-${project.tone}`}>
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
            <Link className="project-preview-cta" href={project.href} target="_blank" rel="noreferrer">
              View live project <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="project-list-content">
            <div className="project-labels">
              <span className="project-category">{project.category}</span>
              <span className="project-year"><i /> Live</span>
            </div>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-card-footer">
              <span>{project.type}</span>
              <Link className="project-card-link" href={project.href} target="_blank" rel="noreferrer">
                Visit site <span aria-hidden="true">↗</span>
              </Link>
              <ProjectSourceLink href={project.repositoryHref} />
            </div>
          </div>
        </article>
      </section>

      <section className="projects-add-note page-width">
        <span className="projects-add-icon" aria-hidden="true">✳</span>
        <div>
          <h2>Explore more projects</h2>
          <p>Browse the full collection of live projects.</p>
        </div>
        <Link className="button button-primary" href="/projects">All projects <span aria-hidden="true">↗</span></Link>
      </section>

      <footer className="site-footer page-width">
        <Link className="wordmark" href="/"><span className="wordmark-mark">N</span><span>Nazia Chowdhury</span></Link>
        <p>Designed with intention. © 2026</p>
        <Link className="footer-link" href="/#home">Back to top ↑</Link>
      </footer>
    </main>
  );
}
