import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {

  const storageName = 'auth';

  const [token, setToken] = useState<String | null>(null);

  const login = (loginToken: string | null) => {

    setToken(loginToken);
    localStorage.setItem(storageName, JSON.stringify({
      token: loginToken
    }));

  };

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {

    const storeToken = JSON.parse(localStorage.getItem(storageName) || 'null');
    if (storeToken && storeToken.token) {
      login(storeToken.token);
    }

  }, []);

  return { token, login, logout };

}