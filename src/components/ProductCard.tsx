import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useMotionValue, useSpring } from "motion/react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    textureProfile: string;
    origin: string;
    imageUrls: string[];
    alt: string;
    comingSoon?: boolean;
  };
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    // Rotate images every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % product.imageUrls.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [product.imageUrls.length]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / 25);
    y.set((e.clientY - centerY) / 25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Product Image */}
      <motion.div 
        className="relative aspect-[3/4] overflow-hidden mb-6"
        style={{
          rotateX: springY,
          rotateY: springX,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 border border-[#D4AF37]/20 z-[20] pointer-events-none" />
        
        {/* Rotating Images */}
        <div className="relative w-full h-full">
          {product.imageUrls.map((imageUrl, imgIndex) => (
            <motion.div
              key={imgIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: imgIndex === currentImageIndex ? 1 : 0,
              }}
              transition={{ duration: 1 }}
            >
              <ImageWithFallback
                src={imageUrl}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent z-[2]"
          animate={{ opacity: isHovered ? 0.4 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Champagne Gold Accent Line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37] z-[3]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
        
        {/* Floating shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent z-[1]"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5,
          }}
        />
        
        {/* Coming Soon Badge */}
        {product.comingSoon && (
          <motion.div
            className="absolute inset-0 bg-[#2C2C2C]/90 backdrop-blur-sm z-[10] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block mb-3"
              >
                <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-[#D4AF37]/50 rounded-full" />
                </div>
              </motion.div>
              <motion.p
                className="text-[#D4AF37] tracking-[0.3em] text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
                animate={{
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                COMING SOON
              </motion.p>
            </motion.div>
          </motion.div>
        )}
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[3]">
          {product.imageUrls.map((_, imgIndex) => (
            <motion.button
              key={imgIndex}
              onClick={() => setCurrentImageIndex(imgIndex)}
              className={`h-2 rounded-full transition-all duration-300 ${
                imgIndex === currentImageIndex 
                  ? 'bg-[#D4AF37]' 
                  : 'bg-[#F5F3ED]/30 hover:bg-[#F5F3ED]/50'
              }`}
              animate={{
                width: imgIndex === currentImageIndex ? 24 : 8,
              }}
              whileHover={{ scale: 1.2 }}
              aria-label={`View image ${imgIndex + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div 
        className="space-y-3"
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-[#F5F3ED]"
          animate={{ color: isHovered ? "#D4AF37" : "#F5F3ED" }}
          transition={{ duration: 0.3 }}
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
          }}
        >
          {product.name}
        </motion.h3>
        
        <motion.p 
          className="text-[#F5F3ED]/70 text-sm italic"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {product.textureProfile}
        </motion.p>
        
        <motion.p 
          className="text-[#D4AF37]/80 text-xs tracking-wider uppercase"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {product.origin}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}