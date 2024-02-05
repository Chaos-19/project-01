import React from "react";

interface Props {
    children: React.ReactNode;
}

const SectionWrapper = (props: Props) => {
    const { children } = props;
    return <section className="w-full max-w-screen-2xl mx-auto">{children}</section>;
};

export default SectionWrapper;
