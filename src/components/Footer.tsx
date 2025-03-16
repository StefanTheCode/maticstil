import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-serif mb-4 text-gold">Matić STIL</h4>
            <p className="text-gray-400">Stvaramo magične prostore koji odišu luksuzom.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h5 className="font-semibold mb-6 text-gold">Usluge</h5>
            <ul className="space-y-3 text-gray-400">
              <li className="hover-gold-effect cursor-pointer">3D dizajn</li>
              <li className="hover-gold-effect cursor-pointer">Projektovanje enterijera</li>
              <li className="hover-gold-effect cursor-pointer">Izradav nameštaja po meri</li>
              <li className="hover-gold-effect cursor-pointer">Montaža</li>
              <li className="hover-gold-effect cursor-pointer">Zidne obloge</li>
              <li className="hover-gold-effect cursor-pointer">Medijapan/Iverica</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h5 className="font-semibold mb-6 text-gold">Kontakt</h5>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                info@maticstil.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                0691196074
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                123 Niš
                <br />Srbija
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h5 className="font-semibold mb-6 text-gold">Pratite nas</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gold/20 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Matić STIL. Sva prava zadržana.</p>
        </motion.div>
      </div>
    </footer>
  );
}