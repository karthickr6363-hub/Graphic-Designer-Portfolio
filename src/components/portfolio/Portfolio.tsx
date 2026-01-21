import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Eye } from "lucide-react";

const categories = ["All", "Logo", "Branding", "Social Media", "UI", "Posters"];

const projects = [
  {
    id: 1,
    title: "Neon Brand Identity",
    category: "Branding",
    image: "🎨",
    color: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    title: "Tech Startup Logo",
    category: "Logo",
    image: "💎",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Food App Interface",
    category: "UI",
    image: "📱",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Music Festival Poster",
    category: "Posters",
    image: "🎵",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "Fashion Campaign",
    category: "Social Media",
    image: "👗",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 6,
    title: "Eco Brand Package",
    category: "Branding",
    image: "🌿",
    color: "from-teal-500/20 to-green-500/20",
  },
];

export const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "gradient-bg text-foreground glow-effect"
                  : "glass-card hover:bg-secondary text-muted-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-lift card-shine">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <span className="text-7xl">{project.image}</span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-150">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="text-xs text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-lg mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
