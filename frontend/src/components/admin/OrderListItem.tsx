import React from "react";
import { useGetProductInfoQuery } from "../../app/api/apiSlice";

interface Props {
    productId: string;
}

const OrderListItem = (props: Props) => {
    const { productId } = props;

    const { product } = useGetProductInfoQuery(6, {
        selectFromResult: ({ data }) => ({
            product: data?.entities[productId]
        })
    });

    return (
        <div className="w-full border border-2 shadow-2xl rounded bg-white px-2 md:px-4">
            <div className="flex items-center gap-4 h-36 overflow-y-hidden">
                <img
                    src={product?.image.imgUrl}
                    alt="product image"
                    className="w-44  object-cover"
                />
                <div className="">23,000 EBR</div>
                <div>
                    <input type="checkbox" />
                </div>
            </div>
            <div>
                <div className="group">
                    <h2>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-1 focus:ring-gray-200 gap-3"
                        >
                            <span>User Detail</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div className="hidden group-hover:block">
                        <div className="p-5 border border-b-0 border-gray-200">
                            <p className="mb-2 text-gray-500">
                                Flowbite is an open-source library of
                                interactive components built on top of Tailwind
                                CSS including buttons, dropdowns, modals,
                                navbars, and more.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out this guide to learn how to
                                <a className="text-blue-600 hover:underline">
                                    get started
                                </a>
                                and start developing websites even faster with
                                components on top of Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderListItem;
