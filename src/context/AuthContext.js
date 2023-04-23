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
  const [loading, setLoading] = useState(true);

  const refreshToken = useCallback(async () => {
    try {
      const response = await refreshJWTToken();
      console.log('REFRESH RESPONSE: ', response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    // call refreshToken every 15 minutes to renew the authentication token.
    setTimeout(refreshToken, 15 * 60 * 1000);
  }, [setUser]);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
