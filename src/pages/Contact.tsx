import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Contact Us"
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
              Kontakt
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-lg"
            >
              <h2 className="text-2xl font-serif mb-8 text-gold">Možete nas naći</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-gold mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">info@maticstil.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Telefon</h3>
                    <p className="text-gray-400">+381 (63) 111-1111</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Adresa</h3>
                    <p className="text-gray-400">Neka adresa,<br />Novi Sad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-gold mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-semibold">Radni sati</h3>
                    <p className="text-gray-400">Ponedeljak - Petak: 09:00 - 18:00<br />Subota: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ime
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                    placeholder="Vaša email adresa"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Naslov
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                    placeholder="Naslov"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                    placeholder="Vaša poruka"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gold text-black hover:bg-gold-dark transition-colors rounded-lg font-medium"
                >
                  Pošalji
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106580.50816715496!2d19.693554423275778!3d45.27146619363706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f7d683724fe28!2sNovi%20Sad%2C%20Serbia!5e1!3m2!1sen!2sus!4v1741959665657!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}