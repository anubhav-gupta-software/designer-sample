import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/fashion-show.mp4"
        ></video>
        <div className="relative text-center text-white z-10 p-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            Elevate Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-xl"
          >
            Handcrafted designs that define elegance.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg"
          >
            Explore Collection
          </motion.button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          About Us
        </motion.h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          We are a luxury fashion brand that brings artistic craftsmanship into every design, making each outfit a statement of elegance and innovation.
        </p>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-gray-200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-bold"
        >
          Our Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-10">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Image
                src={`/collection-${item}.jpg`}
                alt="Fashion Collection"
                width={400}
                height={500}
                className="rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Collection {item}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
