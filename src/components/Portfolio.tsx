import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const prefersReducedMotion = useReducedMotion();

  const projects = [
    {
      title: 'Nexus',
      category: 'Enterprise Platform',
      description: 'Enterprise credit operations hub consolidating onboarding, dispute resolution, and compliance dashboards.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NjI1NzM0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'AWS'],
      outcomes: [
        '40% faster case resolution time',
        'Real-time bureau score reconciliation',
        'Automated audit-ready reporting',
      ],
    },
    {
      title: 'Streamify',
      category: 'Media Platform',
      description: 'White-labeled credit education and content marketplace for a leading lending consortium.',
      image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI1Mzg1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Azure'],
      outcomes: [
        '1M+ monthly active consumers',
        'Consent-aware personalization engine',
        '99.9% uptime across 8 regions',
      ],
    },
    {
      title: 'FinCore',
      category: 'FinTech Solution',
      description: 'Regtech decisioning platform with AI-assisted fraud analytics and bureau data ingestion.',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2MjUxMjg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: ['Vue.js', 'Java', 'PostgreSQL', 'Docker'],
      outcomes: [
        'Bank-grade security with zero findings',
        'Real-time fraud scoring <120ms latency',
        'Multi-country compliance readiness',
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 md:py-20 bg-white"
      aria-labelledby="portfolio-heading"
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
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world projects that showcase our expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-14 md:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.15, duration: 0.55, ease: 'easeOut' }}
              className="grid gap-8 lg:gap-16 items-center md:grid-cols-2"
            >
              {/* Image */}
              <motion.div
                whileHover={prefersReducedMotion ? { scale: 1.01 } : { scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                        className="bg-white text-[#1A237E] px-6 py-3 rounded-lg flex items-center gap-2"
                      >
                        View Case Study
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''} text-center md:text-left`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.5, ease: 'easeOut' }}
                >
                  <span className="inline-block px-4 py-2 bg-[#1A237E]/10 text-[#1A237E] rounded-full text-sm mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-6" role="list">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Outcomes */}
                  <div className="space-y-3">
                    <h4 className="text-gray-900">Key Outcomes:</h4>
                    {project.outcomes.map((outcome, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.15 + 0.3 + idx * 0.08, duration: 0.4, ease: 'easeOut' }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-[#1A237E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly working on exciting new projects. 
              Check back soon to see more of our work or get in touch to discuss your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 230, damping: 20 }}
              className="bg-[#1A237E] text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1A237E]/90 transition-colors"
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
