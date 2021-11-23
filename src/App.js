import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApplicationRouter from 'routes';
import './styles/main.scss';

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" disableGutters className="app-container">
        <ApplicationRouter />
      </Container>
    </ThemeProvider>
  );
};

export default App;
