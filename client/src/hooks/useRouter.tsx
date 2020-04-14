import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { RoomsPage } from '../pages/Rooms';

export const useRouter = (isAuth: boolean) => {

  if (!isAuth) {
    return (
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Redirect to='/login' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/rooms' exact>
        <RoomsPage />
      </Route>
      <Redirect to='/rooms' />
    </Switch>
  )
}