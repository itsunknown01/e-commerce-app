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

interface BannerCardProps {
  product: Product;
}

const BannerCard = ({ product }: BannerCardProps) => {
  return (
      <Card className="relative w-1/2 max-w-full flex-[0_0_auto]">
        <CardHeader className="absolute top-[15%] left-[2%]">
          <CardTitle>{product.title}</CardTitle>
          <CardDescription className="text-[16px] font-normal mb-1 text-black w-[264px]">
            {product.description}
          </CardDescription>
          <CardDescription className="text-[18px] font-medium text-black">
            From{" "}
            <span>
              <FormatPrice price={product.price} />
            </span>{" "}
            or{" "}
            <span>
              <FormatPrice price={(product.price * 1) / 3} />.
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full w-full p-0">
          <Image
            src={product.thumbnail}
            height={421.24}
            width={636}
            alt="main banner"
            className="rounded-md h-[422px] w-full object-contain"
          />
        </CardContent>
        <CardFooter className="absolute left-[2%] bottom-[25%]">
          <Button variant="secondary" >Shop Now</Button>
        </CardFooter>
      </Card>
  );
};

export default BannerCard;
