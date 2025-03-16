import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Building2, Sofa, Palette, Ruler, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Paintbrush size={32} />,
      title: t('services.categories.interiorDesign.title'),
      description: t('services.categories.interiorDesign.description'),
      features: t('services.categories.interiorDesign.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
    },
    {
      icon: <Building2 size={32} />,
      title: t('services.categories.commercial.title'),
      description: t('services.categories.commercial.description'),
      features: t('services.categories.commercial.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    },
    {
      icon: <Sofa size={32} />,
      title: t('services.categories.residential.title'),
      description: t('services.categories.residential.description'),
      features: t('services.categories.residential.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
    },
    {
      icon: <Palette size={32} />,
      title: t('services.categories.furniture.title'),
      description: t('services.categories.furniture.description'),
      features: t('services.categories.furniture.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80"
    },
    {
      icon: <Ruler size={32} />,
      title: t('services.categories.renovation.title'),
      description: t('services.categories.renovation.description'),
      features: t('services.categories.renovation.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80"
    },
    {
      icon: <Lightbulb size={32} />,
      title: t('services.categories.consultation.title'),
      description: t('services.categories.consultation.description'),
      features: t('services.categories.consultation.features', { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt={t('services.hero.title')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                {t('services.hero.title')}
              </h1>
              <p className="text-xl text-gray-300">{t('services.hero.subtitle')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gold rounded-full text-black">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black p-6 rounded-lg">
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-16 text-center text-gold"
          >
            {t('services.process.title')}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: t('services.process.steps.consultation.title'), description: t('services.process.steps.consultation.description') },
              { number: "02", title: t('services.process.steps.concept.title'), description: t('services.process.steps.concept.description') },
              { number: "03", title: t('services.process.steps.implementation.title'), description: t('services.process.steps.implementation.description') },
              { number: "04", title: t('services.process.steps.completion.title'), description: t('services.process.steps.completion.description') }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-serif text-gold mb-4">{step.number}</div>
                <h3 className="text-xl font-serif mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}