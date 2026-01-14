'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { FontOption } from '@/data/products';

interface FontSelectorProps {
  fonts: FontOption[];
  selectedFont: string;
  onSelect: (fontValue: string) => void;
  previewText?: string;
}

export default function FontSelector({ fonts, selectedFont, onSelect, previewText = 'Anteprima' }: FontSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedFontOption = fonts.find(f => f.value === selectedFont);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Selected Font Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-4 rounded-xl border-2 bg-white text-left flex items-center justify-between transition-all ${
          isOpen 
            ? 'border-[#c9a962] ring-2 ring-[#c9a962]/20' 
            : 'border-[#c9a962]/20 hover:border-[#c9a962]/50'
        }`}
      >
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400 mb-1">Font selezionato</p>
          <p 
            className="text-xl text-[#2d2d2d] truncate"
            style={{ fontFamily: selectedFont }}
          >
            {selectedFontOption?.name || 'Seleziona font'}
          </p>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-[#c9a962]/20 shadow-2xl overflow-hidden">
          {/* Search could be added here */}
          <div className="max-h-80 overflow-y-auto">
            {fonts.map((font) => (
              <button
                key={font.value}
                type="button"
                onClick={() => {
                  onSelect(font.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#f5f1eb] transition-colors border-b border-gray-100 last:border-b-0 ${
                  selectedFont === font.value ? 'bg-[#c9a962]/10' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-0.5">{font.name}</p>
                  <p 
                    className="text-lg text-[#2d2d2d] truncate"
                    style={{ fontFamily: font.value }}
                  >
                    {previewText || font.name}
                  </p>
                </div>
                {selectedFont === font.value && (
                  <Check className="w-5 h-5 text-[#c9a962] flex-shrink-0 ml-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

