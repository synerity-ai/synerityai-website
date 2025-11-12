import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import { useTranslation } from '../i18n';
import { trackNavigation, trackSocialClick } from '../lib/analytics';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { labelKey: 'footer.links.about', id: 'about' },
      { labelKey: 'footer.links.process', id: 'process' },
      { labelKey: 'footer.links.portfolio', id: 'portfolio' },
      { labelKey: 'footer.links.contact', id: 'contact' },
    ],
    services: [
      { labelKey: 'footer.links.webDevelopment', id: 'services' },
      { labelKey: 'footer.links.productEngineering', id: 'services' },
      { labelKey: 'footer.links.cloudDevops', id: 'services' },
      { labelKey: 'footer.links.consulting', id: 'services' },
    ],
    resources: [
      { labelKey: 'footer.links.techStack', id: 'tech' },
      { labelKey: 'footer.links.blog', id: 'blog' },
      { labelKey: 'footer.links.careers', id: 'careers' },
      { labelKey: 'footer.links.privacy', id: 'privacy' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, labelKey: 'footer.social.linkedin', url: '#' },
    { icon: Twitter, labelKey: 'footer.social.twitter', url: '#' },
    { icon: Github, labelKey: 'footer.social.github', url: '#' },
    { icon: Facebook, labelKey: 'footer.social.facebook', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#3949AB] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl">{t('navigation.brand.name')}</h3>
                <p className="text-sm text-gray-400">{t('navigation.brand.suffix')}</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.brand.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.labelKey}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1A237E] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={t(social.labelKey)}
                  onClick={() => trackSocialClick(social.labelKey)}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4">{t('footer.sections.company.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => {
                      trackNavigation('footer_company', link.id);
                      onNavigate(link.id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4">{t('footer.sections.services.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => {
                      trackNavigation('footer_services', link.id);
                      onNavigate(link.id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4">{t('footer.sections.resources.title')}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => {
                      trackNavigation('footer_resources', link.id);
                      onNavigate(link.id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.bottom.copyright')}
            </p>
            <div className="flex gap-6">
              <button
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => trackNavigation('footer_legal', 'terms')}
              >
                {t('footer.links.terms')}
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => trackNavigation('footer_legal', 'privacy')}
              >
                {t('footer.links.privacy')}
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={() => trackNavigation('footer_legal', 'cookie')}
              >
                {t('footer.links.cookie')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-[#1A237E] via-blue-500 to-[#3949AB]" />
    </footer>
  );
}
