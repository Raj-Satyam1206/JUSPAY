import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { month: 'Jan', current: 10, previous: 15 },
  { month: 'Feb', current: 18, previous: 22 },
  { month: 'Mar', current: 12, previous: 25 },
  { month: 'Apr', current: 20, previous: 17 },
  { month: 'May', current: 25, previous: 24 },
  { month: 'Jun', current: 30, previous: 28 },
];

const RevenueLineChart = () => {
  return (
    <div className="bg-[#1e1e2d] rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Revenue</h2>
        <div className="flex text-sm gap-4 text-gray-300">
          <div>
            <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
            Current Week <span className="text-white font-semibold">$58,211</span>
          </div>
          <div>
            <span className="inline-block w-3 h-3 border-2 border-indigo-300 rounded-full mr-2"></span>
            Previous Week <span className="text-white font-semibold">$68,768</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#6366f1"
              strokeWidth={2}
              dot={false}
              name="Current Week"
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#a5b4fc"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueLineChart;
