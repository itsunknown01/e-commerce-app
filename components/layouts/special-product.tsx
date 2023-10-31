"use client";

import { useProducts } from "@/hooks/use-product-store";
import { Product } from "@/lib/types";
import React from "react";
import SpecialProductCard from "../cards/special-product-card";

const SpecialProduct = () => {
  const { products } = useProducts();

  const specialProduct = products
    ?.filter((product: Product) => product.discountPercentage > 15)
    .slice(0, 4);

  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h3 className="font-semibold text-4xl mt-12 capitalize">
          Special Products
        </h3>
        <div className="flex flex-wrap mt-6 mx-3">
          {specialProduct?.map((product: Product) => (
            <div className="flex-[0_0_auto] mb-4 max-w-full w-1/2 px-3 mt-6" key={product.id}>
                <SpecialProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
