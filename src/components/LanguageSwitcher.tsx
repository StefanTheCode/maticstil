import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-3 py-1 bg-gold text-black rounded-full text-sm font-medium hover:bg-gold-dark transition-colors"
    >
      {i18n.language === 'en' ? 'SR' : 'EN'}
    </motion.button>
  );
}