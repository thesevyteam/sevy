'use client';

import { refreshJWTToken } from '@/api/auth';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  // const unprotectedRoutes = ['/auth/signin', '/auth/signup', '/forgot-password', '/', '/u/[profile]', '/p/[post]']

  const refreshToken = useCallback(async () => {
    try {
      const response = await refreshJWTToken();
      console.log('REFRESH RESPONSE: ', response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }

    // call refreshToken every 15 minutes to renew the authentication token.
    setTimeout(refreshToken, 15 * 60 * 1000);
  }, [setUser]);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
