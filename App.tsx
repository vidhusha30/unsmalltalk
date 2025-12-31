import React, { useState } from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ResponseCard from './components/ResponseCard';
import { generateReplies } from './services/geminiService';
import { UserInput, ReplyOption } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [replies, setReplies] = useState<ReplyOption[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (input: UserInput) => {
    setLoading(true);
    setError(null);
    setReplies([]); 
    try {
      const result = await generateReplies(input);
      setReplies(result.replies);
      setTimeout(() => {
        window.scrollTo({ top: 800, behavior: 'smooth' });
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "I hit a small snag. Could we try once more?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-72 selection:bg-peach selection:text-charcoal">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <ChatInterface onGenerate={handleGenerate} loading={loading} />

        {error && (
          <div className="max-w-xl mx-auto mt-20 p-10 paper-card border-red-50 text-[#666666] text-sm rounded-[40px] text-center italic animate-soft shadow-sm">
            <span className="text-xl block mb-4">🍂</span>
            {error}
          </div>
        )}

        {replies.length > 0 && !loading && (
          <ResponseCard options={replies} />
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-20 px-8 bg-white/10 backdrop-blur-xl border-t border-[#333333]/5 z-50">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-[#333333]/30 text-[11px] font-bold uppercase tracking-[0.6em] space-y-10">
          <div className="flex gap-14 items-center scale-90 md:scale-100">
            <span className="hover:text-[#98A68D] cursor-default transition-colors duration-1000">Quiet</span>
            <span className="w-1.5 h-1.5 bg-[#333333]/10 rounded-full"></span>
            <span className="hover:text-[#A68DB1] cursor-default transition-colors duration-1000">Kind</span>
            <span className="w-1.5 h-1.5 bg-[#333333]/10 rounded-full"></span>
            <span className="hover:text-[#8DA6B1] cursor-default transition-colors duration-1000">Honest</span>
          </div>
          <p className="font-serif italic font-light tracking-normal text-sm opacity-40">UnsmallTalk • Made for gentle connections.</p>
        </div>
      </footer>
      
      {/* Subtle decorative elements for that "Cozy Coffee Shop" shelf look */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FDFCF0] blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-[#FCEEE9] blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;