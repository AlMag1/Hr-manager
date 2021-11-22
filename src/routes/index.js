import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Landing } from 'views';
import { AuthProvider, RequireAuth } from 'utils';
import { Layout } from 'components';

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
