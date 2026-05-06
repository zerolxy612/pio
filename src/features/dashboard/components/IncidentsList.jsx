export function IncidentsList() {
  const incidents = [
    "Incident1",
    "Incident2",
    "Incident3",
    "Incident4",
    "Incident5",
  ];

  return (
    <div className="bg-[#fbfbfb] rounded-2xl p-6 shadow-sm border border-gray-100/50 h-full flex flex-col">
      <h3 className="text-gray-600 font-medium text-[15px] mb-4">
        Misinformation Incidents(Global)
      </h3>
      
      <div className="mb-5">
        <span className="inline-block bg-[#469aff] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          Last 29 Days
        </span>
      </div>

      <div className="flex-grow flex flex-col justify-between pb-2">
        {incidents.map((incident, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-500 text-[13px] whitespace-nowrap">{incident}:</span>
            <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
