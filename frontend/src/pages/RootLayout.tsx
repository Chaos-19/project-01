import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SectionWrapper from "../hoc/SectionWrapper";
import { Footer } from "../sections/index";
import { Navbar } from "../components/index";
import { navLinks } from "../constants";

const RootLayout = () => {
    return (
        <SectionWrapper>
            <Navbar navLinks={navLinks} />
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
