import { MoreHorizontal } from 'lucide-react';

export function SegmentedGauge() {
  const totalSegments = 15;
  const activeSegments = 9;
  
  // Calculate angles for a semi-circle (from -85 to 85 degrees to leave a small gap at the bottom)
  const angles = Array.from({ length: totalSegments }, (_, i) => {
    return -85 + (170 / (totalSegments - 1)) * i;
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 h-full flex flex-col min-h-[300px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-5 bg-[#469aff] rounded-full"></div>
          <h3 className="text-[15px] font-medium text-gray-800">Early-warning Signals</h3>
        </div>
        <div className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1">
          <MoreHorizontal size={20} />
        </div>
      </div>

      {/* Gauge */}
      <div className="flex-grow flex flex-col items-center justify-center relative mt-4">
        <div className="w-full max-w-[320px] relative">
          <svg viewBox="0 0 200 110" className="w-full overflow-visible">
            {angles.map((angle, index) => {
              const isActive = index < activeSegments;
              return (
                <line
                  key={index}
                  x1="100"
                  y1="35"
                  x2="100"
                  y2="-5"
                  stroke={isActive ? '#469aff' : '#f3f4f6'}
                  strokeWidth="12"
                  strokeLinecap="round"
                  transform={`rotate(${angle}, 100, 100)`}
                  className="transition-colors duration-500"
                />
              );
            })}
          </svg>
          
          {/* Center Text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-[56px] font-bold text-[#469aff] leading-none mb-1">9</span>
            <span className="text-[14px] text-gray-400 font-medium whitespace-nowrap">Performance score</span>
          </div>
        </div>
      </div>
    </div>
  );
}
