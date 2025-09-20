import React from "react";
import { StarIcon, SearchIcon, MoonIcon, BellIcon, CalendarIcon } from "@heroicons/react/outline";

export default function Topbar({ isDarkMode, setIsDarkMode }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#0e1628] dark:bg-white text-gray-300 dark:text-gray-800">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-500 rounded-sm" />
        <StarIcon className="w-4 h-4 text-gray-400" />
        <span className="text-sm text-gray-400">Dashboards</span>
        <span className="text-sm text-white dark:text-black">/ Default</span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-md text-sm pl-8 py-1 w-40 placeholder-gray-400 focus:outline-none"
          />
          <SearchIcon className="w-4 h-4 absolute left-2 top-1.5 text-gray-400" />
        </div>

        {/* Dark Mode Toggle */}
        <MoonIcon
          onClick={toggleTheme}
          className="w-5 h-5 cursor-pointer text-white dark:text-black"
        />

        {/* Other Icons */}
        <BellIcon className="w-5 h-5 cursor-pointer text-white dark:text-black" />
        <CalendarIcon className="w-5 h-5 cursor-pointer text-white dark:text-black" />
      </div>
    </div>
  );
}
