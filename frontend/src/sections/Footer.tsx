import { Link } from "react-router-dom";
import {
    Instagram,
    fImage1,
    fImage2,
    fImage3,
    fImage4,
    fImage5,
    fImage6,
    MapPin,
    Phone,
    FaTelegramPlane,
    FaFacebook
} from "../assets/index";
import { links } from "../constants";

const images: string[] = [fImage1, fImage2, fImage3, fImage4, fImage5, fImage6];

const Links = () => {
    return (
        <div className="w-full flex flex-col md:flex-row  md:justify-around md:items-center border-t border-gray-700 pt-5 my-8">
            {links.map((link, index) => {
                return (
                    <div key={link?.title} className="flex-1 flex flex-col justify-center items-center">
                        <h3 className="text-md text-yellow-600 font-medium uppercase my-2">
                            {link.title}
                        </h3>
                        {link.links.map((value, index) => {
                            return (
                                <Link
                                    className="text-sm text-neutral-500 capitalize text-center"
                                    to="/"
                                    key={value}>
                                    {value}
                                </Link>
                            );
                        })}
                    </div>
                );
            })}
            <div className="flex flex-[2] flex-col justify-center text-center">
                <h3 className="text-md text-yellow-600 font-medium uppercase my-3">
                    SIGN UP FOR OUR NEWSLETTER
                </h3>
                <p className="text-center text-sm text-neutral-500 px-4">
                    Add your email address to sign up for our monthly emails and
                    to receive promotional offers.
                </p>
                <form className="px-10 py-2">
                    <div className="border-b border-neutral-400 flex items-center">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-black w-full pt-3 pb-1 px-2 text-white focus:outline-none "
                        />
                        <button
                            type="submit"
                            className="border py-1 px-1.5 text-md text-white rounded"
                        >
                            send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center items-center bg-white">
                <div className="mt-5 mb-8 w-full">
                    <h2 className="text-xl font-medium text-gray-500 uppercase flex items-end justify-center gap-3">
                        <span>follow us</span>
                        <Instagram size={32} />
                        <span>Instagram</span>
                    </h2>
                    <p className="text-center text-sm text-neutral-500">
                        @elfegnefurnishing
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center">
                {images.map((src, index) => {
                    return (
                        <div key={src} className="flex-1 overflow-hidden">
                            <img
                                src={src}
                                alt="interior image"
                                className="w-full bg-cover hover:scale-125 transition-all duration-500 cursor-pointer"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="bg-black flex flex-col justify-center py-7">
                <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center md:px-22 px-10 gap-14">
                    <div className="flex flex-col justify-center items-center text-center gap-2">
                        <h2 className="uppercase text-xl font-semibold text-yellow-600">
                            VISIT OUR SHOWROOM
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Kirkose Condiminium Ground floor,Addis Abeba,ETHIOPIA
                        </p>
                        <p className="text-gray-600 text-sm">
                            Mon - Sat: 10 am - 6 pm | Sun: 12pm - 2 pm
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">

                        <Link to="https://maps.app.goo.gl/PQBcymAGskJEwAx56">
                            <button className="flex items-center gap-1.5 py-2 px-2.5 text-md text-white capitalize border rounded">
                                <MapPin className="w-5 h-5" /> Get directions
                            </button>
                        </Link>
                        <p className="text-md text-yellow-600 flex flex-col justify-center">
                            <span className="flex items-center gap-2">
                                <Phone className="w-5 h-5" /> +251 902066660
                            </span>
                            <span className="flex items-center gap-2">
                                <Phone className="w-5 h-5" /> +251 954839444
                            </span>
                        </p>
                    </div>
                </div>
                <Links />
                <div className="flex justify-center md:justify-end items-center px-10">
                    <div className="flex items-center gap-2">
                        <FaFacebook className="w-8 h-8 text-white" />
                        <FaTelegramPlane className="w-8 h-8 text-white" />
                        <Instagram className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
