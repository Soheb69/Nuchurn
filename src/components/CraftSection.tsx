import { motion } from "motion/react";

export function CraftSection() {
  const craftPrinciples = [
    {
      title: "Slow-Churned",
      description: "Italian gelato technique meets ancient ingredients. Each batch is crafted with precision over 48 hours."
    },
    {
      title: "Heritage Sourced",
      description: "We travel the ancient spice routes to source ingredients from their places of origin."
    },
    {
      title: "Modern Innovation",
      description: "European discipline and innovation transform historic flavors into contemporary luxury."
    }
  ];

  return (
    <section id="craft" className="py-32 px-6 bg-[#4A5D3F] text-[#F5F3ED]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#D4AF37] tracking-[0.3em] mb-4 text-sm">THE CRAFT</p>
          <h2 
            className="text-[#F5F3ED]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Where Tradition Meets Mastery
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {craftPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4 group"
            >
              {/* Decorative Element */}
              <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-8 transform group-hover:w-32 transition-all duration-500" />
              
              <h3 
                className="text-[#F5F3ED]"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                }}
              >
                {principle.title}
              </h3>
              
              <p className="text-[#F5F3ED]/80 leading-relaxed max-w-sm mx-auto">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-3 tracking-widest hover:bg-[#D4AF37] hover:text-[#2C2C2C] transition-all duration-300">
            EXPLORE ORIGINS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
