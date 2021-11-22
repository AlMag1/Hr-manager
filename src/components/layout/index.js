import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div id="layout" className="app-layout">
      <div style={{background: 'red'}}>Header</div>
      <Outlet />
      <div style={{background: 'orange'}}>footer</div>
    </div>
  );
};

export default Layout;
