import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Apple, Loader, ShieldPlus, ExternalLink } from 'lucide-react';

const MenuItem = ({ name, price, description, icons }: any) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-forest/5 group transition-all">
    <div className="flex-1 pr-12">
      <div className="flex items-center gap-4 mb-2">
        <h3 className="text-xl font-bold text-forest group-hover:text-sage transition-colors">{name}</h3>
        <div className="flex gap-2">
          {icons?.v && <div className="w-5 h-5 glass rounded-full flex items-center justify-center"><Leaf size={12} className="text-sage" title="Vegan" /></div>}
          {icons?.gf && <div className="w-5 h-5 glass rounded-full flex items-center justify-center"><ShieldPlus size={12} className="text-terracotta" title="Gluten-Free" /></div>}
        </div>
      </div>
      <p className="text-sm opacity-50 leading-relaxed max-w-md font-light">{description}</p>
    </div>
    <div className="mt-4 sm:mt-0 font-serif text-2xl font-bold text-forest">
      {price}
    </div>
  </div>
);

const CategorySection = ({ title, items }: any) => (
  <div className="mb-24">
    <div className="flex items-center gap-10 mb-16">
      <h2 className="font-serif text-4xl font-bold text-forest shrink-0 italic">{title}</h2>
      <div className="h-px bg-forest/10 w-full"></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
      {items.map((item: any) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

export default function Menu() {
  const sections = [
    {
      title: "Specialty Coordinate",
      items: [
        { name: "Single Origin Batch", price: "₹350", description: "Rotating selection from our local roasting partner. Clean, bright, and focused.", icons: { v: true, gf: true } },
        { name: "Oat Flat White", price: "₹450", description: "Micro-foam over double ristretto. Our signature focused brew.", icons: { v: true } },
        { name: "WorkSip Cold Brew", price: "₹480", description: "12-hour gentle steep for a low-acid, high-performance finish.", icons: { v: true, gf: true } },
        { name: "Cortado", price: "₹400", description: "Balanced ratio of espresso and textured milk.", icons: { gf: true } },
      ]
    },
    {
      title: "Clean Energy",
      items: [
        { name: "Avocado & Sage Sourdough", price: "₹950", description: "Crushed avocado, house-made sage oil, and pomegranate seeds.", icons: { v: true } },
        { name: "Protein Power Bowl", price: "₹1,150", description: "Roasted chicken, quinoa, kale, and a turmeric-lemon dressing.", icons: { gf: true } },
        { name: "Umami Mushroom Toast", price: "₹1,050", description: "Wild mushrooms, truffle butter, and fresh herbs on thick rye.", icons: { gf: true } },
        { name: "Paleo Fuel Plate", price: "₹850", description: "Boiled egg, almonds, seasonal berries, and sharp white cheddar.", icons: { gf: true } },
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-40">
      <header className="relative pt-40 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            alt="Coffee close up" 
            className="w-full h-full object-cover blur-2xl lg:blur-3xl"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-7xl lg:text-9xl font-bold mb-10 text-forest"
          >
            Café <br/> <span className="text-sage italic underline decoration-forest/5">Menu.</span>
          </motion.h1>
          <p className="text-xl opacity-60 max-w-xl mx-auto font-light leading-relaxed">Artisan coffee and brain-friendly nourishment, delivered directly to your coordinate.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {sections.map((section) => (
          <CategorySection key={section.title} {...section} />
        ))}

        <div className="text-center mt-40">
           <div className="glass p-16 lg:p-32 rounded-[5rem] border border-white/50 inline-block max-w-4xl relative overflow-hidden shadow-2xl">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl"></div>
              <h2 className="font-serif text-5xl font-bold mb-8 text-forest italic">Fresh Morning Batch</h2>
              <p className="opacity-60 text-xl mb-12 leading-relaxed font-light">
                Our pastries are made daily at 04:00 by local artisan bakers. Limited quantities available per session.
              </p>
              <button className="flex items-center gap-3 px-10 py-5 bg-terracotta text-white rounded-full font-bold hover:shadow-2xl transition-all mx-auto shadow-terracotta/20 uppercase text-xs tracking-widest">
                Order via QR at Coordinate <ExternalLink size={16} />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
