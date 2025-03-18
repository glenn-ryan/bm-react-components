import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import HorseList from '../components/HorseList';
import HorseFilters from '../components/HorseFilters';
import AddHorseButton from '../components/AddHorseButton';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';

const HorsesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Horses</h1>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center space-x-2 bg-white hover:bg-gray-50">
                <span className="text-gray-700">Import</span>
              </button>
              <AddHorseButton />
            </div>
          </div>
          
          <HorseFilters />
          <HorseList />
        </main>
      </div>
    </div>
  );
};

export default HorsesPage; 