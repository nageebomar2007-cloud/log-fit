"use client";
import { GymItemsContext, ListType } from "@/context/GymItemsContext";
import { IGymItem } from "@/types/gymType";
import React, { use, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: IGymItem & {
    isDone?: boolean;
  };
  listType: ListType;
}
const MyPlanPage = ({ item, listType }: Props) => {
  const { markAsDone, removePlan } = useContext(GymItemsContext);
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#292c34] bg-[#15171d] p-4 lg:flex-row lg:items-center">
      {/* IMAGE */}
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl sm:w-40">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* INFO */}
      <div className="min-w-0 flex-1">
        <h3
          className={`text-lg font-bold uppercase ${
            item.isDone ? "text-gray-500 line-through" : "text-white"
          }`}
        >
          {item.name}
        </h3>

        <p className="text-sm text-gray-400">{item.equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-300">
          <span>◷ {item.duration} min</span>

          <span>♨ {item.caloriesBurned} kcal</span>

          <span>☆ {item.rating}</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/my-plan/workouts/${item.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-sm text-white transition hover:border-gray-400"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={() => markAsDone(item.id, listType)}
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            item.isDone
              ? "bg-gray-700 text-gray-300"
              : "bg-[#b6ff00] text-black hover:bg-[#a8ee00]"
          }`}
        >
          {item.isDone ? "✓ Completed" : "✓ Mark as Done"}
        </button>

        <button
          type="button"
          onClick={() => removePlan(item.id, listType)}
          className="rounded-full px-3 py-2 text-xl text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default MyPlanPage;
