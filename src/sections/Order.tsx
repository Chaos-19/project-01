import React from "react";

interface Props {
    // Define your props here
}

const Order = () => {
    return (
        <div className="w-full px-3 md:px-0">
            <div className="w-full mx-auto max-w-screen-md bg-gray-700 my-20 py-8 rounded shadow">
                <form className="w-full flex flex-col justify-center  gap-3 px-3  text-gray-500">
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
                            required
                            placeholder="Your name"
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
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
                            required
                            className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="my-10 text-white py-2 px-2.5 rounded border max-w-30"
                    >
                        send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Order;
