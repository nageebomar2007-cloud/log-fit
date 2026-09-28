import React from "react";

const loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0d0f13] text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#292c34] border-t-[#ccff00]" />

        <p className="mt-4 text-sm text-gray-400">Loading workouts…</p>
      </div>
    </main>
  );
};

export default loading;
