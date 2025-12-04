import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "İletişim | Hurda Fiyatı Sorgula | Anka Metal WhatsApp Destek",
  description:
    "Hurda fiyatları için WhatsApp üzerinden bize ulaşın. Peşin ödeme, yerinde tartım, hızlı nakliye.",
  alternates: {
    canonical: `${siteUrl}/iletisim`,
  },
};

export default function Contact() {
  return (
    <section className="min-h-screen bg-[var(--background-primary)] mt-16 px-6 md:px-16 py-12 text-white">
      <div className="max-w-5xl mx-auto space-y-10">
   
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">İletişim</h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
            Hurda metal alım satımı, yerinde keşif veya fiyat teklifi için aşağıdaki
            iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
      
          <div className="space-y-6">
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Bize Ulaşın
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                30+ yıllık sektör tecrübemizle hurda metal alım satımı, yüksek
                tonajlı sevkiyatlar ve uzun mesafe lojistik çözümleri sunuyoruz.
                Detaylı bilgi almak, fotoğraf göndermek veya fiyat teklifi talep
                etmek için telefon ya da e-posta yoluyla bizimle doğrudan
                iletişime geçebilirsiniz.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-black/60 border border-[#8b6b2f]/40 rounded-2xl p-6 shadow-[0_0_25px_rgba(139,107,47,0.25)]">
              <h3 className="text-lg font-semibold mb-4 text-[#caa74d]">
                Telefon
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                <p className="flex flex-col">
                  <span className="font-semibold">Cem BAĞDEŞ</span>
                  <Link
                    href="tel:+905389173143"
                    className="text-gray-300 hover:text-[#caa74d] transition-colors"
                  >
                    0 538 917 31 43
                  </Link>
                </p>
                <p className="flex flex-col">
                  <span className="font-semibold">Murat BAĞDEŞ</span>
                  <Link
                    href="tel:+905335560278"
                    className="text-gray-300 hover:text-[#caa74d] transition-colors"
                  >
                    0 533 556 02 78
                  </Link>
                </p>
              </div>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#caa74d]">
                E-posta
              </h3>
              <Link
                href="mailto:ankametal60@gmail.com"
                className="text-sm sm:text-base text-gray-300 break-all hover:text-[#caa74d] transition-colors"
              >
                ankametal60@gmail.com
              </Link>
            </div>

            <div className="bg-[#111] border border-[#25D366]/40 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">
                  WhatsApp üzerinden hızlı teklif almak için:
                </p>
                <Link
                  href="https://wa.me/905389173143"
                  target="_blank"
                  className="text-sm sm:text-base font-semibold text-[#25D366] hover:underline"
                >
                  WhatsApp İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
