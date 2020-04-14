import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Header } from '../Header';

interface IHeaderProps {
  children?: ReactNode;
}

export const AppContainer = (props: IHeaderProps) => {

  return (
    <Grid container>
      <Header />
      { props.children }
      {/* Footer comes here */ }
    </Grid>
  );
}