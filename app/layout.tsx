import { Geist, Geist_Mono, Montserrat, Inter, Roboto } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ankametalhurda.com"),
  title: "Anka Metal | İstanbul Hurdacı | Tekirdağ Hurdacı | Hurda Bakır – Demir – Alüminyum Alım Satım",
  description: "İstanbul genelinde hurda bakır, demir ve alüminyum alımında peşin ödeme. 30+ yıllık tecrübe ile anında hurda alım satım hizmeti.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
                streetAddress: "Çorlu",
                addressLocality: "Çorlu",
                addressRegion: "Tekirdağ",
                postalCode: "59850",
                addressCountry: "TR"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.1598,
                longitude: 27.7990
              },
              openingHours: "Mo-Sa 08:00-20:00",
              description:
                "Hurda bakır, demir, alüminyum, pirinç ve sanayi hurdası alım satımında güvenilir ve anında hizmet. | İstanbul Hurdacı | Tekirdağ Hurdacı | Kocaeli Hurdacı | Edirne Hurdacı | Demir Hurda | Bakır Hurda | Alüminyum Hurda",
              areaServed: [
                "İstanbul",
                "İstanbul Avrupa Yakası",
                "İstanbul Anadolu Yakası",
                "Tekirdağ",
                "Çorlu",
                "Çerkezköy",
                "Kocaeli",
                "Gebze",
                "Bolu",
                "Edirne"
              ]
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
          bg-black text-white
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