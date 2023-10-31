"use client";

import { useProducts } from "@/hooks/use-product-store";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FilterSection = () => {
  const { products } = useProducts();

  const category = ["Mobile", "Laptops", "Watches", "Electronics"];
  return (
    <div className="flex flex-col gap-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Shop By Category</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-6">
          {category.map((category, index) => (
            <Link key={index} href={`/${category}`}>
              {category}
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Filter By</CardTitle>
          <CardDescription>Availability</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-6">
          <div className="flex items-center text-center gap-2">
            <Input type="checkbox" className="w-[1.1em] h-[1.1em] rounded-md" />
            <Label className="text-center"> Stocks</Label>
          </div>
          <div className="flex items-center gap-2">
            <Input type="checkbox" className="w-[1em] h-[1em] rounded-md" />
            <Label className="text-center">Out of Stocks</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSection;
