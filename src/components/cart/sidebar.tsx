"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/dialog";

export const CartSideBar = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

  let subtotal = 0;
  for (const item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
          {cart.length > 0 && <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1" />}
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4 overflow-auto">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <ShoppingCart />
            <SheetTitle>Cart</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">
          {cart.map((item: Cart) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-md">
          <div>Subtotal</div>
          <div>$ {subtotal.toFixed(2)}</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center mb-4">
          <Button onClick={() => setCheckoutOpen(true)} disabled={cart.length === 0}>
            Complete Purchase
          </Button>
        </div>

        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
