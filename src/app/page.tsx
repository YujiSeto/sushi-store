import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTabs } from "@/components/products/tabs";
import { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <div className="mx-3">
          <Suspense fallback={<TabsSkeleton />}>
            <ProductsTabs />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
