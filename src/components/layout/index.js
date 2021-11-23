import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { useAuth } from 'utils';

const Layout = () => {
  const auth = useAuth();
  const token = localStorage.getItem('token');
  const isSignedIn = auth.user || token;
  const [open, setOpen] = useState(false);
  return (
    <div id="layout" className="app-layout">
      {isSignedIn && (
        <div>
          <Header open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      )}
      <Outlet />
      <div style={{ background: 'orange' }}>footer</div>
    </div>
  );
};

export default Layout;
