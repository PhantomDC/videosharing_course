import React, {useState} from 'react';
import {Auth} from './components/user/auth';
import {Context} from './context';

function App() {
  const [isLogin, setLogin] = useState(false)
  return (
    <Context.Provider value={{isLogin, setLogin}} >
      {isLogin ? (<div>Chat</div>) : (<Auth />)}
      
    </Context.Provider>
  );
}

export default App;
