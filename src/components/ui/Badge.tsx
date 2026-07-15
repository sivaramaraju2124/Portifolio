import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors",
          {
            "bg-surfaceHover text-textMain border border-border": variant === "default",
            "border border-primary/50 text-primary": variant === "outline",
            "bg-accent/10 text-accent border border-accent/20": variant === "accent",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
