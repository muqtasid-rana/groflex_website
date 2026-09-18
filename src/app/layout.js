import '@/styles/tokens.css';
import '@/styles/animations.css';
import '@/styles/global.css';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';
import { Plus_Jakarta_Sans, Nunito_Sans, Fraunces } from 'next/font/google';

// Self-hosted by next/font: no render-blocking request to Google Fonts, and the
// fallback fonts are metric-matched so text doesn't shift when the web font swaps in
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' });
// Only the gameplan uses Fraunces, so it's fetched on demand instead of preloaded everywhere
const fraunces = Fraunces({ subsets: ['latin'], axes: ['opsz'], variable: '--font-fraunces', preload: false });

export const viewport = 'width=device-width, initial-scale=1';

export const metadata = {
  metadataBase: new URL('https://www.groflex.co'),
  title: 'Groflex — Software & Design Agency',
  description:
    'Groflex is a premium software and design agency delivering world-class digital products, branding, and development solutions for enterprise clients.',
  icons: {
    // 4 KB instead of the 106 KB 500px original, which stays for Apple, Open Graph and JSON-LD
    icon: { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
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
  email: 'muqtasid@groflex.co',
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
    <html lang="en" className={`${jakarta.variable} ${nunito.variable} ${fraunces.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Tally and gtag wait for the page to finish loading so they don't compete with hydration */}
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-R5XNDZ1D7P" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R5XNDZ1D7P');
          `}
        </Script>
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
