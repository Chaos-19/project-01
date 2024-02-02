import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SectionWrapper from "../hoc/SectionWrapper";
import { Footer } from "../sections/index";
import { Navbar } from "../components/index";
import { navLinks ,navLinksAdmin} from "../constants";

import { useAppSelector } from "../app/hook";
import { selectCurrentToken } from "../features/auth/authSlice";

const RootLayout = () => {

    const token = useAppSelector(selectCurrentToken);

    return (
        <SectionWrapper>
            <Navbar navLinks={token?navLinksAdmin:navLinks} />
            <main>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </main>
            <Toaster />
        </SectionWrapper>
    );
};

export default RootLayout;
