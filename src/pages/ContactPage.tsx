import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F3ED]">
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
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
              GET IN TOUCH
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
              Begin Your Journey
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 
                  className="text-[#2C2C2C] mb-6"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    fontWeight: 600,
                  }}
                >
                  Visit Our Atelier
                </h3>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 p-3 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]/60 text-sm mb-1">Phone</p>
                    <p className="text-[#2C2C2C]">+1 (949)690-5688</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="mt-1 p-3 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#2C2C2C]/60 text-sm mb-1">Email</p>
                    <p className="text-[#2C2C2C]">Info@meltzenterprises.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white border-2 border-[#2C2C2C]/10 focus:border-[#D4AF37] outline-none transition-colors text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white border-2 border-[#2C2C2C]/10 focus:border-[#D4AF37] outline-none transition-colors text-[#2C2C2C] placeholder:text-[#2C2C2C]/40"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-white border-2 border-[#2C2C2C]/10 focus:border-[#D4AF37] outline-none transition-colors text-[#2C2C2C] placeholder:text-[#2C2C2C]/40 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#D4AF37] text-[#2C2C2C] tracking-widest hover:bg-[#2C2C2C] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}