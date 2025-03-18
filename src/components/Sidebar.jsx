import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-[#1F3E68] text-white w-[234px] h-screen p-4 flex flex-col">
      <div className="logo mb-8 pl-2">
        <img src="/logo-barnmanager.svg" alt="BarnManager" className="h-6" />
      </div>
      
      <nav className="flex flex-col space-y-2 flex-grow">
        <NavItem icon="activity" label="Activity" />
        <NavItem icon="horses" label="Horses" />
        <NavItem icon="calendar" label="Calendar" />
        <NavItem icon="conversations" label="Conversations" badge={23} />
        <NavItem icon="records" label="Records" badge={97} />
        <NavItem icon="lists" label="Lists" badge={123} />
        <NavItem icon="contacts" label="Contacts" />
        <NavItem icon="feed" label="Feed" to="/feed" />
        <NavItem icon="reports" label="Reports" />
        <NavItem icon="invoicing" label="Invoicing" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, badge, to }) => {
  // Use the provided path or default to lowercase label
  const path = to || `/${label.toLowerCase()}`;
  
  return (
    <NavLink 
      to={path} 
      className={({ isActive }) => 
        `flex items-center p-3 rounded-lg ${isActive || active ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-blue-700/30'}`
      }
    >
      <div className="w-6 h-6 mr-3">
        <i className={`icon-${icon}`}></i>
      </div>
      <span>{label}</span>
      {badge && (
        <div className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[1.5rem] text-center">
          {badge}
        </div>
      )}
    </NavLink>
  );
};

export default Sidebar; 