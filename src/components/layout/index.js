import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div id="layout" className="app-layout">
      <Outlet />
    </div>
  );
};

export default Layout;
