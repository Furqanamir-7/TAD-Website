"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";

const CATEGORIES = ["All", "Residential", "Commercial", "Restaurants", "Turnkey", "Landscaping"];

const PROJECTS = [
  {
    id: "stone-house",
    title: "The Stone House",
    category: "Residential",
    image: "/images/stone_house.png",
    aspectRatio: "portrait" as const,
  },
  {
    id: "azure-villa",
    title: "Azure Villa",
    category: "Residential",
    image: "/images/azure_villa.png",
    aspectRatio: "landscape" as const,
  },
  {
    id: "onyx-tower",
    title: "Onyx Tower",
    category: "Commercial",
    image: "/images/onyx_tower.png",
    aspectRatio: "portrait" as const,
  },
  {
    id: "urban-loft",
    title: "Urban Loft",
    category: "Interior", // Maps to Residential usually, but let's say it's separate for now or mapped
    image: "/images/urban_loft.png",
    aspectRatio: "landscape" as const,
  },
  {
    id: "green-canopy",
    title: "Green Canopy",
    category: "Landscaping",
    image: "/images/green_canopy.png",
    aspectRatio: "square" as const,
  },
  {
    id: "bistro-noir",
    title: "Bistro Noir",
    category: "Restaurants",
    image: "/images/bistro_noir.png",
    aspectRatio: "landscape" as const,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory || (activeCategory === "Residential" && p.category === "Interior")); // Simple logic mapping

  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="mb-16 text-center space-y-6">
           <h1 className="font-serif text-5xl md:text-6xl">Portfolio</h1>
           
           {/* Filters */}
           <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-8">
             {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`text-sm tracking-widest uppercase transition-colors relative pb-1
                   ${activeCategory === cat 
                     ? "text-[var(--color-text-pri)] font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--color-text-pri)]" 
                     : "text-[var(--color-accent-line)] hover:text-[var(--color-text-pri)]"
                   }
                 `}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
           {filteredProjects.map((project) => (
             <div key={project.id}>
               <ProjectCard
                 title={project.title}
                 category={project.category}
                 imageSrc={project.image}
                 href={`/portfolio/${project.id}`}
                 aspectRatio={project.aspectRatio}
               />
             </div>
           ))}
        </div>
      </Container>
    </main>
  );
}
