'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: '1',
      name: 'مجموعة التخزين المميزة',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 124,
      image: '/red bottels.png',
      category: 'التخزين',
      badge: 'الأكثر مبيعاً',
    },
    {
      id: '2',
      name: 'طقم أدوات الشيف',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.8,
      reviews: 98,
      image: '/potato.png',
      category: 'الأدوات',
      badge: 'تخفيض',
    },
    {
      id: '3',
      name: 'أوعية تحضير الطعام',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.7,
      reviews: 87,
      image: '/ber.png',
      category: 'أدوات التحضير',
      badge: 'جديد',
    },
  ];

  const handleAddToCart = (product: any) => {
    // Cart functionality removed
    console.log('Product would be added to cart:', product.name);
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'الأكثر مبيعاً':
        return 'bg-red-500';
      case 'تخفيض':
        return 'bg-orange-500';
      case 'جديد':
        return 'bg-green-500';
      case 'مميز':
        return 'bg-purple-500';
      case 'قيمة':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-gray-900">
            المنتجات المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف أساسيات المطبخ الأكثر شعبية لدينا، يحبها آلاف العملاء حول العالم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {product.badge}
                  </div>
                  
                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-md"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </Button>
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-gray-900 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      عرض
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
            عرض جميع المنتجات
          </Button>
        </motion.div>
      </div>
    </section>
  );
}