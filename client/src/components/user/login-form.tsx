import React, { useContext, useState } from 'react';
import {
  Link,
  FormControlLabel,
  Button,
  Grid,
  TextField,
  Checkbox
} from '@material-ui/core';
import AppContext from "../../store/AuthContext";
import { useHttp } from '../../hooks/useHttp';

type ResponseType = {
  token: string | null
}

const LoginForm = (): JSX.Element => {
  const [valueFields, setValueFields] = useState({
    loginVal: '',
    passwordVal: ''
  });

  const { isLoading, error, request, clearError } = useHttp();
  const { login } = useContext(AppContext);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    const { loginVal, passwordVal } = valueFields;
    const response = await request<ResponseType>(
      '/api/login',
      'POST',
      {
        login: loginVal,
        pass: passwordVal
      }
    );

    if (!error && response && response.token) {
      login(response.token);
    } else {
      clearError();
    }

  }

  const handleChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    setValueFields({ ...valueFields, [name]: value })
  }

  const { loginVal, passwordVal } = valueFields;

  return (
    <form className={ 'form' } noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Username or e-mail"
        name="loginVal"
        autoFocus
        value={ loginVal }
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
        value={ passwordVal }
        onChange={ handleChange }
      />
      <FormControlLabel
        control={ <Checkbox value="remember" color="primary" /> }
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={ 'button' }
        disabled={ isLoading }
        onClick={ handleClick }
      >
        Sign In
            </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
                </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            { "Don't have an account? Sign Up" }
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export { LoginForm }