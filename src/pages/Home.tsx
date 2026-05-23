import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Zap, Coffee, Shield, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 glass rounded-[2.5rem] border border-forest/10 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
      <Icon className="text-forest" size={28} />
    </div>
    <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
    <p className="opacity-70 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ content, author, role }: { content: string, author: string, role: string }) => (
  <div className="p-10 glass rounded-[2.5rem] relative border border-forest/5">
    <div className="text-forest absolute top-4 left-6 font-serif text-6xl select-none opacity-10">“</div>
    <p className="text-forest text-lg italic mb-8 relative z-10 leading-relaxed font-serif">{content}</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
        {author[0]}
      </div>
      <div>
        <p className="font-bold text-sm tracking-wide">{author}</p>
        <p className="text-[10px] uppercase tracking-widest font-black opacity-40">{role}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-forest/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
                </span>
                Now open in Focus District
              </div>
              <h1 className="font-serif text-6xl lg:text-8xl font-bold text-forest leading-[1.05] mb-8 text-balance">
                Work better in a calm, <span className="italic text-sage">coffee-scented</span> space.
              </h1>
              <p className="text-xl text-forest/70 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Good coffee, fast Wi-Fi, quiet corners, and a warm space made for focused work, creative thinking, and deep sessions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Link
                  to="/bookings"
                  className="w-full sm:w-auto px-10 py-5 bg-terracotta text-white rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-xl shadow-terracotta/20 flex items-center justify-center gap-3"
                >
                  Reserve your seat <ArrowRight size={20} />
                </Link>
                <Link
                  to="/memberships"
                  className="w-full sm:w-auto px-10 py-5 glass text-forest border border-forest/10 rounded-full text-lg font-bold hover:shadow-lg transition-all text-center"
                >
                  View Pricing
                </Link>
              </div>

               <div className="mt-16 flex justify-center lg:justify-start gap-12">
                  <div className="border-l-2 border-terracotta pl-15">
                    <div className="font-bold text-2xl">4.9/5</div>
                    <div className="text-[10px] uppercase font-black tracking-widest opacity-40">Avg. Silence Rating</div>
                  </div>
                  <div className="border-l-2 border-sage pl-15">
                    <div className="font-bold text-2xl">Gigabit</div>
                    <div className="text-[10px] uppercase font-black tracking-widest opacity-40">Fiber Speed Wi-Fi</div>
                  </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative z-10 glass p-4 rounded-[3.5rem] shadow-2xl border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
                  alt="Cozy coworking space"
                  className="w-full h-[550px] object-cover rounded-[2.8rem]"
                />
              </div>
              {/* Decorative Floating Card */}
              <div className="absolute -bottom-12 -left-8 glass p-8 rounded-3xl shadow-xl z-20 hidden sm:block border-forest/5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-sage rounded-2xl flex items-center justify-center shadow-lg">
                    <Wifi className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-[0.2em] opacity-40">Network Speed</p>
                    <p className="font-serif text-2xl font-bold">1200 Mbps</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Tiles */}
      <section className="py-32 bg-forest/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-serif text-5xl lg:text-6xl font-bold text-forest">Designed for your best work.</h2>
            <p className="text-xl opacity-60 max-w-2xl mx-auto font-light leading-relaxed">
              We're obsessed over every acoustic and sensory detail to create an environment where you can truly find your flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wifi}
              title="Fiber Speed Wi-Fi"
              description="Reliable gigabit fiber connection with low latency, optimized for heavy creative workflows and clear video calls."
            />
            <FeatureCard
              icon={Zap}
              title="Power at Every Seat"
              description="Seamlessly integrated power and USB ports at every desk, booth, and lounging corner."
            />
            <FeatureCard
              icon={Shield}
              title="Quiet Zones Only"
              description="Strategic acoustic paneling and designated silent areas ensure focused work is never interrupted."
            />
            <FeatureCard
              icon={Coffee}
              title="Artisanal Coffee"
              description="Precision-brewed specialty coffee from local micro-roasters to fuel your mental performance."
            />
            <FeatureCard
              icon={Users}
              title="Private Booths"
              description="Sound-insulated spaces designed specifically for focused calls or high-priority deep work sessions."
            />
             <FeatureCard
              icon={Clock}
              title="Flexible Access"
              description="Easy hourly booking or monthly memberships. Work on your own terms with simple digital check-ins."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl font-bold text-forest mb-6 italic">A calm community.</h2>
              <p className="text-xl opacity-60 font-light">Join the remote workers, students, and freelancers who've found their productive sanctuary at WorkSip.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialCard
              content="Finally, a café where I can actually focus. The lighting is balanced and the space feels incredibly grounded."
              author="Sarah Jenkins"
              role="Freelance UI Designer"
            />
            <TestimonialCard
              content="The Wi-Fi is fast, the coffee is great, and the atmosphere. It's my go-to spot for deep research sessions."
              author="David Chen"
              role="PhD Student"
            />
             <TestimonialCard
              content="Perfect for study sessions or client calls. Love the quiet hours policy—it really preserves the vibe."
              author="Elena Rossi"
              role="Marketing Consultant"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="pb-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[4rem] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-20 border border-white/40 shadow-2xl">
            <div className="relative z-10 flex-1 text-center lg:text-left">
              <h2 className="font-serif text-5xl lg:text-7xl font-bold text-forest mb-8 leading-tight">Need a calm place <br/>to work today?</h2>
              <p className="text-xl text-forest opacity-70 mb-12 leading-relaxed max-w-lg font-light">
                Choose your preferred seat, pick a time slot, and settle into a workspace intentionally built for focus.
              </p>
              <Link
                to="/bookings"
                className="inline-flex items-center gap-4 px-12 py-6 bg-terracotta text-white rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-2xl shadow-terracotta/20"
              >
                Reserve your seat <ArrowRight />
              </Link>
            </div>
            <div className="relative z-10 flex-1 w-full scale-105">
              <div className="glass p-3 rounded-[3rem] border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Workspace preview"
                  className="rounded-[2.4rem] shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
