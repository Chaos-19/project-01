import React from "react";
import { features } from "../constants";

interface Props {
    // Define your props here props: Props
}

const Features = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-stretch">
                {features.map((feture, index) => {
                    return (
                        <div className="relative w-full h-full group">
                            <img
                                src={feture.bgImage}
                                alt={`${feture.title} image`}
                                className="w-full bg-cover"
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
                            <div className="hidden absolute inset-x-0 bottom-0 group-hover:block  bg-yellow-100 transition-all">
                                <div className="flex flex-col justify-center px-3 py-2">
                                    <h3 className="text-xl font-medium capitalize">
                                        {feture.prevText.split(".")[0]}
                                    </h3>
                                    <p className="text-md font-normal">
                                        {feture.prevText.split(".")[1]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
