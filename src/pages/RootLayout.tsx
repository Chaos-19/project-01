import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "../sections/index";
import { Navbar } from "../components/index";

interface Props {
    // Define your props here
}

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </main>
        </>
    );
};

export default RootLayout;
