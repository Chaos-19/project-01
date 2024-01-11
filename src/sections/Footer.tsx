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
                    <h2 className="text-xl font-medium text-gray-500 uppercase flex items-end justify-center gap-3">
                        <span>follow us</span>
                        <Instagram size={32} />
                        <span>Instagram</span>
                    </h2>
                    <p className="text-center text-sm text-gray-400">
                        @elfegnefurnishing
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
