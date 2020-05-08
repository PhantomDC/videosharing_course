import React, { useState, useContext } from 'react';
import { TextField, Grid, Button} from '@material-ui/core';
import { Alert } from '../../components/common/Alert';
import {Link} from 'react-router-dom'
import AppContext from "../../store/AuthContext";
import {useHttp} from '../../hooks/useHttp'
import s from './style.module.css';

type ResponseType = {
    token: string | null
  }
type AppProps = { message: string };
const RegistrForm = (): JSX.Element => {
  const [valueFields, setValueFields] = useState({ emailVal: '', loginVal: '', passwordVal: '' });
  const { isLoading, error, request, clearError } = useHttp();
  const { login } = useContext(AppContext);
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    const { emailVal, loginVal, passwordVal } = valueFields;
    const response = await request<ResponseType>(
      '/api/register',
      'POST',
      {
        email: emailVal,
        login: loginVal,
        pass: passwordVal
      }
    );

    if (!error && response && response.token) {
      login(response.token);
    } else {
      clearError();
    }

  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueFields({ ...valueFields, [e.target.name]: e.target.value })
  };
  return <>
  {error && <Alert type="error" label={error} />}
  <form className={s.form} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="emailVal"
      autoComplete="email"
      autoFocus
      value={valueFields.emailVal}
      onChange={ handleChange }
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="loginVal"
      label="Login"
      type="login"
      id="login"
      value={valueFields.loginVal}
      onChange={ handleChange }
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="passwordVal"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      value={valueFields.passwordVal}
      onChange={ handleChange }
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={ 'button' }
      onClick={ handleClick }
    >
      Sign Up
    </Button>
    <Grid container>
      <Grid item xs>
        <Link to={'/'}>
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link to={'/login'} >
          { "You have an account, Sign In" }
        </Link>
      </Grid>
    </Grid>
  </form>
  </>
}

export { RegistrForm }