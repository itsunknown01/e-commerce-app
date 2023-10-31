"use client";

import { useProducts } from "@/hooks/use-product-store";
import { services } from "@/lib/contants";
import Image from "next/image";
import ProductCard from "../cards/product-card";

const FeatureSection = () => {
  const { featureProducts } = useProducts();
  console.log(featureProducts);
  
  return (
    <section className="bg-zinc-100 w-full px-0 py-20">
      <div className="max-w-6xl my-0 mx-auto">
        <h6 className="font-semibold text-4xl mb-12 capitalize">
          Feature Products
        </h6>
        <div className="flex items-center gap-10">
          {featureProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="bg-zinc-100 pt-40">
        <div className="w-full max-w-[1320px] px-3 mx-auto">
           <div className="flex items-center justify-between w-full">
            {services.map((service,index) => (
              <div className="flex items-center gap-[15px]" key={index}>
                <Image src={service.image} alt={service.title} width={40} height={26} />
                <div>
                  <h6>{service.title}</h6>
                  <p className="mb-0">{service.tagline}</p>
                </div>
              </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
