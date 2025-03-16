import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    location: string;
    images: string[];
    description: string;
  } | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-[60vh] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-gold' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
              <p className="text-gold mb-1">{project.category}</p>
              <p className="text-gray-600 mb-4">{project.location}</p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}