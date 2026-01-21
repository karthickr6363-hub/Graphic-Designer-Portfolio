import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Dribbble, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-display font-bold gradient-text">
              Studio.
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Creating digital experiences that matter.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-end gap-3"
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2024 Studio. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
