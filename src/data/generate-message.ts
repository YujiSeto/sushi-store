import { Cart } from "@/types/cart";

type Props = {
  name: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
    state: string;
  };
  cart: Cart[];
};

export const generateMessage = ({ name, address, cart }: Props) => {
  const orderProducts = cart.map((item) => `${item.quantity} x ${item.product.name}`);

  return `**Client Info:**
Name: ${name}
Address: ${address.street}, ${address.number}, (${address.complement ?? ""})
${address.district}, ${address.city}/${address.state}
----------
**Order Details:**
${orderProducts.join("\n")}`;
};
