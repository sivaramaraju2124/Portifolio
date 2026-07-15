import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white inline-block mb-2">
            Siva<span className="text-primary">.</span>
          </a>
          <p className="text-textMuted text-sm">
            Building intelligent solutions and elegant interfaces.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/sivaramaraju2124" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/swami-siva-rama-raju-gorrela" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:swamisivaramaraju@gmail.com" className="text-textMuted hover:text-white transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
