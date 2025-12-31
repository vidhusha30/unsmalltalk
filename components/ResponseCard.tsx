import React, { useState } from 'react';
import { ReplyOption } from '../types';

interface ResponseCardProps {
  options: ReplyOption[];
}

const ResponseCard: React.FC<ResponseCardProps> = ({ options }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (options.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-40 pb-40 animate-soft">
      <div className="flex items-center justify-between mb-20 px-4">
        <h3 className="text-4xl font-serif text-[#333333] italic font-light tracking-tight">Drafted for you</h3>
        <div className="h-[1px] flex-grow mx-10 bg-[#333333]/5"></div>
        <span className="text-[10px] font-bold text-[#A68DB1] uppercase tracking-[0.5em] opacity-60">Suggestions</span>
      </div>
      
      <div className="space-y-20">
        {options.map((option, index) => (
          <div 
            key={index} 
            className="group animate-soft"
            style={{ animationDelay: `${0.3 + (index * 0.2)}s` }}
          >
            <div 
              className="paper-card p-12 md:p-16 mb-8 hover:translate-y-[-4px] transition-all duration-700 cursor-pointer floating-shadow"
              onClick={() => handleCopy(option.text, index)}
            >
              <p className="text-[#333333] text-3xl md:text-5xl font-serif leading-[1.2] italic font-medium tracking-tight">
                "{option.text}"
              </p>
              
              <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-[1px] bg-[#98A68D] mt-3"></div>
                  <span className="text-[#666666] text-[13px] font-medium tracking-wide leading-relaxed italic opacity-80 max-w-xs">
                    {option.explanation}
                  </span>
                </div>
                
                <button
                  className={`px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border ${
                    copiedIndex === index 
                      ? 'bg-[#98A68D] text-white border-transparent shadow-lg' 
                      : 'bg-transparent text-[#333333] border-[#333333]/10 hover:bg-[#333333] hover:text-white'
                  }`}
                >
                  {copiedIndex === index ? 'Copied' : 'Copy Draft'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-40 px-10">
        <p className="text-[#98A68D] text-2xl font-serif italic leading-relaxed max-w-md mx-auto opacity-50 font-light">
          "Your boundaries are sacred. Take all the time you need to hit send."
        </p>
      </div>
    </div>
  );
};

export default ResponseCard;