import { Section } from "../ui/Section";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic background and qualifications.">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 top-0 w-8 h-8 rounded-full bg-surface border-4 border-background flex items-center justify-center -translate-x-1/2 text-accent z-10 shadow-lg">
                <FaGraduationCap size={12} />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0">
                <div className={`glass-card p-6 md:p-8 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-accent mb-4">{edu.institution}</h4>
                  
                  <div className="flex flex-wrap gap-3 text-sm font-medium">
                    <span className="bg-surface px-3 py-1 rounded-full border border-border text-textMuted">
                      {edu.duration}
                    </span>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
