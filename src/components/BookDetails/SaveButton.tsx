// "use client"
// import { GymItemsContext } from "@/context/GymItemsContext";
// import { IGymItem } from "@/types/gymType";
// import React, { useContext } from "react";
// import { toast } from "react-toastify";

// const SaveButton = ({ gymItem }: { gymItem: IGymItem }) => {
//   const { saveLater, saveForLater } = useContext(GymItemsContext);

//   const alreadySaved = saveLater.some(
//     (item) => String(item.id) === String(gymItem.id),
//   );

//   const handleClick = () => {
//     if (alreadySaved) {
//       toast.warning(`${gymItem.name} is already saved`);
//       return;
//     }
//     const saved = saveForLater(gymItem);

//     if (saved) {
//       toast.success(`${gymItem.name} saved for later`);
//     }
//   };
//   return (
//     <button
//       type="button"
//       onClick={handleClick}
//       className={`rounded-xl border px-6 py-3 text-sm font-medium transition ${
//         alreadySaved
//           ? "border-lime-400 text-lime-400"
//           : "border-gray-600 text-gray-200 hover:bg-[#1b1e25]"
//       }`}
//     >
//       {alreadySaved
//         ? "✓ Saved"
//         : "♡ Save for later"}
//     </button>
//   );
// };

// export default SaveButton;
