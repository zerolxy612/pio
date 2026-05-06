import { Plus, Calendar } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 rounded-2xl shadow-sm mb-6">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-full bg-[#469aff] flex items-center justify-center text-white shadow-sm shadow-blue-200">
            {/* Asterisk-like logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16M4 12h16M6.5 6.5l11 11M17.5 6.5l-11 11" />
            </svg>
          </div>
          <span className="text-[32px] font-bold text-[#469aff] tracking-tight">PIO</span>
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-[22px] font-medium text-gray-800 leading-tight">Public Intelligence Observatory</h1>
          <p className="text-[13px] text-gray-500 mt-0.5">Building Public Intelligence Infrastructure For The AI Era</p>
        </div>
      </div>

      {/* Middle: Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-[14px] font-medium">
          <Plus size={16} className="text-gray-400" />
          Add Widget
        </button>
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 text-[14px] font-medium bg-white">
          <Calendar size={16} className="text-gray-400" />
          01-24 September
        </div>
      </div>

      {/* Right: Partner Logos */}
      <div className="flex items-center gap-6">
        <img src="/assets/Hkust-icon.png" alt="HKUST" className="h-12 object-contain" />
        <img src="/assets/EMIA.png" alt="EMIA" className="h-12 object-contain" />
      </div>
    </header>
  );
}
