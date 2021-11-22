import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, RequireAuth } from 'utils';
import { Layout } from 'components';
import { routes } from './config';

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {routes.map(({ path, requireAuth, Element }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  requireAuth ? (
                    <RequireAuth>
                      <Element />
                    </RequireAuth>
                  ) : (
                    <Element />
                  )
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
