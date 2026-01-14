import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo-white.svg?v=3" 
                alt="LaserCraft" 
                className="h-9 w-auto transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Gioielli unici personalizzati con incisione laser. Ogni pezzo racconta la tua storia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#c9a962]">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {['Home', 'Prodotti', 'Come Funziona', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#c9a962] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#c9a962]">
              Categorie
            </h4>
            <ul className="space-y-3">
              {['Collane', 'Portachiavi', 'Bracciali', 'Accessori'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/prodotti?categoria=${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#c9a962] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#c9a962]">
              Contatti
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#c9a962]" />
                laser@3dmakes.ch
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#c9a962]" />
                +41 76 266 03 96
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#c9a962]" />
                Via Cantonale 15, 6918 Figino
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 LaserCraft. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

