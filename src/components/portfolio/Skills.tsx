import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Figma", level: 92 },
  { name: "After Effects", level: 75 },
  { name: "Canva", level: 98 },
  { name: "UI/UX Design", level: 88 },
];

const categories = [
  { name: "Branding", icon: "🎨", description: "Logo design, brand identity, guidelines" },
  { name: "UI/UX", icon: "💻", description: "Web design, mobile apps, prototypes" },
  { name: "Motion", icon: "🎬", description: "Animations, video graphics, intros" },
  { name: "Print", icon: "📄", description: "Brochures, posters, packaging" },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover-lift card-shine"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-display font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary font-display font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-full skill-bar rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
