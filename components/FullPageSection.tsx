import Link from "next/link";

export default function FullPageSection() {
  const Menu = [
    { name: "Anasayfa" },
    { name: "Hakkımızda" },
    { name: "Ürünler" },
    { name: "İletişim" },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center snap-start">

      {/* Background */}
      <div className="absolute inset-0 z-[1] bg-[url('/images/HeroImage.png')] bg-cover bg-center" />

        <div className="absolute z-[2] top-[30%] left-[8%] sm:left-[12%] md:left-[15%]">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Tanıtım Giriş
          </p>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[2]">
          <ul className="flex gap-3 sm:gap-6 lg:gap-10 py-4 sm:py-6 text-xs sm:text-sm lg:text-base uppercase text-white">
            {Menu.map((item, idx) => (
              <li key={idx} className="hover:text-[var(--emphasis)] transition-all duration-200">
                <Link href="#">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute top-0 right-2 sm:right-5 md:right-[5%] flex items-center bg-[var(--background-primary)] rounded-full gap-2 md:px-2 sm:gap-4 z-[2] mt-4 sm:mt-5 cursor-pointer">
          <div className="bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10" />
          <button className="text-white text-xs sm:text-sm cursor-pointer">İletişime Geç</button>
        </div>

    </section>
  );
}
