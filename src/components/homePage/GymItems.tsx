import { IGymItem } from "@/types/gymType";
import React from "react";
import GymItem from "../shared/GymItem";

const getGymItems = async (): Promise<IGymItem[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }
  const data = await res.json();

  return Array.isArray(data) ? data : (data.data ?? []);
};

export const GymItems = async () => {
  const gymItemsData = await getGymItems();

  return (
    <section id="library" className="scroll-mt-24 pb-16">
      <div className="mb-6">
        <h2 className="font-display text-3xl font-black uppercase">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gymItemsData.map((item) => (
          <GymItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default GymItems;
