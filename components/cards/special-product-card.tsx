import { Product } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import ReactStars from "react-stars";
import { FormatPrice } from "@/lib/utils";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

interface SpecialCardProps {
  product: Product;
}

const SpecialProductCard = ({ product }: SpecialCardProps) => {
    return (
    <Link href={`/products/${product.id}`}>
      <Card className="px-2.5 py-5">
        <div className="flex justify-between">
          <CardHeader>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              className="w-[267px] h-[267px] object-contain"
            />
          </CardHeader>
          <CardContent>
            <h5 className="font-medium leading-tight mb-2 mt-0 text-xl">
              {product.brand}
            </h5>
            <h6 className=" text-base mt-0 mb-2 font-medium leading-tight">
              {product.title}
            </h6>
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              edit={false}
            />
            <p className="mt-0 mb-4">
              <span>
                <FormatPrice price={product.price} />
              </span>{" "}
              &nbsp;{" "}
              <span className=" line-through">
                <FormatPrice price={product.price * 1.5} />
              </span>
            </p>
            <div className="flex items-center gap-2.5">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="flex gap-2.5 items-center">
                <span className=" rounded-[50%] bg-[#dc3545] p-2.5 inline-block text-xs font-bold text-center align-baseline whitespace-nowrap text-white">1</span>
                 :
                <span className=" rounded-[50%] bg-[#dc3545] p-2.5 inline-block text-xs font-bold text-center align-baseline whitespace-nowrap text-white">1</span>
                 :
                <span className=" rounded-[50%] bg-[#dc3545] p-2.5 inline-block text-xs font-bold text-center align-baseline whitespace-nowrap text-white">1</span>
              </div>
            </div>
            <div className="my-2.5">
                <p className="mt-0 mb-2.5">{`Products : ${product.stock}`}</p>
                <Progress value={product.stock} />
            </div>
              <Button className="bg-[#232f3e] text-white py-3 px-8 rounded-[25px]">Add to Cart</Button>
            </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default SpecialProductCard;
