import '@/styles/tokens.css';
import '@/styles/animations.css';
import '@/styles/global.css';
import SiteLayout from '@/layout/SiteLayout';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';

export const viewport = 'width=device-width, initial-scale=1';

export const metadata = {
  metadataBase: new URL('https://www.groflex.co'),
  title: 'Groflex — Software & Design Agency',
  description:
    'Groflex is a premium software and design agency delivering world-class digital products, branding, and development solutions for enterprise clients.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Groflex — Software & Design Agency',
    description:
      'Groflex is a premium software and design agency delivering world-class digital products, branding, and development solutions for enterprise clients.',
    type: 'website',
    url: 'https://www.groflex.co',
    siteName: 'Groflex',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Groflex Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Groflex — Software & Design Agency',
    description:
      'Premium software and design agency delivering world-class digital products for enterprise clients.',
    images: ['/favicon.png'],
  },
};

// JSON-LD Structured Data for Google Knowledge Panel & rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Groflex',
  url: 'https://www.groflex.co',
  logo: 'https://www.groflex.co/favicon.png',
  description:
    'Premium software and design agency delivering world-class digital products, branding, and development solutions for enterprise clients.',
  email: 'groflex.co@gmail.com',
  telephone: '+923359528776',
  sameAs: [
    'https://instagram.com/groflex.co',
    'https://linkedin.com/company/groflex-co',
    'https://wa.me/+923359528776',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
  },
  knowsAbout: [
    'Web Design',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Branding',
    'AI-powered Development',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-R5XNDZ1D7P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R5XNDZ1D7P');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Nunito+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome — deferred to avoid render-blocking */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <Script id="fontawesome-loader" strategy="afterInteractive">
          {`
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
          `}
        </Script>
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            crossOrigin="anonymous"
          />
        </noscript>
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
        <Analytics />
      </body>
    </html>
  );
}
