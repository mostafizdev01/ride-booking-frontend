import { Footer } from "../Footer";
import Header from "../Header";

interface IProps {
    children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
    return (
        <div className=" min-h-screen flex flex-col">
            <Header />
            <div className="grow-1">{children}</div>
            <Footer />
        </div>
    );
}