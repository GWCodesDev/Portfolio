const domains = [
  { code: "01", title: "Frontend Systems", detail: "Interfaces responsivas, acessíveis e orientadas a produto.", stack: ["React", "JavaScript", "UI/UX"] },
  { code: "02", title: "Backend Services", detail: "Serviços e regras de negócio pensados para crescer com clareza.", stack: ["Node.js", "PHP", "Arquitetura"] },
  { code: "03", title: "API Integration", detail: "Conexões confiáveis entre produto, dados e serviços externos.", stack: ["REST", "JSON", "Auth"] },
  { code: "04", title: "Data Layer", detail: "Modelagem e persistência para informações que precisam fazer sentido.", stack: ["SQL", "MongoDB", "CMS"] },
];

export default function Dashboard() {
  return <section id="dashboard" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">engineering dashboard</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Arquitetura em <span className="text-emerald-300">movimento.</span></h2></div><p className="max-w-sm text-sm leading-6 text-emerald-50/55">Uma visão das áreas que sustentam cada entrega — do primeiro pixel ao dado em produção.</p></div>
    <div className="glass panel-corner overflow-hidden rounded-2xl p-4 sm:p-7"><div className="mb-6 flex items-center justify-between border-b border-emerald-100/10 pb-4 font-mono text-[10px] tracking-widest text-emerald-100/45"><span>CAPABILITY_MAP</span><span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-emerald-300" />LIVE</span></div>
      <div className="grid gap-3 md:grid-cols-2">{domains.map((domain) => <article key={domain.code} className="dashboard-node rounded-xl border border-emerald-200/10 bg-emerald-950/15 p-5"><div className="mb-7 flex items-start justify-between"><span className="font-mono text-xs text-emerald-300">/{domain.code}</span><span className="font-mono text-[9px] tracking-widest text-emerald-100/35">SYSTEM_NODE</span></div><h3 className="text-xl font-medium text-emerald-50">{domain.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-emerald-50/55">{domain.detail}</p><div className="mt-5 flex flex-wrap gap-2">{domain.stack.map((tech) => <span key={tech} className="rounded border border-emerald-200/10 bg-emerald-300/5 px-2 py-1 font-mono text-[10px] text-emerald-200/80">{tech}</span>)}</div></article>)}</div>
    </div>
  </section>;
}
