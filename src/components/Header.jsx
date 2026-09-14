const links = [["Sobre", "#about"], ["Dashboard", "#dashboard"], ["Projetos", "#projects"], ["Contato", "#contact"]];

export default function Header() {
  return <header className="fixed top-0 z-50 w-full border-b border-emerald-100/10 bg-[#060a09]/75 px-5 py-4 backdrop-blur-xl sm:px-6"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
    <a href="#about" className="font-mono text-xs font-bold tracking-[.18em] text-emerald-100">GABRIEL<span className="text-emerald-300">.DEV</span></a>
    <nav aria-label="Navegação principal" className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-emerald-100/55 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-emerald-300">{label}</a>)}</nav>
    <a href="#contact" className="rounded border border-emerald-300/25 px-3 py-2 font-mono text-[9px] tracking-widest text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-300/10">AVAILABLE</a>
  </div></header>;
}
