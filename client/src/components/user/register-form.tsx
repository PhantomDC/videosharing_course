import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
interface IRegisterForm {
    onClick: () => void
}
const RegistrForm = (props: IRegisterForm): JSX.Element => {
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
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="name"
      label="Name"
      type="text"
      id="name"
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
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={'button'}
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