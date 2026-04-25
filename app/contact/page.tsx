"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Container>
         <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center md:text-left">Contact Us</h1>
         
         <div className="flex flex-col lg:flex-row h-full min-h-[600px] border border-[var(--color-accent-line)]/20 shadow-xl">
             {/* Left: Contact Info (Dark) */}
             <div className="w-full lg:w-2/5 bg-[var(--color-bg-sec)] text-[var(--color-text-sec)] p-12 lg:p-16 flex flex-col justify-between">
                 <div>
                     <h3 className="font-serif text-3xl mb-8">Get in Touch</h3>
                     <p className="text-[var(--color-text-sec)]/70 mb-12 loading-relaxed">
                         We generally reply within 24 hours. For urgent project inquiries, please call our studio directly.
                     </p>
                     
                     <div className="space-y-8">
                         <div className="flex items-start space-x-4">
                             <Phone className="mt-1 text-[var(--color-accent-line)]" />
                             <div>
                                 <p className="font-bold text-sm uppercase tracking-wider mb-1">Call</p>
                                 <p className="text-sm opacity-80">0310-7773531</p>
                             </div>
                         </div>
                         <div className="flex items-start space-x-4">
                             <Mail className="mt-1 text-[var(--color-accent-line)]" />
                             <div>
                                 <p className="font-bold text-sm uppercase tracking-wider mb-1">Email</p>
                                 <a href="mailto:info@tadarch.co" className="text-sm opacity-80 hover:text-white transition-colors">info@tadarch.co</a>
                             </div>
                         </div>
                         <div className="flex items-start space-x-4">
                             <Globe className="mt-1 text-[var(--color-accent-line)]" />
                             <div>
                                 <p className="font-bold text-sm uppercase tracking-wider mb-1">Website</p>
                                 <a href="https://www.tadarch.co" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:text-white transition-colors">www.tadarch.co</a>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="mt-16 lg:mt-0">
                     <p className="font-serif italic opacity-50">"Every great project begins with a conversation."</p>
                 </div>
             </div>
             
             {/* Right: Form (Darker Shade) */}
             <div className="w-full lg:w-3/5 bg-[var(--color-box-bg)] text-white p-12 lg:p-16">
                 <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Input label="First Name" placeholder="John" darkVariant />
                        <Input label="Last Name" placeholder="Doe" darkVariant />
                    </div>
                    <Input label="Email Address" type="email" placeholder="john@example.com" darkVariant />
                    <Input label="Phone (Optional)" type="tel" placeholder="+1 (555) 000-0000" darkVariant />
                     
                     <div>
                         <label className="block text-xs font-bold tracking-wider uppercase text-white/70 mb-2">Message</label>
                         <textarea 
                            className="w-full h-32 border-b border-white/30 bg-transparent resize-none p-2 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                            placeholder="Tell us about your project..."
                         ></textarea>
                     </div>
                     
                     <div className="pt-4 flex justify-end">
                         <Button type="submit" variant="primary">Send Message</Button>
                     </div>
                 </form>
             </div>
         </div>
      </Container>
    </main>
  );
}
