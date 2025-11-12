import { motion, useReducedMotion } from 'motion/react';
import { Code, Package, Cloud, Users, Lightbulb, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../i18n';
import { trackCtaClick } from '../lib/analytics';

export function Services() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      titleKey: 'services.cards.web.title',
      descriptionKey: 'services.cards.web.description',
      featuresKey: 'services.cards.web.features',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Package,
      titleKey: 'services.cards.productEngineering.title',
      descriptionKey: 'services.cards.productEngineering.description',
      featuresKey: 'services.cards.productEngineering.features',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Cloud,
      titleKey: 'services.cards.cloud.title',
      descriptionKey: 'services.cards.cloud.description',
      featuresKey: 'services.cards.cloud.features',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      titleKey: 'services.cards.teams.title',
      descriptionKey: 'services.cards.teams.description',
      featuresKey: 'services.cards.teams.features',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Lightbulb,
      titleKey: 'services.cards.consulting.title',
      descriptionKey: 'services.cards.consulting.description',
      featuresKey: 'services.cards.consulting.features',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Briefcase,
      titleKey: 'services.cards.talent.title',
      descriptionKey: 'services.cards.talent.description',
      featuresKey: 'services.cards.talent.features',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const features = t(service.featuresKey).split('|').map((item) => item.trim()).filter(Boolean);

            return (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ background: `linear-gradient(135deg, rgba(26,35,126,0.12), rgba(26,35,126,0))` }}
                aria-hidden="true"
              />
              
              {/* Card Container */}
              <motion.div
                whileHover={prefersReducedMotion ? { y: -3 } : { y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative bg-white rounded-xl border border-gray-100 shadow-[0_12px_24px_-12px_rgba(26,35,126,0.25)] hover:shadow-[0_18px_36px_-12px_rgba(26,35,126,0.28)] transition-all overflow-hidden"
              >
                {/* Corner Accent */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute -top-20 -right-12 w-40 h-40 rounded-full bg-[#1A237E]/6 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1A237E]/10 to-transparent rounded-tl-[48px]" />
                </div>

                {/* Card Header with Icon and Title */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={
                        prefersReducedMotion
                          ? { scale: 1.05 }
                          : { rotate: 360, scale: 1.08 }
                      }
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow ring-4 ring-[#1A237E]/5`}
                    >
                      <service.icon className="text-white" size={24} />
                    </motion.div>
                    <h3 className="text-gray-900 group-hover:text-[#1A237E] transition-colors text-[1.1rem] font-semibold">
                      {t(service.titleKey)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t(service.descriptionKey)}
                  </p>
                </div>

                {/* Features List with Enhanced Styling */}
                <div className="relative px-6 pb-4">
                  <motion.ul
                    role="list"
                    className="space-y-2"
                  >
                    {features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.08 + idx * 0.04, duration: 0.4, ease: 'easeOut' }}
                        className="flex items-center gap-3 text-gray-700 text-sm group/item"
                      >
                        <div className={`w-4 h-4 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 opacity-90 group-hover/item:opacity-100 transition-opacity`} aria-hidden="true">
                          <CheckCircle2 className="text-white" size={9} />
                        </div>
                        <span className="group-hover/item:text-gray-900 transition-colors leading-tight">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Learn More Button */}
                <div className="relative px-6 pb-6 pt-0 border-t border-gray-100">
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-[#1A237E] transition-colors font-medium"
                    onClick={() => trackCtaClick(`services_${service.titleKey}_learn_more`, t('services.cards.learnMore'))}
                  >
                    <span>{t('services.cards.learnMore')}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 + 0.25, duration: 0.45, ease: 'easeOut' }}
                  className={`h-1 bg-gradient-to-r ${service.color}`}
                />
              </motion.div>
            </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <motion.div
              animate={
                prefersReducedMotion
                  ? { opacity: 0.2 }
                  : { scale: [1, 1.15, 1], rotate: [0, 90, 0], opacity: [0.15, 0.3, 0.15] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 18, repeat: Infinity, ease: 'easeInOut' }
              }
              className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={
                prefersReducedMotion
                  ? { opacity: 0.2 }
                  : { scale: [1.1, 1, 1.1], rotate: [0, -90, 0], opacity: [0.15, 0.3, 0.15] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 16, repeat: Infinity, ease: 'easeInOut' }
              }
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative bg-gradient-to-r from-[#1A237E] via-[#3949AB] to-[#1A237E] rounded-2xl p-12 text-white shadow-2xl overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              >
                <h3 className="text-3xl md:text-4xl mb-4">{t('services.cta.heading')}</h3>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  {t('services.cta.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#1A237E] px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                onClick={() => trackCtaClick('services_primary', t('services.cta.primary'))}
                >
                  {t('services.cta.primary')}
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                onClick={() => trackCtaClick('services_secondary', t('services.cta.secondary'))}
                >
                  {t('services.cta.secondary')}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
