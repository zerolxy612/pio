export function MetricCard({ label, value, change }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <span className="text-3xl font-bold text-gray-950">{value}</span>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
          {change}
        </span>
      </div>
    </div>
  )
}
