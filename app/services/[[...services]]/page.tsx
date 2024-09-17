
import { redirect } from "next/navigation";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const services = async () => {
    const { userId } = auth();
    const isAuth = !!userId;
    const user = await currentUser();

    if (!isAuth) {
        redirect("/sign-in");
    }

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <h1 className="text-2xl">Hello!! {user?.username} Welcome to Services</h1>

        </div>
    );
};

export default services;
