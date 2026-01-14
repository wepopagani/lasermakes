'use client';

import Link from 'next/link';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { Sparkles, Package } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/prodotto/${product.id}`} className="block h-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#c9a962]/10 hover:border-[#c9a962]/30 flex flex-col h-full">
          {/* Image/Shape Display */}
          <div className="relative h-56 bg-gradient-to-br from-[#f5f1eb] to-[#faf9f7] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.1),transparent_70%)]" />
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 object-contain h-full w-full p-4 transform group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#2d2d2d]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="flex items-center gap-2 text-white font-medium px-6 py-3 bg-[#c9a962] rounded-full">
                <Sparkles className="w-4 h-4" />
                Personalizza Ora
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif text-xl font-semibold text-[#2d2d2d] group-hover:text-[#c9a962] transition-colors line-clamp-1">
                {product.name}
              </h3>
              <span className="text-[#c9a962] font-bold text-lg whitespace-nowrap">
                {product.price.toFixed(2)} CHF
              </span>
            </div>
            
            <p className="text-gray-500 text-sm line-clamp-2 mb-3 flex-1">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mt-auto">
              <span className="px-2 py-1 bg-[#f5f1eb] rounded-full">
                {product.material}
              </span>
              {product.piecesPerPack && product.piecesPerPack > 1 && (
                <span className="flex items-center gap-1 px-2 py-1 bg-[#f5f1eb] rounded-full">
                  <Package className="w-3 h-3" />
                  {product.piecesPerPack} pz
                </span>
              )}
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                {product.stock} in stock
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

