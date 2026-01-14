'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ProductCategory } from '@/types';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('categoria') as ProductCategory | null;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(categoryParam);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setPriceRange([0, 50]);
  };

  const hasActiveFilters = searchQuery || selectedCategory || priceRange[0] > 0 || priceRange[1] < 50;

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <section className="bg-white border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              I Nostri Prodotti
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Scegli il gioiello perfetto e personalizzalo con la tua incisione unica
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca prodotti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none transition-all bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                showFilters ? 'bg-[#c9a962] text-white border-[#c9a962]' : 'border-[#c9a962]/30 hover:border-[#c9a962]'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtri
            </button>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.id ? null : category.id as ProductCategory
                  )}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#c9a962] text-white'
                      : 'bg-white border border-[#c9a962]/20 hover:border-[#c9a962]/50 text-[#2d2d2d]'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-[#c9a962] hover:text-[#9a7b3c] text-sm font-medium"
            >
              <X className="w-4 h-4" />
              Cancella filtri
            </button>
          )}
        </div>

        {/* Price Filter */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-2xl p-6 mb-8 border border-[#c9a962]/10"
          >
            <h3 className="font-semibold text-[#2d2d2d] mb-4">Fascia di prezzo</h3>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1 accent-[#c9a962]"
              />
              <span className="text-sm text-gray-600 w-24">{priceRange[0]} - {priceRange[1]} CHF</span>
              <input
                type="range"
                min="0"
                max="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 accent-[#c9a962]"
              />
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'prodotto trovato' : 'prodotti trovati'}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              Nessun prodotto trovato con i filtri selezionati
            </p>
            <button
              onClick={clearFilters}
              className="text-[#c9a962] font-medium hover:underline"
            >
              Cancella i filtri e mostra tutti i prodotti
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#c9a962] border-t-transparent rounded-full" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

