import { motion } from 'motion/react';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-400">
          <Bot className="w-8 h-8" />
          <span className="text-xl font-bold text-white tracking-tight">Auto<span className="text-emerald-400">Lead</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#solucoes" className="hover:text-white transition-colors">Soluções AI</a>
          <a href="#jornada" className="hover:text-white transition-colors">Jornada de Valor</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
          <a href="#equipe" className="hover:text-white transition-colors">Equipe</a>
        </nav>

        <div className="hidden md:block">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105">
            Falar com Especialista
          </button>
        </div>

        <button 
          className="md:hidden text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#solucoes" className="text-zinc-300 hover:text-white font-medium">Soluções AI</a>
          <a href="#jornada" className="text-zinc-300 hover:text-white font-medium">Jornada de Valor</a>
          <a href="#sobre" className="text-zinc-300 hover:text-white font-medium">Sobre Nós</a>
          <a href="#equipe" className="text-zinc-300 hover:text-white font-medium">Equipe</a>
          <button className="bg-emerald-500 text-zinc-950 px-6 py-3 rounded-xl font-semibold mt-4">
            Falar com Especialista
          </button>
        </motion.div>
      )}
    </header>
  );
}
