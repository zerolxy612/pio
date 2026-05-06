import ReactECharts from 'echarts-for-react'

import { growthChartOption } from '../config/chartOptions'

export function GrowthChart() {
  return <ReactECharts option={growthChartOption} className="h-[420px] w-full" />
}
