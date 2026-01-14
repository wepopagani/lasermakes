import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LaserCraft - Gioielli Personalizzati con Incisione Laser",
  description: "Crea gioielli unici con incisione laser personalizzata. Portachiavi, anelli, collane, bracciali e orecchini in acciaio inossidabile, ipoallergenici e resistenti nel tempo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Google Fonts - Standard */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Abel&family=Archivo:wght@400;700&family=Arimo:wght@400;700&family=Barlow:wght@400;600&family=Bebas+Neue&family=Cairo:wght@400;600&family=Crimson+Text:wght@400;600&family=DM+Sans:wght@400;500&family=Dosis:wght@400;600&family=Exo+2:wght@400;600&family=Fira+Sans:wght@400;500&family=IBM+Plex+Sans:wght@400;500&family=Inter:wght@400;500&family=Josefin+Sans:wght@400;600&family=Karla:wght@400;500&family=Lato:wght@400;700&family=Libre+Franklin:wght@400;500&family=Manrope:wght@400;600&family=Montserrat:wght@400;600&family=Mulish:wght@400;600&family=Nunito:wght@400;600&family=Open+Sans:wght@400;600&family=Oswald:wght@400;500&family=Overpass:wght@400;600&family=Playfair+Display:wght@400;600&family=Poppins:wght@400;500&family=PT+Sans:wght@400;700&family=Quicksand:wght@400;500&family=Raleway:wght@400;500&family=Roboto:wght@400;500&family=Rubik:wght@400;500&family=Source+Sans+3:wght@400;600&family=Titillium+Web:wght@400;600&family=Ubuntu:wght@400;500&family=Work+Sans:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
        {/* Google Fonts - Handwriting/Script */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Amatic+SC:wght@400;700&family=Bad+Script&family=Bilbo+Swash+Caps&family=Caveat:wght@400;600&family=Courgette&family=Dancing+Script:wght@400;600&family=Dawning+of+a+New+Day&family=Gloria+Hallelujah&family=Great+Vibes&family=Handlee&family=Homemade+Apple&family=Indie+Flower&family=Italianno&family=Kaushan+Script&family=Kalam:wght@400;700&family=La+Belle+Aurore&family=Lobster&family=Lovers+Quarrel&family=Marck+Script&family=Merienda:wght@400;700&family=Montez&family=Mr+Dafoe&family=Nanum+Pen+Script&family=Niconne&family=Nothing+You+Could+Do&family=Pacifico&family=Parisienne&family=Patrick+Hand&family=Permanent+Marker&family=Pinyon+Script&family=Reenie+Beanie&family=Rochester&family=Rock+Salt&family=Rouge+Script&family=Sacramento&family=Satisfy&family=Shadows+Into+Light&family=Tangerine:wght@400;700&family=Yellowtail&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${outfit.variable} ${cormorant.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
