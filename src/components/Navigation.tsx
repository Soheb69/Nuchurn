import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface NavigationProps {
  currentPage: string;
  navigate: (page: string, path: string) => void;
}

export function Navigation({ currentPage, navigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", page: "home", path: "/" },
    { label: "STORY", page: "story", path: "/story" },
    { label: "COLLECTION", page: "products", path: "/products" },
    { label: "CRAFT", page: "craft", path: "/craft" },
    { label: "CONTACT", page: "contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#2C2C2C] backdrop-blur-md shadow-2xl border-b-2 border-[#D4AF37]/40" 
          : "bg-[#2C2C2C] backdrop-blur-md shadow-xl border-b-2 border-[#D4AF37]/30"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-center">
        <div className="flex items-center gap-12">
          <motion.button
            onClick={() => navigate("home", "/")}
            className="tracking-wider text-[#F5F3ED] hover:text-[#D4AF37] transition-colors cursor-pointer relative group" 
            style={{ fontFamily: "'Playfair Display', serif" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            NüChurn
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.page}
                onClick={() => navigate(item.page, item.path)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="relative text-sm text-[#F5F3ED] tracking-widest hover:text-[#D4AF37] transition-colors group"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: currentPage === item.page ? "100%" : 0 
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}