import React from "react";
import { motion as m } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="hero-banner bg-dark-100 dark:bg-dark-900 rounded-lg py-16">
      <div className="container mx-auto px-4">
        <m.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-dark-200 mb-6"
        >
          Welcome to Reactive Commerce
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-600 dark:text-dark-200 mb-8"
        >
          Discover the latest trends in fashion and shop our wide selection of
          high-quality products.
        </m.p>
        <m.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-dark-200 text-gray-600 dark:text-dark-600 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </m.button>
      </div>
    </div>
  );
};

export default HeroBanner;
