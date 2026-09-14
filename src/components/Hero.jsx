import Terminal from './Terminal';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-32 pb-10 lg:pt-20">
      {/* Container principal ajustado para não transbordar no mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        
        {/* Esquerda: Informações e Foto */}
        <div className="space-y-8 holographic-container w-full">
          
          {/* Card com a Foto (Totalmente Responsivo) */}
          <div className="glass rounded-2xl p-4 sm:p-6 holographic-frame relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-fit border-emerald-400/20 mx-auto sm:mx-0">
            <div className="absolute top-2 left-4 text-[9px] font-mono text-emerald-600 opacity-60 tracking-widest hidden sm:block">
              ID: GW-001 | SYS_LOAD: 0.05
            </div>
            
            {/* Frame da Foto ajustável */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mt-2 sm:mt-0 border-2 border-emerald-400/80 rounded-full overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)] shrink-0">
              <img 
                src="/Fotogw.PNG" 
                alt="Gabriel William" 
                className="w-full h-full object-cover grayscale opacity-90 transition duration-500 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-emerald-950/30 mix-blend-overlay pointer-events-none"></div>
            </div>
            
            {/* Status do Perfil centralizado no mobile */}
            <div className="text-center sm:text-left mt-2 sm:mt-4">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-400">Status: Conectado</h3>
              <p className="text-gray-300 text-xs font-mono mt-1 shimmer">Autenticação verificada</p>
              
              <div className="mt-3 flex gap-2 justify-center sm:justify-start items-center">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]"></span>
                 <span className="text-[10px] text-emerald-400/70 font-mono tracking-widest">SISTEMA ONLINE</span>
              </div>
            </div>
          </div>

          {/* Textos Principais (Tamanhos flexíveis) */}
          <div className="space-y-6 text-center sm:text-left">
            <p className="text-emerald-400 font-mono uppercase tracking-widest text-xs sm:text-sm shimmer">
              Engineering profile · Fullstack Júnior
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight data-text">
              Gabriel <br className="hidden sm:block lg:hidden" />
              <span className="text-emerald-400">William</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto sm:mx-0 border-l-2 border-emerald-500/30 pl-4 bg-emerald-900/10 py-2 rounded-r-lg">
              Construo interfaces e sistemas que conectam experiência,
              lógica de negócio e dados — com foco em clareza e evolução.
            </p>

            {/* Botões de Ação em Coluna no Mobile */}
            <div className="flex gap-4 flex-col sm:flex-row pt-2">
              <a href="#projects" className="px-6 py-4 data-button-primary rounded-xl transition duration-300 text-sm tracking-wide text-center">
                [ VER_CASE_STUDIES ]
              </a>
              <a href="#contact" className="px-6 py-4 data-button-secondary rounded-xl transition duration-300 text-sm tracking-wide text-center">
                &gt; ABRIR_CANAL
              </a>
            </div>

            {/* Redes Sociais com Ícones SVG */}
            <div className="flex gap-6 pt-6 justify-center sm:justify-start border-t border-white/5">
              <a href="https://github.com/GabrielSoft" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm font-mono">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/gabriel-william7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm font-mono">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
                LINKEDIN
              </a>
            </div>
          </div>

        </div>

        {/* Direita: Terminal interativo */}
        <div className="console-area relative w-full mt-10 lg:mt-0">
            <Terminal />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-lg"></div>
        </div>

      </div>
    </section>
  );
}
