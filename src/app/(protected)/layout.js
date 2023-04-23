'use client';
import '@/app/globals.css';
import { useAuth } from '@/context/AuthContext';
import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin', { query: { redirect: router.asPath } });
    }
  }, [user, loading, router]);

  return (
    <html lang="en">
      <head />
      <body>
        {user ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : null}
      </body>
    </html>
  );
}
