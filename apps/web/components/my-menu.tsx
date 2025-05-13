import { Search, ShoppingCart, User } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar";

export function MyMenu() {
  return (
    <Menubar className="flex justify-center gap-8">
      <MenubarMenu>
        <MenubarTrigger>
          <Search />
          Explore
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <ShoppingCart />
          Cart
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <User />
          Account
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
