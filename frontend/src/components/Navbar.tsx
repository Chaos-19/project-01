import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { staggerContainer, navMenu, navVariants } from "../utils/motion";
import { logo, Menu, Close, ChevronRight, ChevronDown } from "../assets/index";

type listItemProps = {
    children: React.ReactNode;
    link: string;
    style?: string
};
const ListItem = (props: listItemProps) => {
    const { children, link, style } = props;
    return (
        <li>
            <Link
                to={link}
                className={`flex items-center gap ${style && style}`}
            >
                {children}
            </Link>
        </li>
    );
};

const Navbar = (props: { navLinks: {}[] }) => {
    const { navLinks } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const openMenu = (): void => setIsOpen(!isOpen);

    return (
        <nav>
            <motion.div className="relative w-full">
                <div className="flex items-center justify-between py-2 px-3 lg:px-4 bg-black">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="brand logo"
                            className="w-10 h-10"
                        />
                    </Link>

                    {/*mobile menu */}
                    <button
                        className="lg:hidden"
                        onClick={openMenu}
                    >
                        <Menu color="white" />
                    </button>

                    {/*desktop navigation Link*/}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-3.5 text-white text-xl font-black capitalize">
                            {navLinks.map((nav: any) => {
                                return (
                                    <ListItem link={nav.link} key={nav.title} style={nav?.style}>
                                        {nav.title}
                                        {nav?.submenu ? <ChevronDown /> : ""}
                                    </ListItem>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                {/*mobile navigation*/}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`w-full ${isOpen ? "flex" : "hidden"
                        } flex-col absolute inset-x-0 top-0 bg-black z-50 pt-3 pr-3 pl-2 divide-y `}
                >
                    <motion.button
                        variants={navVariants}
                        className="ms-auto py-2"
                        onClick={openMenu}
                    >
                        <Close color="white" />
                    </motion.button>
                    <ul className="w-full text-white divide-y font-serif pb-2">
                        {navLinks.map((nav:any, index: number) => {
                            return (
                                <motion.li
                                    variants={navMenu(
                                        "right",
                                        "tween",
                                        index * 0.1,
                                        0.3
                                    )}
                                    key={nav.title}
                                >
                                    <Link
                                        to={nav.link}
                                        className="flex justify-center justify-between py-3 font-black uppercase text-lg"
                                    >
                                        {nav.title}
                                        {nav?.submenu ? <ChevronRight /> : ""}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
