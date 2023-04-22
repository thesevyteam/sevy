import '@/app/globals.css';
import { AuthContextProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <AuthContextProvider>
        <body>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
