import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  navigate: (page: string, path: string) => void;
}

export function Navigation({ currentPage, navigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track window size and close mobile menu when resized to desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = (page: string, path: string) => {
    navigate(page, path);
    setIsMobileMenuOpen(false);
  };

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
      <div className="container mx-auto px-6 py-6">
        {/* Mobile Layout */}
        {isMobile && (
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavigate("home", "/")}
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

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F3ED] hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        )}

        {/* Desktop Layout */}
        {!isMobile && (
          <div className="flex items-center justify-center gap-12">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
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
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: "500px" }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full bg-[#2C2C2C] border-t-2 border-[#D4AF37]/40 overflow-hidden"
          >
            <div className="px-6 py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  onClick={() => handleNavigate(item.page, item.path)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className={`w-full text-left py-4 px-4 mb-2 text-base tracking-widest transition-all rounded block ${
                    currentPage === item.page
                      ? "text-[#D4AF37] bg-[#D4AF37]/10"
                      : "text-[#F5F3ED] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5"
                  }`}
                >
                  <div className="flex items-center">
                    {currentPage === item.page && (
                      <span className="w-1 h-6 bg-[#D4AF37] rounded mr-3"></span>
                    )}
                    <span>{item.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}