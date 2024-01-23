import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAddOrderMutation } from "../app/api/apiSlice";

const Order = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [kifleKetema, setKifleKetema] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [city, setCity] = useState<string>("");

    const [addOrder, { isLoading }] = useAddOrderMutation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        if (name & phone & kifleKetema & location & city) {
            try {
                await addOrder({
                    productId,
                    userInfo: {
                        userName: name,
                        email,
                        phone,
                        kifleKetema,
                        location,
                        city
                    }
                }).unwrap();

                setName("");
                setPhone("");
                setEmail("");
                setKifleKetema("");
                setLocation("");
                setCity("");

                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="w-full px-3 md:px-0">
            <div className="w-full mx-auto max-w-screen-md bg-gray-700 my-20 py-8 rounded shadow">
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-center  gap-3 px-3  text-gray-500"
                >
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="name"
                            className="text-start text-white tex-lg"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            placeholder="Your name"
                            className="py-3 px-2  capitalize text-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="email"
                            className="text-start text-white  text-lg"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="email adderss"
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="phone"
                            className="text-start text-white  text-lg"
                        >
                            Phone
                        </label>
                        <input
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                            placeholder="phone number"
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="k/ketema"
                            className="text-start text-white  "
                        >
                            K/ketema
                        </label>
                        <input
                            type="text"
                            name="k/ketema"
                            value={kifleKetema}
                            onChange={e => setKifleKetema(e.target.value)}
                            required
                            placeholder="kifle ketema"
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="location"
                            className="text-start text-white  "
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            required
                            placeholder="Location Name"
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            htmFor="city"
                            className="text-start text-white  "
                        >
                            city
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="my-10 text-white py-2 px-2.5 rounded border max-w-30"
                    >
                        {isLoading ? "placing order.." : "place order"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Order;
