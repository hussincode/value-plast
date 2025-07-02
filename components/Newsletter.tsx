'use client';

import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      await fetch('https://mailthis.to/hussinhesham2009@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _replyto: email,
          email: email,
          message: 'اشتراك جديد في النشرة البريدية من ValuePlast',
        }),
      });
      toast.success('شكراً لك على الاشتراك! تحقق من بريدك الإلكتروني للحصول على كود الخصم.');
      setEmail('');
    } catch (error) {
      toast.error('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="bg-white/20 rounded-full p-3 md:p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="h-8 w-8 md:h-12 md:w-12" />
            </motion.div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
            ابق على اطلاع مع ValuePlast
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4">
            اشترك في نشرتنا الإخبارية واحصل على خصم 15% على طلبك الأول بالإضافة إلى وصول حصري للمنتجات الجديدة والعروض الخاصة.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Input
              type="email"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              value={email}
              onChange={handleEmailChange}
              className="bg-white/10 border-white/30 text-white placeholder:text-white/70 flex-1 h-12 text-base"
              required
              aria-label="Email address"
              autoComplete="email"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 md:px-8 h-12 text-base whitespace-nowrap"
              aria-label={isLoading ? 'Subscribing...' : 'Subscribe to newsletter'}
            >
              {isLoading ? 'جاري الاشتراك...' : 'اشتراك'}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm opacity-90 px-4"
          >
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              <span>خصم 15% على طلبك الأول</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>شحن مجاني للطلبات فوق 50$</span>
            <span className="hidden sm:inline">•</span>
            <span>عروض حصرية</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Newsletter);