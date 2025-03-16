import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectModal from '../components/ProjectModal';

const projects = [
  {
    title: "Modern Minimalist Villa",
    category: "Residential",
    location: "Los Angeles, CA",
    description: "A contemporary villa that embraces minimalist design principles while maintaining a warm and inviting atmosphere. The project features open spaces, natural materials, and seamless indoor-outdoor transitions.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Luxury Office Complex",
    category: "Commercial",
    location: "New York, NY",
    description: "A sophisticated office complex designed to inspire creativity and productivity. The space combines modern aesthetics with functional workspace solutions.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    location: "Miami, FL",
    description: "An elegant hotel lobby that creates a striking first impression. The design combines luxury materials with comfortable seating areas and stunning architectural details.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Contemporary Kitchen",
    category: "Residential",
    location: "Chicago, IL",
    description: "A state-of-the-art kitchen that combines functionality with modern design. Features include custom cabinetry, premium appliances, and innovative storage solutions.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "San Francisco, CA",
    description: "A modern corporate headquarters that reflects the company's innovative culture. The design incorporates collaborative spaces, private offices, and state-of-the-art meeting facilities.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
    ]
  },
  {
    title: "Luxury Restaurant",
    category: "Hospitality",
    location: "Las Vegas, NV",
    description: "An upscale dining establishment that offers an immersive culinary experience. The interior features custom lighting, premium finishes, and thoughtfully designed seating areas.",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&q=80"
    ]
  }
];

export default function Projects() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);

  const categories = ["All", "Residential", "Commercial", "Hospitality"];
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
            alt={t('projects.hero.title')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-center text-white"
            >
              {t('projects.hero.title')}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {t(`projects.categories.${category.toLowerCase()}`)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-serif text-white mb-1">{project.title}</h3>
                  <p className="text-gold text-sm mb-1">{t(`projects.categories.${project.category.toLowerCase()}`)}</p>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 px-4 py-2 bg-gold text-black rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
                  >
                    {t('projects.viewDetails')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}