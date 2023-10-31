import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "@/lib/contants";

const MobileToggle = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <div className="flex flex-col items-center justify-center gap-y-2 w-full pr-3 text-center">
          {navLinks.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="text-black hover:bg-zinc-200 border-zinc-500 rounded-md px-auto py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={clickHandler}
            variant="secondary"
            className="text-black hover:text-black"
          >
            Login
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
