import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import datesPalmImage from "figma:asset/cdf9a4afb4f00851c23438f27129bf23c98ff3fd.png";

export function BrandStory() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const travelImages = [
    {
      url: datesPalmImage,
      alt: "Dates from Arabian palms"
    },
    {
      url: "https://images.unsplash.com/photo-1758745464235-ccb8c1253074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZmcm9uJTIwc3BpY2UlMjBtYXJrZXR8ZW58MXx8fHwxNzYzNDU2NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Saffron from Persia"
    },
  ];

  return (
    <section ref={sectionRef} id="story" className="pt-32 pb-32 px-6 bg-[#F5F3ED] relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#2C2C2C]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div 
        className="container mx-auto max-w-7xl relative z-10"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-[#D4AF37] tracking-[0.3em] mb-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            THE SILK ROAD COLLECTION
          </motion.p>
          <motion.h2 
            className="text-[#2C2C2C]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The World in a Scoop
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#2C2C2C]/80 leading-relaxed"
          >
            {[
              "It began with a departure. We traveled the ancient spice routes—tasting dates from the palms of Saudi Arabia to Iran, harvesting saffron from the fields of Persia, and discovering rare fruits across West Africa. We found that the world's deepest flavors have been waiting for centuries.",
              "But flavor is nothing without texture. We brought these ancient ingredients home to the discipline of European craftsmanship. We fused the density of the Middle East with the Italian mastery of gelato.",
              "The result is NüChurn. A collision of heritage and innovation. Real fruit. Rare dry fruits. The crunch of history in a modern, slow-churned scoop."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-8 before:bg-[#D4AF37]"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {travelImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden aspect-[3/4] group"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}