import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";

function App() {
  const [booted, setBooted] = useState(false);
  return <div className="app-shell">
    {!booted && <BootScreen onComplete={() => setBooted(true)} />}
    <div className="tech-grid" aria-hidden="true" /><div className="scanline" aria-hidden="true" />
    <Header />
    <main className="pt-20"><Hero /><Reveal><Dashboard /></Reveal><Reveal><Projects /></Reveal><Reveal><Contact /></Reveal></main>
    <footer className="mx-auto mt-10 max-w-7xl border-t border-emerald-300/10 px-6 py-8 text-center"><p className="font-mono text-[10px] tracking-[.16em] text-emerald-100/40">© 2026 GABRIEL WILLIAM · ENGINEERING PROFILE ONLINE</p></footer>
  </div>;
}
export default App;
