import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'فاليوبلاست - منتجات المطبخ البلاستيكية المميزة',
  description: 'اكتشف مجموعتنا المميزة من منتجات المطبخ البلاستيكية المتينة والأنيقة. من حاويات التخزين إلى الأدوات، اعثر على كل ما تحتاجه لمطبخ عصري.',
  keywords: 'منتجات مطبخ بلاستيكية, تخزين المطبخ, أدوات المطبخ, حاويات الطعام',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}