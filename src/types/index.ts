export type ProductCategory = 'collane' | 'portachiavi' | 'bracciali' | 'accessori';

export type ProductShape = 'heart' | 'circle' | 'rectangle' | 'oval' | 'star' | 'lock' | 'envelope' | 'bar' | 'paw' | 'wallet' | 'triple-circle';

export type JewelrySide = 'front' | 'back';

export interface ColorVariant {
  id: string;
  name: string;
  colorCode: string; // Hex color for display
  images: string[]; // Array di immagini per la variante
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  shape: ProductShape;
  image: string; // Main product image
  dimensions: {
    width: number;
    height: number;
  };
  material: string;
  colors: string[];
  stock: number; // Quantità in magazzino totale
  piecesPerPack?: number; // Pezzi per confezione (es. 6pcs)
  color?: string; // Colore specifico del prodotto (per prodotti singoli)
  variants?: ColorVariant[]; // Varianti colore (per prodotti con più colori)
}

export interface TextElement {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  fill: string;
  rotation: number;
  side: JewelrySide;
  circleIndex?: number; // Per prodotti con più cerchi (es. triple-circle): 1, 2, o 3
  curvature?: number; // Curvatura del testo (-100 a 100), default 0
  flipX?: boolean; // Specchia orizzontalmente
  flipY?: boolean; // Specchia verticalmente
}

export interface SymbolElement {
  id: string;
  symbolKey: string;
  symbolName: string;
  x: number;
  y: number;
  size: number;
  fill: string;
  rotation: number;
  side: JewelrySide;
  circleIndex?: number; // Per prodotti con più cerchi (es. triple-circle): 1, 2, o 3
  flipX?: boolean; // Specchia orizzontalmente
  flipY?: boolean; // Specchia verticalmente
}

export interface Customization {
  texts: TextElement[];
  symbols: SymbolElement[];
}

export interface CartItem {
  id: string;
  product: Product;
  customization: Customization;
  quantity: number;
  previewImage?: string;
}
