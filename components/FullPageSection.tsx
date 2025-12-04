import Image from "next/image";
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

      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.1)),
            url('/images/HeroImage.png')
          `
        }}
      >

        <div className="absolute z-[2] top-[20%] left-[8%] sm:left-[10%] md:left-[12%] max-w-[420px] p-6 rounded-xl">
          <p className="text-white text-lg sm:text-xl md:text-3xl font-roboto leading-relaxed">
            Bakır ve alüminyum alım satımında güvenilir, kaliteli ve sürdürülebilir
            çözümler sunuyor; sektörün ihtiyaçlarına hızlı, şeffaf ve profesyonel
            yaklaşımımızla değer katıyoruz.
          </p>
        </div>
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

        <div className="absolute py-2 sm:py-3 md:py-4 top-0 right-2 sm:right-5 md:right-[5%] z-[2] cursor-pointer">
          <div className="flex items-center bg-black rounded-full gap-2 sm:gap-3 md:px-3 py-1.5">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
                <path fill="#25D366" d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.456 1.713 6.39L3.2 28.8l6.58-1.726c1.86 1.017 3.96 1.554 6.22 1.554 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zM16 26.133c-1.89 0-3.73-.51-5.337-1.474l-.383-.227-3.907 1.024 1.044-3.81-.25-.392A10.6 10.6 0 0 1 5.333 16c0-5.887 4.78-10.667 10.667-10.667S26.667 10.113 26.667 16 21.887 26.133 16 26.133z"/>
                <path fill="#FFF" d="M21.337 18.744c-.297-.149-1.76-.867-2.034-.966-.273-.1-.472-.148-.67.148-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.457.13-.606.134-.133.298-.347.447-.52.149-.174.198-.297.298-.495.099-.198.05-.37-.025-.52-.075-.148-.67-1.612-.916-2.21-.242-.579-.488-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.37-.273.296-1.04 1.016-1.04 2.474 0 1.458 1.065 2.866 1.213 3.064.148.198 2.09 3.188 5.068 4.468.709.306 1.262.489 1.693.626.712.226 1.36.194 1.873.118.571-.085 1.76-.718 2.01-1.412.248-.694.248-1.29.173-1.412-.074-.123-.272-.197-.57-.346z"/>
              </svg>
            </span>
            <button className="text-white text-xs sm:text-sm cursor-pointer">İletişime Geç</button>
          </div>
        </div>

    </section>
  );
}
