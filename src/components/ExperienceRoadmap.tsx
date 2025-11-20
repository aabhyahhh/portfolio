import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { useState } from 'react';

interface TimelineItem {
  id: number;
  type: 'education' | 'work' | 'achievement' | 'project';
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  icon: any;
}

export function ExperienceRoadmap() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const timeline: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech CS(Data Science and Engineering)',
      organization: 'Manipal University Jaipur',
      period: '2022 - 2026',
      description: 'Pursuing B.Tech CSE (DSE) while building campus-scale products like SERO; awarded the Student Excellence Award and secured 1st place at Trailblazers for innovative web development.',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Database Systems'],
      icon: GraduationCap
    },
    {
      id: 2,
      type: 'work',
      title: 'Software Developer',
      organization: 'Cibos Techno Solutions Pvt Ltd.',
      period: 'Dec 2024 - Oct 2025',
      description: 'Built and shipped Laari Khojo, a live vendor-discovery platform used by 2,000+ users, integrating WhatsApp automation, interactive maps, and full MERN-stack dashboards to reduce manual workflows by 60%.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Node.js', 'Express.js', 'MongoDB', 'WhatsApp API', 'Maptiler', 'RestAPI'],
      icon: Briefcase
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Runner Up StartUp Weekend Jaipur 2024',
      organization: 'Techstars Startup Weekend Jaipur',
      period: 'September 2024',
      description: 'Led a 5-member team to build SERO, a sponsorship marketplace connecting 15+ college clubs with brands like Red Bull using AI-driven analytics; secured ₹30,000 funding and AIC MUJ pre-incubation support.',
      skills: ['Team Leadership', 'AI/ML', 'Node.js', 'Express.js', 'MongoDB', 'RestAPI'],
      icon: Award
    },
    {
      id: 4,
      type: 'work',
      title: 'Software Intern',
      organization: 'JSR Net Sol',
      period: 'June 2024 - Oct 2024',
      description: 'Developed a modular Django-based CRM dashboard with Restful APIs, enabling smoother sales tracking and automated PO-linked target monitoring for internal teams.',
      skills: ['Django', 'Python', 'REST APIs', 'MySQL', 'Docker', 'Git', 'CI/CD'],
      icon: Code
    },
    {
      id: 1,
      type: 'education',
      title: 'Schooling',
      organization: 'Venkateshwar International School',
      period: '2020 - 2022',
      description: 'Served as Design & Social Media Head across student-led initiatives, leading campaigns that raised ₹50,000+ for community relief efforts and managed multi-platform outreach.',
      skills: ['Design', 'Social Media', 'Leadership', 'Event Management'],
      icon: GraduationCap
    }
  ];

  const getColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education': return 'from-cyan-500 to-blue-500';
      case 'work': return 'from-green-500 to-emerald-500';
      case 'achievement': return 'from-purple-500 to-pink-500';
      case 'project': return 'from-orange-500 to-red-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From student to developer - here's my path of continuous learning and growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-cyan-400 text-sm">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm mb-4">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Central Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      scale: hoveredId === item.id ? 1.2 : 1,
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${getColor(item.type)} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mt-12 flex justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
