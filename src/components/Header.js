"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Menu } from "lucide-react"; // Importing hamburger icon
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const headerMenu = [
    { id: 1, name: "Ride", icon: "/taxi.png" },
    { id: 2, name: "History", icon: "/history-icon.png" },
  ];

  return (
    <div className="p-4 border-b-4 border-gray-200 flex items-center justify-between bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-6 justify-between w-[50%]">
        {/* Logo */}
        <div>
        <Image src="/logo.png" alt="logo" width={50} height={50} className="w-16 h-16 md:w-20 md:h-20 ml-[15px]" /></div>

        {/* Menu for Large Screens */}
        <div className="hidden md:flex gap-6 ml-[20px] items-center">
          {headerMenu.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center cursor-pointer"
              onClick={() => router.push(item.id === 1 ? "/" : "/ride-history")}
            >
              <Image src={item.icon} width={item.id === 1 ? 50 : 25} height={item.id === 1 ? 50 : 25} alt={item.name} />
              <h2 className="text-sm font-medium">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 size={24} /> : <Menu size={24} />}
          {/* <Menu size={24} /> */}
        </button>

        {/* User Button */}
        <UserButton />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4">
            {headerMenu.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  router.push(item.id === 1 ? "/" : "/ride-history");
                  setMenuOpen(false);
                }}
              >
                <Image src={item.icon} width={30} height={30} alt={item.name} />
                <h2 className="text-sm font-medium">{item.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
