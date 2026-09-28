import { IGymItem } from "@/types/gymType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardProps {
  item: IGymItem;
}
const GymItem = ({ item }: IBookCardProps) => {
  return (
    <Link href={`/my-plan/workouts/${item.id}`} className="block">
      <div className="overflow-hidden rounded-2xl border border-[#292c34] bg-[#15171d] transition hover:border-[#b6ff00]/50">
        <div className="relative h-[180px] w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {item.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-extrabold uppercase tracking-wide text-white">
            {item.name}
          </h2>

          <p className="mt-1 text-sm text-gray-400">{item.equipment}</p>

          <div className="my-4 border-t border-[#252830]" />

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>◷ {item.duration} min</span>

            <span>♨ {item.caloriesBurned} kcal</span>

            <span>☆ {item.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GymItem;
