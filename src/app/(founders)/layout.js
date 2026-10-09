import Navbar from '@/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';

// /founders sits outside the agency pages' layout only so its footer can talk
// to founders instead of agencies
export default function FoundersLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer variant="founders" />
    </>
  );
}
