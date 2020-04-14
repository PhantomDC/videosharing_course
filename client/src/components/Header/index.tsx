import React, { useContext } from 'react';
import { Grid, makeStyles, createStyles, Theme, Button } from '@material-ui/core';
import AuthContext from '../../store/AuthContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  menuContainer: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

export const Header = () => {
  const { isAuthorized, logout } = useContext(AuthContext);
  const styles = useStyles();

  return (
    <div className={ styles.header }>
      <Grid container alignItems='center' justify='center'>
        <Grid item md={ 8 } direction='row'>
          <div className={ styles.menuContainer }>
            <Grid item md={ 4 }>Logo</Grid>
            <Grid item md={ 4 }>
              Menu
            { isAuthorized && <Button
                variant='outlined'
                color='primary'
                onClick={ () => logout() }
              >
                Logout
              </Button> }
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}