import { Product } from "@/lib/types";
import axios from "axios";
import { create } from "zustand";

interface ProductType {
  Loading: boolean;
  Error: boolean;
  products: Product[];
  featureProducts: Product[];
  singleProduct: Product;
}

interface ProductActions {
  getProducts: (url: string) => Promise<void>;
  getProduct: (url: string) => Promise<void>;
}

export const useProducts = create<ProductType & ProductActions>((set) => ({
  Loading: false,
  Error: false,
  products: [],
  featureProducts: [],
  singleProduct: {
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: ""
  },
  getProducts: async (url) => {
    set({ Loading: false });
    try {
      const res = await axios.get(url);
      const { products } = await res.data;

      const featureProducts = products
        ?.filter(
          (product: Product) =>
            product.category === "smartphones" || product.category === "laptops"
        )
        .sort((a: Product, b: Product) => b.rating - a.rating)
        .slice(0, 3);

      set({
        Loading: false,
        products: products,
        featureProducts: featureProducts,
      });
    } catch (error) {
      console.log(error);
      set({ Error: true, Loading: false });
    }
  },
  getProduct: async (url) => {
    set({ Loading: true });
    try {
      const res = await axios.get(url);
      const product = await res.data;
      set({ singleProduct: product, Loading: false });
      
    } catch (error) {
      console.log(error);
      set({ Error: true, Loading: false });
    }
  },
}));
