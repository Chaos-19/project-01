import React from "react";
import Slider from "../components/Slider";

interface Props {
    // Define your props here
}

const Header = () => {
    return (
        <div>
            <Slider navHeight={60} />
        </div>
    );
};

export default Header;
