import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("glass-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1", className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
