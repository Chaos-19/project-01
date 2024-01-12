import React from "react";
import { Outlet } from "react-router-dom";

import  SectionWrapper  from "../hoc/SectionWrapper";
import { Footer } from "../sections/index";
import { Navbar } from "../components/index";

interface Props {
    // Define your props here
}

const RootLayout = () => {
    return (
        <SectionWrapper>
            <Navbar />
            <main>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </main>
        </SectionWrapper>
    );
};

export default RootLayout;
