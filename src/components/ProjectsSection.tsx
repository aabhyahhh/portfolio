import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';

export function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Laari Khojo',
      description: 'Laari Khojo is a street vendor discovery platform built using the MERN stack and Leaflet.js. It allows users to locate and explore local vendors in real time through an interactive map interface. The platform currently serves 2,000+ users across India.',
      image: '/img/LK1.png',
      images: [
        '/img/LK1.png',
        '/img/LK2.png',
        '/img/LK3.png',
        '/img/LK4.png',
        '/img/LK5.png',
        '/img/LK6.png',
        '/img/LK7.png',
        '/img/LK8.png',
        '/img/LK9.png',
      ],
      tags: ['React', 'Node.js', 'Express.js','MongoDB','Leaflet.js,', 'Meta Cloud API', 'Maptiler', 'RestAPI'],
      category: 'fullstack',
      featured: true,
      useCases: [
  'Digitizing street vendor discovery through a unified hyperlocal platform',
  'Managing dynamic vendor locations to ensure consistent customer visibility and engagement',
  'Enabling a low-tech WhatsApp-based interface for vendor communication—reviews, ratings, support, and loan assistance',
  'Providing advanced search and filtering options for users to easily find vendors by category, distance, or popularity',
  'Facilitating real-time vendor tracking with live location updates via Leaflet.js integration',
  'Empowering local vendors to increase reach and revenue through digital onboarding and visibility'
],
      standOut: 'Vendors can effortlessly update their current location by simply sharing it via the Laari Khojo WhatsApp account, instantly reflecting on the customer-facing map so they do not lose their customers upon location change due to Government clearances or weather changes.',
      github: 'https://github.com/aabhyahhh/Laari-Khojo',
      live: 'https://laarikhojo.in/'
    },
    {
      id: 2,
      title: 'Data Monitoring Dashboard',
      description: 'The Cibos Data Monitoring Dashboard is an internal tool that is used to visualise the solar cookstoves deployed while piloting all over India for MEC(Micro Energy Credits)',
      image: '/img/DM1.png',
      images: [
        '/img/DM1.png',
        '/img/DM2.png',
        '/img/DM3.png',
        '/img/DM4.png',
        '/img/DM5.png',
        '/img/DM6.png',
      ],
      tags: ['Typescript', 'Express.js', 'MongoDB', 'Node.js', 'REST API'],
      category: 'fullstack',
      featured: true,
      useCases: [
        'Allows MEC to monitor the deployed cookstoves with ease',
        'CRUD operations applied for easy moderation of entries and logs',
      ],
      standOut: 'Developed a real-time monitoring dashboard that visualizes deployed cookstoves on an interactive map, enabling seamless tracking, data management, and on-site insights for MEC.',
      github: 'https://github.com/aabhyahhh/Data-Monitoring-System-Cibos-x-MEC-',
      live: 'https://datamonitoring.cibos.in/login'
    },
    {
      id: 3,
      title: 'Admin - Laari Khojo',
      description: 'A modern social networking application with post creation, real-time messaging, and user interactions. Built with focus on user experience.',
      image: '/img/ALK1.png',
      images: [
        '/img/ALK1.png',
        '/img/ALK2.png',
        '/img/ALK3.png',
        '/img/ALK4.png',
        '/img/ALK5.png',
        '/img/ALK6.png',
        '/img/ALK7.png',
      ],
      tags: ['Typescript', 'Express.js', 'MongoDB', 'Node.js', 'Websockets', 'Meta Cloud API, REST API'],
      category: 'fullstack',
      featured: false,
      useCases: [
  'Simplified low-tech vendor verification and onboarding through intuitive data collection forms',
  'Real-time monitoring of vendor activity and engagement via the Laari Khojo WhatsApp Business account',
  'Integrated support CRM for managing, tracking, and resolving vendor support requests efficiently',
  'Unified Chat View to oversee automated reminders, vendor communications, and loan or support requests',
  'Capability to send personalized broadcast or individual messages directly to vendors for quick response and engagement'
],
      standOut: 'A centralized control hub that bridges field operations and automation—empowering admins to manage hundreds of vendors, communications, and real-time updates seamlessly from a single dashboard.',
      github: 'https://github.com/aabhyahhh/whatsappDashboard',
      live: 'https://admin.laarikhojo.in/login'
    },
    {
      id: 4,
      title: 'Cibos-Official Website',
      description: 'The official website for Cibos Techno Solutions, designed as a sleek, responsive static site that showcases the company’s vision, services, and milestones through a clean and modern interface. It effectively communicates the brand’s technological edge while maintaining clarity and accessibility.',
      image: '/img/CB1.png',
      images: [
        '/img/CB1.png',
        '/img/CB2.png',
        '/img/CB3.png',
        '/img/CB4.png',
        '/img/CB5.png',
      ],
      tags: ['React.js', 'Typescript'],
      category: 'frontend',
      featured: false,
      standOut: 'A visually refined interface with smooth animations, bold typography, and interactive highlights—crafted to deliver a polished, modern browsing experience that mirrors the company’s innovation-driven identity.',
       github: 'https://github.com/aabhyahhh/CibosWebsite',
      live: 'https://cibos.in/'
    },
    {
      id: 5,
      title: 'Laari-Modular Carts Made Simple',
      description: 'The Laari Product Website is a minimalist, static product website designed to showcase the seven categories of Laari — modular carts manufactured by Cibos Techno Solutions Pvt. Ltd.. Built with a focus on clarity and visual balance, the site highlights each cart category with intuitive layouts, subtle animations, and a clean aesthetic that reflects modern craftsmanship and design precision.',
      image: '/img/L1.png',
      images: [
        '/img/L1.png',
        '/img/L2.png',
        '/img/L3.png',
        '/img/L4.png',
        '/img/L5.png',
      ],
      tags: ['React', 'Typescript.js'],
      category: 'frontend',
      featured: true,
      github: 'https://github.com/aabhyahhh/Laari-Product-website-',
      live: 'https://laari-product-website-pea7v9c4f-abhayas-projects-1bd3fcab.vercel.app/'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my best work, ranging from full-stack applications to creative frontend designs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredProjects.map((project, index) => (
    <ProjectCard key={project.id} project={project} index={index} />
  ))}
</div>

      </div>
    </div>
  );
}