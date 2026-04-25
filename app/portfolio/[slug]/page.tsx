import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Mock data fetching based on slug
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        <div className="mb-8">
             <Link href="/portfolio" className="inline-flex items-center text-xs tracking-widest uppercase text-[var(--color-accent-line)] hover:text-[var(--color-text-pri)] transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
             </Link>
        </div>
        
        <header className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h1 className="font-serif text-5xl md:text-7xl">{title}</h1>
            <div className="md:text-right space-y-2 text-sm text-[var(--color-text-pri)]/70">
                <p>Location: New York, NY</p>
                <p>Year: 2024</p>
                <p>Area: 12,500 sq ft</p>
            </div>
        </header>

        <div className="relative w-full aspect-video bg-gray-200 mb-16">
            <Image 
               src={`https://placehold.co/1600x900/2a2a2a/FFF?text=${encodeURIComponent(title)}`}
               alt={title}
               fill
               className="object-cover"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-2">
                <h3 className="font-serif text-3xl mb-6">The Concept</h3>
                <p className="text-lg leading-relaxed text-[var(--color-text-pri)]/80">
                    This project represents a dialogue between the built environment and the natural landscape. 
                    Utilizing local limestone and exposed concrete, the structure acts as a canvas for light and shadow.
                    The interior spaces are fluid, dissolving the boundaries between rooms to create a unified experience of calm and openness.
                </p>
            </div>
            <div className="space-y-8">
                <div>
                     <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-2">Materials</h4>
                     <ul className="text-sm space-y-1 text-[var(--color-text-pri)]/70">
                        <li>Travertine Stone</li>
                        <li>Polished Concrete</li>
                        <li>White Oak</li>
                        <li>Blackened Steel</li>
                     </ul>
                </div>
                <div>
                    <h4 className="font-sans font-bold text-xs tracking-widest uppercase mb-2">Services</h4>
                    <ul className="text-sm space-y-1 text-[var(--color-text-pri)]/70">
                        <li>Architectural Design</li>
                        <li>Interior Finishing</li>
                        <li>Landscape Integration</li>
                     </ul>
                </div>
            </div>
        </div>

        {/* Next Project / CTA */}
        <div className="border-t border-[var(--color-accent-line)]/20 pt-16 text-center">
             <p className="font-serif text-2xl italic mb-6">Interested in discussing a similar project?</p>
             <Link href="/contact">
                 <Button variant="primary">Start a Conversation</Button>
             </Link>
        </div>
      </Container>
    </main>
  );
}
