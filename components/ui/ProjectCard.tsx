"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string; // ensuring this is handled, usually need specific assets or placeholders
  href: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function ProjectCard({
  title,
  category,
  imageSrc,
  href,
  aspectRatio = "square",
}: ProjectCardProps) {
  const ratioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <Link href={href} className="group block h-full w-full overflow-hidden">
      <div className={`relative w-full ${ratioClasses[aspectRatio]} overflow-hidden bg-[#e0e0e0]`}>
        {/* Image Placeholder if actual image fails or during dev, but using Image component */}
         <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
        
        {/* Hover Text */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-white text-xs tracking-widest uppercase mb-1">{category}</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-white font-serif text-2xl">{title}</h3>
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
      </div>
      
      {/* Mobile/Default Visible Text (Optional, per design requirement check) 
          Design says: "Hover reveals 'View Project'" or "Hover: Overlay with Project Name"
          I will keep the clean look and rely on hover for desktop, 
          but for mobile touching usually triggers hover styles or we might need always-visible text.
          For now, strictly following "Hover reveals". 
      */}
    </Link>
  );
}
