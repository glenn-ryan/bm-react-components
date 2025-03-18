import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsGrid, BsList } from 'react-icons/bs';

const HorseFilters = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full p-3 border border-gray-200 rounded-lg"
          />
        </div>
        
        <FilterDropdown label="Activity" />
        <FilterDropdown label="Status" />
        <FilterDropdown label="Health" />
        <FilterDropdown label="Function" />
        <FilterDropdown label="Type" />
        <FilterDropdown label="Location" />
        
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button className="p-3 bg-white hover:bg-gray-50">
            <BsGrid className="text-gray-500" />
          </button>
          <button className="p-3 bg-white hover:bg-gray-50">
            <BsList className="text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <StatusTab label="Active" isSelected={false} />
        <StatusTab label="Inactive" isSelected={false} />
      </div>
    </div>
  );
};

const FilterDropdown = ({ label }) => {
  return (
    <div className="relative">
      <button className="px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-50">
        <span className="text-gray-700">{label}</span>
        <FiChevronDown className="text-gray-500" />
      </button>
    </div>
  );
};

const StatusTab = ({ label, isSelected }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${
        isSelected
          ? 'bg-blue-100 text-blue-800'
          : 'bg-transparent text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
};

export default HorseFilters; 