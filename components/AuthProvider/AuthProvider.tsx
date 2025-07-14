'use client';

import { checkSession, getUser } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const setUser = useAuthStore(state => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );
  useEffect(() => {
    async function checkUser() {
      const isAuthenticated = await checkSession();

      if (isAuthenticated) {
        const user = await getUser();
        if (user) setUser(user);
      } else {
        clearIsAuthenticated();
      }
    }
    checkUser();
  }, [setUser, clearIsAuthenticated]);
  return children;
}
