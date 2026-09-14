import { useEffect, useState } from "react";

const steps = ["initializing portfolio", "loading engineering profile", "connecting project registry", "system ready"];

export default function BootScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timers = steps.slice(1).map((_, index) => setTimeout(() => setStep(index + 1), (index + 1) * 620));
    const complete = setTimeout(onComplete, 2500);
    return () => { timers.forEach(clearTimeout); clearTimeout(complete); };
  }, [onComplete]);
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#060a09] px-6" role="status" aria-live="polite">
    <button onClick={onComplete} className="absolute right-6 top-6 font-mono text-[10px] tracking-widest text-emerald-100/45 transition hover:text-emerald-200">SKIP</button>
    <div className="w-full max-w-md"><p className="mb-5 font-mono text-xs tracking-[.22em] text-emerald-300">GW.OS / BOOT_SEQUENCE</p>
      <div className="glass panel-corner rounded-sm p-6"><div className="mb-6 flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /><span className="font-mono text-[10px] text-emerald-100/50">KERNEL: PORTFOLIO_2026</span></div>
        <div className="space-y-2 font-mono text-xs">{steps.map((label, index) => <p key={label} className={index <= step ? "text-emerald-200" : "text-emerald-100/20"}>[{index <= step ? "OK" : "--"}] {label}{index === step && <span className="animate-pulse">_</span>}</p>)}</div>
        <div className="mt-7 h-px overflow-hidden bg-emerald-200/10"><div className="boot-progress h-full bg-emerald-300" /></div>
      </div>
    </div>
  </div>;
}
