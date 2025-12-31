
import React, { useState } from 'react';
import { UserInput } from '../types';

interface ChatInterfaceProps {
  onGenerate: (input: UserInput) => void;
  loading: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onGenerate, loading }) => {
  const [receivedMessage, setReceivedMessage] = useState('');
  const [context, setContext] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (receivedMessage.trim()) {
      onGenerate({ receivedMessage, context });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto paper-card p-3 floating-shadow animate-soft" style={{ animationDelay: '0.2s' }}>
      <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-12">
        <div className="space-y-6">
          <label className="block text-center text-[11px] font-bold text-[#98A68D] uppercase tracking-[0.4em] opacity-80">
            The Incoming Message
          </label>
          <textarea
            value={receivedMessage}
            onChange={(e) => setReceivedMessage(e.target.value)}
            placeholder="Paste what they said..."
            className="w-full h-56 p-10 bg-[#FFF0F4] rounded-[40px] border border-[#FFE4E9] shadow-[0_6px_20px_rgba(255,200,210,0.1)] outline-none transition-all duration-500 focus:bg-[#FFF9FB] focus:shadow-[0_12px_30px_rgba(255,200,210,0.15)] focus:scale-[1.01] focus:border-[#FFD1DC] placeholder-[#333333]/20 text-[#333333] text-2xl font-light italic resize-none leading-relaxed"
          />
        </div>

        <div className="space-y-6">
          <label className="block text-center text-[11px] font-bold text-[#8DA6B1] uppercase tracking-[0.4em] opacity-80">
            Context / Your Energy
          </label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g. 'A work friend', 'I'm very tired'"
            className="w-full h-20 px-10 bg-[#FFF0F4] rounded-[40px] border border-[#FFE4E9] shadow-[0_6px_20px_rgba(255,200,210,0.1)] outline-none transition-all duration-500 focus:bg-[#FFF9FB] focus:shadow-[0_12px_30px_rgba(255,200,210,0.15)] focus:scale-[1.01] focus:border-[#FFD1DC] placeholder-[#333333]/20 text-[#333333] text-xl font-light"
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={loading || !receivedMessage.trim()}
            className={`w-full py-7 rounded-[30px] font-semibold text-xs uppercase tracking-[0.3em] transition-all duration-700 button-glow ${
              loading || !receivedMessage.trim()
                ? 'bg-[#F9F9F9] text-[#333333]/15 cursor-not-allowed'
                : 'bg-[#333333] text-white hover:bg-[#222222] shadow-2xl active:scale-[0.99]'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-5">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                Thinking gently...
              </span>
            ) : (
              'Find the words'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
