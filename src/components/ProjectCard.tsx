import { motion } from 'motion/react';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  category: string;
  featured: boolean;
  useCases?: string[];
  standOut?: string;
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              <span className="text-xs">Featured</span>
            </div>
          </div>
        )}

        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-slate-700/50 text-slate-300 border-slate-600"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-slate-700/50 text-slate-300 border-slate-600"
              >
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, '_blank');
              }}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.live, '_blank');
              }}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="!max-w-none w-[1600px] max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Image Carousel */}
            <div className="relative h-[950px] rounded-lg overflow-hidden bg-slate-800">
              <ImageWithFallback
                src={projectImages[currentImageIndex]}
                alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {projectImages.length > 1 && (
                <>
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 hover:border-cyan-500 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 hover:border-cyan-500 transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-white text-sm">
                    {currentImageIndex + 1} / {projectImages.length}
                  </div>

                  {/* Thumbnail Dots */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {projectImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'bg-cyan-500 w-6'
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {projectImages.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {projectImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex
                        ? 'border-cyan-500 ring-2 ring-cyan-500/50'
                        : 'border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <p className="text-slate-300">
              {project.description}
            </p>

            {project.standOut && (
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-cyan-400 mb-2">What Makes This Stand Out</h4>
                <p className="text-slate-300 text-sm">
                  {project.standOut}
                </p>
              </div>
            )}

            {project.useCases && project.useCases.length > 0 && (
              <div>
                <h4 className="text-white mb-3">Key Features & Use Cases</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.useCases.map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-300 text-sm"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-slate-800 text-slate-300 border-slate-600"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                onClick={() => window.open(project.live, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}