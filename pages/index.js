import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const dresses = ["/sg1.png", "/sg2.png", "/sg3.png", "/sg4.png"];

  //added this differently for signature pieces
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dresses.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
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
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/fashion-show.mp4"
        ></video>
        <div className="relative z-10 px-10 backdrop-blur-md">
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
            className="mt-8 px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg uppercase tracking-wide hover:bg-gray-300 transition duration-300"
          >
            Discover Now
          </motion.button>
        </div>
      </section>

      {/* Transition Element */}
      <section className="relative h-30 flex items-center justify-center text-center bg-[#1A1A1A] text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Crafting Elegance Since 1980
        </motion.div>
      </section>
      

      {/* About Us Section */}
      <section id="about" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden px-12">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-100 contrast-110"
          src="/about-video.mp4"
        ></video>
        <div className="relative z-10 px-10 backdrop-blur-md">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl tracking-wide max-w-2xl mx-auto"
          >
            Vogue Essence is more than a brand—it’s a movement. Our designs redefine luxury, blending timeless craftsmanship with cutting-edge innovation. We shape the future of fashion, one masterpiece at a time.
          </motion.p>
        </div>
        
        {/* Subtle Animated Timeline */}
        <div className="relative mt-6 w-full max-w-3xl text-left z-10">
          {[
            { year: "1980", event: "Founded in a Parisian atelier, crafting bespoke designs." },
            { year: "1995", event: "Revolutionized couture at Milan Fashion Week." },
            { year: "2005", event: "Designed for elite icons, shaping global trends." },
            { year: "2015", event: "Launched our flagship store in the heart of NYC." },
            { year: "2023", event: "Innovating the future with sustainable fashion." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="mb-6 border-l-4 border-gray-400 pl-6"
            >
              <span className="text-3xl font-bold text-gray-100">{item.year}</span>
              <p className="text-xl text-gray-300">{item.event}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Rolling Text Animation - Integrated and Vibrant */}
        <div className="absolute top-[85%] w-full overflow-hidden whitespace-nowrap z-10">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            className="text-4xl font-semibold uppercase opacity-70 text-gray-100 tracking-wider"
          >
            Elegance • Timeless Fashion • Luxury Redefined • Haute Couture • Iconic Style • Future of Fashion • Bespoke Craftsmanship • Trendsetting Design • Aesthetic Mastery • Artistry in Motion •
          </motion.div>
        </div>
      </section>

  

       {/* Signature Pieces Section */}
       <section id="collections" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden px-12">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-120"
          src="/signature-pieces.mp4"
        ></video>
        <div className="relative z-10 px-10 backdrop-blur-md p-8 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold text-gray-100 drop-shadow-lg"
          >
            Our Signature Pieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl tracking-wide max-w-2xl mx-auto text-gray-300"
          >
            Each piece in our collection embodies elegance, craftsmanship, and innovation. Discover timeless designs that redefine fashion.
          </motion.p>
        </div>
        <div className="relative z-10 w-full h-full flex justify-center items-center mt-20">
          {dresses.map((dress, index) => (
            <motion.img
              key={index}
              src={dress}
              alt={`Signature Dress ${index + 1}`}
              className="absolute w-[40%] h-auto object-contain rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={index === currentIndex ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
      </section>


      {/* This section below looked better as it cut through the text, just check this once*/}
        {/* Signature Pieces Section */}
        {/* <section id="signature" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden px-12">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-120"
          src="/signature-pieces.mp4"
        ></video>
        <div className="relative z-10 px-10 backdrop-blur-lg bg-black/60 p-8 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl font-extrabold text-gray-200 drop-shadow-lg"
          >
            Our Signature Pieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xl tracking-wide max-w-2xl mx-auto text-gray-300"
          >
            Each piece in our collection embodies elegance, craftsmanship, and innovation. Discover timeless designs that redefine fashion.
          </motion.p>
        </div>
        <div className="relative z-10 w-full h-full flex justify-center items-center">
          {dresses.map((dress, index) => (
            <motion.img
              key={index}
              src={dress}
              alt={`Signature Dress ${index + 1}`}
              className="absolute w-1/2 h-auto object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={index === currentIndex ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
      </section> */}


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
