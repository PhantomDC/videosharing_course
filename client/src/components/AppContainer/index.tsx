import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Header } from '../Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006064',
    },
    secondary: {
      main: '#880e4f',
    },
    background: {paper: '#424242'}
  },
});

interface IHeaderProps {
  children?: ReactNode;
}

export const AppContainer = (props: IHeaderProps) => {

  return (
  <ThemeProvider theme={theme}>
    <Grid container>
      <Header />
      { props.children }
      {/* Footer comes here */ }
    </Grid>
    </ThemeProvider>
  );
}