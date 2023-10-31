"use client"

import { useProducts } from "@/hooks/use-product-store";
import React from "react";
import ProductCard from "../cards/product-card";

const PopularSection = () => {
  const { products } = useProducts();

  const popularProducts = products
    .filter((product) => product.rating > 4.5)
    .slice(0, 8);
    
  return (
    <section className="bg-zinc-100 w-full px-0 py-20">
      <div className="max-w-8xl my-0 mx-20">
        <h6 className="font-semibold text-4xl mb-12 capitalize">
          Popular Products
        </h6>
        <div className="flex flex-wrap mt-6 mx-3">
          {popularProducts?.map((product) => (
            <div
              className="flex-[0_0_auto] mb-4 max-w-full w-1/4 h-auto px-3 mt-6"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
