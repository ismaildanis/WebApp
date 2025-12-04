import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white pt-12 pb-6 mt-20 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-bold text-[#caa74d]">Anka Metal</h2>
          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            30+ yıllık tecrübemizle hurda metal alım satımı, yerinde alım,
            yüksek tonajlı lojistik ve güvenilir ticaret çözümleri sunuyoruz.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#caa74d] mb-3">İletişim</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-semibold text-white">Cem BAĞDEŞ</span><br />
              <Link href="tel:+905389173143" className="hover:text-[#caa74d]">
                0 538 917 31 43
              </Link>
            </li>
            <li>
              <span className="font-semibold text-white">Murat BAĞDEŞ</span><br />
              <Link href="tel:+905335560278" className="hover:text-[#caa74d]">
                0 533 556 02 78
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="mailto:cemmetal57@gmail.com"
                className="hover:text-[#caa74d]"
              >
                cemmetal57@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#caa74d] mb-3">Hızlı Erişim</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-[#caa74d]">Anasayfa</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-[#caa74d]">Hakkımızda</Link></li>
            <li><Link href="/urunler" className="hover:text-[#caa74d]">Ürünler</Link></li>
            <li><Link href="/iletisim" className="hover:text-[#caa74d]">İletişim</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white">Anka Metal</span> — Tüm hakları saklıdır.
      </div>

    </footer>
  );
}
