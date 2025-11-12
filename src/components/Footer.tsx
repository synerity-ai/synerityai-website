import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'Our Process', id: 'process' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'Contact', id: 'contact' },
    ],
    services: [
      { label: 'Web Development', id: 'services' },
      { label: 'Product Engineering', id: 'services' },
      { label: 'Cloud & DevOps', id: 'services' },
      { label: 'Consulting', id: 'services' },
    ],
    resources: [
      { label: 'Tech Stack', id: 'tech' },
      { label: 'Blog', id: 'blog' },
      { label: 'Careers', id: 'careers' },
      { label: 'Privacy Policy', id: 'privacy' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Github, label: 'GitHub', url: '#' },
    { icon: Facebook, label: 'Facebook', url: '#' },
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
                <h3 className="text-xl">Synerity</h3>
                <p className="text-sm text-gray-400">Pvt. Ltd.</p>
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering companies with synergy and integrity. Building technology solutions 
              that drive business growth and digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1A237E] rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
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
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
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
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
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
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
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
              © 2025 Synerity Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
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
