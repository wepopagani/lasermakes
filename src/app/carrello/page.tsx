'use client';

import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, Package } from 'lucide-react';
import Link from 'next/link';
import ProductShape from '@/components/ProductShape';
import { engravingSymbols, SymbolKey } from '@/components/EngravingSymbols';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <div className="w-24 h-24 bg-[#c9a962]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-[#c9a962]" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#2d2d2d] mb-4">
            Il tuo carrello è vuoto
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Inizia a personalizzare i tuoi gioielli unici! Esplora il nostro catalogo e crea qualcosa di speciale.
          </p>
          <Link
            href="/prodotti"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a962] text-white rounded-full font-semibold hover:bg-[#9a7b3c] transition-colors"
          >
            Esplora i Prodotti
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link
            href="/prodotti"
            className="inline-flex items-center gap-2 text-[#2d2d2d] hover:text-[#c9a962] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Continua lo shopping
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2d2d]">
            Il Tuo Carrello
          </h1>
          <p className="text-gray-600 mt-2">
            {items.length} {items.length === 1 ? 'articolo' : 'articoli'} nel carrello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#c9a962]/10 flex gap-6"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#f5f1eb] to-[#faf9f7] rounded-xl flex items-center justify-center flex-shrink-0">
                  <ProductShape shape={item.product.shape} size={60} />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2d2d2d]">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.product.material}
                      </p>
                    </div>
                    <span className="text-[#c9a962] font-bold text-lg whitespace-nowrap">
                      {(item.product.price * item.quantity).toFixed(2)} CHF
                    </span>
                  </div>

                  {/* Customization Info */}
                  {(item.customization.texts.length > 0 || item.customization.symbols.length > 0) && (
                    <div className="mt-3 p-3 bg-[#f5f1eb] rounded-lg">
                      <p className="text-sm text-gray-600 font-medium mb-2">Personalizzazione:</p>
                      
                      {/* Front */}
                      {(item.customization.texts.filter(t => t.side === 'front').length > 0 || 
                        item.customization.symbols.filter(s => s.side === 'front').length > 0) && (
                        <div className="mb-2">
                          <span className="text-xs font-bold text-[#c9a962] uppercase">Fronte:</span>
                          <div className="flex flex-wrap gap-2 items-center mt-1">
                            {item.customization.texts.filter(t => t.side === 'front').map((t) => (
                              <span key={t.id} className="text-sm bg-white px-2 py-1 rounded" style={{ fontFamily: t.fontFamily }}>
                                &quot;{t.text}&quot;
                              </span>
                            ))}
                            {item.customization.symbols.filter(s => s.side === 'front').map((s) => (
                              <div key={s.id} className="w-6 h-6 bg-white rounded p-1">
                                {engravingSymbols[s.symbolKey as SymbolKey]}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Back */}
                      {(item.customization.texts.filter(t => t.side === 'back').length > 0 || 
                        item.customization.symbols.filter(s => s.side === 'back').length > 0) && (
                        <div>
                          <span className="text-xs font-bold text-[#2d2d2d] uppercase">Retro:</span>
                          <div className="flex flex-wrap gap-2 items-center mt-1">
                            {item.customization.texts.filter(t => t.side === 'back').map((t) => (
                              <span key={t.id} className="text-sm bg-white px-2 py-1 rounded" style={{ fontFamily: t.fontFamily }}>
                                &quot;{t.text}&quot;
                              </span>
                            ))}
                            {item.customization.symbols.filter(s => s.side === 'back').map((s) => (
                              <div key={s.id} className="w-6 h-6 bg-white rounded p-1">
                                {engravingSymbols[s.symbolKey as SymbolKey]}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quantity & Delete */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 rounded-lg border border-[#c9a962]/20 hover:bg-[#f5f1eb] transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-[#2d2d2d] w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 rounded-lg border border-[#c9a962]/20 hover:bg-[#f5f1eb] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Rimuovi
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-gray-500 hover:text-red-500 transition-colors text-sm"
            >
              Svuota il carrello
            </button>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 border border-[#c9a962]/10 sticky top-28">
              <h2 className="font-serif text-2xl font-bold text-[#2d2d2d] mb-6">
                Riepilogo Ordine
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotale</span>
                  <span>{totalPrice.toFixed(2)} CHF</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Spedizione</span>
                  <span className="text-green-600">Gratuita</span>
                </div>
                <div className="border-t border-[#c9a962]/20 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#2d2d2d]">Totale</span>
                    <span className="font-bold text-2xl text-[#c9a962]">
                      {totalPrice.toFixed(2)} CHF
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">IVA inclusa</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#c9a962] text-white rounded-xl font-bold text-lg hover:bg-[#9a7b3c] transition-colors mb-4">
                <Package className="w-5 h-5" />
                Procedi al Checkout
              </button>

              <p className="text-center text-sm text-gray-500">
                Pagamento sicuro con carta o PayPal
              </p>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-[#c9a962]/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="text-2xl">🔒</span>
                    <p className="text-xs text-gray-500 mt-1">Pagamento sicuro</p>
                  </div>
                  <div>
                    <span className="text-2xl">🚚</span>
                    <p className="text-xs text-gray-500 mt-1">Spedizione gratuita</p>
                  </div>
                  <div>
                    <span className="text-2xl">↩️</span>
                    <p className="text-xs text-gray-500 mt-1">Reso facile</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
