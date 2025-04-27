"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="text-center text-white p-6 font-bold text-2xl">
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "text-blue-900 mr-4"} >Home</Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-blue-900 mr-4"} >about</Link>
            <Link href="/products/234" className={pathname.startsWith("/products/") ? "font-bold mr-4" : "text-blue-900 mr-4"} >product 1234</Link>

        </nav>
    );
}