import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  darkVariant?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, darkVariant, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className={`block text-xs font-bold tracking-wider uppercase mb-2 ${
            darkVariant ? "text-white/70" : "text-[var(--color-text-pri)]/70"
          }`}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full border-b bg-transparent px-0 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            darkVariant 
              ? "border-white/30 text-white placeholder-white/50 focus-visible:border-white"
              : "border-[var(--color-accent-line)] placeholder:text-muted-foreground focus-visible:border-[var(--color-text-pri)]",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
