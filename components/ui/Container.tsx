import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
