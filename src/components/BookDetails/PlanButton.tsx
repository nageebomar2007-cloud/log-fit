"use client"
import { GymItemsContext } from "@/context/GymItemsContext";
import { IGymItem } from "@/types/gymType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ gymItem }: { gymItem: IGymItem }) => {
  const { todayPlans, addToTodayPlan } = useContext(GymItemsContext);

  const alreadyAdded = todayPlans.some(
    (item) => String(item.id) === String(gymItem.id),
  );

  const handleClick = () => {
    if (alreadyAdded) {
      toast.warning(`${gymItem.name} is already in Today's Plan`);
      return;
    }
    const added = addToTodayPlan(gymItem);

    if (added) {
      toast.success(`${gymItem.name} added to Today's Plan`);
    }
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
        alreadyAdded
          ? "bg-gray-700 text-gray-300"
          : "bg-[#b6ff00] text-black hover:bg-[#a8ee00]"
      }`}
    >
      {alreadyAdded ? "✓ Added to Today's Plan" : "🗓 Add to today's plan"}
    </button>
  );
};

export default PlanButton;
