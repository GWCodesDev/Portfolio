const projects = [
  {
    id: "01",
    title: "Nexus ERP",
    type: "Fullstack enterprise system",
    description:
      "Sistema de gestão empresarial com autenticação, dashboard, clientes, produtos, vendas, financeiro, relatórios e controle de estoque.",
    focus: "React · API REST · dados · regras de negócio",
    link: "https://nexus-erp-frontend-pi.vercel.app/",
    code: "https://github.com/GWCodesDev/Nexus-erp",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "02",
    title: "Animação de Refrigerantes",
    type: "Interactive landing page",
    description:
      "Experiência promocional com transições de sabor, cor e movimento orientadas à interface.",
    focus: "motion · UI · conversão",
    link: "https://GWCodesDev.github.io/Animacao-de-Refrigerantes/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "03",
    title: "Clone Mercado Livre",
    type: "Responsive interface",
    description:
      "Estudo de interface comercial com foco em composição visual, grelha e adaptação entre dispositivos.",
    focus: "layout · responsividade · detalhe",
    code: "https://github.com/GWCodesDev/Mercado-livre",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8"
    >
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">selected case studies</p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Projetos como{" "}
            <span className="text-emerald-300">engenharia.</span>
          </h2>
        </div>

        <span className="font-mono text-[10px] tracking-widest text-emerald-100/40">
          03 PROJECTS
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="case-card glass panel-corner flex min-h-[23rem] flex-col rounded-2xl p-6"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-emerald-300">
                CASE_{project.id}
              </span>

              <span className="rounded-full border border-emerald-200/15 px-2 py-1 font-mono text-[9px] text-emerald-100/50">
                {project.link ? "DEPLOYED" : "CASE STUDY"}
              </span>
            </div>

            <p className="mt-10 font-mono text-[10px] uppercase tracking-[.16em] text-emerald-200/50">
              {project.type}
            </p>

            <h3 className="mt-3 text-2xl font-medium text-emerald-50">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-emerald-50/55">
              {project.description}
            </p>

            <div className="mt-5 border-l border-emerald-300/35 pl-3 font-mono text-[10px] tracking-wide text-emerald-200/65">
              {project.focus}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-emerald-100/10 bg-emerald-300/5 px-2 py-1 font-mono text-[10px] text-emerald-100/65"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3 border-t border-emerald-100/10 pt-5 font-mono text-[10px] tracking-widest">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-between text-emerald-200 transition hover:text-emerald-50"
                >
                  <span>OPEN_PROJECT</span>
                  <span className="case-arrow text-lg">↗</span>
                </a>
              )}

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-emerald-200/10 px-3 py-2 text-emerald-100/55 transition hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  GITHUB
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}