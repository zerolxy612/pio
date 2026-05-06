import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function CustomBarChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 flex flex-col h-full min-h-[320px] relative">
      {/* Top Right Arrow */}
      <div className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors bg-white shadow-sm z-20">
        <ArrowUpRight size={18} strokeWidth={2} />
      </div>

      {/* Bars Container */}
      <div className="w-[364px] mx-auto flex-grow flex items-end justify-between relative mt-4 pb-4">
        
        {/* Header Text Overlay */}
        <div className="absolute top-0 left-0 w-[168px] flex flex-col items-center z-20">
          <div className="text-[28px] font-bold text-gray-800 leading-tight">+80.9%</div>
          <div className="text-[13px] text-gray-400 font-medium mt-0.5">Better than last month</div>
        </div>

        {/* Background Dashed Line (Trend line) */}
        <div className="absolute inset-x-0 top-0 bottom-4 pointer-events-none flex justify-center z-0">
          <svg viewBox="0 0 364 204" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
            <path 
              d="
                M -10 112 
                L 84 112 
                L 84 51 
                L 182 51 
                L 182 0 
                L 280 0 
                L 280 82 
                L 374 82
              " 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Bar 1 */}
        <div className="w-[70px] h-[45%] bg-[#1e1e1e] rounded-2xl relative flex justify-center pt-3 shadow-sm z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg px-2.5 py-1 flex items-center gap-1 shadow-sm border border-gray-100">
            <span className="text-[13px] font-bold text-gray-800">50</span>
            <ArrowDownRight size={14} className="text-red-500" strokeWidth={3} />
          </div>
        </div>

        {/* Bar 2 */}
        <div className="w-[70px] h-[75%] bg-[#ebd5ff] rounded-2xl relative flex justify-center pt-3 shadow-sm z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg px-2.5 py-1 flex items-center gap-1 shadow-sm border border-gray-100">
            <span className="text-[13px] font-bold text-gray-800">15K</span>
            <ArrowUpRight size={14} className="text-[#10b981]" strokeWidth={3} />
          </div>
        </div>

        {/* Bar 3 (Special Striped) */}
        <div className="w-[70px] h-[100%] rounded-2xl relative flex justify-center bg-[#bfdbfe] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.7),rgba(255,255,255,0.7)_8px,transparent_8px,transparent_16px)] z-10">
          {/* Top Circle */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-[#469aff] bg-white z-20"></div>
          
          {/* Floating Label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#469aff] rounded-lg px-2.5 py-1 flex items-center gap-1 shadow-md z-10">
            <span className="text-[13px] font-bold text-white">15K</span>
            <ArrowUpRight size={14} className="text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Bar 4 */}
        <div className="w-[70px] h-[60%] bg-[#ccfbf1] rounded-2xl relative flex justify-center pt-3 shadow-sm z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-lg px-2.5 py-1 flex items-center gap-1 shadow-sm border border-gray-100">
            <span className="text-[13px] font-bold text-gray-800">16K</span>
            <ArrowUpRight size={14} className="text-[#10b981]" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
}
