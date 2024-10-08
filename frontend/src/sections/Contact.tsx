import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contacts } from "../constants";
import { useSendMessageMutation } from "../app/api/apiSlice";

import toast from "react-hot-toast";


const Icons = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-around gap-2.5 mt-14 bg-white py-10">
            {contacts.map((value: any, index: number | string) => {
                if (index !== 1)
                    return (
                        <div
                            key={value.title}
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
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [sendMessage, { isLoading }] = useSendMessageMutation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (name && subject && message) {
            try {
                await sendMessage({
                    name,
                    email,
                    subject,
                    message
                }).unwrap();

                toast.success("Thank for you idea ");

                setName("");
                setSubject("");
                setMessage("");
                setEmail("");

                navigate("/");
            } catch (err) {
                console.log(err);
                toast.error("Something went wrong. please try again !");
            }
        }
    };
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
                            Thanks for your interest in Elfegne Furniture. We believe
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
                        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-3 px-8 text-gray-500">
                            <input
                                type="text"
                                placeholder="You name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="py-3 px-2 text-sm capitalize text-sm rounded placeholder-gray-500 w-full"
                            />
                            <input
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                placeholder="Subject"
                                className="py-3 px-2 capitalize  rounded placeholder-gray-500 w-full"
                            />
                            <textarea
                                name="message"
                                cols={30}
                                rows={10}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
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
