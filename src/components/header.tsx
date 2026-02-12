import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartSideBar } from "@/components/cart/sidebar";
import { ClientOnly } from "@/components/client-only";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo />
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
      </div>
      <div className="flex items-center gap-3">
        <CartSideBar />
      </div>
    </header>
  );
};
