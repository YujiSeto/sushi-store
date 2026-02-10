import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <ShoppingCart className="mr-2" />
          <p>Cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <ShoppingCart />
            <SheetTitle>Cart</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">...</div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center text-xs">
          <div>Subtotal</div>
          <div>$0.00</div>
        </div>

        <Separator className="my-4" />

        <div className="text-center">
          <Button>Complete Purchase</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
