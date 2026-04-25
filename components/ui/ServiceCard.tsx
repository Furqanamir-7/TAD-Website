import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ number, title, description, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="group block p-8 border border-[var(--color-accent-line)]/30 bg-[#3E3E3E] text-white hover:bg-[var(--color-bg-sec)] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
    >
      <div className="flex flex-col h-full justify-between min-h-[240px]">
        <div>
           <span className="block text-xs font-mono mb-4 text-white/60 group-hover:text-[var(--color-text-sec)]/60">
            {number}
          </span>
          <h3 className="font-serif text-2xl mb-4 text-white group-hover:text-white transition-colors">{title}</h3>
          <p className="text-sm text-white/80 leading-relaxed max-w-[280px]">
            {description}
          </p>
        </div>
        
        <div className="flex justify-end mt-8">
           <ArrowRight className="text-white/60 group-hover:text-white transform transition-transform duration-300 group-hover:translate-x-2" width={20} />
        </div>
      </div>
    </Link>
  );
}
