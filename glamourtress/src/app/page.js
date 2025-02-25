import HeroSection from "@/app/components/HeroSection/HeroSection";
import Header from "@/app/components/Header/Header";
import FeaturesSection from "@/app/components/FeaturesSection/FeaturesSection";
import About from "@/app/components/About/About";
import ServicesSection from "@/app/components/ServicesSection/ServicesSection";
import Footer from "@/app/components/Footer/Footer";
import GetInTouch from "@/app/components/GetInTouch/GetInTouch";
import CustomerReviews from "@/app/components/CustomerReviews/CustomerReviews";
import Gap from "@/app/components/Gap/Gap";
import ImageSection from "@/app/components/ImageSection/ImageSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Gap height={40} />
      <HeroSection />
      <Gap height={40} />
      <FeaturesSection />
      <ImageSection />
      <About />
      <Gap height={40} />
      <ServicesSection />
      <Gap height={40} />
      <CustomerReviews />
      <Gap height={40} />
      <GetInTouch />
      <Gap height={40} />
      <Footer />
  
     
    </main>
  );
}