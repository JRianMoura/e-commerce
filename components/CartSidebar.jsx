"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";

const CartSidebar = () => {
  return (
    <Sheet open={true}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Minha Carteira</SheetTitle>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
          <p>Item 4</p>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
