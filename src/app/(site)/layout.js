import Navbar from '@/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';

// The agency pages' "home" is /white-label: the logo and in-page links like
// Contact lead back there rather than to the founders home page
export default function SiteChromeLayout({ children }) {
  return (
    <>
      <Navbar home="/white-label" />
      <main>{children}</main>
      <Footer home="/white-label" />
    </>
  );
}
