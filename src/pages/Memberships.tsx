import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ title, price, subtitle, features, cta, popular }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative p-12 rounded-[3.5rem] border transition-all ${
      popular 
      ? 'glass border-white/50 shadow-2xl scale-105 z-10' 
      : 'glass border-forest/5 hover:border-forest/20 shadow-sm'
    }`}
  >
    {popular && (
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-forest text-white px-8 py-2.5 rounded-full text-[10px] uppercase font-black tracking-widest shadow-xl flex items-center gap-2">
        <Star size={12} fill="currentColor" className="text-warm-yellow" /> Recommended
      </div>
    )}
    <div className="mb-12 text-center">
      <h3 className="font-serif text-3xl font-bold text-forest mb-3 italic">{title}</h3>
      <div className="flex items-end justify-center gap-1 mb-4">
        <span className="text-4xl font-black text-forest">{price}</span>
        {price !== "Free" && <span className="opacity-40 mb-1 font-bold text-xs uppercase tracking-widest">/ mo</span>}
      </div>
      <p className="opacity-50 text-sm font-medium tracking-wide uppercase tracking-[0.1em]">{subtitle}</p>
    </div>
    <ul className="space-y-6 mb-16">
      {features.map((feature: string) => (
        <li key={feature} className="flex items-center gap-4 text-forest">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${popular ? 'bg-sage/20 text-forest' : 'bg-forest/5 text-forest/40'}`}>
            <Check size={14} />
          </div>
          <span className="text-sm opacity-80">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-full font-bold transition-all shadow-xl bg-terracotta text-white hover:opacity-90 shadow-terracotta/20`}>
      {cta}
    </button>
  </motion.div>
);

export default function Memberships() {
  return (
    <div className="min-h-screen">
       <section className="pt-32 pb-32 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-6xl lg:text-9xl font-bold text-forest mb-10 leading-tight">Pick your <br/><span className="text-terracotta italic underline decoration-forest/5">pace.</span></h1>
            <p className="text-xl opacity-60 leading-relaxed max-w-2xl mx-auto font-light">
              Transparent, flexible access for remote teams, freelancers, and independent makers who need a consistent coordinate for focus.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-40 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PricingCard
              title="Day Pass"
              price="₹1,999"
              subtitle="For casual visitors"
              features={[
                "Café area access (9am-9pm)",
                "Fast Wi-Fi (Gigabit)",
                "Dedicated power outlet",
                "One specialty coffee included",
                "Secure locker (1 day)"
              ]}
              cta="Get Day Pass"
            />
            <PricingCard
              title="Monthly"
              price="₹22,000"
              subtitle="For regular workers"
              popular={true}
              features={[
                "Unlimited café workspace access",
                "Priority booking for booths",
                "Free personal desk locker",
                "15% off all café menu items",
                "Access to community events",
                "Professional mail handling"
              ]}
              cta="Become a Member"
            />
            <PricingCard
              title="Fixed Desk"
              price="₹35,000"
              subtitle="For founders & focus"
              features={[
                "Reserved dedicated desk",
                "Personalized large locker",
                "4 hrs Meeting Room/mo",
                "Infinite batch brew coffee",
                "24/7 keycard access",
                "Herman Miller chair"
              ]}
              cta="Reserve Fixed Desk"
            />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="glass p-16 lg:p-24 rounded-[4rem] border border-white/50 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-warm-yellow/10 rounded-full blur-3xl -z-10"></div>
           <h2 className="font-serif text-4xl font-bold mb-8 italic">Academy Status</h2>
           <p className="opacity-60 text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
             We foster the next generation of makers. Active students receive <strong className="text-forest font-bold">20% off</strong> all passes and monthly memberships.
           </p>
           <button className="px-12 py-5 glass border-forest/10 text-forest rounded-full font-bold hover:shadow-xl transition-all uppercase text-xs tracking-widest">
             Verify Student Status
           </button>
        </div>
      </section>
    </div>
  );
}
