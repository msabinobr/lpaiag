import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

const testimonials = [
  {
    name: "Nome do Cliente 1",
    role: "CEO, Empresa de Serviços",
    content: "Antes da automação, perdíamos dezenas de leads nos finais de semana. Agora, a IA qualifica e já agenda as reuniões para segunda-feira. Nossa conversão aumentou 40%.",
    results: "+40% em Vendas"
  },
  {
    name: "Nome do Cliente 2",
    role: "Diretor Comercial, E-commerce",
    content: "O tráfego pago sempre funcionou, mas o time de vendas não dava conta de responder rápido. A IA assumiu a linha de frente e o custo de aquisição (CAC) despencou.",
    results: "Redução de 60% no CAC"
  },
  {
    name: "Nome do Cliente 3",
    role: "Fundador, Clínica de Estética",
    content: "A integração com nosso CRM foi o divisor de águas. O robô sabe exatamente se o cliente é novo ou recorrente e faz o atendimento perfeito para cada caso.",
    results: "Atendimento 24/7"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Resultados que falam <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">por si mesmos.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            Não acredite apenas em nós. Veja o impacto real da nossa automação nos negócios dos nossos clientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl relative group hover:bg-zinc-900 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-emerald-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              
              <p className="text-zinc-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.results}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <ScrollIndicator text="Descubra a Jornada de Valor" />
        </div>
      </div>
    </section>
  );
}
