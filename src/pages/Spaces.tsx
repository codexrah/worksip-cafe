import React from 'react';
import { motion } from 'framer-motion';
import { Users, Volume2, VolumeX, Coffee, Monitor, Wind, ShieldCheck } from 'lucide-react';

const SpaceCard = ({ image, name, capacity, price, noise, amenities }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-[3rem] border border-white/40 overflow-hidden shadow-sm hover:shadow-2xl transition-all group p-4"
  >
    <div className="relative h-64 overflow-hidden rounded-[2.5rem]">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-4 right-4">
        <span className="glass px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold">
          {name === 'Quiet Desk' || name === 'Private Booth' ? 'Silent' : 'Social'}
        </span>
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-2xl font-bold text-forest">{name}</h3>
        <p className="text-xl font-serif text-forest font-bold">{price}</p>
      </div>
      <p className="text-sm opacity-50 mb-6">{name === 'Quiet Desk' ? 'Solo focused work' : name === 'Window Seat' ? 'Natural light' : name === 'Private Booth' ? 'Calls & focused work' : 'Reading & casual work'}</p>
      
      <div className="flex items-center gap-4 text-forest text-xs font-bold uppercase tracking-widest mb-8 opacity-40">
        <div className="flex items-center gap-1.5"><Users size={14} /> Max {capacity}</div>
        <span>•</span>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          {noise === 'Silent Zone' ? <VolumeX size={14} /> : <Volume2 size={14} />} 
          {noise}
        </div>
      </div>

      <button className="w-full py-4 bg-terracotta text-white rounded-full font-bold hover:shadow-lg transition-all shadow-terracotta/20">
        Book this space
      </button>
    </div>
  </motion.div>
);

export default function Spaces() {
  const spaces = [
    {
      name: "Quiet Desk",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      capacity: 1,
      price: "₹400/hr",
      noise: "Silent Zone",
      amenities: ["WiFi", "Privacy", "Coffee"]
    },
    {
      name: "Window Seat",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
      capacity: 1,
      price: "₹500/hr",
      noise: "Low Noise",
      amenities: ["WiFi", "Coffee"]
    },
    {
      name: "Private Booth",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
      capacity: 2,
      price: "₹1000/hr",
      noise: "Calls Only",
      amenities: ["WiFi", "Privacy", "Screen"]
    },
    {
      name: "Lounge Area",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
      capacity: 12,
      price: "₹300/hr",
      noise: "Conversation Friendly",
      amenities: ["WiFi", "Coffee"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h1 className="font-serif text-6xl lg:text-8xl font-bold text-forest mb-8 leading-tight">Curated <br/><span className="text-sage italic">Corners.</span></h1>
            <p className="text-xl opacity-60 leading-relaxed font-light">
              From whisper-quiet zones for deep research to social lounges for creative brainstorming. Find the coordinate that matches your output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiet Hours Banner */}
      <div className="glass border-y border-forest/10 py-5">
        <div className="max-w-7xl mx-auto px-4 text-center font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-6">
           <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
           <span>Quiet Hours: 09:00 – 12:00 and 14:00 – 17:00 daily.</span>
           <div className="w-2 h-2 bg-terracotta rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {spaces.map((space) => (
              <SpaceCard key={space.name} {...space} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
