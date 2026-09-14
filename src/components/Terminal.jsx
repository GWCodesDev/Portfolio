import { useEffect, useRef, useState } from "react";

const initialLogs = [
  { text: "GW.OS terminal · profile access granted", tone: "text-emerald-200" },
  { text: "Digite 'help' para descobrir os comandos.", tone: "text-emerald-100/45" },
];

const output = {
  help: "Comandos: about, skills, projects, contact, dashboard, clear, sudo, coffee, matrix",
  about: "Gabriel William · Fullstack Júnior\nEngenharia de Software focada em produtos modernos e bem construídos.",
  skills: "Frontend: React, JavaScript, UI/UX\nBackend: Node.js, PHP, APIs\nDados: SQL, MongoDB",
  projects: "Abrindo registry de projetos...",
  contact: "Email: Gabrielw.soft@hotmail.com\nLinkedIn: /in/gabriel-william7",
  dashboard: "Abrindo capability map...",
  sudo: "Permissão negada. Mas boas decisões de arquitetura são bem-vindas.",
  coffee: "☕ Energia de build restaurada: +100%.\n",
  matrix: "Wake up, developer. The portfolio has you.",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState(initialLogs);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [logs]);

  const run = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") { setLogs([]); setInput(""); return; }
    const next = [...logs, { text: `guest@gabriel.dev:~$ ${raw}`, tone: "text-emerald-300" }];
    if (output[command]) {
      next.push({ text: output[command], tone: "text-emerald-50/75" });
      if (command === "projects") document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      if (command === "dashboard") document.querySelector("#dashboard")?.scrollIntoView({ behavior: "smooth" });
      if (command === "contact") document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    } else next.push({ text: `Comando '${command}' não encontrado. Use 'help'.`, tone: "text-rose-300" });
    setLogs(next); setInput("");
  };
  return <div onClick={() => inputRef.current?.focus()} className="terminal-glow glass panel-corner flex h-[22rem] w-full cursor-text flex-col overflow-hidden rounded-xl font-mono text-xs sm:h-[25rem]">
    <div className="flex items-center justify-between border-b border-emerald-100/10 bg-emerald-300/[.035] px-4 py-3"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-300/70" /><i className="h-2 w-2 rounded-full bg-amber-200/70" /><i className="h-2 w-2 rounded-full bg-emerald-300/80" /></div><span className="text-[9px] tracking-[.14em] text-emerald-100/40">INTERACTIVE_TERMINAL</span></div>
    <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto p-4 leading-5">{logs.map((log, index) => <p key={`${log.text}-${index}`} className={`terminal-log ${log.tone}`}>{log.text}</p>)}</div>
    <div className="flex items-center gap-2 border-t border-emerald-100/10 px-4 py-3"><span className="text-emerald-300">›</span><label className="sr-only" htmlFor="terminal-command">Comando do terminal</label><input id="terminal-command" ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && run(input)} className="min-w-0 flex-1 bg-transparent text-emerald-100 outline-none placeholder:text-emerald-100/20" placeholder="comando..." autoComplete="off" spellCheck="false" /></div>
  </div>;
}
