import ReactECharts from 'echarts-for-react'

function App() {
  const option = {
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

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            React + Tailwind + ECharts
          </p>
          <h1 className="mt-3 text-4xl font-bold text-gray-950">
            Analytics Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600">
            A clean starter page with Tailwind utility styling and a responsive
            ECharts visualization.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ['Revenue', '$91k', '+18.7%'],
            ['Active users', '66k', '+13.4%'],
            ['Conversion', '8.2%', '+2.1%'],
          ].map(([label, value, change]) => (
            <div
              key={label}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-500">{label}</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <span className="text-3xl font-bold text-gray-950">
                  {value}
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
                  {change}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-950">
                Growth Overview
              </h2>
              <p className="text-sm text-gray-500">
                Monthly revenue and active user trend.
              </p>
            </div>
            <button className="rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
              Export
            </button>
          </div>
          <ReactECharts option={option} className="h-[420px] w-full" />
        </section>
      </div>
    </main>
  )
}

export default App
