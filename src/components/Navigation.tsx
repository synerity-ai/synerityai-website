import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../i18n';
import { trackNavigation } from '../lib/analytics';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('navigation.items.home') },
    { id: 'about', label: t('navigation.items.about') },
    { id: 'services', label: t('navigation.items.services') },
    { id: 'process', label: t('navigation.items.process') },
    { id: 'tech', label: t('navigation.items.tech') },
    { id: 'portfolio', label: t('navigation.items.portfolio') },
    { id: 'contact', label: t('navigation.items.contact') },
  ];

  const handleNavigate = (location: string, target: string) => {
    trackNavigation(location, target);
    onNavigate(target);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="navigation"
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('header_logo', 'home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#1A237E] to-[#3949AB] rounded-lg flex items-center justify-center">
              <span className="text-white">S</span>
            </div>
            <div>
              <h1 className="text-[#1A237E]">{t('navigation.brand.name')}</h1>
              <p className="text-xs text-gray-600">{t('navigation.brand.suffix')}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate('header', item.id)}
                className={`relative text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1A237E]'
                    : 'text-gray-600 hover:text-[#1A237E]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1A237E]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A237E]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t('navigation.mobile.close') : t('navigation.mobile.open')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-primary-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
            id="mobile-primary-navigation"
          >
            <div className="container mx-auto py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                  handleNavigate('mobile_menu', item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#1A237E] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
