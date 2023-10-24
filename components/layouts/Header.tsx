import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import SearchItem from "../feature/search-item";
import { navLinks } from "@/lib/contants";

const Header = () => {
  return (
    <header className="w-full px-8 flex flex-col items-center bg-zinc-50 box-border shadow-xl">
      <div className="py-4 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="LocalBazaar Logo"
            width={160}
            height={200}
            className="object-contain"
          />
        </Link>
        <Button
          variant="secondary"
          className="bg-black text-white hover:text-black"
        >
          Login
        </Button>
      </div>
      <Separator className="bg-zinc-200" />
      <nav className="flex items-center justify-between py-3 w-full">
        <SearchItem />

        <div className="flex items-center justify-between pr-3 text-center">
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-black hover:bg-zinc-200 border-zinc-500 rounded-md px-3 py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
