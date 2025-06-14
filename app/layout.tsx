import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ValuePlast - Premium Kitchen Plastic Products',
  description: 'Discover our premium collection of durable, stylish plastic kitchen products. From storage containers to utensils, find everything you need for a modern kitchen.',
  keywords: 'plastic kitchen products, kitchen storage, kitchen utensils, food containers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}