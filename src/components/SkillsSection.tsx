import { motion } from 'motion/react';
import { Code2, Database, Layout, Zap } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Django', level: 60 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express', level: 95 },
        { name: 'MongoDB', level: 95 },
        { name: 'MySQL', level: 70 },
      ]
    },
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'Python', level: 60 },
        { name: 'C++', level: 70 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Meta Cloud', level: 80 },
        { name: 'AWS', level: 65 },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills developed through projects and continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-900/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
           { value: '8+', label: 'Projects Completed' },
           { value: '10+', label: 'Technologies Used' },
           { value: '790+', label: 'Commits This Year' },
           { value: '14+', label: 'Months of Industry Experience' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-3xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
