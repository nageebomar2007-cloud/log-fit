"use client";
import { IGymItem } from "@/types/gymType";
import React from "react";

interface PlanStatsProps {
  plans: IGymItem[];
}
const PlanStats = ({ plans }: PlanStatsProps) => {
  const exercises = plans.length;

  const minutes = plans.reduce(
    (total, item) => total + Number(item.duration || 0),
    0,
  );
  const calories = plans.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0,
  );
  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-[#292c34] bg-[#15171d]">
      <div className="px-5 py-6">
        <p className="text-xs text-gray-500">Exercises</p>

        <p className="mt-1 text-3xl font-black text-[#b6ff00]">{exercises}</p>
      </div>

      <div className="border-l border-[#292c34] px-5 py-6">
        <p className="text-xs text-gray-500">Minutes</p>

        <p className="mt-1 text-3xl font-black text-white">{minutes}</p>
      </div>

      <div className="border-l border-[#292c34] px-5 py-6">
        <p className="text-xs text-gray-500">Calories</p>

        <p className="mt-1 text-3xl font-black text-white">{calories}</p>
      </div>
    </div>
  );
};

export default PlanStats;
