import '@/app/globals.css';
import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
