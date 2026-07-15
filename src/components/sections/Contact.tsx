import { Section } from "../ui/Section";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export function Contact() {
  const { contact } = portfolioData;

  if (!contact) return null;

  return (
    <Section id="contact" title="Get In Touch" subtitle="Feel free to reach out for exciting collaborations or simply drop a hello—I'm always up for meaningful connections and new ideas.">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <motion.a 
            href={`mailto:${contact.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col items-center p-8 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl mb-6 ring-1 ring-primary/30 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Email</h3>
            <p className="text-textMuted text-sm text-center mb-4">{contact.email}</p>
            <span className="text-primary text-sm font-medium flex items-center gap-2 group-hover:underline">
              Send a message <FaExternalLinkAlt size={12} />
            </span>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col items-center p-8 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl mb-6 ring-1 ring-accent/30 group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Phone</h3>
            <p className="text-textMuted text-sm text-center mb-4">{contact.phone}</p>
            <span className="text-accent text-sm font-medium flex items-center gap-2 group-hover:underline">
              Give me a call <FaExternalLinkAlt size={12} />
            </span>
          </motion.a>

          {/* Location Card */}
          <motion.a 
            href={contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col items-center p-8 glass-card rounded-2xl hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-6 ring-1 ring-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Location</h3>
            <p className="text-textMuted text-sm text-center mb-4">{contact.location}</p>
            <span className="text-emerald-400 text-sm font-medium flex items-center gap-2 group-hover:underline">
              View on map <FaExternalLinkAlt size={12} />
            </span>
          </motion.a>

        </div>
      </div>
    </Section>
  );
}
