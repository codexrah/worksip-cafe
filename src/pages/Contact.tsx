import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, Train, Car } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="font-serif text-7xl lg:text-9xl font-bold text-forest mb-8 italic">Visit <br/><span className="text-sage underline decoration-forest/5">WorkSip.</span></h1>
            <p className="text-xl opacity-60 max-w-xl mx-auto font-light leading-relaxed">Drop by for a tour, a coffee, or a full day of deep focus. We'd love to host you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Details */}
            <div className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-10 glass rounded-[3rem] border border-forest/10 shadow-sm relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-terracotta/5 rounded-full blur-2xl"></div>
                    <MapPin className="text-terracotta mb-8" size={36} />
                    <h3 className="font-bold text-forest mb-3 tracking-tight text-lg">Coordinate</h3>
                    <p className="opacity-60 text-sm leading-relaxed font-light">
                      Near calm street, Pilar 132,<br />
                      Sector-100, Noida, 201301
                    </p>
                  </div>
                  <div className="p-10 glass rounded-[3rem] border border-forest/10 shadow-sm relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-sage/5 rounded-full blur-2xl"></div>
                    <Clock className="text-forest mb-8" size={36} />
                    <h3 className="font-bold text-forest mb-3 tracking-tight text-lg">Quiet Hours</h3>
                    <p className="opacity-60 text-sm leading-relaxed font-light">
                      Mon – Sat: 09:00 – 21:00<br />
                      Sunday: 10:00 – 18:00
                    </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <a href="tel:+1234567890" className="flex items-center gap-6 p-8 glass rounded-[2.5rem] border border-forest/5 hover:border-forest/20 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-forest group-hover:bg-sage/20 transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase opacity-40 tracking-[0.2em] mb-1">Voice</p>
                      <p className="font-bold text-forest">+1 (234) 567-890</p>
                    </div>
                 </a>
                 <a href="mailto:hello@worksip.com" className="flex items-center gap-6 p-8 glass rounded-[2.5rem] border border-forest/5 hover:border-forest/20 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-forest group-hover:bg-sage/20 transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase opacity-40 tracking-[0.2em] mb-1">Digital</p>
                      <p className="font-bold text-forest">hello@worksip.com</p>
                    </div>
                 </a>
               </div>

               <div className="p-10 glass rounded-[3.5rem] border border-forest/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-warm-yellow/5 rounded-full blur-3xl"></div>
                   <h4 className="font-serif text-2xl font-bold text-forest mb-8 italic">
                    Approach
                  </h4>
                  <div className="space-y-6">
                     <div className="flex gap-5">
                        <Train size={20} className="opacity-30 shrink-0 mt-1" />
                        <p className="opacity-60 text-sm leading-relaxed font-light">Focus Central is a 5-minute walk from here.</p>
                     </div>
                     <div className="flex gap-5">
                        <Car size={20} className="opacity-30 shrink-0 mt-1" />
                        <p className="opacity-60 text-sm leading-relaxed font-light">Secure basement parking available for members. Street parking on Sector-100 main road.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Map Area */}
            <div className="glass rounded-[4rem] overflow-hidden relative border border-white/50 shadow-2xl p-4">
               <div className="relative h-full w-full rounded-[3.2rem] overflow-hidden">
                  <div className="absolute inset-0 grayscale contrast-125 opacity-30">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover" 
                        alt="Map"
                      />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center glass p-12 rounded-[4rem] shadow-2xl border border-white/40 max-w-sm mx-4">
                        <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                          <MapPin className="text-terracotta" size={40} />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-forest mb-4">Coordinate Lock.</h3>
                        <p className="opacity-40 mb-8 text-[10px] uppercase font-black tracking-widest text-forest">Focus District, Noida</p>
                        <a 
                          href="https://goo.gl/maps" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-5 bg-terracotta text-white rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-terracotta/20 inline-block uppercase text-xs tracking-widest"
                        >
                          Get Directions
                        </a>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/123456789" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 hover:bg-[#128C7E]"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
