import { trusteData } from "@/lib/contants";
import Image from "next/image";
import React from "react";

const Trusted = () => {
  return (
    <section className="bg-zinc-100 py-20">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h3 className="font-semibold text-2xl">Trusted by 1000+ companies</h3>
        <div className="flex items-center justify-between w-full mt-6">
          {trusteData.map((item) => (
            <div key={item.title}>
              <Image
                src={item.image}
                alt={item.title}
                width={143}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
