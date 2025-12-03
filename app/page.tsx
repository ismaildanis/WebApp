import FullPageSection from "@/components/FullPageSection";
import NormalContent from "@/components/NormalContent";
import SectionFeatures from "@/components/SectionFeatures";
import SectionGallery from "@/components/SectionGallery";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Header /> 
      <div id="main-scroller" className="overflow-y-auto snap-y snap-mandatory h-full">

        <FullPageSection className="bg-[url('/images/hero1.jpg')] bg-cover bg-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Hoş Geldiniz
          </h1>
        </FullPageSection>

        <FullPageSection className="bg-[url('/images/hero2.jpg')] bg-cover bg-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Kalite
          </h1>
        </FullPageSection>

        <FullPageSection className="bg-[url('/images/swiper1.png')] bg-cover bg-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Hizmet
          </h1>
        </FullPageSection>

        <div className="snap-start">
          <NormalContent>
            <SectionFeatures />
            <SectionGallery />
            <Footer />
          </NormalContent>
        </div>

      </div>
    </main>
  );
}

