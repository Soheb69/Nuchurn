import { motion } from "motion/react";
import { ProductCard } from "./ProductCard";
import apricotHeroImage1 from "../assets/WhatsApp Image 2025-11-20 at 17.34.09.jpeg";
import apricotHeroImage2 from "figma:asset/a8a5d753ab721d1940582464ca73116c33969208.png";
import dateHeroImage1 from "figma:asset/6478403cbebd65ed5cb7655c92aa1dc9c81e762a.png";
import dateHeroImage2 from "../assets/WhatsApp Image 2025-11-20 at 17.32.44.jpeg";
import figImage from "figma:asset/c595e38072d0b646d3759268cc1dd6c01e9afac0.png";
import saffronImage from "figma:asset/0871aff281baf0fee8559791d157f1063847a287.png";
import walnutImage from "figma:asset/59452653807e99ff713ab4d99449394f18ec2306.png";

interface Product {
  id: string;
  name: string;
  textureProfile: string;
  origin: string;
  imageUrls: string[];
  alt: string;
  comingSoon?: boolean;
}

export function ProductShowcase() {
  const products: Product[] = [
    {
      id: "1",
      name: "Date Choco Chunk",
      textureProfile: "Sweet Arabian dates meets the crunch of chocolate chip",
      origin: "Dates sourced from Persian palms",
      imageUrls: [dateHeroImage2, dateHeroImage1],
      alt: "NuChurn Arabian Date premium ice cream with roasted walnut pieces and chewy dates"
    },
    {
      id: "2",
      name: "Apricot Caramel Crunch",
      textureProfile: "Sun-ripened apricot cream with caramel crunch",
      origin: "Apricots sourced from Mediterranean orchards",
      imageUrls: [apricotHeroImage1, apricotHeroImage2],
      alt: "NuChurn Apricot artisanal ice cream with fresh apricots and dried apricot pieces"
    },
    {
      id: "3",
      name: "Fig",
      textureProfile: "Black mission figs with honey swirl",
      origin: "Figs sourced from Turkish orchards",
      imageUrls: [figImage],
      alt: "NuChurn Fig premium ice cream with honey swirl",
      comingSoon: true
    },
    {
      id: "4",
      name: "Saffron",
      textureProfile: "Persian saffron infusion with pistachio crumble",
      origin: "Saffron sourced from Iranian highlands",
      imageUrls: [saffronImage],
      alt: "NuChurn Saffron artisanal ice cream with Persian saffron",
      comingSoon: true
    },
    {
      id: "5",
      name: "Walnut",
      textureProfile: "Caramelized walnut with maple swirl",
      origin: "Walnuts sourced from Californian orchards",
      imageUrls: [walnutImage],
      alt: "NuChurn Walnut artisanal ice cream with maple swirl",
      comingSoon: true
    },
    {
      id: "6",
      name: "Pecan",
      textureProfile: "Roasted pecan with honey drizzle",
      origin: "Pistachios sourced from Mediterranean groves",
      imageUrls: ["/new-product.jpeg"],
      alt: "NuChurn Pistachio artisanal ice cream",
      comingSoon: true
    }
  ];

  return (
    <section id="collection" className="py-32 px-6 bg-[#2C2C2C]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#D4AF37] tracking-[0.3em] mb-4 text-sm">THE COLLECTION</p>
          <h2 
            className="text-[#F5F3ED]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Heritage in Every Scoop
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button 
            className="group relative border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-3 tracking-widest overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-[#D4AF37]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-[#2C2C2C] transition-colors duration-300">
              DISCOVER THE COLLECTION
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}