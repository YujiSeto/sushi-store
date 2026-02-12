import { useCheckoutStore } from "@/stores/checkout-store";
import Link from "next/link";
import { Button } from "../ui/button";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);

  const message = "Oi, tudo bem?";
  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`;

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
        <Link target="_blank" href={linkZap}>Send on WhatsApp</Link>
      </Button>
    </div>
  );
};
