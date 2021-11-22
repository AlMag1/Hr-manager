import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Navigate } from 'react-router-dom';

import { SignIn } from './components';
import { useAuth } from 'utils';

const Landing = () => {
  const auth = useAuth();
  const token = localStorage.getItem('token');
  const isSignedIn = auth.user || token;
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
  return isSignedIn ? (
    <Navigate to="/home" replace={true} />
  ) : (
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
