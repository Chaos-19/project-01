import React from "react";
import { image4 } from "../assets/index";

interface Props {
    // Define your props here
}

const OurStory = (/*props: Props*/) => {
    return (
        <div
            className="w-full h-[28vh] bg-cover bg-fixed "
            style={{ backgroundImage: `url(${image4})` }}
        >
            <div className="w-full h-full flex justify-center">
                <div className="flex flex-col items-center justify-center px-20 mt-8">
                    <h5 className="capitalize text-xl text-white font-medium">
                        Our Story
                    </h5>
                    <p className="text-md text-white text-center font-normal">
                        We believe in creativity as one of the major forces of
                        progress. With this idea, we traveled throughout Italy
                        to find exceptional artisans and bring their unique
                        handcrafted objects to connoisseurs everywhere.
                    </p>

                    <a
                        className="text-lg font-medium text-white mt-12 capitalize"
                        href="/about"
                    >
                        Read full Story
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
