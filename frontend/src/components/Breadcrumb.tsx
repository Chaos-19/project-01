import React from "react";
import { useLocation } from "react-router-dom";
import { image3, Home } from "../assets/index";

const Breadcrumb = () => {
    const location = useLocation();
    const path: string = location.pathname.replace("/", "");
    return (
        <div
            className="w-full h-[10vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${image3})` }}
        >
            <div className="h-full w-full flex items-end text-white px-3">
                <Home className="w-8 h-8 py-1" />
                <span className="text-xl inline-flex items-end">/{path}</span>
            </div>
        </div>
    );
};

export default Breadcrumb;
