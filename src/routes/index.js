import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './config';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Element, exact }, index) => (
          <Route key={index} path={path} element={<Element />} exact={exact} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
