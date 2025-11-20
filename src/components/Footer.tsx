import { Instagram, Youtube, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#2C2C2C] border-t border-[#D4AF37]/20 py-12 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-[#F5F3ED] mb-1"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 700,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              NüChurn
            </motion.h3>
            <motion.p 
              className="text-[#D4AF37] tracking-[0.3em] text-[10px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ANCIENT FLAVOURS. MODERN CRUNCH.
            </motion.p>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[#F5F3ED]/70 mb-3 tracking-wider text-xs">
              JOIN THE JOURNEY
            </p>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-[#D4AF37]/30 text-[#F5F3ED] px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-[#F5F3ED]/30"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                className="bg-[#D4AF37] text-[#2C2C2C] px-6 py-2 tracking-wider text-sm"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://www.instagram.com/nuchurn_icecream?igsh=MWoxMnl5NnUybm82NQ==" 
              className="text-[#D4AF37] transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a 
              href="https://www.youtube.com/@nuchurn" 
              className="text-[#D4AF37] transition-colors"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube size={18} />
            </motion.a>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="text-[#F5F3ED]/60 text-xs space-y-0.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Info@meltzenterprises.com</p>
            <p>+1 (949)690-5688</p>
            <div className="pt-3">
              <motion.a 
                href="/privacy-policy" 
                className="text-[#D4AF37] text-[10px] tracking-wider inline-block relative"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/privacy-policy");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                  window.scrollTo(0, 0);
                }}
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
            <p className="pt-2 text-[10px]">
              © 2025 NüChurn. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}