import { useCheckoutStore } from "@/stores/checkout-store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { generateMessage } from "@/data/generate-message";
import { useCartStore } from "@/stores/cart-store";

export const StepFinish = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);

  const message = generateMessage({ name, address, cart });
  //const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`; 
  const linkZap = `https://wa.me//0000000000000?text=${encodeURIComponent(message)}`; //To use on GitPages

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        All set, <strong>{name}</strong> !
      </p>
      <p>
        Send your order to our WhatsApp to finish up.
        <br />
        An attendant will guide you through the rest of the process.
      </p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Send on WhatsApp
        </Link>
      </Button>
    </div>
  );
};
