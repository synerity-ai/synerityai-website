import { motion, useReducedMotion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../i18n';
import { trackContactSubmission, trackCtaClick } from '../lib/analytics';
import { submitContactForm } from '../lib/webhook';

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await submitContactForm(formData);

      trackContactSubmission('contact_form');
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Webhook submission failed', error);
      setSubmitError(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info.email.label'),
      value: t('contact.info.email.value'),
      link: `mailto:${t('contact.info.email.value')}`,
    },
    {
      icon: Phone,
      label: t('contact.info.phone.label'),
      value: t('contact.info.phone.value'),
      link: `tel:${t('contact.info.phone.value').replace(/[^+\d]/g, '')}`,
    },
    {
      icon: MapPin,
      label: t('contact.info.location.label'),
      value: t('contact.info.location.value'),
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="contact-heading"
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
          <h2 id="contact-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl text-gray-900 mb-6">{t('contact.form.heading')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t('contact.form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-all"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t('contact.form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-all"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">
                  {t('contact.form.company.label')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-all"
                  placeholder={t('contact.form.company.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t('contact.form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A237E] focus:border-transparent transition-all resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                className="w-full bg-[#1A237E] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1A237E]/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('common.loading') : t('contact.form.submit')}
                <Send size={20} />
              </motion.button>
            </form>
            {submitSuccess && (
              <p className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                {t('contact.form.success')}
              </p>
            )}
            {submitError && (
              <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                {submitError}
              </p>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-12 lg:space-y-14"
          >
            {/* Contact Info Cards */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.45, ease: 'easeOut' }}
                  whileHover={prefersReducedMotion ? { x: 3 } : { x: 5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1A237E]/10 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <info.icon className="text-[#1A237E]" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 hover:text-[#1A237E] transition-colors"
                          onClick={() => trackCtaClick('contact_info', info.label)}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.25, duration: 0.45, ease: 'easeOut' }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  title={t('contact.map.title')}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.18174191178!2d73.69815229999999!3d18.52461475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Download Brochure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="w-full bg-gradient-to-r from-[#1A237E] to-[#3949AB] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                onClick={() => trackCtaClick('contact_resources', t('contact.resources.button'))}
              >
                <Download size={20} />
                {t('contact.resources.button')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hire Developers CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl mb-4">{t('contact.hire.heading')}</h3>
            <p className="text-xl mb-8 text-blue-100">
              {t('contact.hire.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all"
                onClick={() => trackCtaClick('contact_hire_primary', t('contact.hire.primary'))}
              >
                {t('contact.hire.primary')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 230, damping: 20 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => trackCtaClick('contact_hire_secondary', t('contact.hire.secondary'))}
              >
                {t('contact.hire.secondary')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
