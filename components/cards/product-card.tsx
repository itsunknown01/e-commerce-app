import { Product } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { FormatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, thumbnail, price, category,images } = product;
  
  return (
    <Link href={`/products/${id}`}>
      <Card className="w-[350px] h-[267px]">
        <CardContent className="flex w-auto pb-0 justify-center items-center relative overflow-hidden transition-[all_0.5s_linear] after:absolute after:top-0 after:left-0 after:w-[0%] after:h-full after:content-none bg-[rgba(0_0_0_0.5)] after:cursor-pointer hover:after:w-full">
          <figure>
            <Image
              src={thumbnail}
              width={300}
              height={200}
              alt={title}
              className="transition-[all_0.5s_linear] mt-6 transform scale-120 max-h-48 w-[299px] h-[150px] object-contain"
            />
            <figcaption className="absolute top-[15%] right-[10%] uppercase bg-zinc-50/100 py-2 px-3 rounded-[2rem]">
              {category}
            </figcaption>
          </figure>
        </CardContent>
        <CardFooter className="py-0 px-8">
          <div className="flex w-full mt-6 mx-0 justify-between items-center">
            <h3 className="capitalize text-[rgba(29_29_29_0.8)]">{title}</h3>
            <p className="text-[rgb(132_144_255)]">
              <FormatPrice price={price} />
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
