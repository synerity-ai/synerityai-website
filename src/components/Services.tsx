import { motion, useReducedMotion } from 'motion/react';
import { Code, Package, Cloud, Users, Lightbulb, Briefcase, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../i18n';

export function Services() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      titleKey: 'services.cards.web.title',
      descriptionKey: 'services.cards.web.description',
      featuresKey: 'services.cards.web.features',
      accentGradient: 'linear-gradient(135deg, #1A237E 0%, #3949AB 100%)',
      accentRing: 'ring-[#E8EAF6]',
    },
    {
      icon: Package,
      titleKey: 'services.cards.productEngineering.title',
      descriptionKey: 'services.cards.productEngineering.description',
      featuresKey: 'services.cards.productEngineering.features',
      accentGradient: 'linear-gradient(135deg, #283593 0%, #5C6BC0 100%)',
      accentRing: 'ring-[#E3E7FD]',
    },
    {
      icon: Cloud,
      titleKey: 'services.cards.cloud.title',
      descriptionKey: 'services.cards.cloud.description',
      featuresKey: 'services.cards.cloud.features',
      accentGradient: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
      accentRing: 'ring-[#E1E9FF]',
    },
    {
      icon: Users,
      titleKey: 'services.cards.teams.title',
      descriptionKey: 'services.cards.teams.description',
      featuresKey: 'services.cards.teams.features',
      accentGradient: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)',
      accentRing: 'ring-[#E8EBFF]',
    },
    {
      icon: Lightbulb,
      titleKey: 'services.cards.consulting.title',
      descriptionKey: 'services.cards.consulting.description',
      featuresKey: 'services.cards.consulting.features',
      accentGradient: 'linear-gradient(135deg, #2A2F7F 0%, #4A4FB8 100%)',
      accentRing: 'ring-[#E6E7FB]',
    },
    {
      icon: Briefcase,
      titleKey: 'services.cards.talent.title',
      descriptionKey: 'services.cards.talent.description',
      featuresKey: 'services.cards.talent.features',
      accentGradient: 'linear-gradient(135deg, #233285 0%, #3F51B5 100%)',
      accentRing: 'ring-[#E5E7FF]',
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
        className="relative rounded-2xl border border-slate-200/60 shadow-[0_24px_50px_-28px_rgba(23,35,100,0.55)] hover:shadow-[0_26px_54px_-26px_rgba(23,35,100,0.58)] transition-all overflow-hidden backdrop-blur-sm"
        style={{ background: 'linear-gradient(155deg, rgba(255,255,255,0.98) 0%, rgba(238,240,250,0.92) 50%, rgba(231,234,248,0.9) 100%)' }}
      >
        <div
          className="absolute inset-x-0 top-0 h-1"
          aria-hidden="true"
          style={{ background: service.accentGradient }}
        />
                {/* Corner Accent */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute -top-24 -right-16 w-48 h-48 rounded-full bg-[#1A237E]/6 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-[#1A237E]/10 to-transparent rounded-tl-[48px]" />
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
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-shadow ring-4 ${service.accentRing}`}
                      style={{ background: service.accentGradient }}
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
                <div className="relative px-6 pb-6">
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
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 opacity-90 group-hover/item:opacity-100 transition-opacity"
                          aria-hidden="true"
                          style={{ background: service.accentGradient }}
                        >
                          <CheckCircle2 className="text-white" size={9} />
                        </div>
                        <span className="group-hover/item:text-gray-900 transition-colors leading-tight">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 + 0.25, duration: 0.45, ease: 'easeOut' }}
                  className="h-1"
                  style={{ background: service.accentGradient }}
                />
              </motion.div>
            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
