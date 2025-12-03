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

        <FullPageSection />


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

