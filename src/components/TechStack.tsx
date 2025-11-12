import { motion } from 'motion/react';
import type { IconType } from 'react-icons';
import {
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaAws,
  FaMicrosoft,
  FaCode,
  FaFigma,
} from 'react-icons/fa';
import { Zap, BarChart3, Wrench } from 'lucide-react';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStorybook,
  SiSpringboot,
  SiQuarkus,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiRedis,
  SiAmazondynamodb,
  SiElasticsearch,
  SiTerraform,
  SiJenkins,
  SiKubernetes,
  SiJira,
  SiPostman,
  SiNotion,
} from 'react-icons/si';
import { useTranslation } from '../i18n';

export function TechStack() {
  const { t } = useTranslation();

  const technologies: {
    categoryKey: string;
    techs: { name: string; icon: IconType; color: string }[];
  }[] = [
    {
      categoryKey: 'tech.categories.frontend.title',
      techs: [
        { name: 'React', icon: FaReact, color: 'from-cyan-500 to-blue-500' },
        { name: 'Angular', icon: FaAngular, color: 'from-red-500 to-pink-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-800 to-gray-900' },
        { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-teal-500 to-cyan-500' },
        { name: 'Storybook', icon: SiStorybook, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      categoryKey: 'tech.categories.backend.title',
      techs: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'from-green-600 to-green-700' },
        { name: 'Node.js', icon: FaNodeJs, color: 'from-green-500 to-green-600' },
        { name: 'Quarkus', icon: SiQuarkus, color: 'from-blue-500 to-indigo-500' },
        { name: 'GraphQL', icon: SiGraphql, color: 'from-pink-500 to-purple-500' },
        { name: 'Python', icon: FaPython, color: 'from-blue-500 to-yellow-500' },
        { name: 'Java', icon: FaJava, color: 'from-orange-600 to-red-600' },
      ],
    },
    {
      categoryKey: 'tech.categories.database.title',
      techs: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-600 to-green-700' },
        { name: 'Oracle', icon: SiOracle, color: 'from-red-600 to-red-700' },
        { name: 'Redis', icon: SiRedis, color: 'from-red-500 to-orange-500' },
        { name: 'DynamoDB', icon: SiAmazondynamodb, color: 'from-blue-600 to-indigo-600' },
        { name: 'Elasticsearch', icon: SiElasticsearch, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      categoryKey: 'tech.categories.cloud.title',
      techs: [
        { name: 'AWS', icon: FaAws, color: 'from-orange-500 to-orange-600' },
        { name: 'Azure', icon: FaMicrosoft, color: 'from-blue-500 to-blue-600' },
        { name: 'Docker', icon: FaDocker, color: 'from-blue-600 to-blue-700' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'from-blue-500 to-indigo-500' },
        { name: 'Terraform', icon: SiTerraform, color: 'from-purple-600 to-purple-700' },
        { name: 'Jenkins', icon: SiJenkins, color: 'from-red-600 to-red-700' },
      ],
    },
    {
      categoryKey: 'tech.categories.tools.title',
      techs: [
        { name: 'Git', icon: FaGitAlt, color: 'from-orange-600 to-red-600' },
        { name: 'Jira', icon: SiJira, color: 'from-blue-600 to-blue-700' },
        { name: 'Figma', icon: FaFigma, color: 'from-purple-500 to-pink-500' },
        { name: 'Postman', icon: SiPostman, color: 'from-orange-500 to-orange-600' },
        { name: 'VS Code', icon: FaCode, color: 'from-blue-600 to-cyan-600' },
        { name: 'Notion', icon: SiNotion, color: 'from-purple-600 to-pink-600' },
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="techstack-heading"
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
          <h2 id="techstack-heading" className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t('tech.heading')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tech.description')}
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl text-gray-900 mb-6 text-center md:text-left">
                {t(category.categoryKey)}
              </h3>
              
              <motion.ul role="list" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      aria-hidden="true"
                    />
                    
                    <div className="text-center relative z-10">
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center`}>
                        <tech.icon className="text-white" size={24} />
                      </div>
                      <p className="text-gray-700 text-sm">{tech.name}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: t('tech.stats.technologies') },
            { number: '100+', label: t('tech.stats.projects') },
            { number: '25+', label: t('tech.stats.experts') },
            { number: '99%', label: t('tech.stats.satisfaction') },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-[#1A237E] to-[#3949AB] rounded-xl text-white shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                className="text-4xl md:text-5xl mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Our Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl text-gray-900 mb-8 text-center">{t('tech.why.heading')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">{t('tech.why.performance.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('tech.why.performance.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">{t('tech.why.scalability.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('tech.why.scalability.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">{t('tech.why.security.title')}</h4>
              <p className="text-gray-600 text-sm">
                {t('tech.why.security.description')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
