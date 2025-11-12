import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const About = lazy(() => import('./components/About').then((module) => ({ default: module.About })));
const Services = lazy(() =>
  import('./components/Services').then((module) => ({ default: module.Services })),
);
const Process = lazy(() => import('./components/Process').then((module) => ({ default: module.Process })));
const TechStack = lazy(() =>
  import('./components/TechStack').then((module) => ({ default: module.TechStack })),
);
const Portfolio = lazy(() =>
  import('./components/Portfolio').then((module) => ({ default: module.Portfolio })),
);
const Contact = lazy(() => import('./components/Contact').then((module) => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then((module) => ({ default: module.Footer })));

function SectionFallback({ label }: { label: string }) {
  return (
    <div className="py-20 text-center text-gray-400" aria-live="polite" aria-busy="true">
      Loading {label}...
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        // Show scroll to top button
        setShowScrollTop(window.scrollY > 500);

        // Update active section based on scroll position
        const sections = ['home', 'about', 'services', 'process', 'tech', 'portfolio', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navigation
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="fixed left-4 top-3 -translate-y-16 focus:translate-y-0 focus:outline focus:outline-2 focus:outline-[#1A237E] bg-white text-[#1A237E] px-4 py-2 rounded-md shadow-lg z-50 transition-transform"
      >
        Skip to main content
      </a>
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main id="main-content" role="main" className="pt-16">
        {/* Hero Section */}
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>

        {/* About Section */}
        <Suspense fallback={<SectionFallback label="About section" />}>
          <About />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<SectionFallback label="Services section" />}>
          <Services />
        </Suspense>

        {/* Process Section */}
        <Suspense fallback={<SectionFallback label="Process section" />}>
          <Process />
        </Suspense>

        {/* Tech Stack Section */}
        <Suspense fallback={<SectionFallback label="Technology stack section" />}>
          <TechStack />
        </Suspense>

        {/* Portfolio Section */}
        <Suspense fallback={<SectionFallback label="Portfolio section" />}>
          <Portfolio />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<SectionFallback label="Contact section" />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<SectionFallback label="Footer" />}>
        <Footer onNavigate={handleNavigate} />
      </Suspense>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-[#1A237E] text-white rounded-full shadow-lg hover:bg-[#1A237E]/90 transition-colors z-50 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
