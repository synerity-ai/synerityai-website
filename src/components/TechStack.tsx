import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Boxes, 
  Layers,
  Workflow,
  Server,
  FileJson,
  Zap,
  Search,
  Container,
  Settings,
  Wrench,
  BarChart3,
  Palette,
  Mail,
  Laptop,
  MessageSquare,
  Hexagon,
  Triangle,
  type LucideIcon
} from 'lucide-react';

export function TechStack() {
  const technologies: {
    category: string;
    techs: { name: string; icon: LucideIcon; color: string }[];
  }[] = [
    {
      category: 'Frontend',
      techs: [
        { name: 'React', icon: Code2, color: 'from-cyan-500 to-blue-500' },
        { name: 'Angular', icon: Triangle, color: 'from-red-500 to-pink-500' },
        { name: 'Next.js', icon: Layers, color: 'from-gray-800 to-gray-900' },
        { name: 'TypeScript', icon: FileJson, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', icon: Palette, color: 'from-teal-500 to-cyan-500' },
        { name: 'Storybook', icon: Code2, color: 'from-purple-500 to-pink-500' },
      ],
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Spring Boot', icon: Server, color: 'from-green-600 to-green-700' },
        { name: 'Node.js', icon: Hexagon, color: 'from-green-500 to-green-600' },
        { name: 'Quarkus', icon: Server, color: 'from-blue-500 to-indigo-500' },
        { name: 'GraphQL', icon: Boxes, color: 'from-pink-500 to-purple-500' },
        { name: 'Python', icon: Code2, color: 'from-blue-500 to-yellow-500' },
        { name: 'Java', icon: Server, color: 'from-orange-600 to-red-600' },
      ],
    },
    {
      category: 'Database',
      techs: [
        { name: 'PostgreSQL', icon: Database, color: 'from-blue-600 to-blue-700' },
        { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-700' },
        { name: 'Oracle', icon: Database, color: 'from-red-600 to-red-700' },
        { name: 'Redis', icon: Database, color: 'from-red-500 to-orange-500' },
        { name: 'DynamoDB', icon: Zap, color: 'from-blue-600 to-indigo-600' },
        { name: 'ElasticSearch', icon: Search, color: 'from-yellow-500 to-orange-500' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      techs: [
        { name: 'AWS', icon: Cloud, color: 'from-orange-500 to-orange-600' },
        { name: 'Azure', icon: Cloud, color: 'from-blue-500 to-blue-600' },
        { name: 'Docker', icon: Container, color: 'from-blue-600 to-blue-700' },
        { name: 'Kubernetes', icon: Hexagon, color: 'from-blue-500 to-indigo-500' },
        { name: 'Terraform', icon: Boxes, color: 'from-purple-600 to-purple-700' },
        { name: 'Jenkins', icon: Settings, color: 'from-red-600 to-red-700' },
      ],
    },
    {
      category: 'Tools',
      techs: [
        { name: 'Git', icon: GitBranch, color: 'from-orange-600 to-red-600' },
        { name: 'Jira', icon: BarChart3, color: 'from-blue-600 to-blue-700' },
        { name: 'Zeplin', icon: Palette, color: 'from-purple-500 to-pink-500' },
        { name: 'Postman', icon: Mail, color: 'from-orange-500 to-orange-600' },
        { name: 'VS Code', icon: Laptop, color: 'from-blue-600 to-cyan-600' },
        { name: 'Notion', icon: MessageSquare, color: 'from-purple-600 to-pink-600' },
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
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our stack is built for speed, scalability, and reliability
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl text-gray-900 mb-6 text-center md:text-left">
                {category.category}
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
            { number: '50+', label: 'Technologies' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '25+', label: 'Expert Developers' },
            { number: '99%', label: 'Client Satisfaction' },
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
          <h3 className="text-3xl text-gray-900 mb-8 text-center">Why Our Technology Stack?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">High Performance</h4>
              <p className="text-gray-600 text-sm">
                Optimized for speed and efficiency to deliver the best user experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">Scalability</h4>
              <p className="text-gray-600 text-sm">
                Built to grow with your business from startup to enterprise
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A237E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-[#1A237E]" size={32} />
              </div>
              <h4 className="text-gray-900 mb-2">Security First</h4>
              <p className="text-gray-600 text-sm">
                Industry-standard security practices and regular updates
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
