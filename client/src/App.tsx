import React, {useState} from 'react';
import {Auth} from './components/user/auth';
import {AppContextProvider} from './context';

function App() {
  const [isLogin, setLogin] = useState(false)
  return (
    <AppContextProvider value={{isLogin, setLogin}} >
      {isLogin ? (<div>Chat</div>) : (<Auth />)}
      
    </AppContextProvider>
  );
}

export default App;
