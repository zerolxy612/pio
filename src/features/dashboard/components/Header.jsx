import { useState } from 'react';
import { Calendar, Check, ChevronDown, Plus } from 'lucide-react';

const dateRanges = [
  '01-24 September',
  'Last 7 days',
  'Last 30 days',
  'This quarter',
];

const widgets = [
  'Trust Index',
  'Risk Level',
  'Incident Feed',
  'World Map',
  'Governance Score',
];

export function Header() {
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [addedWidgets, setAddedWidgets] = useState(['Trust Index', 'World Map']);

  const toggleWidget = (widget) => {
    setAddedWidgets((currentWidgets) => {
      if (currentWidgets.includes(widget)) {
        return currentWidgets.filter((item) => item !== widget);
      }

      return [...currentWidgets, widget];
    });
  };

  return (
    <header className="flex items-center justify-between px-1 py-2 mb-6">
      {/* Left: Logo & Title */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#469aff] flex items-center justify-center text-white shadow-sm shadow-blue-200">
            {/* Asterisk-like logo */}
            <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16M4 12h16M6.5 6.5l11 11M17.5 6.5l-11 11" />
            </svg>
          </div>
          <span className="text-[58px] font-bold text-[#469aff] tracking-tight leading-none">PIO</span>
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-[28px] font-medium text-gray-900 leading-tight">Public Intelligence Observatory</h1>
          <p className="text-[17px] text-gray-700 mt-1">Building Public Intelligence Infrastructure For The AI Era</p>
        </div>
      </div>

      {/* Middle: Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsWidgetOpen((isOpen) => !isOpen);
              setIsDateOpen(false);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-600 shadow-sm shadow-gray-200/40 hover:bg-gray-50 transition-colors text-[14px] font-medium"
          >
            <Plus size={16} className="text-gray-400" />
            Add Widget
          </button>

          {isWidgetOpen && (
            <div className="absolute right-0 top-[calc(100%+12px)] z-30 w-[240px] rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-200/70">
              <div className="px-2 pb-2">
                <p className="text-[13px] font-semibold text-gray-800">Widget Library</p>
                <p className="text-[12px] text-gray-400">{addedWidgets.length} active widgets</p>
              </div>
              <div className="space-y-1">
                {widgets.map((widget) => {
                  const isAdded = addedWidgets.includes(widget);

                  return (
                    <button
                      key={widget}
                      type="button"
                      onClick={() => toggleWidget(widget)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-gray-600 transition-colors hover:bg-[#f6f7fb]"
                    >
                      <span>{widget}</span>
                      {isAdded && <Check size={15} className="text-[#469aff]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsDateOpen((isOpen) => !isOpen);
              setIsWidgetOpen(false);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-600 text-[14px] font-medium shadow-sm shadow-gray-200/40 hover:bg-gray-50 transition-colors"
          >
            <Calendar size={16} className="text-gray-400" />
            {selectedRange}
            <ChevronDown
              size={15}
              className={`text-gray-400 transition-transform ${isDateOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isDateOpen && (
            <div className="absolute right-0 top-[calc(100%+12px)] z-30 w-[210px] rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-200/70">
              {dateRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setSelectedRange(range);
                    setIsDateOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-gray-600 transition-colors hover:bg-[#f6f7fb]"
                >
                  <span>{range}</span>
                  {selectedRange === range && <Check size={15} className="text-[#469aff]" />}
                </button>
              ))}
            </div>
          )}
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
