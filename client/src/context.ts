import React, {Dispatch} from 'react';

  export interface AppContextInterface {
    isLogin: boolean,
    setLogin: Dispatch<boolean> 
  }
  export const Context = React.createContext<AppContextInterface | null>(null);

  export const AppContextProvider = Context.Provider;
  
  export const AppContextConsumer = Context.Consumer;