import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <div className="bg-cyan-300">
      <ul className="flex justify-between py-4 px-12">
        <div className="flex flex-row justify-between gap-6 font-extrabold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/client/About">
            <li>About</li>
          </Link>
        </div>
        <div className="flex items-center font-extrabold">
          <Link href="/services">
            <li>Services</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {!userId ? (
            <>
              <Link href="/sign-in">
                <li className="p-1 border-solid border-2 border-black hover:scale-125 hover:ease-in-out duration-300 rounded-xl">SignIn</li>
              </Link>
              <Link href="/sign-up">
                <li className="p-1 border-solid border-2 border-black hover:scale-125 hover:ease-in-out duration-300 rounded-xl">SignUp</li>
              </Link>
            </>
          ) : (
            <div className="flex flex-row gap-2">  <li className="flex items-center">
              <UserButton />
            </li>
              <li className="font bold items-center">{user?.username}</li></div>
          )}
        </div>
      </ul>
    </div>
  );
};
