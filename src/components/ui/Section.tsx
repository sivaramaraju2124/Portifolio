import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, title, subtitle, className, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-24 md:py-32 relative", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {(title || subtitle) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24 text-center md:text-left"
            >
              {title && (
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 relative inline-block">
                  {title}
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
                </h2>
              )}
              {subtitle && <p className="text-textMuted text-lg max-w-2xl mt-6">{subtitle}</p>}
            </motion.div>
          )}
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
