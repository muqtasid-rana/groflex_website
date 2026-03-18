'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
