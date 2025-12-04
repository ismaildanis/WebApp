import { Geist, Geist_Mono, Montserrat, Inter, Roboto } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ankametalhurda.com"),
  title: "Anka Metal | Hurda Bakır – Demir – Alüminyum Alım Satım",
  description: "30+ yıllık tecrübe ile profesyonel hurda alım satım hizmeti.",
  
  openGraph: {
    title: "Anka Metal | Hurda Alım Satım",
    description: "Bakır, demir, alüminyum ve sanayi hurdası alımında güvenilir firma.",
    url: `${siteUrl}`,
    siteName: "Anka Metal",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anka Metal | Hurda Alım Satım",
    description:
      "Bakır, demir, alüminyum ve sanayi hurdası için güvenilir ticaret.",
    images: ["/images/og-image.png"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto', 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Anka Metal Hurda Alım Satım",
              image: `${siteUrl}/images/og-image.png`,
              "@id": `${siteUrl}`,
              url: `${siteUrl}`,
              telephone: "+90 538 917 31 43",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Çınarcık – Yalova",
                addressLocality: "Yalova",
                addressRegion: "Marmara",
                postalCode: "77200",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.6480,
                longitude: 29.1458
              },
              openingHours: "Mo-Sa 08:00-20:00",
              description:
                "Hurda bakır, demir, alüminyum, pirinç ve sanayi hurdası alım satımında güvenilir ve profesyonel hizmet.",
            }),
          }}
        />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${montserrat.variable}
          ${inter.variable}
          ${roboto.variable}
          antialiased
        `}
      >
        <ConditionalHeader />
       
        <main >
          {children}
        </main>
          <ConditionalFooter />
      </body>
    </html>
  );
}