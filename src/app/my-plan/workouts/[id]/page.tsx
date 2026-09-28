// import { IGymItem } from "@/types/gymType";
// import Link from "next/link";
// import Image from "next/image";

// import PlanButton from "@/components/BookDetails/PlanButton";
// import SaveButton from "@/components/BookDetails/SaveButton";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// const getGymItems = async (id: string): Promise<IGymItem | null> => {
//   try {
//     const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
//       cache: "no-store",
//     });
//     if (res.ok) {
//       const data = await res.json();

//       if (data && !Array.isArray(data)) {
//         return data as IGymItem;
//       }
//       if (Array.isArray(data)) {
//         const item = data.find(
//           (item: IGymItem) => String(item.id) === String(id),
//         );
//         if (item) {
//           return item;
//         }
//       }
//     }
//   } catch (error) {
//     console.error("Single workout API error:", error);
//   }
//   try {
//     const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       return null;
//     }

//     const data = await res.json();
//     const items: IGymItem[] = Array.isArray(data) ? data : (data?.data ?? []);

//     return (
//       items.find((item: IGymItem) => String(item.id) === String(id)) ?? null
//     );
//   } catch (error) {
//     console.error("Fallback workout API error:", error);

//     return null;
//   }
// };

// const GymDetailsPage = async ({ params }: PageProps) => {
//   const { id } = await params;
//   const gymItem = await getGymItems(id);
//   if (!gymItem) {
//     return (
//       <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] px-4 text-white">
//         <div className="text-center">
//           <h1 className="text-3xl font-black sm:text-4xl">WORKOUT NOT FOUND</h1>

//           <p className="mt-3 text-sm text-gray-500">
//             We couldn't find this workout.
//           </p>

//           <Link
//             href="/"
//             className="mt-6 inline-block rounded-full bg-[#b6ff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#c8ff45]"
//           >
//             Back to workouts
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#0d0f13] px-2 py-2 text-white sm:px-4">
//       <div className="mx-auto min-h-[calc(100vh-16px)] max-w-[1400px] border border-[#303945] bg-[#0d0f13]">
//         {/* =================================
//             HEADER
//         ================================== */}

//         <header className="flex h-12 items-center justify-between border-b border-dashed border-[#303945] px-4 sm:px-6">
//           {/* LOGO */}
//           <Link
//             href="/"
//             className="flex items-center gap-2 text-sm font-black tracking-widest"
//           >
//             <span className="text-lg text-[#b6ff00]">⚒</span>
//             FITLOG
//           </Link>

//           {/* CENTER NAV */}
//           <nav className="hidden items-center gap-10 text-[11px] text-gray-400 sm:flex">
//             <Link href="/" className="transition hover:text-white">
//               Workouts
//             </Link>

//             <Link href="/my-plan" className="transition hover:text-white">
//               My Plan
//             </Link>
//           </nav>

//           {/* RIGHT NAV */}
//           <div className="flex items-center gap-4 text-[10px] text-gray-400 sm:gap-5">
//             <Link href="/my-plan" className="flex items-center gap-2">
//               Plan
//               <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[9px] font-bold text-black">
//                 0
//               </span>
//             </Link>

//             <Link href="/saved" className="flex items-center gap-2">
//               Saved
//               <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-gray-700 px-1 text-[8px]">
//                 0
//               </span>
//             </Link>
//           </div>
//         </header>

//         {/* =================================
//             CONTENT
//         ================================== */}

//         <section className="grid grid-cols-1 lg:grid-cols-2">
//           {/* =================================
//               LEFT IMAGE
//           ================================== */}

//           <div className="border-b border-dashed border-[#303945] p-3 sm:p-5 lg:border-b-0 lg:border-r">
//             <div className="relative h-[450px] w-full overflow-hidden rounded-lg sm:h-[600px] lg:h-[calc(100vh-95px)] lg:min-h-[550px]">
//               <Image
//                 src={gymItem.image}
//                 alt={gymItem.name}
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>
//           </div>

//           {/* =================================
//               RIGHT SIDE
//           ================================== */}

//           <div className="px-5 py-6 sm:px-8 lg:px-10 lg:py-7">
//             {/* TITLE */}
//             <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
//               {gymItem.name}
//             </h1>

//             {/* DESCRIPTION */}
//             <p className="mt-4 max-w-2xl text-sm leading-6 text-[#9297a1]">
//               {gymItem.description}
//             </p>

//             {/* MUSCLE GROUPS */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {gymItem.muscleGroups?.map((muscle) => (
//                 <span
//                   key={muscle}
//                   className="rounded-full bg-[#b6ff00] px-4 py-1 text-[10px] font-bold uppercase text-black"
//                 >
//                   {muscle}
//                 </span>
//               ))}
//             </div>

//             {/* =================================
//                 INFORMATION CARD
//             ================================== */}

//             <div className="mt-5 overflow-hidden rounded-xl border border-[#292e38] bg-[#15171e]">
//               <InfoRow label="EQUIPMENT" value={gymItem.equipment} />

//               <InfoRow label="DIFFICULTY" value={gymItem.difficulty} />

//               <InfoRow label="SETS" value={gymItem.sets} />

//               <InfoRow label="REPS" value={gymItem.reps} />

//               <InfoRow label="DURATION" value={`${gymItem.duration} min`} />

//               <InfoRow
//                 label="CALORIES"
//                 value={`${gymItem.caloriesBurned} kcal`}
//               />

//               <InfoRow label="RATING" value={`★ ${gymItem.rating}`} last />
//             </div>

//             {/* =================================
//                 INSTRUCTIONS
//             ================================== */}

//             <div className="mt-6">
//               <h2 className="text-xs font-bold tracking-wide">INSTRUCTIONS</h2>

//               <ol className="mt-4 space-y-3">
//                 {gymItem.instructions?.map((instruction, index) => (
//                   <li
//                     key={index}
//                     className="flex gap-3 text-[11px] leading-5 text-[#a4a8af]"
//                   >
//                     <span className="shrink-0 text-[#737982]">
//                       {index + 1}.
//                     </span>

//                     <span>{instruction}</span>
//                   </li>
//                 ))}
//               </ol>
//             </div>

//             {/* =================================
//                 BUTTONS
//             ================================== */}

//             <div className="mt-7 flex flex-wrap gap-3">
//               <PlanButton gymItem={gymItem} />

//               <SaveButton gymItem={gymItem} />
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// function InfoRow({
//   label,
//   value,
//   last = false,
// }: {
//   label: string;
//   value: string | number;
//   last?: boolean;
// }) {
//   return (
//     <div
//       className={`flex min-h-[44px] items-center justify-between px-4 ${
//         !last ? "border-b border-[#252a32]" : ""
//       }`}
//     >
//       <span className="text-[9px] font-bold tracking-wider text-[#858b95]">
//         {label}
//       </span>

//       <span className="text-[11px] text-[#d9dbe0]">{value}</span>
//     </div>
//   );
// }

// export default GymDetailsPage;
