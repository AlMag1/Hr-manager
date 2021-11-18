import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import { SignIn } from './components';
import { Link } from 'react-router-dom';
import { useAuth } from 'routes';

const Landing = () => {
  const auth = useAuth();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <Grid container className="landing-container">
      <Grid item xs={6} className="landing-container__photo" />
      <SignIn
        handleChange={handleChange}
        email={state.email}
        password={state.password}
        auth={auth}
      />
    </Grid>
  );
};

export default Landing;
