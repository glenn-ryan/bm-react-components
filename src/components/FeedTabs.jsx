import React from 'react';
import { NavLink } from 'react-router-dom';

const FeedTabs = () => {
  return (
    <div className="mt-4 border-b border-gray-200">
      <nav className="flex space-x-8">
        <TabItem to="/alaska/activity" label="Activity" />
        <TabItem to="/alaska/events" label="Events" />
        <TabItem to="/alaska/conversations" label="Conversations" />
        <TabItem to="/alaska/records" label="Records" />
        <TabItem to="/alaska/lists" label="Lists" />
        <TabItem to="/alaska/feed" label="Feed" active />
        <TabItem to="/alaska/reports" label="Reports" />
      </nav>
    </div>
  );
};

const TabItem = ({ to, label, active = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `px-1 py-4 border-b-2 text-sm font-medium ${isActive || active
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default FeedTabs; 