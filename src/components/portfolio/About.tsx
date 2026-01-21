import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 gradient-bg rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-8xl">👨‍🎨</span>
                </div>
              </div>
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 -bottom-4 glass-card rounded-2xl p-4 glow-effect"
              >
                <div className="text-3xl font-display font-bold gradient-text">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Transforming Ideas Into{" "}
              <span className="gradient-text">Visual Stories</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate graphic designer with over 5 years of experience 
              creating impactful visual designs. From brand identities to digital 
              interfaces, I bring creativity and precision to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines strategic thinking with artistic expression, 
              ensuring that every design not only looks stunning but also serves 
              its purpose effectively. I believe great design tells a story and 
              creates emotional connections.
            </p>

            <Button className="gradient-bg border-0 glow-effect mb-12">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-display font-bold counter-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
