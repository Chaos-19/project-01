import React from "react";
import { features } from "../constants";

interface Props {
    // Define your props here props: Props
}

const Features = () => {
    return (
        <div className="">
            <div className="">
                {features.map((feture, index) => {
                    return <div className="">{feture.title}</div>;
                })}
            </div>
        </div>
    );
};

export default Features;
