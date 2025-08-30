import type { ReactNode } from "react";
import { Footer } from "../Footer";
import Header from "../Header";

interface IProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
    return (
        <div className=" min-h-screen flex flex-col">
            <Header />
            <div className="grow-1 min-h-screen">{children}</div>
            <Footer />
        </div>
    );
}