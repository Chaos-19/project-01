import React from "react";

import {
    Hero,
    Product,
    Features,
    Project,
    OurStory,
    Blog,
    Footer
} from "../sections/index";

interface Props {
    // Define your props here
}

const Main = () => {
    return (
        <div>
            <Hero />
            <Product />
            <Features />
            <Project />
            <OurStory />
            <Blog />
        </div>
    );
};

export default Main;
