import React, {createContext} from 'react';
type ContextProps = { 
    isLogin: boolean,
    setLogin?: () => boolean
  };
export const Context = createContext<Partial<ContextProps>>({});