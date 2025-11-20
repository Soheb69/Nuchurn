import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

interface HeroProps {
  navigate?: (page: string, path: string) => void;
}

export function Hero({ navigate }: HeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/70 via-[#2C2C2C]/65 to-[#0a0a0a]/75" />

      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #3A4A3A 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [Math.random() * window.innerHeight, -100],
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated ingredient overlay */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.12, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ 
          x: useTransform(scrollY, [0, 500], [0, -50]),
          opacity: useTransform(scrollY, [0, 300], [0.12, 0]),
        }}
        className="absolute bottom-0 left-0 w-1/3 h-1/2"
      >
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <motion.h1 
            className="text-[#F5F3ED] mb-4 tracking-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 900,
              lineHeight: 0.9,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              Nü
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              Churn
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[#D4AF37] mb-12 tracking-[0.3em] text-sm md:text-base font-bold"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          {["ANCIENT", "FLAVOURS.", "MODERN", "CRUNCH."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative border-2 border-[#D4AF37] text-[#D4AF37] px-12 py-4 tracking-widest overflow-hidden"
          onClick={() => {
            if (navigate) {
              navigate("products", "/products");
            } else {
              window.history.pushState({}, "", "/products");
              window.location.href = "/products";
            }
          }}
        >
          <motion.span
            className="absolute inset-0 bg-[#D4AF37]"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10 group-hover:text-[#2C2C2C] transition-colors duration-300 font-bold">
            BEGIN THE JOURNEY
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}