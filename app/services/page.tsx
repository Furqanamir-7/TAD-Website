import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "architectural",
    number: "01",
    title: "Architectural Design",
    description: "Comprehensive design services for residential and commercial properties, focusing on structural integrity and aesthetic purity.",
  },
  {
    id: "interior",
    number: "02",
    title: "Interior Design",
    description: "Crafting internal environments that reflect the architectural shell, using bespoke materials and lighting to create atmosphere.",
  },
  {
    id: "construction",
    number: "03",
    title: "Construction Consultancy",
    description: "Expert oversight during the build phase to ensure strict adherence to design specifications and quality standards.",
  },
  {
    id: "restoration",
    number: "04",
    title: "Restoration Works",
    description: "Sensitive restoration of heritage properties, preserving historical significance while integrating modern functionality.",
  },
  {
    id: "turnkey",
    number: "05",
    title: "Turnkey Projects",
    description: "From concept to keys in hand. We manage every detail of the project, delivering a fully finished masterpiece.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="mb-24 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl mb-8">Our Expertise</h1>
          <p className="text-xl text-[var(--color-text-pri)]/70 leading-relaxed">
            We provide a holistic approach to design, ensuring that every line drawn on paper translates into a built reality of enduring quality.
          </p>
        </div>

        <div className="space-y-0 border-t border-[var(--color-accent-line)]/30">
          {SERVICES.map((service) => (
            <Link 
              key={service.id} 
              href={`/services/${service.id}`}
              className="group flex flex-col md:flex-row items-baseline md:items-center justify-between py-12 border-b border-[var(--color-accent-line)]/30 bg-[var(--color-bg-main)] text-[var(--color-text-pri)] px-8 -mx-8 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <div className="flex items-baseline space-x-8 md:space-x-16">
                 <span className="font-mono text-sm text-[var(--color-text-pri)]/60 group-hover:text-[var(--color-text-pri)]/80 transition-colors">
                    {service.number}
                 </span>
                 <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-pri)] group-hover:translate-x-4 transition-transform duration-500">
                    {service.title}
                 </h2>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-xs tracking-widest uppercase mr-4 text-[var(--color-text-pri)]">View Details</span>
                  <ArrowRight size={20} className="text-[var(--color-text-pri)]" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
