import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Direct', value: 400, color: '#6366f1' },
  { name: 'Affiliate', value: 300, color: '#22c55e' },
  { name: 'Sponsored', value: 200, color: '#f59e0b' },
  { name: 'Email', value: 100, color: '#ef4444' },
];

const TotalSales = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const centerPercentage = ((data[0].value / total) * 100).toFixed(1);

  return (
    <div className="bg-[#1e1e2d] rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Total Sales</h2>

      <div className="flex flex-col items-center">
        <div style={{ width: 200, height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Percentage */}
          <div className="absolute translate-x-[70px] translate-y-[-135px] text-white text-lg font-semibold">
            {centerPercentage}%
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-300 w-full">
          {data.map((entry) => (
            <div key={entry.name} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <span>{entry.name}</span>
              </div>
              <span className="text-white font-semibold">${entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
