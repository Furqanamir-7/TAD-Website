import { Container } from "@/components/ui/Container";

export default function CEOPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
             <h1 className="font-serif text-6xl md:text-8xl">
                Kh. Tayyab Amir
             </h1>
             <p className="mt-4 text-xl font-serif italic text-[var(--color-text-pri)]/60">
                 CEO
             </p>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-serif text-2xl md:text-3xl italic">"Simplicity is the ultimate sophistication."</p>
            <p className="text-sm text-[var(--color-accent-line)] mt-6">
               <a href="mailto:info@tadarch.co" className="hover:text-[var(--color-text-pri)] transition-colors">info@tadarch.co</a>
               <span className="mx-2">|</span>
               <a href="https://www.tadarch.co" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-pri)] transition-colors">www.tadarch.co</a>
            </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-32">
                 <div>
                    <h3 className="font-sans font-bold text-xs tracking-widest uppercase mb-6 text-[var(--color-accent-line)]">The Biography</h3>
                    <div className="font-serif text-2xl leading-relaxed space-y-8">
                        <p>
                            Kh. Tayyab Amir established TAD Architectural Firm with a singular vision: to create architecture that silences the noise of the modern world. 
                            His work is heavily influenced by the principles of reduction and materiality.
                        </p>
                        <p>
                            With extensive experience leading high-profile residential and commercial projects, 
                            Tayyab approaches every site as a unique riddle, seeking the solution that feels inevitable rather than invented.
                        </p>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-[var(--color-accent-line)]/30">
                     <h3 className="font-sans font-bold text-xs tracking-widest uppercase mb-6 text-[var(--color-accent-line)]">The Philosophy</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm leading-7 text-[var(--color-text-pri)]/80">
                         <div>
                             <h4 className="font-serif text-xl text-[var(--color-text-pri)] mb-4">Timelessness</h4>
                             <p>
                                 Trends fade, but proportions and light are eternal. We strive to design spaces that will look as relevant in fifty years as they do today. Use of natural materials ensures graceful aging.
                             </p>
                         </div>
                         <div>
                             <h4 className="font-serif text-xl text-[var(--color-text-pri)] mb-4">Precision</h4>
                             <p>
                                 God is in the details. From the shadow gap at the floor to the alignment of the stone cladding, every junction is considered. Precision brings a sense of calm and order.
                             </p>
                         </div>
                     </div>
                 </div>
        </div>
      </Container>
    </main>
  );
}
