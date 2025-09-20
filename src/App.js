import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsGrid from './components/StatsGrid';
import RevenueLineChart from './components/RevenueLineChart';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 bg-gray-900 p-6">
          <StatsGrid />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <RevenueLineChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
