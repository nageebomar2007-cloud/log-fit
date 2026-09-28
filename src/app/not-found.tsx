import React from "react";
import Link from "next/link";


const notFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] px-6 text-white">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b6ff00]">
          Error 404
        </p>

        <h1 className="text-5xl font-bold">Page Not Found</h1>

        <p className="mt-4 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#b6ff00] px-6 py-3 font-semibold text-black transition hover:bg-[#ccff00]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default notFound;
