'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Eye, Package, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: 'Scegli il Prodotto',
      description: 'Esplora il nostro catalogo di gioielli in acciaio inox di alta qualità. Trova il pezzo perfetto tra portachiavi, collane, bracciali, anelli e orecchini.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Palette,
      title: 'Personalizza',
      description: 'Usa il nostro editor interattivo per aggiungere testi e simboli. Scegli font, dimensioni e posizionamento. Ogni dettaglio è sotto il tuo controllo.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Eye,
      title: 'Visualizza Anteprima',
      description: 'Guarda in tempo reale come apparirà il tuo gioiello personalizzato. Modifica e perfeziona fino a quando non sei completamente soddisfatto.',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Package,
      title: 'Ricevi a Casa',
      description: 'Completa l\'ordine e ricevi il tuo gioiello unico direttamente a casa. Produciamo in 24-48h e spediamo con corriere tracciato.',
      color: 'bg-green-100 text-green-600',
    },
  ];

  const faqs = [
    {
      question: 'Quanto tempo ci vuole per la produzione?',
      answer: 'La produzione richiede 24-48 ore lavorative. L\'incisione laser viene eseguita con precisione per garantire la massima qualità.',
    },
    {
      question: 'Quali materiali utilizzate?',
      answer: 'Utilizziamo principalmente acciaio inox 316L, noto per la sua durabilità e resistenza all\'ossidazione. Offriamo anche finiture placcate oro e oro rosa.',
    },
    {
      question: 'Posso vedere un\'anteprima prima di ordinare?',
      answer: 'Assolutamente! Il nostro editor ti mostra in tempo reale come apparirà il tuo gioiello con la personalizzazione scelta.',
    },
    {
      question: 'Come funziona l\'incisione laser?',
      answer: 'L\'incisione laser crea un design permanente sulla superficie del metallo. È precisa, duratura e resistente all\'usura nel tempo.',
    },
    {
      question: 'Offrite spedizione gratuita?',
      answer: 'Sì! La spedizione è gratuita per tutti gli ordini. Utilizziamo corriere espresso con tracciamento incluso.',
    },
    {
      question: 'Posso fare un reso?',
      answer: 'Poiché ogni prodotto è personalizzato e unico, i resi sono accettati solo in caso di difetti di produzione.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="bg-white border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 rounded-full text-[#c9a962] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Semplice & Veloce
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-6">
              Come Funziona
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creare un gioiello personalizzato non è mai stato così semplice. 
              Segui questi 4 semplici passaggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#c9a962] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}>
                  <h2 className="font-serif text-3xl font-bold text-[#2d2d2d] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a962]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto a Creare il Tuo Gioiello Unico?
            </h2>
            <Link
              href="/prodotti"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#c9a962] rounded-full font-bold text-lg hover:bg-[#faf9f7] transition-colors"
            >
              Inizia Ora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-[#2d2d2d] mb-4">
              Domande Frequenti
            </h2>
            <p className="text-gray-600">
              Tutto quello che devi sapere sui nostri gioielli personalizzati
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl border border-[#c9a962]/10 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-[#2d2d2d] text-lg">
                    {faq.question}
                  </h3>
                  <span className="text-[#c9a962] text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

