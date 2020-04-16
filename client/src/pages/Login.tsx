import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LoginForm } from '../components/LoginForm';
import { AppContainer } from '../components/AppContainer';
import texture from '../img/texture.jpeg'

export const LoginPage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${texture})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
   
  }));
  const classes = useStyles();
  return (
    <AppContainer>
      <Grid container justify='center' className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5}>
          <LoginForm />
        </Grid>
      </Grid>
    </AppContainer>
  );
}