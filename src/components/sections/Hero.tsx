import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export function Hero() {
  const { title, description, resumeLink } = portfolioData.hero;

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm font-medium text-textMuted mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Swami Siva Rama Raju
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-textMain font-medium mb-4">
            {title}
          </p>
          <p className="text-textMuted text-lg max-w-lg mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#projects">
              <Button size="lg" className="gap-2">
                View Work <FaArrowRight size={16} />
              </Button>
            </a>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                View Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/sivaramaraju2124" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/swami-siva-rama-raju-gorrela" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:swamisivaramaraju@gmail.com" className="text-textMuted hover:text-white transition-colors">
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-surface border border-border rounded-full overflow-hidden shadow-2xl ring-4 ring-background">
              <img 
                src="/assets/profile.png" 
                alt="Swami Siva Rama Raju Gorrela" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
