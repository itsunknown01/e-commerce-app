import FamousSection from "@/components/layouts/famous-section";
import FeatureSection from "@/components/layouts/feature-section";
import HeroSection from "@/components/layouts/hero-section";
import PopularSection from "@/components/layouts/popular-section";
import SpecialProduct from "@/components/layouts/special-product";
import Trusted from "@/components/layouts/trusted";

export default function Home() {

  return (
    <main className="flex flex-col w-full h-full">
      <HeroSection />
      <FeatureSection />
      <FamousSection />
      <Trusted />
      <SpecialProduct />
      <PopularSection />
    </main>
  );
}
