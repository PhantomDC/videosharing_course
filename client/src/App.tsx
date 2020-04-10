import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory, Redirect
} from 'react-router-dom';
import {LoginForm} from './components/user/login-form';
import {RegistrForm} from './components/user/register-form';
import {Homepage} from './components/homepage/home-page'
import {AppContextProvider} from './context';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <AppContextProvider value={{isLogin, setLogin}} >
      <Router>
      <Switch>
        {!isLogin && <Redirect to="/login" />}
        <Route path="/" exact component={Homepage}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/register" component={RegistrForm}/>
      </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
