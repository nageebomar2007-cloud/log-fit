import Banner from "@/components/homePage/Banner";
import GymItems from "@/components/homePage/GymItems";
import GymItemsSkeleton from "@/components/homePage/GymItemsSkeleton";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Banner />

        <Suspense fallback={<GymItemsSkeleton />}>
          <GymItems />
        </Suspense>
      </div>
    </main>
  );
}
