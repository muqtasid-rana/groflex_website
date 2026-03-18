import { AuthProvider } from '@/contexts/AuthContext';
import './admin.css';

export const metadata = {
  title: 'Admin — Groflex',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <div className="admin-layout">
        {children}
      </div>
    </AuthProvider>
  );
}
