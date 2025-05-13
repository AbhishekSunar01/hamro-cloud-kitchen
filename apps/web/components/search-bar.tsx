import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Food Item" />
      <Button type="submit">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
