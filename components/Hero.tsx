'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'تخزين المطبخ المميز',
      subtitle: 'نظم مطبخك بأناقة',
      image: 'https://images.pexels.com/photos/6927201/pexels-photo-6927201.jpeg',
    },
    {
      title: 'حاويات الطعام المتينة',
      subtitle: 'احتفظ بطعامك طازجاً لفترة أطول',
      image: 'https://images.pexels.com/photos/6152254/pexels-photo-6152254.jpeg',
    },
    {
      title: 'أدوات المطبخ الحديثة',
      subtitle: 'اطبخ بثقة',
      image: 'https://images.pexels.com/photos/8176590/pexels-photo-8176590.jpeg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            مرحباً بك في{' '}
            <span className="inline-block md:hidden" style={{ width: '11px' }}></span>
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            ValuePlast
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            اكتشف منتجات المطبخ البلاستيكية المميزة التي تجمع بين المتانة والأناقة والوظائفية للمنزل العصري.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-blue-600 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all"
              onClick={() => {
                const section = document.getElementById('products');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              عرض الكتالوج
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2">
              {/* Star rating bar with half-star */}
              {[1,2,3,4].map((n) => (
                <svg key={n} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFC107" className="w-6 h-6" style={{transform: 'scaleX(-1)'}}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              )).reverse()}
              {/* Half star */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6" style={{transform: 'scaleX(-1)'}}>
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#FFC107" />
                    <stop offset="50%" stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            </div>
            <span className="text-lg font-medium ml-2">تقييم 4.9/5</span>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-lg font-medium">ضمان الجودة</span>
            </div>
          </motion.div>
        </motion.div>


      </div>


    </section>
  );
}