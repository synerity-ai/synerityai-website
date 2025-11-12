import { motion } from 'motion/react';
import { Target, Eye, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and efficiency.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted technology partner for companies seeking digital transformation.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build lasting relationships through transparency, honesty, and ethical practices.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving with the latest technologies to deliver cutting-edge solutions.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            Integrity-led product engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Synerity partners with bureaus, banks, and fintechs to launch trust-centric digital platforms that comply, scale, and delight.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwdGVhbXxlbnwxfHx8fDE3NjI1ODI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Synerity Team"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in Pune, India, Synerity Pvt. Ltd. was born from a simple belief:
              <span className="font-medium text-gray-900"> technology built with integrity lasts longer.</span>
              We marry decades of credit-domain expertise with modern engineering to help institutions modernize responsibly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our name reflects our core philosophy—creating <span className="text-[#1A237E]">synergy</span> between innovation and regulation,
              while upholding uncompromising <span className="text-[#1A237E]">integrity</span> in data stewardship, security, and delivery.
            </p>
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-[#1A237E]">
              <p className="text-gray-700 italic">
                "Technology built with integrity lasts longer."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#1A237E] rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <value.icon className="text-white" size={24} />
              </div>
              <h4 className="text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
