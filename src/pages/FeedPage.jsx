import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FiSearch, FiBell } from 'react-icons/fi';
import FeedTabs from '../components/FeedTabs';
import FeedSchedule from '../components/FeedSchedule';

const FeedPage = () => {
  const [currentDate, setCurrentDate] = useState('Week Of 09 March - 15 March 2025');
  const horseName = 'Alaska';
  const horseId = '1094';
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <FiBell className="text-gray-600 w-6 h-6" />
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="/avatar-placeholder.jpg" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        
        {/* Horse Profile Header */}
        <div className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src="/horse-avatar.jpg" alt={horseName} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{horseName}</h1>
              <p className="text-gray-500">{horseId}</p>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700">
                View Details
              </button>
            </div>
          </div>
          
          <FeedTabs />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-medium">Feed</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700">
                View Change Log
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700">
                Notifications
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700">
                Download Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                Add Entry
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700 font-medium">{currentDate}</div>
              <div className="flex">
                <button className="p-2 border border-gray-300 rounded-l-lg bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                </button>
                <button className="p-2 border-t border-b border-r border-gray-300 rounded-r-lg bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            <FeedSchedule />
          </div>
        </main>
      </div>
    </div>
  );
};

export default FeedPage; 