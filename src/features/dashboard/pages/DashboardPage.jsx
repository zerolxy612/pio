import { Header } from '../components/Header';
import { KpiCard } from '../components/KpiCard';
import { IncidentsList } from '../components/IncidentsList';
import { WorldMap } from '../components/WorldMap';
import { CustomBarChart } from '../components/CustomBarChart';
import { SegmentedGauge } from '../components/SegmentedGauge';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] p-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="animate-fade-up">
          <Header />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
            <div className="grid grid-cols-2 gap-4">
              <KpiCard 
                title="Global AI Trust Index" 
                value="52.6" 
                suffix="/100" 
                trend="+6.2%" 
                titleColor="text-[#469aff]" 
                valueColor="text-[#469aff]" 
                trendBg="bg-[#f1fcf6]"
                delay={80}
              />
              <KpiCard 
                title="Hong Kong AI Trust Index" 
                value="63.8" 
                suffix="/100" 
                trend="+3.1%" 
                titleColor="text-[#3c812d]" 
                valueColor="text-[#3c812d]" 
                trendBg="bg-[#f1fcf6]"
                delay={160}
              />
              <KpiCard 
                title="Misinformation Risk Level" 
                value="High" 
                trend="+12%" 
                titleColor="text-[#d946ef]" 
                valueColor="text-[#d946ef]" 
                trendBg="bg-[#fdf4ff]"
                delay={240}
              />
              <KpiCard 
                title="Governance Activity Score" 
                value="68.7" 
                suffix="/100" 
                trend="+5.6%" 
                titleColor="text-[#f59e0b]" 
                valueColor="text-[#f59e0b]" 
                trendBg="bg-[#fffbeb]"
                delay={320}
              />
              <KpiCard 
                title="Narrative Volatility" 
                value="72.6" 
                suffix="/100" 
                trend="+8.9%" 
                titleColor="text-[#10b981]" 
                valueColor="text-[#10b981]" 
                trendBg="bg-[#f1fcf6]"
                delay={400}
              />
              <KpiCard 
                title="Early-warning Signals" 
                value="7" 
                trend="+2" 
                titleColor="text-[#469aff]" 
                valueColor="text-[#469aff]" 
                trendBg="bg-[#eff6ff]"
                delay={480}
              />
            </div>

            <div className="animate-fade-up h-full [animation-delay:220ms]">
              <WorldMap />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
            <div className="animate-fade-up h-full [animation-delay:560ms]">
              <IncidentsList />
            </div>
            <div className="animate-fade-up h-full [animation-delay:640ms]">
              <CustomBarChart />
            </div>
            <div className="animate-fade-up h-full [animation-delay:420ms]">
              <SegmentedGauge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
