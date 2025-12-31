import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-32 pb-24 px-6 text-center animate-soft">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="flex justify-center items-center gap-6">
          <div className="w-16 h-[1px] bg-[#333333]/10"></div>
          
          <div className="relative group cursor-default">
             <div className="absolute inset-0 bg-[#98A68D]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
             <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#98A68D] relative z-10">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.41727 15.5434 3.15926 17.0782L2.5 21.5L7.0526 20.8997C8.52837 21.6094 10.2081 22 12 22Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>

          <div className="w-16 h-[1px] bg-[#333333]/10"></div>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-serif text-[#333333] tracking-tighter font-light italic leading-[0.9]">
          UnsmallTalk
        </h1>
        
        <p className="text-[#666666] text-xl font-light max-w-lg mx-auto leading-relaxed tracking-tight">
          A gentle space for social batteries running low. 
          <span className="block mt-3 font-serif italic text-[#98A68D] text-2xl">Find your words, quietly.</span>
        </p>
      </div>
    </header>
  );
};

export default Header;