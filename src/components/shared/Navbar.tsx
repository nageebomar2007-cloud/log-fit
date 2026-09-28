"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GymItemsContext } from "@/context/GymItemsContext";


const Navbar = () => {
    const { todayPlans, saveLater } = useContext(GymItemsContext);
  return (




































    
    <div className="navbar container mx-auto bg-neutral p-4 text-neutral-content shadow-sm">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            ☰
          </div>



          <ul
            tabIndex={-1}
            className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 text-black shadow"
          >
            <li>
              <Link href="/">Workouts</Link>
            </li>

            <li>
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            width={30}
            height={30}
            alt="FitLog logo"
          />

          <span className="font-bold">
            FITLOG
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Workouts</Link>
          </li>

          <li>
            <Link href="/my-plan">
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex gap-2">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5"
        >
          <span>Plan</span>

          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1 text-xs font-bold text-black">
            {todayPlans.length}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/5"
        >
          <span>Saved</span>

          <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-gray-700 px-1 text-xs">
            {saveLater.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
