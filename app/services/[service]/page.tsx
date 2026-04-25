import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ServiceDetail({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  // Mock data derivation
  const title = service.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) + (service === "architectural" || service === "interior" ? " Design" : "");
  
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
         <div className="mb-8">
             <Link href="/services" className="inline-flex items-center text-xs tracking-widest uppercase text-[var(--color-accent-line)] hover:text-[var(--color-text-pri)] transition-colors">
                <ArrowLeft size={16} className="mr-2" /> All Services
             </Link>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl mb-16">{title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="text-lg leading-relaxed text-[var(--color-text-pri)]/80 space-y-6">
                <p>
                    Our approach to {title.toLowerCase()} is rooted in a deep understanding of space, light, and materiality. 
                    We believe that successful projects result from a collaborative process where client vision meets architectural rigor.
                </p>
                <p>
                    From initial sketches to the final details, we maintain a focus on precision and craftsmanship, 
                    ensuring that the built environment stands the test of time both structurally and aesthetically.
                </p>
            </div>
            <div className="bg-[var(--color-bg-sec)] text-[var(--color-text-sec)] p-12">
                <h3 className="font-serif text-2xl mb-8">Our Process</h3>
                <ul className="space-y-8">
                    <li className="flex">
                        <span className="font-mono text-sm text-[var(--color-accent-line)] w-12 pt-1">01</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Discovery & Strategy</h4>
                            <p className="text-sm opacity-70">Understanding requirements, site analysis, and feasibility studies.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <span className="font-mono text-sm text-[var(--color-accent-line)] w-12 pt-1">02</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Concept Design</h4>
                            <p className="text-sm opacity-70">Developing the core idea, spatial planning, and initial visualizations.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <span className="font-mono text-sm text-[var(--color-accent-line)] w-12 pt-1">03</span>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Execution</h4>
                            <p className="text-sm opacity-70">Detailed technical drawings, material selection, and construction oversight.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* Relevant Projects */}
        <div className="mb-24">
            <h3 className="font-serif text-3xl mb-12">Related Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="h-[400px]">
                   <ProjectCard 
                    title="The Glass Pavilion"
                    category="Commercial"
                    imageSrc="/images/glass_pavilion.png"
                    href="/portfolio/glass-pavilion"
                    aspectRatio="landscape"
                  />
                </div>
                <div className="h-[400px]">
                   <ProjectCard 
                    title="Hillside Retreat"
                    category="Residential"
                    imageSrc="/images/hillside_retreat.png"
                    href="/portfolio/hillside"
                    aspectRatio="landscape"
                  />
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-bg-sec)] text-[var(--color-text-sec)] pt-16 pb-16 text-center">
             <h3 className="font-serif text-3xl mb-6">Ready to start your journey?</h3>
             <Link href="/contact">
                 <Button variant="primary">Consult with us</Button>
             </Link>
        </div>
      </Container>
    </main>
  );
}
