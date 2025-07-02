'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { useState } from 'react';

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const products = [
    {
      id: 1,
      name: 'حاوية تخزين الطوابل',
      description: 'حاوية بلاستيكية متينة لحفظ الطوابل.',
      image: '/blue botels.png',
      images: ['/blue botels.png', '/pink 2.png', '/green 2.png'],
      price: 380,
      quantity: 2,
      rating: 4.9,
      reviews: 124,
      category: 'التخزين',
      badge: 'الأكثر مبيعاً',
    },
    {
      id: 2,
      name: 'طبق التسالي',
      description: 'طبق التسالي للطعام.',
      image: '/poll.png',
      images: ['/poll.png'],
      price: 20,
    },
    {
      id: 3,
      name: 'ادوات تحضير الطعام',
      description: 'ملاعق قياس.',
      image: '/ber.png',
      images: ['/ber.png'],
      price: 25,
      rating: 4.7,
      reviews: 87,
      category: 'أدوات التحضير',
      badge: 'جديد',
    },
    {
      id: 4,
      name: 'حافظه البطاطا',
      description: 'حافظه البطاطا.',
      image: '/potato.png',
      price: 15,
      rating: 4.8,
      reviews: 98,
      category: 'الأدوات',

    },
    {
      id: 5,
      name: 'حاوية تخزين الطوابل',
      description: 'حاوية بلاستيكية متينة لحفظ الطوابل.',
      image: '/pink bottel.png',
      images: ['/pink bottel.png', '/green bottel.png', '/blue bottel.png'],
      price: 260,
      quantity: 1,
      rating: 4.9,
      reviews: 124,
      category: 'التخزين',
      badge: 'الأكثر مبيعاً',
    },
    {
      id: 6,
      name: 'منتج جديد قريباً',
      description: 'ترقبوا منتجنا الجديد المميز قريباً!',
      image: '/cristal.png',
      images: ['/cristal.png'],
      comingSoon: true,
      badge: 'قريباً',
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
      case 'قريباً':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const images = selectedProduct ? (selectedProduct.images || [selectedProduct.image]) : [];

  return (
    <section id="products" className="py-20 bg-white">
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="relative max-w-lg w-full p-6">
              <div className="absolute inset-0 w-full h-full bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }} />
              <div className="relative z-10 bg-transparent rounded-lg">
                <button onClick={() => { setSelectedProduct(null); setCurrentImage(0); }} className="absolute top-2 left-2 text-gray-500 hover:text-red-500 text-2xl">×</button>
                <h2 className="text-2xl font-bold mb-4 text-center">{selectedProduct.name}</h2>
                <div className="flex flex-col items-center gap-4">
                  {/* Main image with switch buttons */}
                  <div className="flex items-center justify-center mb-2 gap-6">
                    <button
                      onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                      className="backdrop-blur-lg bg-white/30 border border-white/40 hover:bg-blue-100 text-blue-700 rounded-full p-5 shadow-lg text-3xl font-bold transition-all duration-200"
                      aria-label="Previous image"
                    >
                      &#8594;
                    </button>
                    <img
                      src={images[currentImage]}
                      alt={selectedProduct.name}
                      className="w-64 h-64 object-cover rounded"
                    />
                    <button
                      onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                      className="backdrop-blur-lg bg-white/30 border border-white/40 hover:bg-blue-100 text-blue-700 rounded-full p-5 shadow-lg text-3xl font-bold transition-all duration-200"
                      aria-label="Next image"
                    >
                      &#8592;
                    </button>
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-2 justify-center">
                    {images.map((img: string, idx: number) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`صورة إضافية ${idx + 1}`}
                        className={`w-16 h-16 object-cover rounded border cursor-pointer ${currentImage === idx ? 'border-blue-500' : ''}`}
                        onClick={() => setCurrentImage(idx)}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-2 text-center">{selectedProduct.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group${product.comingSoon ? '' : ' cursor-pointer'}`}
              onClick={() => {
                if (!product.comingSoon) setSelectedProduct(product);
              }}
            >
              <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${product.comingSoon ? 'border-2 border-yellow-400 animate-pulse-fast' : ''}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {product.badge}
                    </div>
                  )}
                  {/* Wishlist Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-md"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </Button>
                </div>
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-center mb-2">{product.description}</p>
                  )}
                  {product.price && (
                    <span className="text-2xl font-bold text-blue-600">{product.price} جنيه</span>
                  )}
                  {product.quantity && (
                    <p className="text-green-700 font-semibold mt-1">عدد الدور: {product.quantity}</p>
                  )}
                  {/* Ratings */}
                  {product.rating && (
                    <div className="flex items-center space-x-1 mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      {product.reviews && <span className="text-sm text-gray-500">({product.reviews})</span>}
                    </div>
                  )}
                  {/* Category */}
                  {product.category && (
                    <span className="text-sm text-blue-600 font-medium mt-1">{product.category}</span>
                  )}
                  {/* Coming Soon Button */}
                  {product.comingSoon && (
                    <button className="mt-4 px-4 py-2 bg-yellow-400 text-yellow-900 font-bold rounded hover:bg-yellow-500 transition">أشعرني عند التوفر</button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}