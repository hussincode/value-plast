import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'التسوق': [
      { name: 'جميع المنتجات', href: '/products' },
      { name: 'حاويات التخزين', href: '/products/storage' },
      { name: 'أدوات المطبخ', href: '/products/utensils' },
      { name: 'أدوات تحضير الطعام', href: '/products/prep-tools' },
      { name: 'ملحقات المائدة', href: '/products/dining' },
      { name: 'وصل حديثاً', href: '/products/new' },
    ],
    'الدعم': [
      { name: 'اتصل بنا', href: '/contact' },
      { name: 'الأسئلة الشائعة', href: '/faq' },
      { name: 'معلومات الشحن', href: '/shipping' },
      { name: 'الإرجاع', href: '/returns' },
      { name: 'دليل المقاسات', href: '/size-guide' },
      { name: 'تعليمات العناية', href: '/care' },
    ],
    'من نحن': [
      { name: 'قصتنا', href: '/about/story' },
      { name: 'مهمتنا وقيمنا', href: '/about/mission' },
      { name: 'الاستدامة', href: '/about/sustainability' },
      { name: 'الوظائف', href: '/about/careers' },
      { name: 'الصحافة', href: '/about/press' },
      { name: 'البيع بالجملة', href: '/about/wholesale' },
    ],
  };

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
              <span className="text-3xl font-bold text-gradient font-playfair">Value Plast</span>
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
                <span className="text-gray-300">+20 1015111112</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">hello@valueplast.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-2">تسوق آمن</h3>
              <div className="flex space-x-4 justify-center md:justify-end">
                <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1" alt="Payment methods" className="h-8 opacity-70" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 فاليوبلاست. جميع الحقوق محفوظة.</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-white transition-colors">شروط الخدمة</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">سياسة ملفات تعريف الارتباط</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">إمكانية الوصول</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}