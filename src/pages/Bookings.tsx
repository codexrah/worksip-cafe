import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, Coffee, Box, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Bookings() {
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    date: '',
    time: '',
    space: 'Quiet Desk',
    people: '1',
    addons: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const spaces = ['Quiet Desk', 'Window Seat', 'Private Booth', 'Meeting Room', 'Café Lounge'];
  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass p-12 rounded-[3.5rem] shadow-2xl border border-white/50 text-center"
        >
          <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-forest" size={40} />
          </div>
          <h1 className="font-serif text-3xl font-bold text-forest mb-4 italic">You're all set!</h1>
          <p className="text-forest opacity-60 mb-10 leading-relaxed text-sm">
            Booking confirmed for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. We've sent a digital coordinate to your email.
          </p>
          <button 
            onClick={() => setStep(1)}
            className="w-full py-5 bg-terracotta text-white rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-terracotta/20 flex items-center justify-center gap-2"
          >
            Make another booking <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h1 className="font-serif text-6xl lg:text-8xl font-bold text-forest mb-8 leading-tight">Reserve <br/><span className="text-sage italic">your seat.</span></h1>
              <p className="text-xl text-forest/70 leading-relaxed max-w-lg font-light">
                Pick a coordinate that matches your output. From silent zones for deep research to social spaces for creative syncs.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: ShieldCheck, title: "Flexible Cancellation", text: "Free adjustment up to 6 hours before your session." },
                { icon: Clock, title: "09:00 – 21:00 Daily", text: "Work when you want. Last session entry available at 20:00." },
                { icon: Box, title: "Secure Lockers", text: "Daily lockers for your hardware. Add it to your booking below." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border border-forest/10 shrink-0 shadow-sm">
                    <item.icon size={24} className="text-forest" />
                  </div>
                  <div>
                    <h4 className="font-bold text-forest mb-1 tracking-tight">{item.title}</h4>
                    <p className="opacity-60 text-sm font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 glass rounded-[3rem] border border-forest/5 italic text-forest/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-3xl"></div>
              "Finally, a booking process as calm as the space itself. Highly recommend the private booths for client calls."
              <p className="mt-6 font-bold text-sm text-forest uppercase tracking-widest">— James T., Product Manager</p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 lg:p-16 rounded-[4rem] shadow-2xl border border-white/50"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <CalendarIcon size={12} /> Date
                  </label>
                  <input 
                    type="date" 
                    required
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-6 py-5 glass border border-forest/10 rounded-2xl focus:ring-2 focus:ring-sage transition-all font-medium outline-none"
                  />
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <Clock size={12} /> Time Slot
                  </label>
                  <select 
                    required
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-6 py-5 glass border border-forest/10 rounded-2xl focus:ring-2 focus:ring-sage transition-all font-medium appearance-none outline-none"
                  >
                    <option value="">Choose a time</option>
                    {times.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Space & People */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <Box size={12} /> Workspace
                  </label>
                  <select 
                    value={formData.space}
                    onChange={(e) => setFormData({...formData, space: e.target.value})}
                    className="w-full px-6 py-5 glass border border-forest/10 rounded-2xl focus:ring-2 focus:ring-sage transition-all font-medium appearance-none outline-none"
                  >
                    {spaces.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <Users size={12} /> People
                  </label>
                   <select 
                    value={formData.people}
                    onChange={(e) => setFormData({...formData, people: e.target.value})}
                    className="w-full px-6 py-5 glass border border-forest/10 rounded-2xl focus:ring-2 focus:ring-sage transition-all font-medium appearance-none outline-none"
                  >
                    {[1, 2, 4, 6, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                  </select>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-6">
                 <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Add-ons</label>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: 'coffee', label: 'Artisan Coffee', icon: Coffee },
                      { id: 'locker', label: 'Secure Locker', icon: ShieldCheck }
                    ].map(item => (
                      <label key={item.id} className="flex items-center justify-between p-6 glass border border-forest/10 rounded-[2rem] cursor-pointer hover:bg-forest/5 transition-all group">
                        <span className="flex items-center gap-3 text-sm font-bold text-forest">
                          <item.icon size={18} className="opacity-40 group-hover:opacity-100 transition-all" /> {item.label}
                        </span>
                        <input type="checkbox" className="w-5 h-5 rounded-full border-forest/20 text-terracotta focus:ring-terracotta" />
                      </label>
                    ))}
                 </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-6 bg-terracotta text-white rounded-full text-xl font-bold hover:opacity-90 transition-all shadow-2xl shadow-terracotta/20 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : (
                  <>Confirm reservation <ArrowRight size={22} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
