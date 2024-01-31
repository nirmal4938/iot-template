// MainLayout.js
import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';


export const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="layout">
      <Header onToggle={toggleSidebar} collapsed={collapsed}/>
      <Sidebar collapsed={collapsed}  />
      <div className={`layout-content ${collapsed ? 'collapsed' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Header = ({ collapsed, onToggle }) => {
    return (
      <div className="layout-header">
          <div className="vertical-line"></div>
  <div className='toggle-bar-icon'>
  <span className="material-icons md-dark cursor-pointer" onClick={onToggle}>menu</span>

  </div>
      </div>
    );
  };

const Sidebar = ({ collapsed }) => {
    const sidebarItems = [
        { label: 'Dashboard', icon: 'dashboard' },
        { label: 'Tank', icon: 'propane_tank' },
        { label: 'Pump', icon: 'heat_pump' },
        { label: 'Flowmeter', icon: 'electric_meter' },
        { label: 'Ph-Tds-Meter', icon: 'dew_point' },
        { label: 'Manage', icon: 'manage_accounts' },
        { label: 'Configuration', icon: 'settings' },
      ];

  return (
    <div className={`layout-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-left-column">
        {sidebarItems.map((item, index) => (
           <span key ={index} className="material-icons md-dark cursor-pointer icon-placeholder" onClick={()=>(console.log(item.label))}>{item.icon}</span>
        ))}
      </div>
      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li key={index}>
           
            {!collapsed && <span className='item-placeholder'>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

