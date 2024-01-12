import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../components/index";

interface Props {
    // Define your props here
}

const Layouts = () => {
    return (
        <div>
            <Breadcrumb />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Layouts;
