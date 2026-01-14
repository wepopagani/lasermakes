'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gem, Truck, Heart, Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  // Prodotti in evidenza selezionati
  const featuredProducts = products.filter(p => 
    p.id === 'col-heart-01' || // Collana Cuore
    p.id === 'col-lock-silver-01' || // Collana Lucchetto Argento
    p.id === 'pk-heart-key-set-01' // Portachiavi Cuore e Chiave
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(201,169,98,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#c9a962] rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a962]/10 rounded-full text-[#c9a962] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Incisione Laser Personalizzata
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#2d2d2d] mb-6 leading-tight">
              Crea Gioielli
              <br />
              <span className="text-[#c9a962]">Unici</span> come Te
          </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Personalizza portachiavi, collane, anelli e tanto altro con la tua incisione laser. 
              Ogni pezzo racconta la tua storia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prodotti"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a962] text-white rounded-full font-semibold text-lg hover:bg-[#9a7b3c] transition-colors shadow-lg shadow-[#c9a962]/30"
              >
                Esplora i Prodotti
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/come-funziona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#c9a962] text-[#c9a962] rounded-full font-semibold text-lg hover:bg-[#c9a962]/10 transition-colors"
              >
                Come Funziona
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gem,
                title: 'Qualità Premium',
                description: 'Materiali di alta qualità e incisione laser di precisione per risultati impeccabili.',
              },
              {
                icon: Heart,
                title: 'Personalizzazione Totale',
                description: 'Scegli font, simboli e posizionamento. Ogni dettaglio è sotto il tuo controllo.',
              },
              {
                icon: Truck,
                title: 'Spedizione Veloce',
                description: 'Produzione in 24-48h e spedizione tracciata in tutta Italia.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-[#faf9f7] hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c9a962]/10 mb-6">
                  <feature.icon className="w-8 h-8 text-[#c9a962]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2d2d2d] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              I Nostri Modelli
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Scorri per scoprire tutti i nostri gioielli personalizzabili
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/prodotto/${product.id}`}
                      className="block w-80 h-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#c9a962]/10 hover:border-[#c9a962]/30 group"
                    >
                      <div className="relative h-full bg-gradient-to-br from-[#f5f1eb] to-[#faf9f7] overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.1),transparent_70%)]" />
                        <img
                          src={product.image}
                          alt={product.name}
                          className="relative z-10 object-contain h-full w-full p-8 transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#2d2d2d]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-2 text-white font-medium px-6 py-3 bg-[#c9a962] rounded-full">
                            <Sparkles className="w-4 h-4" />
                            Personalizza
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Scroll Hint */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                ← Scorri per vedere tutti i modelli →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
                Prodotti Scontati
              </h2>
              <p className="text-gray-600 text-lg">
                I nostri bestseller più amati
              </p>
            </div>
            <Link
              href="/prodotti"
              className="hidden md:inline-flex items-center gap-2 text-[#c9a962] font-medium hover:gap-3 transition-all"
            >
              Vedi Tutti
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              href="/prodotti"
              className="inline-flex items-center gap-2 text-[#c9a962] font-medium"
            >
              Vedi Tutti i Prodotti
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Cosa Dicono i Clienti
            </h2>
            <p className="text-gray-400 text-lg">
              Recensioni verificate dei nostri clienti soddisfatti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria R.',
                text: 'Ho regalato un bracciale inciso a mia figlia per il suo compleanno. La qualità è eccellente e il servizio clienti impeccabile!',
                rating: 5,
              },
              {
                name: 'Giuseppe L.',
                text: 'L\'editor di personalizzazione è fantastico! Ho potuto vedere esattamente come sarebbe venuto il mio portachiavi prima di ordinarlo.',
                rating: 5,
              },
              {
                name: 'Anna M.',
                text: 'Spedizione velocissima e prodotto perfetto. Il ciondolo con le nostre iniziali è diventato il mio gioiello preferito.',
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#3d3d3d] p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <p className="text-[#c9a962] font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#c9a962] to-[#9a7b3c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto a Creare il Tuo Gioiello?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Inizia subito a personalizzare. Il processo è semplice, veloce e divertente!
            </p>
            <Link
              href="/prodotti"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#c9a962] rounded-full font-bold text-lg hover:bg-[#faf9f7] transition-colors shadow-xl"
            >
              Inizia a Personalizzare
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
