import { ArrowUpRight } from 'lucide-react';

export function KpiCard({ title, value, suffix, trend, titleColor = "text-[#469aff]", valueColor = "text-[#469aff]" }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 relative flex flex-col justify-between">
      {/* Top Right Icon */}
      <div className="absolute top-6 right-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
        <ArrowUpRight size={20} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className={`text-[15px] font-medium mb-4 ${titleColor}`}>{title}</h3>

      {/* Value */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className={`text-[42px] font-bold tracking-tight leading-none ${valueColor}`}>{value}</span>
        {suffix && <span className="text-gray-400 font-medium text-lg">{suffix}</span>}
      </div>

      {/* Trend */}
      <div className="flex items-center gap-1 text-[13px]">
        <div className="flex items-center text-[#10b981] font-medium">
          <ArrowUpRight size={14} strokeWidth={2.5} />
          <span>{trend}</span>
        </div>
        <span className="text-gray-400 ml-1">this week</span>
      </div>
    </div>
  );
}
