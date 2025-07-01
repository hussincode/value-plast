'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      name: 'حاويات التخزين',
      description: 'حاويات محكمة الإغلاق لجميع احتياجات التخزين',
      image: '/pink bottels.png',
      count: '+50 منتج',
    },
    {
      name: 'أدوات المطبخ',
      description: 'أدوات متينة للطهي اليومي',
      image: '/potato.png',
      count: '+30 منتج',
    },
    {
      name: 'أدوات تحضير الطعام',
      description: 'اجعل تحضير الطعام سريعاً وسهلاً',
      image: '/ber.png',
      count: '+25 منتج',
    },
    {
      name: 'ملحقات المائدة',
      description: 'قطع أنيقة لمائدتك',
      image: '/poll.png',
      count: '+40 منتج',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-gray-900">
            تسوق حسب الفئة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعتنا الشاملة من منتجات المطبخ البلاستيكية المصممة للحياة العصرية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 p-0 font-semibold"
                  >
                    استكشف المجموعة
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}