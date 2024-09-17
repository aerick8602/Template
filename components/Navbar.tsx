import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="bg-white-16 w-screen flex flex-row justify-between items-center shadow-lg shadow-blue-300 px-12">
      {/* Navigation Links */}
      <img className="p-3 w-40 hover:scale-105 transition-transform duration-300" src="https://codingjr.online/uploads/system/logo-dark.png" alt="" />
      <div className="flex flex-row justify-between gap-8 font-extrabold list-none">
        <Link href="/" className="text-gray-800 hover:text-white hover:bg-blue-600 p-2 rounded transition-all duration-300">
          Home
        </Link>
        <Link href="/about" className="text-orange-400 hover:text-white hover:bg-blue-600 p-2 rounded transition-all duration-300">
          About
        </Link>
        <Link href="/contacts" className="text-gray-800 hover:text-white hover:bg-blue-600 p-2 rounded transition-all duration-300">
          Contact
        </Link>
        <div className="flex items-center font-extrabold list-none gap-6">
          <Link href="/services" className="text-orange-400 hover:text-white hover:bg-blue-600 p-2 rounded transition-all duration-300">
            Services
          </Link>
        </div>
      </div>
      {/* Authentication and User Info */}
      <div className="flex gap-6 items-center">
        {!userId ? (
          <>
            <Link href="/sign-in" className="p-2 border-3 border-black rounded-3xl bg-blue-400 text-black hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 font-bold">
              Login
            </Link>
            <Link href="/sign-up" className="p-2 border-3 border-black rounded-3xl bg-blue-400 text-black hover:bg-white hover:scale-110 hover:shadow-lg transition-all duration-300 font-bold">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <UserButton />
            <span className="hover:underline font-bold text-gray-800 text-lg">{user?.username}</span>
          </div>
        )}
      </div>
    </div>
  );
}
