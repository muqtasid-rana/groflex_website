import Navbar from '@/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';

export default function SiteChromeLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
