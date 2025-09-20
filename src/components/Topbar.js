import React from 'react';
import { BellIcon, UserCircleIcon, SearchIcon } from '@heroicons/react/outline';

const Topbar = () => {
  return (
    <div className="w-full bg-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/*Page title + Search bar */}
      <div className="flex items-center gap-6">
        

        <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>


        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Notification + Profile */}
      <div className="flex items-center gap-4">

        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="w-6 h-6 text-gray-600" />
        </button>


        <button className="p-2 rounded-full hover:bg-gray-100">
          <UserCircleIcon className="w-8 h-8 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
