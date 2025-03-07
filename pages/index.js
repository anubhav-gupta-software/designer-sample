import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }, []);

  return (
    <div className="bg-black text-white font-light">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg z-50 py-6 px-12 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide uppercase">Vogue Essence</h1>
        <ul className="flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-gray-400 transition duration-300">About</a></li>
          <li><a href="#collections" className="hover:text-gray-400 transition duration-300">Collections</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/fashion-show-bg.jpg" layout="fill" objectFit="cover" alt="Fashion Show" />
        </div>
        <div className="relative z-10 px-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold"
          >
            The Art of Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl tracking-wide max-w-2xl mx-auto"
          >
            A fusion of contemporary and classic aesthetics, crafted to perfection.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg uppercase tracking-wide hover:bg-gray-300 transition duration-300"
          >
            Discover Now
          </motion.button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold uppercase"
        >
          Who We Are
        </motion.h2>
        <p className="mt-8 text-lg max-w-4xl mx-auto leading-relaxed">
          Vogue Essence is more than a brand—it's an artistic journey. We design luxury fashion that transcends trends, blending timeless craftsmanship with modern sophistication.
        </p>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-32 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-bold uppercase"
        >
          Our Signature Pieces
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 px-12">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:rotate-2 transition duration-300"
            >
              <Image
                src={`/collection-${item}.jpg`}
                alt="Fashion Collection"
                width={500}
                height={600}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-6">Collection {item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-center text-gray-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white">Vogue Essence</h2>
          <p className="mt-4 text-lg">Redefining Luxury Fashion.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <Link href="#" className="hover:text-white transition duration-300">Instagram</Link>
            <Link href="#" className="hover:text-white transition duration-300">Twitter</Link>
            <Link href="#" className="hover:text-white transition duration-300">Facebook</Link>
          </div>
          <p className="mt-6 text-sm">© {new Date().getFullYear()} Vogue Essence. All Rights Reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}
