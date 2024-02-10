import React, { useEffect } from "react";
import { Close, ShoppingCart, Eye } from "../assets/index";


interface Props {
    // Define your props here
    handleModal: () => void;
    isModalOpen: boolean;
    image: string;
    name: string;
}

const ProductCardModal = (props: Props) => {
    const { handleModal, isModalOpen, image ,name} = props;


    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    }, [isModalOpen]);


    return (
        <div
            className={`${isModalOpen ? "" : "hidden"
                } overflow-y-auto overflow-x-hidden fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/60`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[400px] md:w-[600px] h-[calc(100vh_-_100px)]">

                    <div className="w-full bg-gray-100 flex items-center justify-between">
                        <div className="pl-2.5 py-5">
                            <h3 className="text-2xl font-medium uppercase text-gray-900">
                               { name}
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
                    <div className="w-full">
                        <img
                            src={image}
                            alt="slide image"
                            className="w-full max-h-[calc(100dvh_-_200px)] object-cover max-object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )


};

export default ProductCardModal;
