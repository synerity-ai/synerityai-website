import { motion, useReducedMotion } from 'motion/react';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into your credit bureau vision, compliance landscape, and data estate.',
      details: [
        'Stakeholder & regulator interviews',
        'Journey and data lineage mapping',
        'Gap analysis vs. bureau mandates',
        'Technical feasibility & ROI modelling',
      ],
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive, transparent experiences that embed trust into every interaction.',
      details: [
        'Service blueprints & prototypes',
        'Accessibility + localisation audits',
        'Design system & microcopy guidelines',
        'User testing with compliance overlays',
      ],
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building resilient, secure platforms with enterprise-grade governance.',
      details: [
        'Agile delivery with bureau SMEs',
        'Automated security & quality gates',
        'Performance and load benchmarking',
        'Data privacy and lineage enforcement',
      ],
    },
    {
      icon: Rocket,
      title: 'Delivery',
      description: 'Seamless launch and continuous optimisation to keep you compliant and competitive.',
      details: [
        'Production cutover & hypercare',
        'Playbooks and audit-ready docs',
        'Training for ops and support teams',
        'Evolution roadmap & managed services',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-16 md:py-20 bg-white"
      aria-labelledby="process-heading"
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
          <h2 id="process-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers results
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div
              className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A237E] via-blue-400 to-[#1A237E]"
              aria-hidden="true"
            />
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.15, duration: 0.55, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    whileHover={prefersReducedMotion ? { scale: 1.03 } : { scale: 1.08 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative z-10 w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#1A237E] to-[#3949AB] rounded-full flex flex-col items-center justify-center text-white shadow-xl"
                  >
                    <step.icon size={48} className="mb-2" />
                    <span className="text-sm opacity-80">Step {index + 1}</span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={prefersReducedMotion ? { y: -2 } : { y: -5 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1 h-1 bg-[#1A237E] rounded-full mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: index * 0.15 + 0.25, duration: 0.4, ease: 'easeOut' }}
                      className="absolute top-24 -right-4 transform -translate-y-1/2 text-[#1A237E]"
                      aria-hidden="true"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 3l-1.4 1.4 10.6 10.6H3v2h22.2L14.6 27.6 16 29l13-13z" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12, duration: 0.45, ease: 'easeOut' }}
              className="relative"
            >
              <div className="flex gap-4 sm:gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={prefersReducedMotion ? { scale: 1.04 } : { scale: 1.08 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1A237E] to-[#3949AB] rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <step.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-[#1A237E] to-blue-300 mx-auto mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 sm:pb-8">
                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs sm:text-sm text-[#1A237E] uppercase tracking-wide">Step {index + 1}</span>
                      <h3 className="text-gray-900 text-base sm:text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1 h-1 bg-[#1A237E] rounded-full mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6">
            Every project is unique. We adapt our process to fit your specific needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 230, damping: 20 }}
            className="bg-[#1A237E] text-white px-8 py-4 rounded-lg hover:bg-[#1A237E]/90 transition-colors"
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
