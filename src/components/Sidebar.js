import React, { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
    const [userProfileOpen, setUserProfileOpen] = useState(true);
    const [accountOpen, setAccountOpen] = useState(false);
    const [corporateOpen, setCorporateOpen] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);
    const [socialOpen, setSocialOpen] = useState(false);


  return (
    <div className="w-56 h-screen overflow-y-scroll scrollbar-hide bg-gray-900 text-gray-300 p-6 border-t-4 border-l-4 border-r-4 border-yellow-400 flex flex-col">


      {/* LOGO */}
      <div>
        <div className="mb-6">
          <img
            src="https://biz.juspay.in/ardra-icons/img/juspay_logo.png"
            alt="Juspay Logo"
            className="w-24 h-auto mx-auto"
          />
        </div>

        {/* Favourites and Recently - with reduced gap */}
        <div className="flex justify-between text-xs text-gray-400 font-semibold mb-0">
          <span>Favorites</span>
          <span>Recently</span>
        </div>

        {/* Overview & Projects with bullet points */}
        <nav className="mb-6 mt-1 space-y-1">
          {['Overview', 'Projects'].map((item) => (
            <a
                key={item}
                href="#"
                className="block px-4 py-1 text-sm hover:bg-gray-700 rounded-md relative pl-6 before:content-['•'] before:absolute before:left-2 before:text-gray-400"
            >
                {item}
            </a>

          ))}
        </nav>

        {/* DASHBOARD SECTION */}
        <div className="text-xs text-gray-400 font-semibold mb-1 mt-6">Dashboards</div>
        <div className="space-y-1 mb-6">
            {['Default', 'Projects', 'Online Courses'].map((item) => (
            <a
            key={item}
            href="#"
            className="block px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
            >
            {item}
            </a>
            ))}
        </div>


        {/* PAGES SECTION */}
        <div className="text-xs text-gray-400 tracking-wide px-4 mt-6 mb-2">Pages</div>

        <div>
            <button
                onClick={() => setUserProfileOpen(!userProfileOpen)}
                className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
            >
                {userProfileOpen ? (
                <ChevronDownIcon className="w-4 h-4" />
                ) : (
                <ChevronRightIcon className="w-4 h-4" />
                )}
                <span>User Profile</span>
            </button>
            {userProfileOpen && (
                <div className="ml-10 text-sm py-2 space-y-2 text-gray-300">
                    <p className="hover:text-white py-0.5 cursor-pointer">Overview</p>
                    <p className="hover:text-white py-0.5 cursor-pointer">Projects</p>
                    <p className="hover:text-white py-0.5 cursor-pointer">Campaigns</p>
                    <p className="hover:text-white py-0.5 cursor-pointer">Documents</p>
                    <p className="hover:text-white py-0.5 cursor-pointer">Followers</p>
                </div>
            )}
        </div>

        {/* Account Section */}
        <div>
        <button
            onClick={() => setAccountOpen(!accountOpen)}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
        >
            {accountOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
            ) : (
            <ChevronRightIcon className="w-4 h-4" />
            )}
            <span>Account</span>
        </button>
        </div>

        {/* Corporate Section */}
        <div>
        <button
            onClick={() => setCorporateOpen(!corporateOpen)}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
        >
            {corporateOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
            ) : (
            <ChevronRightIcon className="w-4 h-4" />
            )}
            <span>Corporate</span>
        </button>
        </div>

        {/* Blog Section */}
        <div>
        <button
            onClick={() => setBlogOpen(!blogOpen)}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
        >
            {blogOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
            ) : (
            <ChevronRightIcon className="w-4 h-4" />
            )}
            <span>Blog</span>
        </button>
        </div>

        {/* Social Section */}
        <div>
        <button
            onClick={() => setSocialOpen(!socialOpen)}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-700 text-sm"
        >
            {socialOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
            ) : (
            <ChevronRightIcon className="w-4 h-4" />
            )}
            <span>Social</span>
        </button>
        </div>
     </div>
    </div> 
  );
};

export default Sidebar;
