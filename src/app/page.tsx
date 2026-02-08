"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";

const Page = () => {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <div className="mx-3">...</div>
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Page;
