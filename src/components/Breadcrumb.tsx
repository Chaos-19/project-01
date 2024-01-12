import React from "react";
import { useLocation } from "react-router-dom";
import { image3, Home } from "../assets/index";

interface Props {
    // Define your props here
    path: string;
}

const Breadcrumb = () => {
    const location = useLocation();
    return (
        <div
            className="w-full h-[10vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${image3})` }}
        >
            <div className="h-full w-full flex items-end text-white px-3">
                <Home className=""/>
                <sapn className="text-lg inline-flex items-end border border-2 ">
                    {location.pathname}
                </sapn>
            </div>
        </div>
    );
};

export default Breadcrumb;
