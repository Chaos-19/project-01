import React from "react";
import { image3 } from "../assets/index";

interface Props {
    // Define your props here
    path: string;
}

const Breadcrumb = (props: Props) => {
    const { path } = props;

    return (
        <div
            className="w-full h-[10vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${image3})` }}
        >
        
        </div>
    );
};

export default Breadcrumb;
