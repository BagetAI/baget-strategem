"use client";

import React, { useState } from 'react';
import { ChevronRight, Brain, BookOpen, Users, Award } from 'lucide-react';

export default function LandingPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      favorite_game: formData.get('game'),
    };

    try {
      const response = await fetch('https://stg-app.baget.ai/api/public/databases/9f9b4efe-190c-4901-9f27-96fbe89cfa56/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-midnight rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-copper rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
            </div>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">STRATEGEM</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-slate">
          <a href="#philosophy" className="hover:text-copper transition-colors">Philosophy</a>
          <a href="#guides" className="hover:text-copper transition-colors">Rules Guides</a>
          <a href="#library" className="hover:text-copper transition-colors">The Library</a>
        </div>
        <a href="#join" className="bg-midnight text-parchment px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg">
          Join Waitlist
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider mb-6">
            <Award size={14} /> FOUNDING MEMBER ENROLLMENT OPEN
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
            Master the <span className="text-copper italic">System.</span>
          </h1>
          <p className="text-lg text-slate leading-relaxed mb-10 max-w-lg">
            Strategem removes the barrier of the rulebook. We provide the expertise so you can skip the learning curve and jump straight into high-stakes strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#join" className="bg-copper text-white px-8 py-4 rounded-3xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-premium">
              Secure Your Membership <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-6 text-sm font-mono text-slate">
              <span className="text-midnight font-bold">3.89/5</span> Average Library Weight
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-copper/5 rounded-[40px] -rotate-2"></div>
          <img 
            src="images/interior-of-a-premium-board-game-cafe-m.png" 
            alt="Strategem Premium Interior" 
            className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/5] md:aspect-square"
          />
          <div className="absolute bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-xs font-mono text-slate mb-2 uppercase tracking-tighter">Current Teaching</p>
            <p className="font-display font-bold text-midnight">On Mars</p>
            <div className="mt-3 w-full bg-slate/20 h-1 rounded-full overflow-hidden">
              <div className="bg-copper h-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="bg-midnight text-parchment py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 rounded-xl bg-copper/20 flex items-center justify-center text-copper mb-6">
                <Brain size={24} />
              </div>
              <h3 className="font-display text-2xl mb-4">No Manuals Required</h3>
              <p className="text-slate leading-relaxed">Our Rules Guides facilitate a mental model. Get making your first meaningful decision within 20 minutes of sitting down.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-copper/20 flex items-center justify-center text-copper mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="font-display text-2xl mb-4">The Lacerda Tier</h3>
              <p className="text-slate leading-relaxed">Master the most complex titles in existence, from <em>Lisboa</em> to <em>Weather Machine</em>, with on-call support for every turn.</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-copper/20 flex items-center justify-center text-copper mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-display text-2xl mb-4">Strategic Community</h3>
              <p className="text-slate leading-relaxed">A curated space for analytical minds. We match solo players into optimal pods for the highest level of competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="join" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Become a Founding Strategist</h2>
        <p className="text-lg text-slate mb-12">
          Join the exclusive waitlist for our flagship location. Founding members receive priority table booking, waived "Expert Teach" fees for their first month, and access to the Private Vault.
        </p>
        
        {formState === 'success' ? (
          <div className="bg-copper/10 border border-copper p-12 rounded-3xl">
            <h3 className="font-display text-2xl text-midnight mb-2">Welcome to the Inner Circle</h3>
            <p className="text-slate">You'll be the first to know when we open the doors in Q3 2026.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input 
              required
              name="name"
              type="text" 
              placeholder="Your Name" 
              className="w-full px-6 py-4 rounded-2xl bg-white border border-slate/20 focus:outline-none focus:border-copper transition-colors"
            />
            <input 
              required
              name="email"
              type="email" 
              placeholder="Professional Email" 
              className="w-full px-6 py-4 rounded-2xl bg-white border border-slate/20 focus:outline-none focus:border-copper transition-colors"
            />
            <input 
              name="game"
              type="text" 
              placeholder="Favorite Heavy Strategy Game (Optional)" 
              className="w-full px-6 py-4 rounded-2xl bg-white border border-slate/20 focus:outline-none focus:border-copper transition-colors"
            />
            <button 
              disabled={formState === 'loading'}
              type="submit" 
              className="w-full bg-midnight text-parchment py-5 rounded-3xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg disabled:opacity-50"
            >
              {formState === 'loading' ? 'Encrypting Data...' : 'Submit Credentials'}
            </button>
            {formState === 'error' && (
              <p className="text-red-600 text-sm mt-2">Authentication failed. Please check your transmission.</p>
            )}
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate/10 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-midnight rounded flex items-center justify-center">
              <div className="w-4 h-4 border border-copper rotate-45"></div>
            </div>
            <span className="font-display font-bold tracking-tight">STRATEGEM</span>
          </div>
          <div className="font-mono text-[10px] text-slate uppercase tracking-widest text-center">
            &copy; 2026 Strategem Gaming Facilitation. All components accounted for.
          </div>
          <div className="flex gap-6 text-slate">
            <a href="#" className="hover:text-midnight transition-colors">Manifesto</a>
            <a href="#" className="hover:text-midnight transition-colors">BGG Feed</a>
            <a href="#" className="hover:text-midnight transition-colors">Logistics</a>
          </div>
        </div>
      </footer>
    </div>
  );
}