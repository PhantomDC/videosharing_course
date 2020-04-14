import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { AppContainer } from '../components/AppContainer';

export const RoomsPage = () => {
  return (
    <AppContainer>
      <Grid container justify='center'>
        <Grid item md={ 8 }>
          <Typography component='h1'>
            Список комнат
        </Typography>
        </Grid>
      </Grid>
    </AppContainer>
  );
}