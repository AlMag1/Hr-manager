import React, { Fragment } from 'react';
import Container from '@mui/material/Container';
import ApplicationRouter from 'routes';
import './styles/main.scss';

const App = () => {
  return (
    <Fragment>
      <Container maxWidth="false" disableGutters className="app-container">
        <ApplicationRouter />
      </Container>
    </Fragment>
  );
};

export default App;
