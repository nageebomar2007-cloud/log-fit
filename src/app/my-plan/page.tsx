// "use client";
// import Link from "next/link";
// import PlanStats from "@/components/PlanState/PlanStats";
// import SortSelect, { SortType } from "@/components/PlanState/SortSelect";
// import MyPlanPage from "@/components/shared/MyPlanPage";
// import { GymItemsContext } from "@/context/GymItemsContext";
// import React, { useContext, useMemo, useState } from "react";
// type ListType = "todayPlans" | "saveLater";
// const EmptyState = () => {
//   return (
//     <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-[#292c34] bg-[#121316] px-4 py-16 text-center">
//       <h2 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
//         NOTHING HERE YET
//       </h2>

//       <p className="mt-2 max-w-md text-sm text-gray-400">
//         Browse the library and add a lift to get today moving.
//       </p>

//       <Link
//         href="/"
//         className="mt-6 rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
//       >
//         Go to workouts
//       </Link>
//     </div>
//   );
// };

// const MyPlan = () => {
//   const { todayPlans, saveLater } = useContext(GymItemsContext);

//   const [activeTab, setActiveTab] = useState<ListType>("todayPlans");
//   const [sortBy ,setSortBy] = useState<SortType>("duration");
//   const currentPlans = activeTab === "todayPlans" ? todayPlans : saveLater;

//   const sortedPlans = useMemo(() => {
//     const plans = [...currentPlans];

//     if (sortBy === "duration") {
//       return plans.sort((a, b) => Number(a.duration) - Number(b.duration));
//     }

//     if (sortBy === "calories") {
//       return plans.sort(
//         (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned),
//       );
//     }

//     return plans.sort((a, b) => Number(b.rating) - Number(a.rating));
//   }, [currentPlans, sortBy]);

//   return (
//     <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-[1400px]">
//         {/* HEADER */}
//         <div className="mb-7">
//           <h1 className="font-display text-4xl font-black uppercase">
//             MY PLAN
//           </h1>

//           <p className="mt-1 text-sm text-gray-500">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>

//         {/* DYNAMIC STATS */}
//         <PlanStats plans={currentPlans} />

//         {/* TABS + SORT */}
//         <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex w-fit rounded-xl border border-[#292c34] bg-[#15171d] p-1">
//             {/* TODAY'S PLAN */}
//             <button
//               type="button"
//               onClick={() => setActiveTab("todayPlans")}
//               className={`rounded-lg px-4 py-2 text-xs transition ${
//                 activeTab === "todayPlans"
//                   ? "bg-[#242831] text-white"
//                   : "text-gray-500 hover:text-gray-300"
//               }`}
//             >
//               Today's Plan
//               <span className="ml-2 text-lime-400">{todayPlans.length}</span>
//             </button>

//             {/* SAVED */}
//             <button
//               type="button"
//               onClick={() => setActiveTab("saveLater")}
//               className={`rounded-lg px-4 py-2 text-xs transition ${
//                 activeTab === "saveLater"
//                   ? "bg-[#242831] text-white"
//                   : "text-gray-500 hover:text-gray-300"
//               }`}
//             >
//               Saved
//               <span className="ml-2 text-lime-400">{saveLater.length}</span>
//             </button>
//           </div>

//           {/* SORT */}
//           <SortSelect value={sortBy} onChange={setSortBy} />
//         </div>

//         {/* LIST */}
//         <div className="mt-5">
//           {sortedPlans.length === 0 ? (
//             <EmptyState />
//           ) : (
//             <div className="flex flex-col gap-3">
//               {sortedPlans.map((item) => (
//                 <MyPlanPage
//                   key={`${activeTab}-${item.id}`}
//                   item={item}
//                   listType={activeTab}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MyPlan;
