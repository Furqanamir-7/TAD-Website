import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen-safe min-h-[600px] flex items-center justify-center overflow-hidden px-4">
        <Container className="relative z-10 text-center flex flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="TAD Architectural Firm"
            width={480}
            height={192}
            priority
            className="w-[320px] md:w-[600px] h-auto mb-8 md:mb-12"
          />
          <p className="font-sans text-base md:text-xl text-[var(--color-text-pri)]/70 max-w-md md:max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Designing Silence. Spaces that breathe, grounded in timeless luxury.
          </p>
          <Link href="/portfolio">
             <Button variant="primary">View Portfolio</Button>
          </Link>
        </Container>
      </section>

      {/* 2. About Snapshot - The Vision */}
      <section className="py-24 lg:py-32">
        <Container>
          {/* Thin top border */}
          <div className="w-full h-[1px] bg-[var(--color-accent-line)]/30 mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Subtle section label */}
              <p className="text-[var(--color-text-pri)]/70 leading-relaxed text-lg mb-8">About Us</p>
              
              {/* Vertical accent line */}
              <div className="absolute left-0 top-0 w-[2px] h-6 bg-[var(--color-text-pri)]/40 -ml-4 hidden md:block"></div>
              
              <h2 className="font-serif text-4xl md:text-5xl mb-8">The Vision</h2>
              <p className="text-[var(--color-text-pri)]/70 leading-relaxed text-lg mb-8">
                At TAD, we believe architecture is not just about structure, but about the feeling it evokes. 
                Our approach combines the raw materiality of stone and concrete with the precision of modern engineering.
              </p>
              <Link href="/ceo">
                <Button variant="secondary">Read our Philosophy</Button>
              </Link>
            </div>
            
            {/* Image with thin border frame */}
            <div className="relative">
              <div className="absolute -inset-3 border border-[var(--color-accent-line)]/20 pointer-events-none hidden md:block"></div>
              <div className="relative h-[350px] md:h-[600px] w-full bg-[var(--color-bg-sec)] overflow-hidden">
                 {/* Abstract visual */}
                 <Image 
                   src="/images/abstract.png" 
                   alt="Abstract Architecture"
                   fill
                   className="object-cover opacity-90"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
              </div>
            </div>
          </div>
          
          {/* Thin bottom border */}
          <div className="w-full h-[1px] bg-[var(--color-accent-line)]/30 mt-16"></div>
        </Container>
      </section>

      {/* 3. Services Preview */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-4">
            <h2 className="font-serif text-4xl">Our Expertise</h2>
            <Link href="/services">
                <Button variant="secondary">All Services</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              number="01"
              title="Architectural Design"
              description="Complete building design from concept to construction documentation, focusing on residential and commercial luxury."
              href="/services/architectural"
            />
            <ServiceCard 
              number="02"
              title="Interior Design"
              description="Curating internal spaces with bespoke furniture, lighting, and material palettes that harmonize with the structure."
              href="/services/interior"
            />
            <ServiceCard 
              number="03"
              title="Turnkey Projects"
              description="End-to-end project management, ensuring the vision is executed flawlessly from the first sketch to the final handover."
              href="/services/turnkey"
            />
          </div>
        </Container>
      </section>

      {/* 4. Featured Portfolio */}
      <section className="py-24 lg:py-32 bg-[var(--color-bg-sec)] text-[var(--color-text-sec)]">
        <Container>
           <h2 className="font-serif text-4xl mb-16">Selected Works</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
             <div className="space-y-8 md:space-y-12">
                <div className="h-[400px] md:h-[600px]">
                  <ProjectCard 
                    title="The Stone House"
                    category="Residential"
                    imageSrc="/images/stone_house.png" 
                    href="/portfolio/stone-house"
                    aspectRatio="portrait"
                  />
                </div>
                <div className="h-[300px] md:h-[400px]">
                   <ProjectCard 
                    title="Azure Villa"
                    category="Residential"
                    imageSrc="/images/azure_villa.png"
                    href="/portfolio/azure-villa"
                    aspectRatio="landscape"
                  />
                </div>
             </div>
             <div className="space-y-8 md:space-y-12 md:mt-24">
                <div className="h-[300px] md:h-[400px]">
                  <ProjectCard 
                    title="Urban Loft"
                    category="Interior"
                    imageSrc="/images/urban_loft.png"
                    href="/portfolio/urban-loft"
                    aspectRatio="landscape"
                  />
                </div>
                <div className="h-[400px] md:h-[600px]">
                   <ProjectCard 
                    title="Onyx Tower"
                    category="Commercial"
                    imageSrc="/images/onyx_tower.png"
                    href="/portfolio/onyx-tower"
                    aspectRatio="portrait"
                  />
                </div>
             </div>
           </div>
           <div className="mt-16 text-center">
             <Link href="/portfolio">
                <Button variant="primary" className="bg-white text-black hover:bg-gray-200">View All Projects</Button>
             </Link>
           </div>
        </Container>
      </section>

      {/* 5. CEO Highlight */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-3xl md:text-4xl leading-tight mb-8">
              "Architecture is the art of organizing the world. We design not just for the eye, but for the spirit."
            </blockquote>
            <div className="mb-8">
              <p className="font-sans font-bold uppercase tracking-widest text-sm">Kh. Tayyab Amir</p>
              <p className="text-sm text-[var(--color-text-pri)]/60">CEO</p>
            </div>
            <Link href="/ceo">
              <Button variant="secondary">Meet the CEO</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
