import React from "react";
import { Command, CommandInput, CommandList } from "../ui/command";
import { Button } from "../ui/button";
import {Search} from "lucide-react"

const SearchItem = () => {
  return (
    <div className="flex items-center gap-2">
      <Command className="w-96">
        <CommandInput placeholder="Search all the products here" />
      </Command>
      <Button variant="ghost" className="bg-white py-5 rounded-md">
       <Search className="h-4 w-4 object-contain" />
      </Button>
    </div>
  );
};

export default SearchItem;
