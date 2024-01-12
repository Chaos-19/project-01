import React from "react";

import { MapPin, phoneold, AlarmClock } from "../assets/index";

const contacts: {}[] = [
    {
        Icon: MapPin,
        title: "Where are we?",
        text: "200 12th Ave, New York. NY 10001, USA"
    },
    {
        Icon: phoneold,
        title: "Call us",
        text: "902066660.954839444"
    },
    {
        Icon: AlarmClock,
        title: "Working hours",
        text: "Monday to saturday From 8am-1pm"
    }
];
interface Props {
    // Define your props here
}
const Icons = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-2.5 mt-14 bg-white py-10">
            {contacts.map((value, index) => {
                if (index !== 1)
                    return (
                        <div
                            className={`order-${index} flex flex-col justify-center items-center`}
                        >
                            <value.Icon className="w-16 h-16 text-yellow-400" />
                            <h3 className="text-sm text-gray-600 font-semibold mb-1">
                                {value.title}
                            </h3>
                            <p className="flex flex-col justify-center gap-0.5 text-center text-xs text-gray-500">
                                <span>{value.text.split(".")[0]}</span>
                                <span>{value.text.split(".")[1]}</span>
                            </p>
                        </div>
                    );
            })}
            <div
                className={`order-1 flex flex-col justify-center items-center`}
            >
                <img
                    src={contacts[1].Icon}
                    alt={contacts[1].title}
                    className="w-16 h-16 text-yellow-400"
                />
                <h3 className="text-sm font-semibold text-gray-600 mb-1">
                    {contacts[1].title}
                </h3>
                <p className="flex flex-col justify-center gap-0.5 text-xs text-gray-500">
                    <span>+251{contacts[1].text.split(".")[0]}</span>
                    <span>+251 {contacts[1].text.split(".")[1]}</span>
                </p>
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <div className="w-full bg-gray-200">
            <div className="py-10 px-6">
                <Icons />
                <div className="bg-gray-700 text-white py-8">
                    <div className="w-full flex flex-col justify-center items-center gap-8">
                        <h2 className="text-xl font-semibold ">
                            Send an email
                        </h2>
                        <p className="text-xs text-center px-3">
                            Thanks for your interest in Mobel Theme. We believe
                            in creativity as one of the major forces of
                            progress. Please use this form if you have any
                            questions about our products and we'll get back with
                            you very soon.
                        </p>
                        <button className="mb-20 py-2 px-2.5 rounded border">
                            contact us via form
                        </button>
                    </div>
                    <div className="w-full mx-auto max-w-screen-md">
                        <form className="w-full flex flex-col justify-center items-center gap-3 px-8 text-gray-500">
                            <input
                                type="text"
                                placeholder="You name"
                                className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="py-3 px-2 text-sm capitalize text-sm rounded placeholder-gray-500 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="py-3 px-2 capitalize  rounded placeholder-gray-500 w-full"
                            />
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="message...."
                                className="py-3 px-2 capitalize  rounded placeholder-gray-500 w-full"
                            ></textarea>
                            <button
                                type="submit"
                                className="my-10 text-white py-2 px-2.5 rounded border max-w-30"
                            >
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
