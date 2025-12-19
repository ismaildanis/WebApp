import FullPageSection from "@/components/FullPageSection";
import NormalContent from "@/components/NormalContent";
import SectionFeatures from "@/components/SectionFeatures";
import SectionGallery from "@/components/SectionGallery";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import CitiesBanner from "@/components/CitiesBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Anka Metal | Türkiye'nin Pek Çok Yerinde Hurda Alımı | İstanbul Hurdacı - Demir Hurda - Bakır Hurda - Alüminyum Hurda",
  description:
    "İstanbul genelinde hurda bakır, demir, paslanmaz çelik ve alüminyum alımında peşin ödeme | İstanbul Hurdacı | Demir Hurda | Bakır Hurda | Alüminyum Hurda | Tekirdağ Hurdacı | Kocaeli Hurdacı | Edirne Hurdacı"
  ,
  alternates: {
    canonical: `${siteUrl}`,
  },
};

export default function Home() {

  return (
    <main className="h-screen overflow-hidden">
      <Header /> 
        <div id="main-scroller" className="overflow-y-auto snap-y snap-proximity md:snap-mandatory h-full">
          
        <FullPageSection />

        <div className="snap-start">
          <NormalContent>
            <SectionFeatures />
            <p className="mt-4 text-white text-base md:text-lg leading-relaxed">
              Anka Metal, İstanbul genelinde hurda bakır, hurda demir, alüminyum ve sanayi hurdası 
              alımında peşin ödeme ve yerinde tartım hizmeti sunar. Esenyurt, Avcılar, Beylikdüzü, 
              Büyükçekmece, Başakşehir ve çevre ilçelerde anında hurda alım hizmeti veriyoruz.
            </p>
            <CitiesBanner />
            <SectionGallery />
            <Footer />
          </NormalContent>
        </div>

      </div>
    </main>
  );
}

