import React, { useState, useEffect } from "react";
import { features } from "../constants";
import { Plus } from "../assets/index";

interface Props {
    // Define your props here props: Props
}

const Features = () => {
    const [mouseHover, setMouseHover] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-stretch min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer">
                {features.map((feture, index) => {
                    return (
                        <div className="relative w-full h-full group flex items-center justify-center">
                            <img
                                src={feture.bgImage}
                                alt={`${feture.title} image`}
                                className="w-full h-full bg-cover lg:absolute"
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="flex flex-col justify-center">
                                    <img
                                        src={feture.icon}
                                        alt={`${feture.title} icon`}
                                        className="w-8 h-8 object-cover"
                                    />
                                    <p className="text-md text-white font-medium">
                                        {feture.title}
                                    </p>
                                </div>
                            </div>
                            {/*Hover effect*/}
                            <div className="bg-yellow-500/50 absolute inset-x-0 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex flex-col justify-center px-3 py-2">
                                    <h3 className="text-md md:text-xl font-medium capitalize">
                                        {feture.prevText.split(".")[0]}
                                    </h3>
                                    <p className="text-sm md:text-md font-normal">
                                        {feture.prevText.split(".")[1]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div
                    className="w-full flex justify-center items-center py-4 bg-yellow-500 z-10 lg:w-[20%]"
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => setMouseHover(false)}
                >
                    {mouseHover ? (
                        <p className="text-sm md:text-md text-white font-medium capitalize py-1">
                            show more
                        </p>
                    ) : (
                        <Plus
                            size={32}
                            color={"white"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Features;
