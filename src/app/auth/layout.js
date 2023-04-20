import { AuthContextProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <AuthContextProvider>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
