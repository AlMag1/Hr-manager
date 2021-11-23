import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { useAuth } from 'utils';

const Layout = () => {
  const drawerWidth = 240;

  const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== 'open',
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }));
  const auth = useAuth();
  const token = localStorage.getItem('token');
  const isSignedIn = auth.user || token;
  const [open, setOpen] = useState(false);
  return (
    <div id="layout" className="app-layout">
      {isSignedIn ? (
        <div id="signed-in-layout" style={{ height: '100%' }}>
          <Header open={open} setOpen={setOpen} />
          <Sidebar
            open={open}
            setOpen={setOpen}
            Drawer={Drawer}
            DrawerHeader={DrawerHeader}
          />
        </div>
      ) : (
        <Outlet />
      )}
      {isSignedIn && <div style={{ background: 'orange' }}>footer</div>}
    </div>
  );
};

export default Layout;
