import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer",
          variant === "primary" && [
            "bg-[var(--color-bg-sec)] text-[var(--color-text-sec)]",
            "px-8 py-4 text-sm font-medium tracking-wide uppercase",
            "hover:bg-[#333335] hover:scale-[1.02]",
            "border border-white/20",
          ],
          variant === "secondary" && [
            "bg-transparent text-[var(--color-text-pri)]",
            "py-2 text-base font-medium",
            "border-b border-[var(--color-bg-sec)]",
            "hover:border-b-[2px] hover:pb-[7px]", // Maintain height
          ],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, cn };
