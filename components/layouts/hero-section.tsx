"use client"

import { useProducts } from "@/hooks/use-product-store";
import BannerCard from "../cards/banner-card";
import SmallBannerCard from "../cards/small-banner-card";

const HeroSection = () => {
  const { products } = useProducts();

  const mainProducts = products
    .filter((item) => item.rating > 4.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(0, 1);

  const smallProducts = products
    .filter((item) => item.rating > 4.5)
    .sort((b, a) => b.rating - a.rating)
    .slice(1, 5);

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-[100rem]">
        <div className="flex flex-wrap">
            {mainProducts.map((product) => (
              <BannerCard product={product} key={product.id} />
            ))}
          <div className="flex-[0_0_auto] w-1/2 max-w-full px-5">
            <div className="flex flex-wrap itemms-center justify-between gap-y-2.5">
              {smallProducts.map((product) => (
                <div className="relative w-1/2 max-w-full flex-[0_0_auto] px-2" key={product.id}>
                  <SmallBannerCard product={product}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
