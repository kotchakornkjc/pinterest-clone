"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  HiChatBubbleOvalLeftEllipsis,
  HiMiniBell,
  HiMiniMagnifyingGlass,
  HiUserCircle,
} from "react-icons/hi2";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="sticky top-0 flex flex-row gap-3 md:gap-2 p-3 items-center bg-white shadow shadow-slate-100">
      <button
        className="p-3 rounded-full hover:bg-gray-200 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </button>

      <button
        className="p-3 rounded-full bg-black text-white"
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <button
        className="p-3 rounded-full font-semibold"
        onClick={() => router.push("/pin-builder")}
      >
        Create
      </button>

      <div
        className="flex flex-row p-2 gap-3 bg-gray-200 rounded-full justify-start items-center
      hover:bg-gray-300 w-full hidden md:flex"
      >
        <HiMiniMagnifyingGlass className="text-[20px] text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="p-1 rounded-full hover:bg-gray-200 cursor-pointer">
        <HiMiniMagnifyingGlass className="text-[30px] text-gray-500 md:hidden" />
      </div>

      <div className="p-1 rounded-full hover:bg-gray-200 cursor-pointer">
        <HiMiniBell className="text-[30px] text-gray-500" />
      </div>
      <div className="p-1 rounded-full hover:bg-gray-200 cursor-pointer">
        <HiChatBubbleOvalLeftEllipsis className="text-[30px] text-gray-500" />
      </div>
      <div className="p-1 rounded-full hover:bg-gray-200 cursor-pointer">
        <HiUserCircle className="text-[30px] text-gray-500" />
      </div>
    </nav>
  );
};

export default Header;
