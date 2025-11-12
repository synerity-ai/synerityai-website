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
    techs: { name: string; icon: IconType }[];
  }[] = [
    {
      categoryKey: 'tech.categories.frontend.title',
      techs: [
        { name: 'React', icon: FaReact },
        { name: 'Angular', icon: FaAngular },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Storybook', icon: SiStorybook },
      ],
    },
    {
      categoryKey: 'tech.categories.backend.title',
      techs: [
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Quarkus', icon: SiQuarkus },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
      ],
    },
    {
      categoryKey: 'tech.categories.database.title',
      techs: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Oracle', icon: SiOracle },
        { name: 'Redis', icon: SiRedis },
        { name: 'DynamoDB', icon: SiAmazondynamodb },
        { name: 'Elasticsearch', icon: SiElasticsearch },
      ],
    },
    {
      categoryKey: 'tech.categories.cloud.title',
      techs: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Terraform', icon: SiTerraform },
        { name: 'Jenkins', icon: SiJenkins },
      ],
    },
    {
      categoryKey: 'tech.categories.tools.title',
      techs: [
        { name: 'Git', icon: FaGitAlt },
        { name: 'Jira', icon: SiJira },
        { name: 'Figma', icon: FaFigma },
        { name: 'Postman', icon: SiPostman },
        { name: 'VS Code', icon: FaCode },
        { name: 'Notion', icon: SiNotion },
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
                  <div className="text-center relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center bg-[#1A237E] transition-colors duration-300 group-hover:bg-[#3949AB]">
                      <tech.icon size={24} color="#FFFFFF" />
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
