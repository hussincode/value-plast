'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Premium Kitchen Storage',
      subtitle: 'Organize your kitchen with style',
      image: 'https://images.pexels.com/photos/6927201/pexels-photo-6927201.jpeg',
    },
    {
      title: 'Durable Food Containers',
      subtitle: 'Keep your food fresh longer',
      image: 'https://images.pexels.com/photos/6152254/pexels-photo-6152254.jpeg',
    },
    {
      title: 'Modern Kitchen Tools',
      subtitle: 'Cook with confidence',
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
            Welcome to{' '}
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
            Discover premium plastic kitchen products that combine durability, style, and functionality for the modern home.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all">
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-blue-600 hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all"
            >
              View Catalog
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-lg font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-lg font-medium">Quality Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-medium">Free Shipping</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}