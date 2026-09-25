import '@/styles/tokens.css';
import '@/styles/animations.css';
import '@/styles/global.css';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, SITE_NAME, ENTITY_DESCRIPTION, DEFAULT_OG_IMAGE, organizationJsonLd } from '@/lib/seo';
import { Plus_Jakarta_Sans, Nunito_Sans, Fraunces } from 'next/font/google';

// Self-hosted by next/font: no render-blocking request to Google Fonts, and the
// fallback fonts are metric-matched so text doesn't shift when the web font swaps in
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' });
// Only the gameplan uses Fraunces, so it's fetched on demand instead of preloaded everywhere
const fraunces = Fraunces({ subsets: ['latin'], axes: ['opsz'], variable: '--font-fraunces', preload: false });

export const viewport = 'width=device-width, initial-scale=1';

// Site-wide defaults only. There's deliberately no canonical here: a layout
// canonical is inherited by every page that doesn't set one, which told Google
// the blog, case studies and legal pages were copies of the home page.
// Each page sets its own through pageMetadata().
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Groflex — White-Label Design & Development Team for Agencies',
  description: ENTITY_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    // 4 KB instead of the 106 KB 500px original, which stays for Apple and JSON-LD
    icon: { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
    apple: '/favicon.png',
  },
  openGraph: { siteName: SITE_NAME, type: 'website', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', images: [DEFAULT_OG_IMAGE.url] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${nunito.variable} ${fraunces.variable}`}>
      <head>
        {/* Organization and WebSite structured data, for the knowledge panel and AI answers */}
        <JsonLd data={organizationJsonLd()} />
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
