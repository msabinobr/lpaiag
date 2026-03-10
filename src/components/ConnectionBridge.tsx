import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ConnectionBridge() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efeito Parallax para o brilho de fundo e os textos
  const yGlow = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  const yText1 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const yText2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <div ref={ref} className="h-48 md:h-64 bg-zinc-950 relative flex justify-center items-center overflow-hidden">
      {/* Parallax Glow */}
      <motion.div 
        style={{ y: yGlow, opacity: opacityGlow }} 
        className="absolute w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" 
      />

      {/* Linha Contínua de Conexão */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-emerald-500/50 to-zinc-800" />

      {/* Pulso de Energia (Dados fluindo da IA para o Humano) */}
      <motion.div
        animate={{ top: ["-20%", "120%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        className="absolute left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(16,185,129,1)]"
      />

      {/* Textos Flutuantes com Parallax (Contexto da Transição) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div style={{ y: yText1 }} className="flex items-center gap-3 opacity-40 ml-32 md:ml-48 mb-16">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">Processamento IA</span>
        </motion.div>
        
        <motion.div style={{ y: yText2 }} className="flex items-center gap-3 opacity-40 mr-32 md:mr-48 mt-16">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-violet-400 font-medium">Análise Humana</span>
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_rgba(139,92,246,0.8)]" />
        </motion.div>
      </div>
    </div>
  );
}
