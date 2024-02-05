import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { SlideItem } from "./index";
import { productList } from "../constants";

import { Close, ShoppingCart, Eye } from "../assets/index";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
    // Define your props here
    handleModal: () => void;
    isModalOpen: boolean;
}

const ProductCardModal = (props: Props) => {
    const { handleModal, isModalOpen } = props;

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    }, [isModalOpen]);

    const data: {}[] = [
        {
            maifacturer: "Brand name",
            material: "wood ,lether acrylic",
            avilibllity: "instock",
            avilibleColor: [
                "bg-red-500",
                "bg-blue-500",
                "bg-green-500",
                "bg-gray-500",
                "bg-yellow-500"
            ],
            size: ["s", "ml", "xl", "xxl"],
            price: {
                original: 2999,
                discount: 1999
            }
        }
    ];

    const ProductInfo = (props: {
        title: string;
        style?: string;
        children?: React.ReactNode;
    }) => {
        const { title, children } = props;
        return (
            <div className="pt-1">
                <h5 className="text-lg text-gray-600 font-semibold capitalize">
                    {title}
                </h5>
                <div className="mt-2 flex items-center gap-2">{children}</div>
            </div>
        );
    };

    const ModalBody = () => {
        return (
            <div className="flex flex-col gap-2 w-full">
                {Object.entries(data[0])
                    .slice(0, 3)
                    .map((value: any) => {
                        return (
                            <div key={value[0]} className="grid grid-cols-2">
                                <h5 className="text-lg text-gray-600 font-semibold capitalize">
                                    {value[0]}
                                </h5>
                                <p className="text-md text-gray-400">
                                    {value[1]}
                                </p>
                            </div>
                        );
                    })}
            </div>
        );
    };

    return (
        <div
            className={`${isModalOpen ? "" : "hidden"
                } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/60`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[400px] md:w-[600px]">
                    {/*modal header*/}
                    <div className="w-full bg-gray-100 flex items-center justify-between">
                        <div className="pl-2.5 py-5">
                            <h3 className="text-2xl font-medium uppercase text-gray-900">
                                laura
                            </h3>
                            <p className="text-xs text-gray-800">
                                product catagory
                            </p>
                        </div>
                        <button
                            className="px-2.5 border-y"
                            onClick={handleModal}
                        >
                            <Close className="text-gray-600" />
                        </button>
                    </div>
                    {/*modal body*/}
                    <div className="w-full">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#424242",
                                "--swiper-pagination-color": "#f43131",
                                "--swiper-navigation-size": "21px"
                            }}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className={` h-fu w-full`}
                        >
                            {productList.map((product: any, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={product.image}
                                            alt="slide image"
                                            className="w-full object-cover"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    {/*modal bottom*/}
                    <div className="w-full bg-white p-3 pl-5">
                        <ModalBody />
                        <ProductInfo title={"avilible Color"}>
                            {data[0].avilibleColor.map((item: any) => {
                                return <div key={item} className={`h-6 w-6 ${item}`} />;
                            })}
                        </ProductInfo>
                        <ProductInfo title={"choose size"}>
                            {data[0].size.map((item: any) => {
                                return (
                                    <div key={item} className="h-7 w-7 bg-yellow-200/70 hover:border hover:border-2 hover:border-yellow-700 flex justify-center items-center uppercase">
                                        {item}
                                    </div>
                                );
                            })}
                        </ProductInfo>
                    </div>
                    {/*Modal footer*/}
                    <div className="w-full flex items-center justify-between bg-gray-100">
                        <div className="py-5 px-4">
                            <h3 className="text-2xl font-medium uppercase text-gray-900">
                                ${data[0].price?.discount}
                            </h3>
                            <p className="text-md text-gray-800 line-through">
                                ${data[0].price?.original}
                            </p>
                        </div>
                        <div className="flex items-center gap-5 px-3">
                            <Eye className="text-gray-600" />
                            <ShoppingCart className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardModal;
