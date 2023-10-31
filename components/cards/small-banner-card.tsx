import { Product } from "@/lib/types";
import { FormatPrice } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface SmallBannerCardProps {
  product: Product;
}

const SmallBannerCard = ({ product }: SmallBannerCardProps) => {
  return (
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-zinc-500">{product.title}</CardTitle>
        </CardHeader>
        <CardContent className="h-full w-full p-0">
          <Image
            src={product.thumbnail}
            height={204}
            width={312}
            alt="main banner"
            className="rounded-md h-[204px] w-full object-contain"
          />
        </CardContent>
        <CardFooter className="absolute flex justify-center w-full bottom-[0%]">
          <Button variant="secondary" >Shop Now</Button>
        </CardFooter>
      </Card>
  );
};

export default SmallBannerCard;
