import { GrowthChart } from '../components/GrowthChart'
import { MetricCard } from '../components/MetricCard'
import { dashboardMetrics } from '../config/chartOptions'

export function DashboardPage() {
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
            Dashboard module for charts, metrics, and statistics panels.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {dashboardMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
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
          <GrowthChart />
        </section>
      </div>
    </main>
  )
}
