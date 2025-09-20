import React from 'react';

const locations = [
  { city: 'New York', value: '72K' },
  { city: 'San Francisco', value: '39K' },
  { city: 'Sydney', value: '25K' },
  { city: 'Singapore', value: '61K' },
];

const RevenueByLocation = () => {
  return (
    <div className="bg-[#1e1e2d] rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-white mb-4">Revenue by Location</h2>

      {/* Map*/}
      <div className="flex justify-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution_gray.svg"
          alt="World Map"
          className="w-full max-h-40 object-contain opacity-70"
        />
      </div>

      {/* City List */}
      <div className="text-sm text-gray-300 space-y-2">
        {locations.map((loc) => (
          <div key={loc.city} className="flex justify-between">
            <span>{loc.city}</span>
            <span className="text-white font-semibold">{loc.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;
