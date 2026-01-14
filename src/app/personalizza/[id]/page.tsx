'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Type, 
  Sparkles, 
  Plus, 
  Trash2, 
  ShoppingCart,
  Check,
  Minus,
  PenTool,
  AlignLeft,
  Palette,
  FlipHorizontal,
  MoveHorizontal,
  MoveVertical
} from 'lucide-react';
import { products, fonts, FontCategory, metalFinishes, MetalFinish } from '@/data/products';
import { TextElement, SymbolElement, Customization, JewelrySide } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import FontSelector from '@/components/FontSelector';
import { engravingSymbols, symbolCategoriesSVG, SymbolKey } from '@/components/EngravingSymbols';

export default function CustomizePage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const product = products.find(p => p.id === params.id);
  
  const [texts, setTexts] = useState<TextElement[]>([]);
  const [symbolElements, setSymbolElements] = useState<SymbolElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'symbols'>('text');
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState<MetalFinish>('silver');
  const [activeSymbolCategory, setActiveSymbolCategory] = useState(0);
  const [currentSide, setCurrentSide] = useState<JewelrySide>('front');
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentCircle, setCurrentCircle] = useState<number>(1); // Per triple-circle: 1, 2, o 3
  const [isAligned, setIsAligned] = useState<boolean>(false); // Allineamento verticale dei cerchi
  
  // Handle alignment change - move elements with circles
  useEffect(() => {
    if (product.shape !== 'triple-circle') return;
    
    // Calculate position offsets for each circle
    const getCircleOffset = (circleIndex: number) => {
      if (isAligned) {
        // Overlapped alignment: all circles at same position (center), stacked by z-index
        return { x: 50, y: 50 }; // tutti al centro
      } else {
        // Horizontal alignment (default)
        switch(circleIndex) {
          case 1: return { x: 20, y: 46 }; // small circle left
          case 2: return { x: 50, y: 48 }; // medium circle center
          case 3: return { x: 80, y: 50 }; // large circle right
          default: return { x: 50, y: 50 };
        }
      }
    };
    
    // Update all text elements
    setTexts(prevTexts => prevTexts.map(text => {
      if (!text.circleIndex) return text;
      const circlePos = getCircleOffset(text.circleIndex);
      return { ...text, x: circlePos.x, y: circlePos.y };
    }));
    
    // Update all symbol elements
    setSymbolElements(prevSymbols => prevSymbols.map(symbol => {
      if (!symbol.circleIndex) return symbol;
      const circlePos = getCircleOffset(symbol.circleIndex);
      return { ...symbol, x: circlePos.x, y: circlePos.y };
    }));
  }, [isAligned, product.shape]);
  
  // For new text input
  const [newText, setNewText] = useState('');
  const [fontCategory, setFontCategory] = useState<FontCategory>('standard');
  const [selectedFont, setSelectedFont] = useState(fonts.find(f => f.category === 'standard')?.value || fonts[0].value);
  const [fontSize, setFontSize] = useState(18);

  // Filter fonts by category
  const filteredFonts = useMemo(() => {
    return fonts.filter(f => f.category === fontCategory);
  }, [fontCategory]);

  // Filter elements by current side
  const currentSideTexts = useMemo(() => {
    const filtered = texts.filter(t => t.side === currentSide);
    // Per triple-circle, filtra anche per circleIndex
    if (product.shape === 'triple-circle') {
      return filtered.filter(t => t.circleIndex === currentCircle);
    }
    return filtered;
  }, [texts, currentSide, currentCircle, product.shape]);

  const currentSideSymbols = useMemo(() => {
    const filtered = symbolElements.filter(s => s.side === currentSide);
    // Per triple-circle, filtra anche per circleIndex
    if (product.shape === 'triple-circle') {
      return filtered.filter(s => s.circleIndex === currentCircle);
    }
    return filtered;
  }, [symbolElements, currentSide, currentCircle, product.shape]);
  
  // Count elements per side
  const frontCount = texts.filter(t => t.side === 'front').length + symbolElements.filter(s => s.side === 'front').length;
  const backCount = texts.filter(t => t.side === 'back').length + symbolElements.filter(s => s.side === 'back').length;

  const currentMetal = metalFinishes.find(m => m.id === selectedMetal) || metalFinishes[0];

  // Handle flip
  const handleFlip = () => {
    setIsFlipping(true);
    setSelectedElement(null);
    setTimeout(() => {
      setCurrentSide(prev => prev === 'front' ? 'back' : 'front');
      setTimeout(() => {
        setIsFlipping(false);
      }, 300);
    }, 300);
  };

  // Update selected font when category changes
  const handleCategoryChange = (category: FontCategory) => {
    setFontCategory(category);
    const firstFontInCategory = fonts.find(f => f.category === category);
    if (firstFontInCategory) {
      setSelectedFont(firstFontInCategory.value);
    }
  };

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

  const addText = () => {
    if (!newText.trim()) return;
    
    const newTextElement: TextElement = {
      id: `text-${Date.now()}`,
      text: newText,
      x: 50,
      y: 50,
      fontSize: fontSize,
      fontFamily: selectedFont,
      fill: '#2d2d2d',
      rotation: 0,
      side: currentSide,
      curvature: 0,
      ...(product.shape === 'triple-circle' && { circleIndex: currentCircle })
    };
    
    setTexts([...texts, newTextElement]);
    setNewText('');
    setSelectedElement(newTextElement.id);
  };

  const addSymbol = (symbolKey: SymbolKey, symbolName: string) => {
    const newSymbol: SymbolElement = {
      id: `symbol-${Date.now()}`,
      symbolKey: symbolKey,
      symbolName: symbolName,
      x: 50,
      y: 50,
      size: 32,
      fill: '#2d2d2d',
      rotation: 0,
      side: currentSide,
      ...(product.shape === 'triple-circle' && { circleIndex: currentCircle })
    };
    
    setSymbolElements([...symbolElements, newSymbol]);
    setSelectedElement(newSymbol.id);
  };

  const updateTextElement = (id: string, updates: Partial<TextElement>) => {
    setTexts(texts.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const updateSymbolElement = (id: string, updates: Partial<SymbolElement>) => {
    setSymbolElements(symbolElements.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteElement = (id: string) => {
    setTexts(texts.filter(t => t.id !== id));
    setSymbolElements(symbolElements.filter(s => s.id !== id));
    setSelectedElement(null);
  };

  const selectedTextElement = texts.find(t => t.id === selectedElement);
  const selectedSymbolElement = symbolElements.find(s => s.id === selectedElement);

  // Calculate if there are engravings on the back
  const backEngravingsCount = texts.filter(t => t.side === 'back').length + symbolElements.filter(s => s.side === 'back').length;
  const backEngravingCost = backEngravingsCount > 0 ? 5.00 : 0;
  
  const totalPrice = product.price + currentMetal.price + backEngravingCost;

  const handleAddToCart = () => {
    const customization: Customization = {
      texts,
      symbols: symbolElements
    };
    
    addItem(product, customization);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      router.push('/carrello');
    }, 1500);
  };

  const getShapeSVG = () => {
    const gradientId = `metalGrad-${selectedMetal}`;
    const metal = currentMetal;
    
    const getGradientStops = () => {
      if (selectedMetal === 'silver') {
        return (
          <>
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="30%" stopColor="#b8b8b8" />
            <stop offset="50%" stopColor="#f5f5f5" />
            <stop offset="70%" stopColor="#c0c0c0" />
            <stop offset="100%" stopColor="#a0a0a0" />
          </>
        );
      } else if (selectedMetal === 'gold') {
        return (
          <>
            <stop offset="0%" stopColor="#f5e6a3" />
            <stop offset="30%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fff8dc" />
            <stop offset="70%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b8860b" />
          </>
        );
      } else {
        return (
          <>
            <stop offset="0%" stopColor="#f4c4c4" />
            <stop offset="30%" stopColor="#e8a0a0" />
            <stop offset="50%" stopColor="#fce4e4" />
            <stop offset="70%" stopColor="#d4a0a0" />
            <stop offset="100%" stopColor="#c48080" />
          </>
        );
      }
    };

    const renderShape = () => {
      switch (product.shape) {
        case 'heart':
          return (
            <path
              d="M50 88C50 88 10 60 10 35C10 20 22 10 35 10C42 10 48 14 50 18C52 14 58 10 65 10C78 10 90 20 90 35C90 60 50 88 50 88Z"
              fill={`url(#${gradientId})`}
              stroke={metal.stroke}
              strokeWidth="1"
            />
          );
        case 'circle':
          return (
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
        case 'rectangle':
          return (
            <rect 
              x="5" 
              y="20" 
              width="90" 
              height="60" 
              rx="8" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
        case 'oval':
          return (
            <ellipse 
              cx="50" 
              cy="50" 
              rx="45" 
              ry="35" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
        case 'lock':
          return (
            <g>
              {/* Shackle */}
              <path
                d="M30 45 L30 30 C30 18 40 10 50 10 C60 10 70 18 70 30 L70 45"
                fill="none"
                stroke={metal.stroke}
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Body */}
              <rect 
                x="20" 
                y="42" 
                width="60" 
                height="48" 
                rx="6" 
                fill={`url(#${gradientId})`} 
                stroke={metal.stroke} 
                strokeWidth="1" 
              />
            </g>
          );
        case 'envelope':
          return (
            <rect 
              x="10" 
              y="25" 
              width="80" 
              height="55" 
              rx="4" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
        case 'bar':
          return (
            <rect 
              x="40" 
              y="8" 
              width="20" 
              height="84" 
              rx="4" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
        case 'paw':
          return (
            <g>
              {/* Main pad */}
              <ellipse 
                cx="50" 
                cy="62" 
                rx="25" 
                ry="22" 
                fill={`url(#${gradientId})`} 
                stroke={metal.stroke} 
                strokeWidth="1" 
              />
              {/* Toe pads */}
              <ellipse cx="28" cy="35" rx="10" ry="12" fill={`url(#${gradientId})`} stroke={metal.stroke} strokeWidth="1" />
              <ellipse cx="72" cy="35" rx="10" ry="12" fill={`url(#${gradientId})`} stroke={metal.stroke} strokeWidth="1" />
              <ellipse cx="40" cy="22" rx="9" ry="11" fill={`url(#${gradientId})`} stroke={metal.stroke} strokeWidth="1" />
              <ellipse cx="60" cy="22" rx="9" ry="11" fill={`url(#${gradientId})`} stroke={metal.stroke} strokeWidth="1" />
            </g>
          );
        case 'wallet':
          return (
            <g>
              {/* Main wallet body */}
              <rect
                x="15"
                y="15"
                width="70"
                height="70"
                rx="10"
                fill={`url(#${gradientId})`}
                stroke={metal.stroke}
                strokeWidth="1"
              />
              {/* Card slot top */}
              <rect
                x="20"
                y="20"
                width="60"
                height="25"
                rx="5"
                fill={`url(#${gradientId})`}
                stroke={metal.stroke}
                strokeWidth="0.5"
                opacity="0.7"
              />
              {/* Card slot notch */}
              <path
                d="M40 85 Q50 78 60 85"
                fill="none"
                stroke={metal.stroke}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          );
        case 'star':
          return (
            <path
              d="M50 5 L61 35 L95 35 L68 55 L79 90 L50 70 L21 90 L32 55 L5 35 L39 35 Z"
              fill={`url(#${gradientId})`}
              stroke={metal.stroke}
              strokeWidth="1" 
            />
          );
        case 'triple-circle':
          // Posizioni dinamiche basate su allineamento
          // Quando allineato: tutti sovrapposti al centro
          const circle1Pos = isAligned ? { cx: 50, cy: 50 } : { cx: 20, cy: 46 };
          const circle2Pos = isAligned ? { cx: 50, cy: 50 } : { cx: 50, cy: 48 };
          const circle3Pos = isAligned ? { cx: 50, cy: 50 } : { cx: 80, cy: 50 };
          
          // Ordine di rendering dipende dallo stato di allineamento
          if (isAligned) {
            // ALLINEATI (sovrapposti): grande → medio → piccolo
            return (
              <g style={{ transition: 'all 0.5s ease-in-out' }}>
                {/* Circle 3 (grande) - SOTTO */}
                <circle
                  cx={circle3Pos.cx}
                  cy={circle3Pos.cy}
                  r="18"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 3 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 3 ? "2" : "1"}
                  opacity={currentCircle === 3 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'default'
                  }}
                />
                {/* Circle 2 (medio) - MEZZO */}
                <circle
                  cx={circle2Pos.cx}
                  cy={circle2Pos.cy}
                  r="16"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 2 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 2 ? "2" : "1"}
                  opacity={currentCircle === 2 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'default'
                  }}
                />
                {/* Circle 1 (piccolo) - SOPRA */}
                <circle
                  cx={circle1Pos.cx}
                  cy={circle1Pos.cy}
                  r="14"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 1 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 1 ? "2" : "1"}
                  opacity={currentCircle === 1 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'default'
                  }}
                />
              </g>
            );
          } else {
            // SEPARATI (orizzontale): sinistra → centro → destra
            return (
              <g style={{ transition: 'all 0.5s ease-in-out' }}>
                {/* Circle 1 (sinistra, piccolo) - PRIMO (sotto) */}
                <circle
                  cx={circle1Pos.cx}
                  cy={circle1Pos.cy}
                  r="14"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 1 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 1 ? "2" : "1"}
                  opacity={currentCircle === 1 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentCircle(1);
                  }}
                />
                {/* Circle 2 (centro, medio) - SECONDO (mezzo) */}
                <circle
                  cx={circle2Pos.cx}
                  cy={circle2Pos.cy}
                  r="16"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 2 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 2 ? "2" : "1"}
                  opacity={currentCircle === 2 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentCircle(2);
                  }}
                />
                {/* Circle 3 (destra, grande) - TERZO (sopra) */}
                <circle
                  cx={circle3Pos.cx}
                  cy={circle3Pos.cy}
                  r="18"
                  fill={`url(#${gradientId})`}
                  stroke={currentCircle === 3 ? '#c9a962' : metal.stroke}
                  strokeWidth={currentCircle === 3 ? "2" : "1"}
                  opacity={currentCircle === 3 ? "1" : "0.5"}
                  style={{ 
                    transition: 'all 0.5s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentCircle(3);
                  }}
                />
              </g>
            );
          }
        default:
          return (
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill={`url(#${gradientId})`} 
              stroke={metal.stroke} 
              strokeWidth="1" 
            />
          );
      }
    };

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            {getGradientStops()}
          </linearGradient>
        </defs>
        {renderShape()}
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Success Overlay */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2d2d2d] mb-2">
              Aggiunto al Carrello!
            </h3>
            <p className="text-gray-600">Reindirizzamento...</p>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#2d2d2d] hover:text-[#c9a962] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Indietro
          </button>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#2d2d2d]">
            Personalizza: {product.name}
          </h1>
          <div className="w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Canvas Area */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-[#c9a962]/10 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-semibold text-[#2d2d2d]">
                Anteprima
              </h2>
            </div>

            {/* Flip Button & Side Indicator */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFlip}
                  disabled={isFlipping}
                  className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] text-white rounded-xl hover:bg-[#1a1a1a] transition-colors disabled:opacity-50"
                >
                  <FlipHorizontal className="w-5 h-5" />
                  Gira
                </button>
                <div className="flex rounded-xl overflow-hidden border border-[#c9a962]/20">
                  <button
                    onClick={() => !isFlipping && setCurrentSide('front')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      currentSide === 'front'
                        ? 'bg-[#c9a962] text-white'
                        : 'bg-white text-gray-600 hover:bg-[#f5f1eb]'
                    }`}
                  >
                    Fronte {frontCount > 0 && `(${frontCount})`}
                  </button>
                  <button
                    onClick={() => !isFlipping && setCurrentSide('back')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      currentSide === 'back'
                        ? 'bg-[#c9a962] text-white'
                        : 'bg-white text-gray-600 hover:bg-[#f5f1eb]'
                    }`}
                  >
                    Retro {backCount > 0 && `(${backCount})`}
                  </button>
                </div>
              </div>
            </div>

            {/* Triple Circle Controls (solo per triple-circle) */}
            {product.shape === 'triple-circle' && (
              <div className="mb-6 space-y-4">
                {/* Circle selector quando SEPARATI */}
                {!isAligned && (
                  <div>
                    <label className="text-sm text-gray-600 block mb-2 flex items-center gap-2">
                      <span className="text-lg">⭕</span>
                      Scegli il Cerchio da Personalizzare
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((num) => {
                        const circleCount = [...texts, ...symbolElements].filter(
                          el => el.side === currentSide && el.circleIndex === num
                        ).length;
                        return (
                          <button
                            key={num}
                            onClick={() => setCurrentCircle(num)}
                            className={`py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                              currentCircle === num
                                ? 'bg-[#c9a962] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            Cerchio {num} {circleCount > 0 && `(${circleCount})`}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Nessun selector quando SOVRAPPOSTI - solo il bottone per separare */}

                {/* Alignment Button */}
                <button
                  onClick={() => setIsAligned(!isAligned)}
                  className={`w-full px-6 py-4 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isAligned
                      ? 'bg-[#c9a962] text-white shadow-lg hover:bg-[#9a7b3c]'
                      : 'bg-white text-gray-700 border-2 border-[#c9a962]/30 hover:bg-[#f5f1eb]'
                  }`}
                >
                  <span className="text-xl">{isAligned ? '↔️' : '⊕'}</span>
                  {isAligned ? 'Separa Cerchi' : 'Sovrapponi Cerchi'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  {isAligned 
                    ? 'Cerchi sovrapposti al centro (grande sotto, medio mezzo, piccolo sopra)' 
                    : 'Clicca per sovrapporre i tre cerchi al centro'}
                </p>
              </div>
            )}
            
            {/* Metal Finish Selector */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-2 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Finitura Metallo
              </label>
              <div className="grid grid-cols-3 gap-2">
                {metalFinishes.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal.id)}
                    className={`relative p-3 rounded-xl border-2 transition-all ${
                      selectedMetal === metal.id
                        ? 'border-[#c9a962] shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-full h-8 rounded-lg mb-2"
                      style={{ background: metal.gradient }}
                    />
                    <p className="text-xs font-medium text-center">{metal.name}</p>
                    {metal.price > 0 && (
                      <p className="text-xs text-[#c9a962] text-center">+{metal.price} CHF</p>
                    )}
                    {selectedMetal === metal.id && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#c9a962] rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Canvas with Flip Animation */}
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                animate={{ 
                  rotateY: isFlipping ? (currentSide === 'front' ? 90 : -90) : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="relative aspect-square max-w-md mx-auto bg-gradient-to-br from-[#f5f1eb] to-[#faf9f7] rounded-2xl overflow-hidden"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,169,98,0.1), transparent 70%)'
                  }}
                >
                  {/* Side Label */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      currentSide === 'front' 
                        ? 'bg-[#c9a962] text-white' 
                        : 'bg-[#2d2d2d] text-white'
                    }`}>
                      {currentSide === 'front' ? 'FRONTE' : 'RETRO'}
                    </span>
                  </div>

                  {/* Shape */}
                  <div className="absolute inset-0 p-8 pointer-events-none">
                    {getShapeSVG()}
                  </div>
                  
                  {/* Text Elements - Current Side Only */}
                  {currentSideTexts.map((textEl) => {
                    // Curvatura con fallback a 0 per compatibilità
                    const curvature = textEl.curvature ?? 0;
                    
                    return curvature !== 0 ? (
                      // Testo curvo con SVG
                      <div
                        key={textEl.id}
                        onClick={() => setSelectedElement(textEl.id)}
                        className={`absolute cursor-pointer select-none transition-all ${
                          selectedElement === textEl.id 
                            ? 'z-10' 
                            : ''
                        }`}
                        style={{
                          left: `${textEl.x}%`,
                          top: `${textEl.y}%`,
                          transform: `translate(-50%, -50%) rotate(${textEl.rotation}deg) scaleX(${textEl.flipX ? -1 : 1}) scaleY(${textEl.flipY ? -1 : 1})`,
                        }}
                      >
                        <svg
                          width={textEl.fontSize * textEl.text.length * 0.7}
                          height={textEl.fontSize * 3}
                          style={{ overflow: 'visible' }}
                        >
                          <defs>
                            <path
                              id={`curve-${textEl.id}`}
                              d={`M 0,${textEl.fontSize} Q ${(textEl.fontSize * textEl.text.length * 0.7) / 2},${textEl.fontSize - curvature} ${textEl.fontSize * textEl.text.length * 0.7},${textEl.fontSize}`}
                              fill="none"
                            />
                          </defs>
                          <text
                            fill={textEl.fill}
                            fontSize={textEl.fontSize}
                            fontFamily={textEl.fontFamily}
                            textAnchor="middle"
                          >
                            <textPath 
                              href={`#curve-${textEl.id}`} 
                              startOffset="50%"
                            >
                              {textEl.text}
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    ) : (
                      // Testo dritto normale
                      <div
                        key={textEl.id}
                        onClick={() => setSelectedElement(textEl.id)}
                        className={`absolute cursor-pointer select-none transition-all ${
                          selectedElement === textEl.id 
                            ? 'z-10' 
                            : ''
                        }`}
                        style={{
                          left: `${textEl.x}%`,
                          top: `${textEl.y}%`,
                          transform: `translate(-50%, -50%) rotate(${textEl.rotation}deg) scaleX(${textEl.flipX ? -1 : 1}) scaleY(${textEl.flipY ? -1 : 1})`,
                          fontFamily: textEl.fontFamily,
                          fontSize: `${textEl.fontSize}px`,
                          color: textEl.fill,
                          lineHeight: 1.2,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {textEl.text}
                      </div>
                    );
                  })}

                  {/* Symbol Elements - Current Side Only */}
                  {currentSideSymbols.map((symEl) => (
                    <div
                      key={symEl.id}
                      onClick={() => setSelectedElement(symEl.id)}
                      className={`absolute cursor-pointer select-none transition-all ${
                        selectedElement === symEl.id 
                          ? 'z-10' 
                          : ''
                      }`}
                      style={{
                        left: `${symEl.x}%`,
                        top: `${symEl.y}%`,
                        transform: `translate(-50%, -50%) rotate(${symEl.rotation}deg) scaleX(${symEl.flipX ? -1 : 1}) scaleY(${symEl.flipY ? -1 : 1})`,
                        width: `${symEl.size}px`,
                        height: `${symEl.size}px`,
                        color: symEl.fill,
                      }}
                    >
                      {engravingSymbols[symEl.symbolKey as SymbolKey]}
                    </div>
                  ))}

                  {/* Empty State */}
                  {currentSideTexts.length === 0 && currentSideSymbols.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <p className="text-gray-400 text-center px-8">
                        Aggiungi testo o simboli<br />sul {currentSide === 'front' ? 'fronte' : 'retro'}
                        {product.shape === 'triple-circle' && <><br />Cerchio {currentCircle}</>}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Element Controls - Position with sliders */}
            {(selectedTextElement || selectedSymbolElement) && (
              <div className="mt-6 p-4 bg-[#f5f1eb] rounded-xl space-y-4">
                <h3 className="font-medium text-[#2d2d2d] flex items-center gap-2">
                  ✏️ Modifica Elemento
                </h3>
                
                {/* Position X */}
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <MoveHorizontal className="w-4 h-4" />
                    Posizione Orizzontale: {selectedTextElement?.x ?? selectedSymbolElement?.x ?? 50}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={selectedTextElement?.x ?? selectedSymbolElement?.x ?? 50}
                    onChange={(e) => {
                      if (selectedTextElement) {
                        updateTextElement(selectedTextElement.id, { x: Number(e.target.value) });
                      } else if (selectedSymbolElement) {
                        updateSymbolElement(selectedSymbolElement.id, { x: Number(e.target.value) });
                      }
                    }}
                    className="w-full accent-[#c9a962]"
                  />
                </div>

                {/* Position Y */}
                <div>
                  <label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <MoveVertical className="w-4 h-4" />
                    Posizione Verticale: {selectedTextElement?.y ?? selectedSymbolElement?.y ?? 50}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={selectedTextElement?.y ?? selectedSymbolElement?.y ?? 50}
                    onChange={(e) => {
                      if (selectedTextElement) {
                        updateTextElement(selectedTextElement.id, { y: Number(e.target.value) });
                      } else if (selectedSymbolElement) {
                        updateSymbolElement(selectedSymbolElement.id, { y: Number(e.target.value) });
                      }
                    }}
                    className="w-full accent-[#c9a962]"
                  />
                </div>

                {/* Font Size for Text */}
                {selectedTextElement && (
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">
                      📏 Dimensione Testo: {selectedTextElement.fontSize}px
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="48"
                      value={selectedTextElement.fontSize}
                      onChange={(e) => updateTextElement(selectedTextElement.id, { fontSize: Number(e.target.value) })}
                      className="w-full accent-[#c9a962]"
                    />
                  </div>
                )}
                
                {/* Size for Symbols */}
                {selectedSymbolElement && (
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">
                      📏 Dimensione Simbolo: {selectedSymbolElement.size}px
                    </label>
                    <input
                      type="range"
                      min="16"
                      max="64"
                      value={selectedSymbolElement.size}
                      onChange={(e) => updateSymbolElement(selectedSymbolElement.id, { size: Number(e.target.value) })}
                      className="w-full accent-[#c9a962]"
                    />
                  </div>
                )}

                {/* Rotation */}
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    🔄 Rotazione: {selectedTextElement?.rotation ?? selectedSymbolElement?.rotation ?? 0}°
                  </label>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={selectedTextElement?.rotation ?? selectedSymbolElement?.rotation ?? 0}
                    onChange={(e) => {
                      if (selectedTextElement) {
                        updateTextElement(selectedTextElement.id, { rotation: Number(e.target.value) });
                      } else if (selectedSymbolElement) {
                        updateSymbolElement(selectedSymbolElement.id, { rotation: Number(e.target.value) });
                      }
                    }}
                    className="w-full accent-[#c9a962]"
                  />
                </div>

                {/* Curvature - Solo per testo */}
                {selectedTextElement && (
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">
                      ↪️ Curvatura: {selectedTextElement.curvature ?? 0}
                    </label>
                    <input
                      type="range"
                      min="-100"
                      max="100"
                      value={selectedTextElement.curvature ?? 0}
                      onChange={(e) => {
                        updateTextElement(selectedTextElement.id, { curvature: Number(e.target.value) });
                      }}
                      className="w-full accent-[#c9a962]"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Perfetto per scritte ai bordi circolari
                    </p>
                  </div>
                )}

                {/* Flip Controls */}
                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    🔀 Specchia Elemento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        if (selectedTextElement) {
                          updateTextElement(selectedTextElement.id, { 
                            flipX: !selectedTextElement.flipX 
                          });
                        } else if (selectedSymbolElement) {
                          updateSymbolElement(selectedSymbolElement.id, { 
                            flipX: !selectedSymbolElement.flipX 
                          });
                        }
                      }}
                      className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                        (selectedTextElement?.flipX || selectedSymbolElement?.flipX)
                          ? 'bg-[#c9a962] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ↔️ Orizzontale
                    </button>
                    <button
                      onClick={() => {
                        if (selectedTextElement) {
                          updateTextElement(selectedTextElement.id, { 
                            flipY: !selectedTextElement.flipY 
                          });
                        } else if (selectedSymbolElement) {
                          updateSymbolElement(selectedSymbolElement.id, { 
                            flipY: !selectedSymbolElement.flipY 
                          });
                        }
                      }}
                      className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                        (selectedTextElement?.flipY || selectedSymbolElement?.flipY)
                          ? 'bg-[#c9a962] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ↕️ Verticale
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => deleteElement(selectedElement!)}
                  className="flex items-center justify-center gap-2 w-full py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Elimina elemento
                </button>
              </div>
            )}

            {/* Material Info */}
            <div className="mt-4 p-3 bg-[#c9a962]/10 rounded-xl">
              <p className="text-sm text-[#2d2d2d]">
                <strong>✓ Acciaio Inossidabile</strong> - Ipoallergenico, non annerisce, resistente nel tempo
              </p>
            </div>
          </motion.div>

          {/* Controls Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Current Side Indicator */}
            <div className="bg-gradient-to-r from-[#c9a962] to-[#9a7b3c] rounded-2xl p-4 text-white">
              <p className="text-sm opacity-80">Stai personalizzando il</p>
              <p className="text-2xl font-bold font-serif">
                {currentSide === 'front' ? '✨ Fronte' : '🔄 Retro'}
                {product.shape === 'triple-circle' && ` - Cerchio ${currentCircle}`}
              </p>
              <p className="text-sm opacity-80 mt-1">
                {product.shape === 'triple-circle' 
                  ? 'Scegli quale cerchio personalizzare'
                  : 'Usa il bottone "Gira" per cambiare lato'
                }
              </p>
              {currentSide === 'back' && backCount > 0 && (
                <div className="mt-3 pt-3 border-t border-white/20">
                  <p className="text-xs font-semibold">💡 Incisione Retro: +5.00 CHF</p>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl p-2 border border-[#c9a962]/10 flex">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors ${
                  activeTab === 'text'
                    ? 'bg-[#c9a962] text-white'
                    : 'text-[#2d2d2d] hover:bg-[#f5f1eb]'
                }`}
              >
                <Type className="w-5 h-5" />
                Testo
              </button>
              <button
                onClick={() => setActiveTab('symbols')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-colors ${
                  activeTab === 'symbols'
                    ? 'bg-[#c9a962] text-white'
                    : 'text-[#2d2d2d] hover:bg-[#f5f1eb]'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Simboli
              </button>
            </div>

            {/* Text Panel */}
            {activeTab === 'text' && (
              <div className="bg-white rounded-2xl p-6 border border-[#c9a962]/10 space-y-5">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2d2d2d]">
                    Aggiungi Testo ({currentSide === 'front' ? 'Fronte' : 'Retro'}{product.shape === 'triple-circle' ? ` - Cerchio ${currentCircle}` : ''})
                  </h3>
                  {currentSide === 'back' && (
                    <p className="text-xs text-[#c9a962] mt-1">💡 Incisione retro: +5.00 CHF</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-2">Il tuo testo</label>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Scrivi qui..."
                    className="w-full px-4 py-3 rounded-xl border border-[#c9a962]/20 focus:border-[#c9a962] focus:ring-2 focus:ring-[#c9a962]/20 outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && addText()}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-3">Tipo di Font</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleCategoryChange('standard')}
                      className={`flex flex-col items-center justify-center gap-2 py-4 px-4 rounded-xl font-medium transition-all border-2 ${
                        fontCategory === 'standard'
                          ? 'bg-[#c9a962] text-white border-[#c9a962] shadow-lg'
                          : 'bg-white text-[#2d2d2d] border-[#c9a962]/30 hover:border-[#c9a962]'
                      }`}
                    >
                      <AlignLeft className="w-6 h-6" />
                      <span>Standard</span>
                      <span className={`text-xs ${fontCategory === 'standard' ? 'text-white/80' : 'text-gray-400'}`}>
                        35 font
                      </span>
                    </button>
                    <button
                      onClick={() => handleCategoryChange('handwriting')}
                      className={`flex flex-col items-center justify-center gap-2 py-4 px-4 rounded-xl font-medium transition-all border-2 ${
                        fontCategory === 'handwriting'
                          ? 'bg-[#c9a962] text-white border-[#c9a962] shadow-lg'
                          : 'bg-white text-[#2d2d2d] border-[#c9a962]/30 hover:border-[#c9a962]'
                      }`}
                    >
                      <PenTool className="w-6 h-6" />
                      <span>Handwriting</span>
                      <span className={`text-xs ${fontCategory === 'handwriting' ? 'text-white/80' : 'text-gray-400'}`}>
                        41 font
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Scegli Font
                  </label>
                  <FontSelector
                    fonts={filteredFonts}
                    selectedFont={selectedFont}
                    onSelect={setSelectedFont}
                    previewText={newText || 'Testo di esempio'}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-2">
                    Dimensione: <span className="font-bold text-[#c9a962] text-lg">{fontSize}px</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setFontSize(Math.max(10, fontSize - 2))}
                      className="p-3 rounded-xl border border-[#c9a962]/20 hover:bg-[#f5f1eb] transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input
                      type="range"
                      min="10"
                      max="48"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="flex-1 accent-[#c9a962] h-2"
                    />
                    <button
                      onClick={() => setFontSize(Math.min(48, fontSize + 2))}
                      className="p-3 rounded-xl border border-[#c9a962]/20 hover:bg-[#f5f1eb] transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={addText}
                  disabled={!newText.trim()}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#c9a962] text-white rounded-xl font-semibold text-lg hover:bg-[#9a7b3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#c9a962]/20"
                >
                  <Plus className="w-5 h-5" />
                  Aggiungi al {currentSide === 'front' ? 'Fronte' : 'Retro'}{product.shape === 'triple-circle' ? ` - Cerchio ${currentCircle}` : ''}
                </button>
              </div>
            )}

            {/* Symbols Panel */}
            {activeTab === 'symbols' && (
              <div className="bg-white rounded-2xl p-6 border border-[#c9a962]/10">
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-semibold text-[#2d2d2d]">
                    Scegli un Simbolo ({currentSide === 'front' ? 'Fronte' : 'Retro'}{product.shape === 'triple-circle' ? ` - Cerchio ${currentCircle}` : ''})
                  </h3>
                  {currentSide === 'back' && (
                    <p className="text-xs text-[#c9a962] mt-1">💡 Incisione retro: +5.00 CHF</p>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {symbolCategoriesSVG.map((cat, index) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveSymbolCategory(index)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeSymbolCategory === index
                          ? 'bg-[#c9a962] text-white'
                          : 'bg-[#f5f1eb] text-gray-600 hover:bg-[#c9a962]/20'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-4 gap-3 max-h-72 overflow-y-auto">
                  {symbolCategoriesSVG[activeSymbolCategory].symbols.map((symbol) => (
                    <button
                      key={symbol.key}
                      onClick={() => addSymbol(symbol.key, symbol.name)}
                      className="aspect-square flex flex-col items-center justify-center gap-1 p-3 rounded-xl border border-[#c9a962]/20 hover:bg-[#c9a962]/10 hover:border-[#c9a962] transition-colors group"
                    >
                      <div className="w-8 h-8 text-[#2d2d2d] group-hover:scale-110 transition-transform">
                        {engravingSymbols[symbol.key]}
                      </div>
                      <span className="text-[10px] text-gray-500 truncate w-full text-center">{symbol.name}</span>
                    </button>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  Tutti i simboli sono ottimizzati per l&apos;incisione laser
                </p>
              </div>
            )}

            {/* All Elements List */}
            {(texts.length > 0 || symbolElements.length > 0) && (
              <div className="bg-white rounded-2xl p-6 border border-[#c9a962]/10">
                <h3 className="font-serif text-lg font-semibold text-[#2d2d2d] mb-4">
                  Tutti gli Elementi ({texts.length + symbolElements.length})
                </h3>
                
                {/* Front elements */}
                {(texts.filter(t => t.side === 'front').length > 0 || symbolElements.filter(s => s.side === 'front').length > 0) && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-[#c9a962] uppercase tracking-wide mb-2">Fronte</p>
                    <div className="space-y-2">
                      {texts.filter(t => t.side === 'front').map((t) => (
                        <div
                          key={t.id}
                          onClick={() => { setCurrentSide('front'); if (t.circleIndex) setCurrentCircle(t.circleIndex); setSelectedElement(t.id); }}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-sm ${
                            selectedElement === t.id ? 'bg-[#c9a962]/20' : 'bg-[#f5f1eb] hover:bg-[#c9a962]/10'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="truncate" style={{ fontFamily: t.fontFamily }}>{t.text}</span>
                            {product.shape === 'triple-circle' && t.circleIndex && (
                              <span className="text-xs bg-[#c9a962] text-white px-1.5 py-0.5 rounded-full flex-shrink-0">⭕{t.circleIndex}</span>
                            )}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); deleteElement(t.id); }} className="p-1 text-red-500 hover:bg-red-100 rounded flex-shrink-0">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      {symbolElements.filter(s => s.side === 'front').map((s) => (
                        <div
                          key={s.id}
                          onClick={() => { setCurrentSide('front'); if (s.circleIndex) setCurrentCircle(s.circleIndex); setSelectedElement(s.id); }}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-sm ${
                            selectedElement === s.id ? 'bg-[#c9a962]/20' : 'bg-[#f5f1eb] hover:bg-[#c9a962]/10'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-5 h-5">{engravingSymbols[s.symbolKey as SymbolKey]}</div>
                            <span className="text-gray-600">{s.symbolName}</span>
                            {product.shape === 'triple-circle' && s.circleIndex && (
                              <span className="text-xs bg-[#c9a962] text-white px-1.5 py-0.5 rounded-full">⭕{s.circleIndex}</span>
                            )}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); deleteElement(s.id); }} className="p-1 text-red-500 hover:bg-red-100 rounded flex-shrink-0">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back elements */}
                {(texts.filter(t => t.side === 'back').length > 0 || symbolElements.filter(s => s.side === 'back').length > 0) && (
                  <div>
                    <p className="text-xs font-bold text-[#2d2d2d] uppercase tracking-wide mb-2">Retro</p>
                    <div className="space-y-2">
                      {texts.filter(t => t.side === 'back').map((t) => (
                        <div
                          key={t.id}
                          onClick={() => { setCurrentSide('back'); if (t.circleIndex) setCurrentCircle(t.circleIndex); setSelectedElement(t.id); }}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-sm ${
                            selectedElement === t.id ? 'bg-[#c9a962]/20' : 'bg-[#f5f1eb] hover:bg-[#c9a962]/10'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="truncate" style={{ fontFamily: t.fontFamily }}>{t.text}</span>
                            {product.shape === 'triple-circle' && t.circleIndex && (
                              <span className="text-xs bg-[#c9a962] text-white px-1.5 py-0.5 rounded-full flex-shrink-0">⭕{t.circleIndex}</span>
                            )}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); deleteElement(t.id); }} className="p-1 text-red-500 hover:bg-red-100 rounded flex-shrink-0">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      {symbolElements.filter(s => s.side === 'back').map((s) => (
                        <div
                          key={s.id}
                          onClick={() => { setCurrentSide('back'); if (s.circleIndex) setCurrentCircle(s.circleIndex); setSelectedElement(s.id); }}
                          className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors text-sm ${
                            selectedElement === s.id ? 'bg-[#c9a962]/20' : 'bg-[#f5f1eb] hover:bg-[#c9a962]/10'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-5 h-5">{engravingSymbols[s.symbolKey as SymbolKey]}</div>
                            <span className="text-gray-600">{s.symbolName}</span>
                            {product.shape === 'triple-circle' && s.circleIndex && (
                              <span className="text-xs bg-[#c9a962] text-white px-1.5 py-0.5 rounded-full">⭕{s.circleIndex}</span>
                            )}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); deleteElement(s.id); }} className="p-1 text-red-500 hover:bg-red-100 rounded flex-shrink-0">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Price & Add to Cart */}
            <div className="bg-[#2d2d2d] rounded-2xl p-6 text-white">
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-gray-400">
                  <span>Prodotto base</span>
                  <span>{product.price.toFixed(2)} CHF</span>
                </div>
                {currentMetal.price > 0 && (
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Finitura {currentMetal.name}</span>
                    <span>+{currentMetal.price.toFixed(2)} CHF</span>
                  </div>
                )}
                {backEngravingCost > 0 && (
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Incisione Retro</span>
                    <span>+{backEngravingCost.toFixed(2)} CHF</span>
                  </div>
                )}
                <div className="border-t border-gray-600 pt-2 flex items-center justify-between">
                  <span className="font-semibold">Totale</span>
                  <span className="text-2xl font-bold text-[#c9a962]">
                    {totalPrice.toFixed(2)} CHF
                  </span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#c9a962] text-white rounded-xl font-bold text-lg hover:bg-[#9a7b3c] transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                Aggiungi al Carrello
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
