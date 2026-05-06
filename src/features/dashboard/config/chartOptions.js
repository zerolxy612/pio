export const growthChartOption = {
  color: ['#2563eb', '#10b981'],
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#111827',
    borderWidth: 0,
    textStyle: {
      color: '#ffffff',
    },
  },
  legend: {
    top: 0,
    right: 0,
    data: ['Revenue', 'Users'],
  },
  grid: {
    left: 36,
    right: 20,
    top: 48,
    bottom: 32,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    axisLine: {
      lineStyle: {
        color: '#d1d5db',
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}k',
    },
    splitLine: {
      lineStyle: {
        color: '#e5e7eb',
      },
    },
  },
  series: [
    {
      name: 'Revenue',
      type: 'line',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(37, 99, 235, 0.22)' },
            { offset: 1, color: 'rgba(37, 99, 235, 0.02)' },
          ],
        },
      },
      data: [32, 45, 58, 52, 68, 74, 91],
    },
    {
      name: 'Users',
      type: 'bar',
      barWidth: 18,
      itemStyle: {
        borderRadius: [6, 6, 0, 0],
      },
      data: [21, 29, 35, 42, 49, 57, 66],
    },
  ],
}

export const dashboardMetrics = [
  {
    label: 'Revenue',
    value: '$91k',
    change: '+18.7%',
  },
  {
    label: 'Active users',
    value: '66k',
    change: '+13.4%',
  },
  {
    label: 'Conversion',
    value: '8.2%',
    change: '+2.1%',
  },
]
