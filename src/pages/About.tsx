import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wind, Users, Coffee, VolumeX, Zap, Shield, Link } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h1 className="font-serif text-6xl lg:text-8xl font-bold text-forest mb-10 leading-tight">Quiet by <br/><span className="text-sage italic underline decoration-forest/5">Design.</span></h1>
              <p className="text-xl opacity-60 mb-8 leading-relaxed font-light">
                WorkSip was born from a simple observation: the world is getting louder, but our best work still happens in the quiet.
              </p>
              <p className="text-xl opacity-60 mb-12 leading-relaxed font-light">
                We've combined the warmth of a neighborhood café with the precision of a high-end laboratory to create a third space that prioritizes your cognitive performance.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-serif text-4xl font-bold text-forest mb-2">2024</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Founded in Focus Dist.</p>
                </div>
                <div>
                  <h4 className="font-serif text-4xl font-bold text-forest mb-2">12k+</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Focused Hours Logged</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="glass p-4 rounded-[4rem] border border-white/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200"
                  alt="Our story"
                  className="rounded-[3rem] w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sage/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-5xl font-bold mb-20 italic">The Four Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto">
                <VolumeX className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Acoustics</h3>
              <p className="opacity-60 text-sm leading-relaxed">Strategic sound paneling and strict low-noise policies for uninterrupted flow.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto">
                <Coffee className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Stimulation</h3>
              <p className="opacity-60 text-sm leading-relaxed">Specialty coffee curated for clean caffeine focus without the jitter.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto">
                <Zap className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Reliability</h3>
              <p className="opacity-60 text-sm leading-relaxed">Gigabit fiber and power at every coordinate. No exceptions.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-[2rem] flex items-center justify-center mx-auto">
                <Shield className="text-sage" size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Sanctuary</h3>
              <p className="opacity-60 text-sm leading-relaxed">A warm, safe environment designed to be your home for deep work.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
