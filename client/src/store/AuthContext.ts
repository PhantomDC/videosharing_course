import React from 'react';

interface IAuthContext{
  isAuthorized: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const mockFn = function(){};

export default React.createContext<IAuthContext>({
  isAuthorized: false,
  login: mockFn,
  logout: mockFn,
});