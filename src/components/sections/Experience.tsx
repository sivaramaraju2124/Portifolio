import { Section } from "../ui/Section";
import { portfolioData } from "../../data/portfolio";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and internships.">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        
        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
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
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 rounded-full bg-surface border-4 border-background flex items-center justify-center -translate-x-1/2 text-primary z-10 shadow-lg">
                <FaBriefcase size={12} />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`glass-card p-6 md:p-8 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-textMuted text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="default">{skill}</Badge>
                    ))}
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
