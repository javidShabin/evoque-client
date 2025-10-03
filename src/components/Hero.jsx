import React from "react";
import { motion } from "framer-motion";

const heroImage = "/images/heroShoe.png";
console.log(heroImage);

export const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight">
            Step Into{" "}
            <span className="bg-black text-white px-2 rounded-lg">Luxury</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
            Discover our premium collection of footwear designed to combine
            comfort, style, and timeless elegance.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex justify-center lg:justify-start gap-4"
          >
            <button className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-gray-900 transition-all">
              Shop Now
            </button>
            <button className="px-6 py-3 rounded-2xl border border-black text-black font-semibold hover:bg-black hover:text-white transition-all">
              Explore
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative"
        >
          <motion.img
            src={heroImage}
            alt="Luxury Shoe"
            className="w-[80%] lg:w-[70%] xl:w-[60%] drop-shadow-2xl"
            initial={{ scale: 0.8, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          {/* Decorative Circle */}
          <motion.div
            className="absolute -z-10 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gray-100 to-gray-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
