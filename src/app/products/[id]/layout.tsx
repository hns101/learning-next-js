import {ReactNode} from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <h1 className="text-center text-white p-6 font-bold text-5xl">Products</h1>
            {children}
            <div>
                <h2>New product section</h2>
            </div>
        </div>
    );
}