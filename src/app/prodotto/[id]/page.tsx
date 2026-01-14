'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Check, Truck, Shield, RotateCcw, Package, X } from 'lucide-react';
import { products } from '@/data/products';
import { ColorVariant } from '@/types';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = products.find(p => p.id === params.id);
  
  const hasVariants = product?.variants && product.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState<ColorVariant | null>(
    hasVariants ? product!.variants![0] : null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Close fullscreen on Escape key & prevent body scroll when modal is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsImageFullscreen(false);
    };
    window.addEventListener('keydown', handleEscape);
    
    // Prevent body scroll when modal is open
    if (isImageFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isImageFullscreen]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[#2d2d2d] mb-4">
            Prodotto non trovato
          </h1>
          <Link href="/prodotti" className="text-[#c9a962] hover:underline">
            Torna ai prodotti
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    { icon: Truck, text: 'Spedizione in 24-48h' },
    { icon: Shield, text: 'Garanzia 2 anni' },
    { icon: RotateCcw, text: 'Reso gratuito' },
  ];

  const currentStock = hasVariants ? selectedVariant?.stock || 0 : product.stock;
  const isOutOfStock = currentStock === 0;

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#2d2d2d] hover:text-[#c9a962] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna indietro
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-12 border border-[#c9a962]/10"
          >
            {/* Main Image */}
            <div 
              onClick={() => setIsImageFullscreen(true)}
              className="relative aspect-square flex items-center justify-center rounded-2xl transition-colors duration-300 mb-4 cursor-zoom-in group"
              style={{
                background: hasVariants && selectedVariant 
                  ? `linear-gradient(135deg, ${selectedVariant.colorCode}20 0%, ${selectedVariant.colorCode}10 100%)`
                  : 'linear-gradient(to bottom right, #f5f1eb, #faf9f7)'
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.15),transparent_70%)]" />
              <img
                src={hasVariants && selectedVariant ? selectedVariant.images[selectedImageIndex] : product.image}
                alt={product.name}
                className="relative z-10 object-contain h-full w-full p-8 transition-transform group-hover:scale-105"
              />
              {/* Zoom icon hint */}
              <div className="absolute top-4 right-4 bg-white/80 px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <span className="text-sm font-medium text-gray-700">🔍 Clicca per ingrandire</span>
              </div>
              
              {/* Color preview overlay */}
              {hasVariants && selectedVariant && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full z-20">
                  <div 
                    className="w-5 h-5 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: selectedVariant.colorCode }}
                  />
                  <span className="text-sm font-medium text-gray-700">{selectedVariant.name}</span>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {hasVariants && selectedVariant && selectedVariant.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {selectedVariant.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    onDoubleClick={() => setIsImageFullscreen(true)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      selectedImageIndex === index
                        ? 'border-[#c9a962] ring-2 ring-[#c9a962]/30'
                        : 'border-gray-200 hover:border-[#c9a962]/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - Vista ${index + 1}`}
                      className="w-full h-full object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Category Badge */}
            <span className="inline-flex items-center self-start px-3 py-1 bg-[#c9a962]/10 rounded-full text-[#c9a962] text-sm font-medium mb-4 capitalize">
              {product.category}
            </span>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-[#c9a962]">
                {product.price.toFixed(2)} CHF
              </span>
              <span className="text-gray-400 text-sm">IVA inclusa</span>
            </div>

            {/* Color Variants Selector */}
            {hasVariants && (
              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#2d2d2d] mb-3">
                  Scegli il Colore:
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants!.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setSelectedImageIndex(0); // Reset to first image when changing variant
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
                        selectedVariant?.id === variant.id
                          ? 'border-[#c9a962] bg-[#c9a962]/5 shadow-md'
                          : 'border-gray-200 hover:border-[#c9a962]/50'
                      } ${variant.stock === 0 ? 'opacity-50' : ''}`}
                      disabled={variant.stock === 0}
                    >
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: variant.colorCode }}
                      />
                      <div className="text-left">
                        <span className="block text-sm font-medium text-[#2d2d2d]">
                          {variant.name}
                        </span>
                        <span className={`text-xs ${variant.stock <= 2 ? 'text-orange-500' : 'text-gray-400'}`}>
                          {variant.stock === 0 ? 'Esaurito' : `${variant.stock} disponibili`}
                        </span>
                      </div>
                      {selectedVariant?.id === variant.id && (
                        <Check className="w-5 h-5 text-[#c9a962] ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#c9a962]" />
                <span className="text-[#2d2d2d]">
                  <strong>Materiale:</strong> {product.material}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#c9a962]" />
                <span className="text-[#2d2d2d]">
                  <strong>Dimensioni:</strong> {product.dimensions.width} x {product.dimensions.height} mm
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#c9a962]" />
                <span className="text-[#2d2d2d]">
                  <strong>
                    {product.category === 'portachiavi' ? 'Portachiavi:' : 
                     product.category === 'collane' || product.category === 'bracciali' ? 'Catena:' : 
                     'Dimensioni complessive:'}
                  </strong> {
                    product.category === 'portachiavi' ? '30 mm' :
                    product.category === 'collane' || product.category === 'bracciali' ? '50 cm' :
                    'Vedi descrizione'
                  }
                </span>
              </div>
              {!hasVariants && (
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#c9a962]" />
                  <span className="text-[#2d2d2d]">
                    <strong>Colori disponibili:</strong> {product.colors.join(', ')}
                  </span>
                </div>
              )}
              {product.piecesPerPack && product.piecesPerPack > 1 && (
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#c9a962]" />
                  <span className="text-[#2d2d2d]">
                    <strong>Confezione:</strong> {product.piecesPerPack} pezzi
                  </span>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/personalizza/${product.id}${selectedVariant ? `?colore=${selectedVariant.id}` : ''}`}
              className={`inline-flex items-center justify-center gap-3 w-full py-5 rounded-full font-bold text-lg transition-colors shadow-lg mb-8 ${
                isOutOfStock 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                  : 'bg-[#c9a962] text-white hover:bg-[#9a7b3c] shadow-[#c9a962]/30'
              }`}
              onClick={(e) => isOutOfStock && e.preventDefault()}
            >
              <Sparkles className="w-6 h-6" />
              {isOutOfStock ? 'Non Disponibile' : 'Personalizza Ora'}
            </Link>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl border border-[#c9a962]/10">
                  <feature.icon className="w-6 h-6 text-[#c9a962] mx-auto mb-2" />
                  <span className="text-xs text-gray-600">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-[#c9a962]/10"
        >
          <h2 className="font-serif text-3xl font-bold text-[#2d2d2d] text-center mb-10">
            Come Funziona la Personalizzazione
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Scegli il prodotto', desc: 'Seleziona il gioiello che preferisci' },
              { step: 2, title: 'Personalizza', desc: 'Aggiungi testo e simboli' },
              { step: 3, title: 'Anteprima', desc: 'Visualizza il risultato finale' },
              { step: 4, title: 'Ordina', desc: 'Completa l\'acquisto e ricevi a casa' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a962] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isImageFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageFullscreen(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsImageFullscreen(false)}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Fullscreen Image */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={hasVariants && selectedVariant ? selectedVariant.images[selectedImageIndex] : product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Navigation */}
            {hasVariants && selectedVariant && selectedVariant.images.length > 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedVariant.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      selectedImageIndex === index
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 text-white/75 text-sm">
              Premi ESC o clicca fuori per chiudere
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
