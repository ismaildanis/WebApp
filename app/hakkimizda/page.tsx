import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)] py-16">

      {/* HERO */}
      <div className="relative w-full h-[50vh] ">
        <Image
          src="/images/hakkimizda.png"
          alt="Hakkımızda"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">HAKKIMIZDA</h1>
          <p className="text-sm sm:text-base mt-2 opacity-90 max-w-xl">
            30+ yıllık tecrübe ile hurda metal ticaretinde güvenin adresi.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div className="space-y-6 text-white text-base sm:text-lg md:text-xl font-roboto leading-relaxed">

          <p>
            30 yılı aşkın sektör tecrübemizle, Marmara ve İç Anadolu bölgelerinde hurda metal alım 
            satımı yapan köklü bir işletmeyiz. Bakır, demir, alüminyum, krom ve daha birçok değerli 
            metal olmak üzere 20+ metal türünde profesyonel ticaret gerçekleştiriyoruz.
          </p>

          <div className="lg:hidden relative flex justify-center items-center my-8">
            <div
              className="absolute inset-0 h-64 w-64 bg-sky-100 opacity-70 blur-[90px] rounded-full"
              aria-hidden
            />
            <div className="relative w-full max-w-sm space-y-4">
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image src="/images/swiper4.png" fill alt="Hakkımızda 1" className="object-cover" />
              </div>
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image src="/images/swiper3.png" fill alt="Hakkımızda 2" className="object-cover" />
              </div>
            </div>
          </div>

          <p>
            Yıllar içerisinde oluşturduğumuz güvenilir tedarik zinciri, güçlü sermaye yapısı ve modern 
            lojistik altyapı sayesinde 150+ ton üzeri ticaret kapasitesine ulaştık. 1000 km’yi aşan 
            taşıma mesafelerine rağmen hızlı, planlı ve güvenilir sevkiyat sağlayabilen az sayıdaki 
            firmadan biriyiz.
          </p>

          <p>
            Hâlihazırda İstanbul, Tekirdağ, Kocaeli, Ankara ve Bolu başta olmak üzere bölgesel olarak 
            hizmet veriyor; hem sanayi tesislerinden hem bireysel müşterilerden yüksek tonajlı hurda 
            alımları gerçekleştiriyoruz.
          </p>

          <p>
            Müşteri memnuniyetini her zaman ön planda tutarak şeffaf tartım, güncel piyasa 
            fiyatlandırması, yerinde alım, profesyonel lojistik, kolaj video ve fotoğraf raporlama, 
            yüksek hassasiyetli kantar sistemi gibi hizmetlerle sektörde güvenin adı olmaya devam ediyoruz.
          </p>

          <p>
            Vizyonumuz; hizmet verdiğimiz bölgelerde sürdürülebilir hurda metal ticareti yaparak hem 
            ekonomiye hem çevreye değer katmaktır.
          </p>
        </div>

        <div className="hidden lg:flex relative justify-center items-center">
          <div
            className="absolute inset-0 h-72 w-72 bg-sky-100 opacity-70 blur-[90px] rounded-full"
            aria-hidden
          />
          <div className="relative rounded-2xl shadow-xl overflow-hidden w-full max-w-md space-y-4 p-4">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image src="/images/swiper4.png" fill alt="Hakkımızda 1" className="object-cover" />
            </div>
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image src="/images/swiper3.png" fill alt="Hakkımızda 2" className="object-cover" />
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
