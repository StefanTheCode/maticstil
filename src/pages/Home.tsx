import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Palmtree, Crown, Gem } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
             Stvaramo <span className="text-gold">magične prostore</span> koji odišu luksuzom
            </h1>
            <p className="text-xl mb-8">Opremanje enterijera po sistemu <span className="text-gold"><b>"ključ u ruke!"</b></span></p>
            <a href='/projects'><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold text-black hover:bg-gold-dark transition-colors flex items-center"
            >
           Naši projekti
              <ChevronRight className="ml-2" size={20} />
            </motion.button></a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: <Palmtree size={32} />,
                title: "Održivi dizajn",
                description: "Stvaranje prelepih prostora uz poštovanje naše okoline."
              },
              {
                icon: <Crown size={32} />,
                title: "Luksuzni život",
                description: "Unapređenje svakodnevnih iskustava kroz sofisticirani dizajn."
              },
              {
                icon: <Gem size={32} />,
                title: "Prilagođena rešenja",
                description: "Izrada nameštaja po meri koji odražava vaš jedinstveni stil i potrebe."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold rounded-full">
                  <div className="text-black">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-12 text-center"
          >
            Poslednji <span className="text-gold">Projekti</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
                title: "Dizajn dnevne sobe",
                location: "Niš, Srbija"
              },
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                title: "Kuhinjski elementi po meri",
                location: "Novi Sad, Srbija"
              },
              {
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
                title: "Ugradni plakari u hodniku",
                location: "Beograd, Srbija"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <img 
                  src={`${project.image}?auto=format&fit=crop&q=80`}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gold">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}