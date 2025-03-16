import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
            alt="About IVING"
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
              Ko je <span className="text-gold">Matić STIL?</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-6">Naša priča priča</h2>
              <p className="text-gray-600 mb-4">
                <b>(Nasumice opis)</b> Founded in 2015, Matić STIL Interior has established itself as a leading force in luxury interior design. Our journey began with a simple yet powerful vision: to create spaces that transcend mere functionality and become works of art.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of design, combining traditional craftsmanship with modern innovation to create interiors that inspire and endure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                alt="Our Story"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-12 text-center text-gold"
          >
            Naše vrednosti
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Izvrsnost",
                description: "Težimo savršenstvu u svakom detalju, osiguravajući da svaki projekat nadmaši očekivanja."
              },
              {
                title: "Inovacija",
                description: "Prihvatamo nove ideje i tehnologije kako bismo pomerali granice dizajna."
              },
              {
                title: "Održivost",
                description: "Stvaramo prelepe prostore uz poštovanje i očuvanje naše okoline."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 border border-gold/20 rounded-lg"
              >
                <h3 className="text-xl font-serif mb-4 text-gold">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-12 text-center"
          >
            Moj/Naš <span className="text-gold">Tim</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Principal Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
              },
              {
                name: "Michael Chen",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              },
              {
                name: "Emma Williams",
                role: "Senior Interior Designer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}