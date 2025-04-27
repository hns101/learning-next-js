"use client";
import {useRouter} from "next/navigation";

export default function About() {
    const router = useRouter();
    return (<>
            <h1 className="text-white text-center p-6">About Us</h1>
            <button
                onClick={() => router.push("/")}
            className="bg-cyan-900 text-white p-3 text-center rounded-md cursor-pointer"
            >Go home</button>
        </>);
}