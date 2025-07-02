import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <span className="text-3xl font-bold text-gradient font-playfair hidden md:inline">Value Plast</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              شريكك الموثوق لمنتجات المطبخ البلاستيكية المميزة. نجمع بين المتانة والوظائفية والأناقة لتحسين تجربة الطهي لديك.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">6 أكتوبر</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a
                  href="https://wa.me/201015111112?text=مرحباً، أريد الاستفسار عن منتجات Value Plast."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +20 1015111112
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">hello@valueplast.com</span>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-center w-full">تابعنا</h3>
              <div className="flex space-x-4">
                <div className="flex justify-center space-x-6">
                  <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 valueplast. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}