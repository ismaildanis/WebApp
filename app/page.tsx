import FullPageSection from "@/components/FullPageSection";
import NormalContent from "@/components/NormalContent";
import SectionFeatures from "@/components/SectionFeatures";
import SectionGallery from "@/components/SectionGallery";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import CitiesBanner from "@/components/CitiesBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Anka Metal | Hurda Bakır, Demir, Alüminyum Alımı | Peşin Ödeme",
  description:
    "Anka Metal; hurda bakır, demir, alüminyum, pirinç ve sanayi hurdası alımında peşin ödeme ve yerinde tartım garantisi sunar.",
  alternates: {
    canonical: `${siteUrl}`,
  },
};

export default function Home() {

  return (
    <main className="h-screen overflow-hidden">
      <Header /> 
      <div id="main-scroller" className="overflow-y-auto snap-y snap-proximity h-full">

        <FullPageSection />

        <div className="snap-start">
          <NormalContent>
            <SectionFeatures />
            <CitiesBanner />
            <SectionGallery />
            <Footer />
          </NormalContent>
        </div>

      </div>
    </main>
  );
}

