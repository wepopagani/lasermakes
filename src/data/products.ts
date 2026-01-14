import { Product } from '@/types';

export const products: Product[] = [
  // ============================================
  // COLLANE
  // ============================================
  {
    id: 'col-heart-01',
    name: 'Collana Cuore',
    description: 'Elegante collana a cuore in acciaio inossidabile. Perfetta per personalizzazioni romantiche. Ipoallergenica e resistente nel tempo.',
    price: 12.60,
    category: 'collane',
    shape: 'heart',
    image: '/products/silver-heart-necklace-1.jpg',
    dimensions: { width: 8, height: 7 },
    material: 'Acciaio Inossidabile',
    colors: ['Argento', 'Oro'],
    stock: 4,
    variants: [
      { 
        id: 'heart-silver', 
        name: 'Argento', 
        colorCode: '#c0c0c0', 
        images: ['/products/silver-heart-necklace-1.jpg', '/products/silver-heart-necklace-2.jpg'], 
        stock: 2 
      },
      { 
        id: 'heart-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/gold-heart-necklace-1.jpg', '/products/gold-heart-necklace-2.jpg'], 
        stock: 2 
      },
    ]
  },
  {
    id: 'col-lock-silver-01',
    name: 'Collana Lucchetto Argento',
    description: 'Collana con ciondolo a forma di lucchetto in acciaio inossidabile. Simbolo di amore eterno. Non provoca allergie.',
    price: 17.28,
    category: 'collane',
    shape: 'lock',
    image: '/products/silver-lock-necklace.jpg',
    dimensions: { width: 7, height: 10 },
    material: 'Acciaio Inossidabile',
    colors: ['Argento'],
    stock: 1,
    color: 'Argento'
  },
  {
    id: 'col-spinner-01',
    name: 'Collana Spinner',
    description: 'Collana con ciondolo rotante in acciaio inossidabile. Design unico e rilassante. Ipoallergenica.',
    price: 15.31,
    category: 'collane',
    shape: 'circle',
    image: '/products/gold-spinner-necklace-1.jpg',
    dimensions: { width: 15, height: 16 },
    material: 'Acciaio Inossidabile',
    colors: ['Oro', 'Oro Rosa'],
    stock: 2,
    variants: [
      { 
        id: 'spinner-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/gold-spinner-necklace-1.jpg', '/products/gold-spinner-necklace-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'spinner-rosegold', 
        name: 'Oro Rosa', 
        colorCode: '#e8a0a0', 
        images: ['/products/rosegold-spinner-necklace-1.jpg', '/products/rosegold-spinner-necklace-2.jpg'], 
        stock: 1 
      },
    ]
  },
  {
    id: 'col-spinner-pendant-01',
    name: 'Collana Ciondolo Spinner',
    description: 'Elegante collana con ciondolo spinner in acciaio inossidabile. Movimento rilassante. Non annerisce.',
    price: 16.20,
    category: 'collane',
    shape: 'circle',
    image: '/products/gold-spinner-pendant-1.jpg',
    dimensions: { width: 25, height: 25 },
    material: 'Acciaio Inossidabile',
    colors: ['Oro', 'Argento'],
    stock: 2,
    variants: [
      { 
        id: 'spinner-pendant-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/gold-spinner-pendant-1.jpg', '/products/gold-spinner-pendant-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'spinner-pendant-silver', 
        name: 'Argento', 
        colorCode: '#c0c0c0', 
        images: ['/products/silver-spinner-pendant-1.jpg', '/products/silver-spinner-pendant-2.jpg'], 
        stock: 1 
      },
    ]
  },
  {
    id: 'col-envelope-01',
    name: 'Collana Busta',
    description: 'Collana con ciondolo a forma di busta in acciaio inossidabile. Design romantico con messaggio nascosto. Ipoallergenica.',
    price: 23.41,
    category: 'collane',
    shape: 'envelope',
    image: '/products/envelope-1.jpg',
    dimensions: { width: 13, height: 20 },
    material: 'Acciaio Inossidabile',
    colors: ['Oro', 'Argento', 'Oro Rosa'],
    stock: 3,
    variants: [
      { 
        id: 'envelope-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/envelope-1.jpg', '/products/envelope-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'envelope-silver', 
        name: 'Argento', 
        colorCode: '#c0c0c0', 
        images: ['/products/envelope-1.jpg', '/products/envelope-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'envelope-rosegold', 
        name: 'Oro Rosa', 
        colorCode: '#e8a0a0', 
        images: ['/products/envelope-1.jpg', '/products/envelope-2.jpg'], 
        stock: 1 
      },
    ]
  },
  {
    id: 'col-triple-pendants-01',
    name: 'Set Triplo Ciondoli',
    description: 'Set di tre ciondoli coordinati in acciaio inossidabile. Perfetti per personalizzazioni multiple. Non anneriscono.',
    price: 12.60,
    category: 'collane',
    shape: 'triple-circle',
    image: '/products/triple-1.jpg',
    dimensions: { width: 15, height: 15 },
    material: 'Acciaio Inossidabile',
    colors: ['2 Oro + 1 Argento', '2 Argento + 1 Oro'],
    stock: 2,
    variants: [
      { 
        id: 'triple-gold-majority', 
        name: '2 Oro + 1 Argento', 
        colorCode: '#d4af37', 
        images: ['/products/triple-gold.jpg', '/products/triple-1.jpg', '/products/triple-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'triple-silver-majority', 
        name: '2 Argento + 1 Oro', 
        colorCode: '#c0c0c0', 
        images: ['/products/triple-silver.jpg', '/products/triple-1.jpg', '/products/triple-2.jpg'], 
        stock: 1 
      },
    ]
  },
  {
    id: 'col-bar-mixed-01',
    name: 'Collana Barra Verticale',
    description: 'Collana con ciondolo a barra verticale in acciaio inossidabile. Ideale per incisioni personalizzate.',
    price: 19.81,
    category: 'collane',
    shape: 'bar',
    image: '/products/bar-necklace-1.jpg',
    dimensions: { width: 5, height: 35 },
    material: 'Acciaio Inossidabile',
    colors: ['Oro', 'Argento', 'Oro Rosa'],
    stock: 3,
    variants: [
      { 
        id: 'bar-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/bar-necklace-1.jpg', '/products/bar-necklace-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'bar-silver', 
        name: 'Argento', 
        colorCode: '#c0c0c0', 
        images: ['/products/bar-necklace-1.jpg', '/products/bar-necklace-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'bar-rosegold', 
        name: 'Oro Rosa', 
        colorCode: '#e8a0a0', 
        images: ['/products/bar-necklace-1.jpg', '/products/bar-necklace-2.jpg'], 
        stock: 1 
      },
    ]
  },

  // ============================================
  // PORTACHIAVI
  // ============================================
  {
    id: 'pk-heart-01',
    name: 'Portachiavi Cuore',
    description: 'Portachiavi a forma di cuore in acciaio inossidabile. Perfetto per messaggi personalizzati. Ipoallergenico e resistente.',
    price: 12.19,
    category: 'portachiavi',
    shape: 'heart',
    image: '/products/heart-keychain.jpg',
    dimensions: { width: 35, height: 35 },
    material: 'Acciaio Inossidabile',
    colors: ['Argento'],
    stock: 2,
    color: 'Argento'
  },
  {
    id: 'pk-heart-key-set-01',
    name: 'Set Portachiavi Cuore e Chiave',
    description: 'Set di portachiavi a forma di cuore e chiave in acciaio inossidabile. Perfetto per coppie. Colori assortiti.',
    price: 13.50,
    category: 'portachiavi',
    shape: 'heart',
    image: '/products/key-heart-1.jpg',
    dimensions: { width: 35, height: 35 },
    material: 'Acciaio Inossidabile',
    colors: ['Oro', 'Argento', 'Oro Rosa'],
    stock: 3,
    variants: [
      { 
        id: 'key-heart-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/key-heart-1.jpg', '/products/key-heart-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'key-heart-silver', 
        name: 'Argento', 
        colorCode: '#c0c0c0', 
        images: ['/products/key-heart-1.jpg', '/products/key-heart-2.jpg'], 
        stock: 1 
      },
      { 
        id: 'key-heart-rosegold', 
        name: 'Oro Rosa', 
        colorCode: '#e8a0a0', 
        images: ['/products/key-heart-1.jpg', '/products/key-heart-2.jpg'], 
        stock: 1 
      },
    ]
  },

  // ============================================
  // BRACCIALI
  // ============================================
  {
    id: 'bra-paw-gold-01',
    name: 'Bracciale Zampa',
    description: 'Bracciale con charm a forma di zampa in acciaio inossidabile placcato oro. Perfetto per amanti degli animali. Ipoallergenico.',
    price: 15.31,
    category: 'bracciali',
    shape: 'paw',
    image: '/products/paw-1.jpg',
    dimensions: { width: 15, height: 15 },
    material: 'Acciaio Inossidabile Placcato Oro',
    colors: ['Oro'],
    stock: 1,
    variants: [
      { 
        id: 'paw-gold', 
        name: 'Oro', 
        colorCode: '#d4af37', 
        images: ['/products/paw-1.jpg', '/products/paw-2.jpg', '/products/paw-3.jpg'], 
        stock: 1 
      },
    ]
  },

  // ============================================
  // ACCESSORI
  // ============================================
  {
    id: 'acc-bottle-opener-01',
    name: 'Apribottiglie Carta di Credito',
    description: 'Apribottiglie formato carta di credito in acciaio inossidabile nero. Ideale per incisioni personalizzate. Compatto e pratico.',
    price: 16.26,
    category: 'accessori',
    shape: 'rectangle',
    image: '/products/black-bottle-opener.jpg',
    dimensions: { width: 85, height: 54 },
    material: 'Acciaio Inossidabile Nero',
    colors: ['Nero'],
    stock: 1,
    color: 'Nero'
  },
  {
    id: 'acc-pen-stylus-black-01',
    name: 'Penna con Stylus',
    description: 'Penna a sfera con punta stylus in metallo nero. Perfetta per incisioni personalizzate. Elegante e funzionale.',
    price: 16.20,
    category: 'accessori',
    shape: 'rectangle',
    image: '/products/pen-1.jpg',
    dimensions: { width: 15, height: 255 },
    material: 'Metallo',
    colors: ['Nero'],
    stock: 3,
    variants: [
      { 
        id: 'pen-black', 
        name: 'Nero', 
        colorCode: '#2d2d2d', 
        images: ['/products/pen-1.jpg', '/products/pen-2.jpg'], 
        stock: 3 
      },
    ]
  },
  {
    id: 'acc-wallet-01',
    name: 'Portacarte Magnetico',
    description: 'Portacarte in pelle PU premium con chiusura magnetica. Compatto e funzionale, perfetto per incisioni laser personalizzate. Disponibile in 5 eleganti colori.',
    price: 16.20,
    category: 'accessori',
    shape: 'wallet',
    image: '/products/wallet-all-colors.jpg', // Foto con tutti i 5 colori
    dimensions: { width: 54, height: 85 },
    material: 'Pelle PU',
    colors: ['Nero', 'Marrone', 'Verde', 'Blu', 'Lilla'],
    stock: 32, // Totale di tutte le varianti
    variants: [
      {
        id: 'nero',
        name: 'Nero',
        colorCode: '#2d2d2d',
        images: ['/products/wallet-black.jpg'],
        stock: 9
      },
      {
        id: 'marrone',
        name: 'Marrone',
        colorCode: '#8B5A2B',
        images: ['/products/wallet-brown.jpg'],
        stock: 10
      },
      {
        id: 'verde',
        name: 'Verde Foresta',
        colorCode: '#2F4F4F',
        images: ['/products/wallet-green.jpg'],
        stock: 7
      },
      {
        id: 'blu',
        name: 'Blu Navy',
        colorCode: '#3B5998',
        images: ['/products/wallet-blue.jpg'],
        stock: 3
      },
      {
        id: 'lilla',
        name: 'Lilla',
        colorCode: '#9683EC',
        images: ['/products/wallet-lilac.jpg'],
        stock: 3
      }
    ]
  },
];

export const categories = [
  { id: 'collane', name: 'Collane', icon: '📿' },
  { id: 'portachiavi', name: 'Portachiavi', icon: '🔑' },
  { id: 'bracciali', name: 'Bracciali', icon: '🔗' },
  { id: 'accessori', name: 'Accessori', icon: '🎁' },
];

export type FontCategory = 'standard' | 'handwriting';

export interface FontOption {
  name: string;
  value: string;
  category: FontCategory;
}

export const fonts: FontOption[] = [
  // ============================================
  // STANDARD FONTS (35 fonts)
  // ============================================
  { name: 'Abel', value: "'Abel', sans-serif", category: 'standard' },
  { name: 'Archivo', value: "'Archivo', sans-serif", category: 'standard' },
  { name: 'Arimo', value: "'Arimo', sans-serif", category: 'standard' },
  { name: 'Barlow', value: "'Barlow', sans-serif", category: 'standard' },
  { name: 'Bebas Neue', value: "'Bebas Neue', sans-serif", category: 'standard' },
  { name: 'Cairo', value: "'Cairo', sans-serif", category: 'standard' },
  { name: 'Crimson Text', value: "'Crimson Text', serif", category: 'standard' },
  { name: 'DM Sans', value: "'DM Sans', sans-serif", category: 'standard' },
  { name: 'Dosis', value: "'Dosis', sans-serif", category: 'standard' },
  { name: 'Exo 2', value: "'Exo 2', sans-serif", category: 'standard' },
  { name: 'Fira Sans', value: "'Fira Sans', sans-serif", category: 'standard' },
  { name: 'IBM Plex Sans', value: "'IBM Plex Sans', sans-serif", category: 'standard' },
  { name: 'Inter', value: "'Inter', sans-serif", category: 'standard' },
  { name: 'Josefin Sans', value: "'Josefin Sans', sans-serif", category: 'standard' },
  { name: 'Karla', value: "'Karla', sans-serif", category: 'standard' },
  { name: 'Lato', value: "'Lato', sans-serif", category: 'standard' },
  { name: 'Libre Franklin', value: "'Libre Franklin', sans-serif", category: 'standard' },
  { name: 'Manrope', value: "'Manrope', sans-serif", category: 'standard' },
  { name: 'Montserrat', value: "'Montserrat', sans-serif", category: 'standard' },
  { name: 'Mulish', value: "'Mulish', sans-serif", category: 'standard' },
  { name: 'Nunito', value: "'Nunito', sans-serif", category: 'standard' },
  { name: 'Open Sans', value: "'Open Sans', sans-serif", category: 'standard' },
  { name: 'Oswald', value: "'Oswald', sans-serif", category: 'standard' },
  { name: 'Overpass', value: "'Overpass', sans-serif", category: 'standard' },
  { name: 'Playfair Display', value: "'Playfair Display', serif", category: 'standard' },
  { name: 'Poppins', value: "'Poppins', sans-serif", category: 'standard' },
  { name: 'PT Sans', value: "'PT Sans', sans-serif", category: 'standard' },
  { name: 'Quicksand', value: "'Quicksand', sans-serif", category: 'standard' },
  { name: 'Raleway', value: "'Raleway', sans-serif", category: 'standard' },
  { name: 'Roboto', value: "'Roboto', sans-serif", category: 'standard' },
  { name: 'Rubik', value: "'Rubik', sans-serif", category: 'standard' },
  { name: 'Source Sans 3', value: "'Source Sans 3', sans-serif", category: 'standard' },
  { name: 'Titillium Web', value: "'Titillium Web', sans-serif", category: 'standard' },
  { name: 'Ubuntu', value: "'Ubuntu', sans-serif", category: 'standard' },
  { name: 'Work Sans', value: "'Work Sans', sans-serif", category: 'standard' },

  // ============================================
  // HANDWRITING FONTS (41 fonts)
  // ============================================
  { name: 'Alex Brush', value: "'Alex Brush', cursive", category: 'handwriting' },
  { name: 'Allura', value: "'Allura', cursive", category: 'handwriting' },
  { name: 'Amatic SC', value: "'Amatic SC', cursive", category: 'handwriting' },
  { name: 'Bad Script', value: "'Bad Script', cursive", category: 'handwriting' },
  { name: 'Bilbo Swash Caps', value: "'Bilbo Swash Caps', cursive", category: 'handwriting' },
  { name: 'Caveat', value: "'Caveat', cursive", category: 'handwriting' },
  { name: 'Courgette', value: "'Courgette', cursive", category: 'handwriting' },
  { name: 'Dancing Script', value: "'Dancing Script', cursive", category: 'handwriting' },
  { name: 'Dawning of a New Day', value: "'Dawning of a New Day', cursive", category: 'handwriting' },
  { name: 'Gloria Hallelujah', value: "'Gloria Hallelujah', cursive", category: 'handwriting' },
  { name: 'Great Vibes', value: "'Great Vibes', cursive", category: 'handwriting' },
  { name: 'Handlee', value: "'Handlee', cursive", category: 'handwriting' },
  { name: 'Homemade Apple', value: "'Homemade Apple', cursive", category: 'handwriting' },
  { name: 'Indie Flower', value: "'Indie Flower', cursive", category: 'handwriting' },
  { name: 'Italianno', value: "'Italianno', cursive", category: 'handwriting' },
  { name: 'Kalam', value: "'Kalam', cursive", category: 'handwriting' },
  { name: 'Kaushan Script', value: "'Kaushan Script', cursive", category: 'handwriting' },
  { name: 'La Belle Aurore', value: "'La Belle Aurore', cursive", category: 'handwriting' },
  { name: 'Lobster', value: "'Lobster', cursive", category: 'handwriting' },
  { name: 'Lovers Quarrel', value: "'Lovers Quarrel', cursive", category: 'handwriting' },
  { name: 'Marck Script', value: "'Marck Script', cursive", category: 'handwriting' },
  { name: 'Merienda', value: "'Merienda', cursive", category: 'handwriting' },
  { name: 'Montez', value: "'Montez', cursive", category: 'handwriting' },
  { name: 'Mr Dafoe', value: "'Mr Dafoe', cursive", category: 'handwriting' },
  { name: 'Nanum Pen Script', value: "'Nanum Pen Script', cursive", category: 'handwriting' },
  { name: 'Niconne', value: "'Niconne', cursive", category: 'handwriting' },
  { name: 'Nothing You Could Do', value: "'Nothing You Could Do', cursive", category: 'handwriting' },
  { name: 'Pacifico', value: "'Pacifico', cursive", category: 'handwriting' },
  { name: 'Parisienne', value: "'Parisienne', cursive", category: 'handwriting' },
  { name: 'Patrick Hand', value: "'Patrick Hand', cursive", category: 'handwriting' },
  { name: 'Permanent Marker', value: "'Permanent Marker', cursive", category: 'handwriting' },
  { name: 'Pinyon Script', value: "'Pinyon Script', cursive", category: 'handwriting' },
  { name: 'Reenie Beanie', value: "'Reenie Beanie', cursive", category: 'handwriting' },
  { name: 'Rochester', value: "'Rochester', cursive", category: 'handwriting' },
  { name: 'Rock Salt', value: "'Rock Salt', cursive", category: 'handwriting' },
  { name: 'Rouge Script', value: "'Rouge Script', cursive", category: 'handwriting' },
  { name: 'Sacramento', value: "'Sacramento', cursive", category: 'handwriting' },
  { name: 'Satisfy', value: "'Satisfy', cursive", category: 'handwriting' },
  { name: 'Shadows Into Light', value: "'Shadows Into Light', cursive", category: 'handwriting' },
  { name: 'Tangerine', value: "'Tangerine', cursive", category: 'handwriting' },
  { name: 'Yellowtail', value: "'Yellowtail', cursive", category: 'handwriting' },
];

// 55+ Simboli organizzati per categoria
export const symbolCategories = [
  {
    name: 'Amore',
    symbols: [
      { name: 'Cuore', value: '♥' },
      { name: 'Cuore Vuoto', value: '♡' },
      { name: 'Due Cuori', value: '💕' },
      { name: 'Cuore Freccia', value: '💘' },
      { name: 'Cuore Brillante', value: '💖' },
      { name: 'Bacio', value: '💋' },
      { name: 'Infinito', value: '∞' },
      { name: 'Coppia', value: '👫' },
    ]
  },
  {
    name: 'Natura',
    symbols: [
      { name: 'Stella', value: '★' },
      { name: 'Stella Vuota', value: '☆' },
      { name: 'Luna', value: '☾' },
      { name: 'Luna Piena', value: '🌕' },
      { name: 'Sole', value: '☀' },
      { name: 'Fiore', value: '✿' },
      { name: 'Rosa', value: '🌹' },
      { name: 'Foglia', value: '🍃' },
      { name: 'Albero', value: '🌳' },
      { name: 'Montagna', value: '⛰️' },
      { name: 'Onda', value: '🌊' },
      { name: 'Farfalla', value: '🦋' },
    ]
  },
  {
    name: 'Animali',
    symbols: [
      { name: 'Zampa', value: '🐾' },
      { name: 'Cane', value: '🐕' },
      { name: 'Gatto', value: '🐱' },
      { name: 'Uccello', value: '🐦' },
      { name: 'Colomba', value: '🕊️' },
      { name: 'Leone', value: '🦁' },
      { name: 'Cavallo', value: '🐴' },
      { name: 'Delfino', value: '🐬' },
    ]
  },
  {
    name: 'Simboli',
    symbols: [
      { name: 'Corona', value: '♛' },
      { name: 'Corona Re', value: '👑' },
      { name: 'Diamante', value: '◆' },
      { name: 'Gemma', value: '💎' },
      { name: 'Ancora', value: '⚓' },
      { name: 'Freccia', value: '➤' },
      { name: 'Freccia Destra', value: '→' },
      { name: 'Freccia Cuore', value: '➳' },
      { name: 'Chiave', value: '🔑' },
      { name: 'Lucchetto', value: '🔒' },
      { name: 'Cuore Lucchetto', value: '🔐' },
      { name: 'Croce', value: '✝' },
      { name: 'Pace', value: '☮' },
      { name: 'Yin Yang', value: '☯' },
      { name: 'Om', value: 'ॐ' },
    ]
  },
  {
    name: 'Musica & Arte',
    symbols: [
      { name: 'Nota Musicale', value: '♪' },
      { name: 'Note', value: '♫' },
      { name: 'Chiave Sol', value: '𝄞' },
      { name: 'Microfono', value: '🎤' },
      { name: 'Chitarra', value: '🎸' },
      { name: 'Palette', value: '🎨' },
    ]
  },
  {
    name: 'Sport & Hobby',
    symbols: [
      { name: 'Calcio', value: '⚽' },
      { name: 'Basket', value: '🏀' },
      { name: 'Tennis', value: '🎾' },
      { name: 'Bici', value: '🚴' },
      { name: 'Yoga', value: '🧘' },
      { name: 'Aereo', value: '✈️' },
      { name: 'Barca', value: '⛵' },
    ]
  },
  {
    name: 'Speciali',
    symbols: [
      { name: 'Angelo', value: '👼' },
      { name: 'Ali', value: '🪽' },
      { name: 'Quadrifoglio', value: '🍀' },
      { name: 'Fulmine', value: '⚡' },
      { name: 'Fuoco', value: '🔥' },
      { name: 'Scintilla', value: '✨' },
      { name: 'Arcobaleno', value: '🌈' },
      { name: 'Occhio', value: '👁️' },
      { name: 'Mano Hamsa', value: '🪬' },
    ]
  },
];

// Flat list of all symbols for backward compatibility
export const symbols = symbolCategories.flatMap(cat => cat.symbols);

// Metal finish options
export type MetalFinish = 'silver' | 'gold' | 'rose-gold';

export interface MetalOption {
  id: MetalFinish;
  name: string;
  gradient: string;
  stroke: string;
  price: number; // Additional price for finish
}

export const metalFinishes: MetalOption[] = [
  {
    id: 'silver',
    name: 'Argento',
    gradient: 'linear-gradient(135deg, #e8e8e8 0%, #b8b8b8 30%, #f5f5f5 50%, #c0c0c0 70%, #a0a0a0 100%)',
    stroke: '#888888',
    price: 0
  },
  {
    id: 'gold',
    name: 'Oro',
    gradient: 'linear-gradient(135deg, #f5e6a3 0%, #d4af37 30%, #fff8dc 50%, #d4af37 70%, #b8860b 100%)',
    stroke: '#b8860b',
    price: 0
  },
  {
    id: 'rose-gold',
    name: 'Oro Rosa',
    gradient: 'linear-gradient(135deg, #f4c4c4 0%, #e8a0a0 30%, #fce4e4 50%, #d4a0a0 70%, #c48080 100%)',
    stroke: '#c48080',
    price: 0
  },
];
