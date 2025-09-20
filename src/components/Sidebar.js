import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-between">
      {/* Logo / Brand */}
      <div>
        <div className="mb-10">
          <img
            src="https://biz.juspay.in/ardra-icons/img/juspay_logo.png"
            alt="Juspay Logo"
            className="w-24 h-auto mx-auto mb-8"
          />
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-yellow-400">Dashboard</a>
          <a href="#" className="hover:text-yellow-400">Payments</a>
          <a href="#" className="hover:text-yellow-400">Reports</a>
          <a href="#" className="hover:text-yellow-400">Settings</a>
        </nav>
      </div>

      {/* Footer (Profile/Logout) */}
      <div>
        <div className="border-t border-gray-700 mt-10 pt-4">
          <a href="#" className="hover:text-yellow-400">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
