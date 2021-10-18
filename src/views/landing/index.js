import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Landing = () => {
  return (
    <Grid container className="landing-container">
      <Grid item xs={6} className="landing-container__photo" />
      <Grid
        xs={6}
        className="sign-in-container"
        container
        justifyContent="center"
        direction="column"
      >
        <div className="sign-in-container__title">Sign in</div>
        <TextField label="Username" className="sign-in-container__field" />
        <TextField label="Password" type="password" />
        <Button variant="contained" className="sign-in-container__button">
          Sign In
        </Button>
        <Grid container className="sign-in-helpers">
          <Grid item xs={6}>
            <div className="sign-in-helpers__title">Forgot Password</div>
          </Grid>
          <Grid item xs={6}>
            <div className="sign-in-helpers__title">
              Don't have an account? Sign Up
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
