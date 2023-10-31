"use client";
import ProductCard from "@/components/cards/product-card";
import FilterSection from "@/components/products/filter-section";
import { useProducts } from "@/hooks/use-product-store";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  const { products } = useProducts();

  return (
    <main className="flex flex-col items-center">
      <section className="w-full px-8 bg-white py-6">
        <p className="text-base px-4">
          <Link href="/" className="pr-1">
            Home
          </Link>
          /<span className="pl-1">Products Page</span>
        </p>
      </section>

      <section className="py-10 bg-zinc-100 w-full">
        <div className="max-w-[85rem] mx-auto flex justify-between">
          <div>
            <FilterSection />
          </div>
          <div className="flex flex-col gap-y-8">
            <div>
                
            </div>
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
