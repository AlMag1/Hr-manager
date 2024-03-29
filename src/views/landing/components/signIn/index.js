import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const SignIn = ({ email, password, handleChange, auth }) => {
  const navigate = useNavigate();
  const to = '/home';
  return (
    <Grid
      xs={6}
      className="sign-in-container"
      container
      justifyContent="center"
      direction="column"
      item
    >
      <div className="sign-in-container__title">Sign in</div>
      <TextField
        label="Email"
        className="sign-in-container__field"
        name="email"
        onChange={event => handleChange(event)}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        onChange={event => handleChange(event)}
      />
      <Button
        variant="contained"
        className="sign-in-container__button"
        onClick={() =>
          auth.signin({
            payload: { email, password },
            callback: () => navigate(to, { replace: true }),
          })
        }
      >
        Sign In
      </Button>
    </Grid>
  );
};

export default SignIn;
