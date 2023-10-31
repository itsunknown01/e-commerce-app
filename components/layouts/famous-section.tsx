"use client"

import { useProducts } from "@/hooks/use-product-store";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import ProductCard from "../cards/product-card";

const FamousSection = () => {
  const router = useRouter();
  const { products } = useProducts();

  const famousProducts = products
    ?.filter((product: Product) => product.rating > 4.5)
    .slice(0, 4);

  return (
    <section className="bg-white py-5">
      <div className="w-full px-16">
        <h6 className="font-semibold text-4xl mt-12 capitalize">
          Famous Products
        </h6>
        <div className="flex items-center justify-between mx-3 my-10">
          {famousProducts?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousSection;
