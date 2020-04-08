import React, {useContext, useState} from 'react';
import {Link, FormControlLabel, Button, Grid, TextField, Checkbox} from '@material-ui/core';
import { Context } from "../../context";
interface ILoginFormProps {
    onClick: () => void
}
const LoginForm = (props: ILoginFormProps): JSX.Element => {
  const [valueFields, setValueFields] = useState({login: '', password: ''})
  const context = useContext(Context);
  const handleClick = (e: any) => {
    e.preventDefault();
    return fetch('/login', {
      method: "POST",
      body: JSON.stringify(valueFields)
    }).then((res) => {
      context?.setLogin(true)
    })
  }
  const handleChange = (e: {target: any}) => {
    setValueFields({...valueFields, [e.target.name]: e.target.value})
  }
    return <>
     <form className={'form'} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Email Address"
              name="login"
              autoComplete="login"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={'button'}
              onClick={handleClick}
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
                <Link href="#" variant="body2" onClick={props.onClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
    </>
}

export {LoginForm}