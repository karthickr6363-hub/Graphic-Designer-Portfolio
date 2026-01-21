import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layout, Megaphone, Smartphone, FileImage, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique, memorable logos that capture your brand's essence and stand out.",
    price: "From $299",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Complete brand packages including guidelines, colors, and typography.",
    price: "From $599",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Eye-catching graphics for Instagram, Facebook, LinkedIn and more.",
    price: "From $149",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces for web and mobile applications.",
    price: "From $799",
  },
  {
    icon: FileImage,
    title: "Print Design",
    description: "Brochures, flyers, business cards, and marketing materials.",
    price: "From $199",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Modern website designs with focus on user experience and aesthetics.",
    price: "From $499",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover-lift card-shine group"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="text-primary font-display font-bold">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
