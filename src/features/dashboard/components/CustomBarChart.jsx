import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function CustomBarChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 flex flex-col h-full min-h-[300px]">
      {/* Header */}
      <div className="flex justify-center items-start mb-12 relative">
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-bold text-gray-800 leading-tight">+80.9%</div>
          <div className="text-[14px] text-gray-400 font-medium">Better than last month</div>
        </div>
        <div className="absolute right-0 top-0 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1">
          <ArrowUpRight size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Bars Container */}
      <div className="flex-grow flex items-end justify-center gap-7 relative h-[220px] pb-4">
        {/* Background Dashed Line (Trend line) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none" className="absolute bottom-4">
            <path 
              d="M 10,120 L 50,120 L 50,60 L 140,60 L 140,10 L 230,10 L 230,80 L 300,80" 
              fill="none" 
              stroke="#e5e7eb" 
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
        <div className="w-[70px] h-[100%] rounded-2xl relative flex justify-center border-[2px] border-dashed border-[#469aff] bg-[#bfdbfe] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.7),rgba(255,255,255,0.7)_8px,transparent_8px,transparent_16px)] z-10">
          {/* Top Circle */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-[#469aff] bg-white z-20"></div>
          
          {/* Floating Label */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#469aff] rounded-lg px-2.5 py-1 flex items-center gap-1 shadow-md z-10">
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
