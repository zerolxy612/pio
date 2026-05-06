import { ArrowUpRight } from 'lucide-react';

import { useCountUp } from '../../../shared/hooks/useCountUp';

export function KpiCard({
  title,
  value,
  suffix,
  trend,
  titleColor = "text-[#469aff]",
  valueColor = "text-[#469aff]",
  delay = 0,
}) {
  const { displayValue, isNumeric } = useCountUp(value, { delay });

  return (
    <div
      className="dashboard-card animate-fade-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 relative flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out-quint)] hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/70 hover:border-gray-200"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Top Right Icon */}
      <div className="absolute top-6 right-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
        <ArrowUpRight size={20} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className={`text-[15px] font-medium mb-4 ${titleColor}`}>{title}</h3>

      {/* Value */}
      <div className="flex items-baseline gap-1 mb-4">
        <span
          className={`text-[42px] font-bold tracking-tight leading-none ${valueColor} ${isNumeric ? 'tabular-nums' : ''}`}
        >
          {displayValue}
        </span>
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
