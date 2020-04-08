import React, {useState, useContext} from 'react';
import {TextField, Grid, Button, Link} from '@material-ui/core';
import { Context } from "../../context";
interface IRegisterForm {
    onClick: () => void
}
const RegistrForm = (props: IRegisterForm): JSX.Element => {
  const [valueFields, setValueFields] = useState({email: '',login: '', password: ''});
  const context = useContext(Context);
  const handleClick = (e: any) => {
    e.preventDefault();
    return fetch('/register', {
      method: "POST",
      body: JSON.stringify(valueFields)
    }).then((res) => {
      context?.setLogin(true)
    })
  };
  const handleChange = (e: {target: any}) => {
    setValueFields({...valueFields, [e.target.name]: e.target.value})
  };
    return <><form className={'form'} noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange={handleChange}
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="login"
      label="Login"
      type="login"
      id="login"
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
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={'button'}
      onClick={handleClick}
    >
      Sign Up
    </Button>
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2" onClick={props.onClick}>
          {"You have an account, Sign In"}
        </Link>
      </Grid>
    </Grid>
  </form></>
}

export {RegistrForm}