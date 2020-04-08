import React, {useState, useContext} from 'react';
import {Grid,CssBaseline, Avatar, Paper, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { LoginForm } from './login-form';
import { RegistrForm } from './register-form';


const Auth = (): JSX.Element => {
    const [userPick, setUserPick] = useState(true);
    const handleClick = () => {
        setUserPick((prevProps: boolean) => !prevProps);
    }
    return <>
     <Grid container component="main" style={{height: '100vh'}}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={'image'} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={'paper'}>
          <Avatar className={'avatar'}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {userPick ? <LoginForm onClick={handleClick}/>
          :
          <RegistrForm onClick={handleClick}/>
          }
          </div>
      </Grid>
    </Grid>
    </>
}

export {Auth}