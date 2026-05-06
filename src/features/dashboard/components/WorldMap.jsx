import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { ArrowUpRight } from 'lucide-react';

export function WorldMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('Misinformation Risk');

  const tabs = [
    'Misinformation Risk',
    'AI Literacy Index',
    'Governance Index',
    'Trust Index'
  ];

  useEffect(() => {
    fetch('/assets/world.json')
      .then((response) => response.json())
      .then((geoJson) => {
        echarts.registerMap('world', geoJson);
        setMapLoaded(true);
      })
      .catch((error) => console.error('Error loading map data:', error));
  }, []);

  const getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
          const value = (params.value + '').split('.');
          const valueStr = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
          return params.name + ': ' + (isNaN(params.value) ? 'No Data' : valueStr);
        }
      },
      visualMap: {
        type: 'piecewise',
        left: '5%',
        bottom: '5%',
        itemWidth: 12,
        itemHeight: 12,
        itemSymbol: 'rect',
        textStyle: {
          color: '#6b7280',
          fontSize: 12
        },
        pieces: [
          { min: 80, max: 100, label: '80-100', color: '#f4bce6' }, // Pink
          { min: 60, max: 80, label: '60-80', color: '#a5c8ff' },  // Light Blue
          { min: 40, max: 60, label: '40-60', color: '#7fb3ff' },  // Blue
          { min: 20, max: 40, label: '20-40', color: '#8ee0d5' },  // Cyan
          { value: 0, label: 'no data', color: '#e5e7eb' }         // Grey
        ]
      },
      series: [
        {
          name: 'Global AI Trust Index',
          type: 'map',
          map: 'world',
          roam: true,
          zoom: 1.2,
          scaleLimit: {
            min: 1,
            max: 5
          },
          itemStyle: {
            borderColor: '#ffffff',
            borderWidth: 0.5,
            areaColor: '#f3f4f6'
          },
          emphasis: {
            itemStyle: {
              areaColor: '#cbd5e1',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.2)'
            },
            label: {
              show: false
            }
          },
          data: [
            { name: 'United States of America', value: 75 },
            { name: 'China', value: 55 },
            { name: 'Russia', value: 90 },
            { name: 'Brazil', value: 35 },
            { name: 'Australia', value: 65 },
            { name: 'Canada', value: 45 },
            { name: 'India', value: 85 },
            { name: 'Greenland', value: 65 },
            { name: 'Indonesia', value: 45 },
            { name: 'Sweden', value: 45 }
          ]
        }
      ]
    };
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100/50 flex flex-col h-full relative">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-5 bg-[#469aff] rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-800">Global AI Trust Index</h2>
          </div>
          
          {/* Tabs */}
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-[13px] rounded-md font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-[#469aff] text-white' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Top Right Icon */}
        <div className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors p-1">
          <ArrowUpRight size={20} strokeWidth={2} />
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-grow w-full min-h-[350px] relative">
        {mapLoaded ? (
          <ReactECharts 
            option={getOption()} 
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'canvas' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Loading map data...
          </div>
        )}
      </div>
    </div>
  );
}
