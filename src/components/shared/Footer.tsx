import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 flex justify-between container mx-auto">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="flex justify-between">
          <Image src={"/logo.png"} width={25} height={30} alt="fitlog logo"></Image>
          <a className="btn btn-ghost text-6">FITLOG</a>
        </div>
      </nav>

<div className="text-gray-500">
    © 2026 FitLog —  Workout Library. Train hard, log honest.
</div>
    </footer>
  );
};

export default Footer;
