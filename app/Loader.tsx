"use client";

import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";

const Loader: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState<string>("#169dad");
    const [size, setSize] = useState<number>(150);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`flex flex-col justify-center items-center w-screen h-screen transition-opacity duration-500 ${loading ? "opacity-100" : "opacity-0"}`}
        >
            <FadeLoader
                color={color}
                loading={loading}
                cssOverride={{ display: "block", margin: "0 auto" }}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;
