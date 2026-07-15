import { Section } from "../ui/Section";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";

export function About() {
  const { stats, paragraphs } = portfolioData.about;

  return (
    <Section id="about" title="About Me" subtitle="A brief introduction to who I am and what I do.">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
            <img 
              src="/assets/profile.png" 
              alt="About" 
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="space-y-6 text-lg text-textMuted leading-relaxed">
            {paragraphs.map((p, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 pt-6 border-t border-border"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl sm:text-4xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-textMuted font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
