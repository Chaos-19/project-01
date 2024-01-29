import React, { useState } from "react";
import { useGetProductInfoQuery } from "../../app/api/apiSlice";

import { ChevronUp, ChevronDown } from "../../assets/index";

interface Props {
    productId: string;
    userInfo: {};
}

const OrderListItem = (props: Props) => {
    const { productId, userInfo } = props;

    const { product } = useGetProductInfoQuery(6, {
        selectFromResult: ({ data }) => ({
            product: data?.entities[productId]
        })
    });

    const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

    return (
        <div className="flex w-full">
            <div className="w-full border border-2 shadow-2xl rounded bg-white px-2 md:px-4">
                <div className="flex items-center gap-4 overflow-y-hidden">
                    <img
                        src={product?.image.imgUrl}
                        alt="product image"
                        className="w-44  h-36 object-cover"
                    />
                    <div className="">23,000 EBR</div>
                    <div>
                        <input type="checkbox" />
                    </div>
                </div>
                <div>
                    <div
                        onMouseEnter={() => setIsDetailOpen(true)}
                        onMouseLeave={() => setIsDetailOpen(false)}
                        className="group"
                    >
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-1 focus:ring-gray-200 gap-3"
                            >
                                <span>User Detail</span>
                                <button
                                    onClick={() =>
                                        setIsDetailOpen(!isDetailOpen)
                                    }
                                >
                                    {isDetailOpen ? (
                                        <ChevronDown />
                                    ) : (
                                        <ChevronUp />
                                    )}
                                </button>
                            </button>
                        </h2>
                    </div>
                    <div className={`${isDetailOpen ? "block" : "hidden"}`}>
                        <div className="p-5 border border-b-0 border-gray-200">
                            {Object.entries(userInfo).map(([key, value]) => {
                                return (
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className="text-lg capitalize font-semibold">
                                            {key + "\t:"}
                                        </span>
                                        <span className="text-md capitalize font-medium">
                                            {value}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderListItem;
