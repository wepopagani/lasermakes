'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'laser@3dmakes.ch',
      description: 'Rispondiamo entro 24 ore',
    },
    {
      icon: Phone,
      title: 'Telefono',
      value: '+41 76 266 03 96',
      description: 'Tutti i giorni 9:30-18:30',
    },
    {
      icon: MapPin,
      title: 'Indirizzo',
      value: 'Via Cantonale 15, 6918 Figino',
      description: 'Ticino, Svizzera',
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
              <MessageCircle className="w-4 h-4" />
              Siamo Qui Per Te
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-6">
              Contattaci
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hai domande? Siamo a tua disposizione. Scrivici e ti risponderemo il prima possibile.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-[#2d2d2d] mb-8">
                Informazioni di Contatto
              </h2>

              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-[#c9a962]/10"
                >
                  <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d2d2d]">{item.title}</h3>
                    <p className="text-[#c9a962] font-medium">{item.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Hours */}
              <div className="p-6 bg-[#2d2d2d] rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#c9a962]" />
                  <h3 className="font-semibold">Orari di Apertura</h3>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Lunedì - Sabato</span>
                    <span>9:30 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#c9a962]/10">
                <h2 className="font-serif text-2xl font-bold text-[#2d2d2d] mb-8">
                  Inviaci un Messaggio
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#2d2d2d] mb-4">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Grazie per averci contattato. Ti risponderemo al più presto.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#c9a962] font-medium hover:underline"
                    >
                      Invia un altro messaggio
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2d2d2d] mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2d2d2d] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none"
                          placeholder="tua@email.it"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2d2d2d] mb-2">
                        Oggetto *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none"
                        placeholder="Di cosa vuoi parlarci?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2d2d2d] mb-2">
                        Messaggio *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none resize-none"
                        placeholder="Scrivi qui il tuo messaggio..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-[#c9a962] text-white rounded-xl font-bold text-lg hover:bg-[#9a7b3c] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Invia Messaggio
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

