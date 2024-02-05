import React, { useState, useEffect } from "react";
import { features } from "../constants";
import { Plus } from "../assets/index";

interface CardProps {
    title: string;
    icon: string;
    prevText: string;
    bgImage: string;
}

const FeatureCard = (props: CardProps) => {
    const { title, icon, prevText, bgImage } = props;

    return (
        <div
            className="relative lg:flex-1 lg:hover:flex-[3.5] group bg-cover bg-no-repeat w-full h-[28vh] lg:h-[700px] transition-all duration-300 ease-out"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center">
                    <img
                        src={icon}
                        alt={`${title} icon`}
                        className="w-8 h-8 object-cover"
                    />
                    <p className="text-md text-white font-medium">{title}</p>
                </div>
            </div>

            {/*Hover Effect*/}
            <div className="bg-yellow-500/50 absolute inset-x-0 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="flex flex-col justify-center px-3 py-2">
                    <h3 className="text-md md:text-xl font-medium capitalize">
                        {prevText.split(".")[0]}
                    </h3>
                    <p className="text-sm md:text-md font-normal">
                        {prevText.split(".")[1]}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    const [mouseHover, setMouseHover] = useState<boolean>(false);

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row">
                {features.map((feature: any) => {
                    return (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            icon={feature.icon}
                            prevText={feature.prevText}
                            bgImage={feature.bgImage}
                        />
                    );
                })}
                <div
                    className="w-full flex-[0.5] flex justify-center items-center py-4 bg-yellow-500 z-10 lg:w-[20%]"
                    onMouseEnter={() => setMouseHover(true)}
                    onMouseLeave={() => setMouseHover(false)}
                >
                    {mouseHover ? (
                        <p className="text-sm md:text-md text-white font-medium capitalize py-2 md:px-2">
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
