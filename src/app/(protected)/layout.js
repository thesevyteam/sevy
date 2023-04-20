import '@/app/globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <AuthContextProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
