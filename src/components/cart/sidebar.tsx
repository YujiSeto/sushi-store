import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CartSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Cart</p>
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
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
