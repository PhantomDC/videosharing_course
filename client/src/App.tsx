import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AppContext from './store/AuthContext';
import { useRouter } from './hooks/useRouter';
import { useAuth } from './hooks/useAuth';

function App() {
  const { token, login, logout } = useAuth();
  const isAuthorized = !!token;
  const routes = useRouter(isAuthorized);

  return (
    <AppContext.Provider value={ { isAuthorized, login, logout } } >
      <Router>
        { routes }
      </Router>
    </AppContext.Provider>
  );
}

export default App;
