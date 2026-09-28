import React from "react";

const GymItemsSkeleton = () => {
  return (
    <section className="pb-16">
      <div className="mb-6">
        <div className="h-9 w-48 animate-pulse rounded bg-[#20232a]" />
        <div className="mt-2 h-4 w-80 animate-pulse rounded bg-[#20232a]" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-[#292c34] bg-[#15171d]"
          >
            <div className="h-[180px] animate-pulse bg-[#20232a]" />

            <div className="space-y-3 p-5">
              <div className="h-4 w-24 animate-pulse rounded bg-[#20232a]" />
              <div className="h-6 w-40 animate-pulse rounded bg-[#20232a]" />
              <div className="h-4 w-28 animate-pulse rounded bg-[#20232a]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymItemsSkeleton;
