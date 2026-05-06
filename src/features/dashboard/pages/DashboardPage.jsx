import { Header } from '../components/Header';
import { KpiCard } from '../components/KpiCard';
import { IncidentsList } from '../components/IncidentsList';
import { WorldMap } from '../components/WorldMap';
import { CustomBarChart } from '../components/CustomBarChart';
import { SegmentedGauge } from '../components/SegmentedGauge';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] p-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <Header />

        <div className="grid grid-cols-1 xl:grid-cols-[55%_1fr] gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* KPI Grid */}
            <div className="grid grid-cols-2 gap-4">
              <KpiCard 
                title="Global AI Trust Index" 
                value="52.6" 
                suffix="/100" 
                trend="+6.2%" 
                titleColor="text-[#469aff]" 
                valueColor="text-[#469aff]" 
              />
              <KpiCard 
                title="Hong Kong AI Trust Index" 
                value="63.8" 
                suffix="/100" 
                trend="+3.1%" 
                titleColor="text-[#10b981]" 
                valueColor="text-[#10b981]" 
              />
              <KpiCard 
                title="Misinformation Risk Level" 
                value="High" 
                trend="+12%" 
                titleColor="text-[#d946ef]" 
                valueColor="text-[#d946ef]" 
              />
              <KpiCard 
                title="Governance Activity Score" 
                value="68.7" 
                suffix="/100" 
                trend="+5.6%" 
                titleColor="text-[#f59e0b]" 
                valueColor="text-[#f59e0b]" 
              />
              <KpiCard 
                title="Narrative Volatility" 
                value="72.6" 
                suffix="/100" 
                trend="+8.9%" 
                titleColor="text-[#10b981]" 
                valueColor="text-[#10b981]" 
              />
              <KpiCard 
                title="Early-warning Signals" 
                value="7" 
                trend="+2" 
                titleColor="text-[#469aff]" 
                valueColor="text-[#469aff]" 
              />
            </div>

            {/* Incidents List & Custom Bar Chart */}
            <div className="grid grid-cols-2 gap-4 flex-grow">
              <IncidentsList />
              <CustomBarChart />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Map Widget */}
            <div className="flex-grow min-h-[450px]">
              <WorldMap />
            </div>

            {/* Gauge Chart */}
            <div className="h-[300px]">
              <SegmentedGauge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
