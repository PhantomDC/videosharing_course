import React from 'react';
import { Grid } from '@material-ui/core';
import { LoginForm } from '../components/user/login-form';
import { AppContainer } from '../components/AppContainer';

export const LoginPage = () => {
  return (
    <AppContainer>
      <Grid container justify='center'>
        <Grid md={ 8 }>
          <LoginForm />
        </Grid>
      </Grid>
    </AppContainer>
  );
}