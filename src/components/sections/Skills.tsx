import { Section } from "../ui/Section";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="The technologies and tools I use to build solutions.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-8 group hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary/50" />
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-surface text-textMuted text-sm rounded-md border border-border group-hover:border-primary/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
