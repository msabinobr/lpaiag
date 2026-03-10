import { motion } from 'motion/react';
import { Play, Database, Target, TrendingUp } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

export function AiVideoDemo() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content & CRM Focus */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Você sabe atrair leads. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Nós garantimos o atendimento.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                O maior gargalo das empresas hoje não é gerar tráfego, é <strong>atender com velocidade e qualidade</strong>. Tráfego sem um atendimento eficiente é dinheiro jogado fora. Veja como nossa IA resolve isso na prática.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Integração Total com CRM</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A IA não apenas conversa, ela lê e alimenta seu CRM em tempo real. Ela sabe exatamente em qual etapa do funil o lead está e adapta a comunicação para cada momento da jornada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Abordagem Contextual</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Um lead frio recebe conteúdo de nutrição. Um lead quente recebe um link de checkout ou agendamento. A IA toma decisões estratégicas baseadas no comportamento do usuário.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group cursor-pointer">
              {/* Thumbnail Image */}
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Demonstração da IA" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/90 flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-zinc-950" />
                </div>
                <p className="mt-4 text-white font-medium tracking-wide drop-shadow-md">ASSISTIR DEMONSTRAÇÃO</p>
              </div>

              {/* Decorative UI Elements on Video */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-zinc-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-white font-medium">Aumente a conversão</span>
                </div>
                <div className="text-xs text-zinc-300 bg-zinc-950/80 backdrop-blur px-2 py-1 rounded border border-white/10">
                  02:45
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-24 flex justify-center">
          <ScrollIndicator text="Veja o passo a passo" />
        </div>
      </div>
    </section>
  );
}
