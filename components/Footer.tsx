import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Shop': [
      { name: 'All Products', href: '/products' },
      { name: 'Storage Containers', href: '/products/storage' },
      { name: 'Kitchen Utensils', href: '/products/utensils' },
      { name: 'Food Prep Tools', href: '/products/prep-tools' },
      { name: 'Dining Accessories', href: '/products/dining' },
      { name: 'New Arrivals', href: '/products/new' },
    ],
    'Support': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
    ],
    'About': [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Mission & Values', href: '/about/mission' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Press', href: '/about/press' },
      { name: 'Wholesale', href: '/about/wholesale' },
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
              <span className="text-3xl font-bold text-gradient font-playfair">ValuePlast</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for premium kitchen plastic products. We combine durability, functionality, and style to enhance your cooking experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Kitchen Street, Culinary City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
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
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
              <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
              <div className="flex space-x-4 justify-center md:justify-end">
                <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=1" alt="Payment methods" className="h-8 opacity-70" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 ValuePlast. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}