import React from "react";
import { Instagram } from "../assets/index";

interface Props {
    // Define your props here
}

const Footer = (/*props: Props*/) => {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center items-center bg-white">
                <div className="mt-5 w-full">
                    <h2 className="text-2xl font-medium text-gray-700 uppercase flex items-center justify-center gap-3">
                        <span>follow us</span>
                        <Instagram />
                        <span>Instagram</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
