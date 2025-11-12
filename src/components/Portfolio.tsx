import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from '../i18n';
import { trackCtaClick } from '../lib/analytics';
import { scrollToSection } from '../lib/dom';

export function Portfolio() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();
  const contactEmail = t('contact.info.email.value');
  const contactFocusSelector = 'input[name="name"]';

  const createCaseStudyMailto = (projectTitle: string) => {
    const subject = encodeURIComponent(`Case Study Inquiry: ${projectTitle}`);
    const body = encodeURIComponent(
      'Hi Synerity team,\n\nI would love to learn more about this project and discuss how we could collaborate.\n\nThanks!'
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleStartProject = () => {
    trackCtaClick('portfolio_more', t('portfolio.more.cta'));
    scrollToSection('contact', { focusSelector: contactFocusSelector });
  };

  const projects = [
    {
      titleKey: 'portfolio.projects.sanchay.title',
      categoryKey: 'portfolio.projects.sanchay.category',
      descriptionKey: 'portfolio.projects.sanchay.description',
      outcomesKey: 'portfolio.projects.sanchay.outcomes',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaW5hbmNlJTIwdGVjaG5vbG9neSUyMHN5c3RlbSUyMHByb2plY3R8ZW58MXx8fHwxNzYyNjM0MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tech: [
        'Angular 19',
        'Spring Boot 3',
        'PostgreSQL',
        'Redis',
        'RabbitMQ',
        'Docker',
        'Prometheus',
        'Grafana',
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
            {t('portfolio.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-14 md:space-y-16">
          {projects.map((project, index) => {
            const title = t(project.titleKey);
            const category = t(project.categoryKey);
            const description = t(project.descriptionKey);
            const outcomes = t(project.outcomesKey).split('|').map((item) => item.trim()).filter(Boolean);

            return (
            <motion.div
              key={project.titleKey}
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
                    alt={title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.a
                        href={createCaseStudyMailto(title)}
                        target="_blank"
                        rel="noopener"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                        className="bg-white text-[#1A237E] px-6 py-3 rounded-lg flex items-center gap-2"
                        onClick={() => trackCtaClick('portfolio_case_study', title)}
                      >
                        {t('portfolio.project.cta')}
                        <ExternalLink size={16} />
                      </motion.a>
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
                    {category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
                    {description}
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
                    <h4 className="text-gray-900">{t('portfolio.outcomes.heading')}</h4>
                    {outcomes.map((outcome, idx) => (
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
            );
          })}
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
            <h3 className="text-2xl text-gray-900 mb-4">{t('portfolio.more.heading')}</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('portfolio.more.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 230, damping: 20 }}
              className="bg-[#1A237E] text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1A237E]/90 transition-colors"
              onClick={handleStartProject}
            >
              {t('portfolio.more.cta')}
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
