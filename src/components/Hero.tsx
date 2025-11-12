import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Code, Cloud, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from '../i18n';
import { trackCtaClick } from '../lib/analytics';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      titleKey: 'hero.highlights.productPlatforms.title',
      descriptionKey: 'hero.highlights.productPlatforms.description',
    },
    {
      icon: Cloud,
      titleKey: 'hero.highlights.cloudPlatforms.title',
      descriptionKey: 'hero.highlights.cloudPlatforms.description',
    },
    {
      icon: Users,
      titleKey: 'hero.highlights.aiAnalytics.title',
      descriptionKey: 'hero.highlights.aiAnalytics.description',
    },
  ];

  const handleCtaClick = () => {
    trackCtaClick('hero_primary', t('hero.cta'));
    onNavigate('contact');
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? { opacity: 0.3 }
              : {
                  scale: [1, 1.15, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.35, 0.2],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 18, repeat: Infinity, ease: 'easeInOut' }
          }
          className="absolute top-20 right-20 w-64 h-64 bg-[#1A237E]/5 rounded-full blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? { opacity: 0.2 }
              : {
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                  opacity: [0.2, 0.35, 0.2],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: 'easeInOut' }
          }
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
                className="inline-block mb-4 px-4 py-2 bg-[#1A237E]/10 rounded-full"
              >
                <span className="text-[#1A237E] text-sm">{t('hero.badge')}</span>
              </motion.div>
              
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl mb-6 text-gray-900 leading-tight">
                {t('hero.heading')}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                {t('hero.description')}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCtaClick}
                className="bg-[#1A237E] text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1A237E]/90 transition-colors w-full sm:w-auto mx-auto md:mx-0"
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                {t('hero.cta')}
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626908013943-df94de54984c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaW5ub3ZhdGlvbiUyMGFic3RyYWN0fGVufDF8fHx8MTc2MjUzODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t('hero.image.alt')}
                className="w-full h-auto"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#1A237E]/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <item.icon className="text-[#1A237E]" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2">{t(item.titleKey)}</h3>
              <p className="text-gray-600 text-sm">{t(item.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
