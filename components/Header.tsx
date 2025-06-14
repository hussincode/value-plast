'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartProvider';
import { CartSheet } from '@/components/CartSheet';

// Debounce function to limit how often a function can be called
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { state } = useCart();

  // Memoize scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Memoize scroll functions
  const smoothScrollTo = useCallback((element: Element | null) => {
    if (!element) return;
    
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  const scrollToFooter = useCallback(() => {
    const footer = document.querySelector('footer');
    smoothScrollTo(footer);
    setIsMenuOpen(false);
  }, [smoothScrollTo]);

  const scrollToNewsletter = useCallback(() => {
    const newsletter = document.querySelector('#newsletter');
    smoothScrollTo(newsletter);
    setIsMenuOpen(false);
  }, [smoothScrollTo]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#categories', label: 'Categories' },
    { href: '#products', label: 'Products' },
    { onClick: scrollToNewsletter, label: 'Contact' },
    { onClick: scrollToFooter, label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold text-gradient font-playfair">ValuePlast</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                  </button>
                )
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {state.itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {state.itemCount}
                    </span>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default memo(Header);