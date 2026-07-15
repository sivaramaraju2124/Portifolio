import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";

export function Achievements() {
  const { achievements } = portfolioData;

  if (!achievements) return null;

  return (
    <Section id="achievements" title="Achievements" subtitle="A journey fueled by passion, code, and consistency.">
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-6 ring-1 ring-primary/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-textMuted leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
