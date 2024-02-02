import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../components/index";


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
