import { useState } from "react";
import { useGetProductInfoQuery } from "../app/api/apiSlice";

import ProductCardModal from "./ProductCardModal";

import { ShoppingCart, Eye, Heart } from "../assets/index";

interface Props {
    id: string;
    /*name: string;
    price: {
        original: number;
        discount?: number;
        discountPercent?: number;
    };
    image: string;
    tage: {
        isNew: boolean;
    };*/
}

const ProductCard = (props: Props) => {
    const { id: productId } = props;

    const { product } = useGetProductInfoQuery(6, {
        selectFromResult: ({ data }) => ({
            product: data?.entities[productId]
        })
    });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModal = (): void => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="group relative flex flex-col bg-white shadow-xl  rounded">
            <div className="inset-x-0 h-fit absolute pt-2.5 md:pt-0 md:bottom-2.5 left-2.5">
                {product.price?.discount && (
                    <span className="text-xs px-1 py-0.5 bg-sky-500 text-white rounded">
                        {product.price?.discount}%
                    </span>
                )}
                {product.tage?.isNew && (
                    <span className="text-xs text-white capitalize p-1 bg-red-700 rounded">
                        New
                    </span>
                )}
            </div>
            <img
                src={product.image.imgUrl}
                alt={`${product.name} image`}
                className="order-2 bg-cover"
            />
            <div className="p-2.5 pt-0 md:pt-1.5 order-3 md:inset-x-0 h-fit md:absolute md:top-2.5">
                <h3 className="text-md font-mono uppercase text-gray-600 font-black">
                    {product.name}
                </h3>
                <div className="flex items-center gap-3">
                    {product.price?.discount && (
                        <span className="text-xs text-gray-500 font-light line-through">
                            ${product.price?.discount}
                        </span>
                    )}
                    <span className="text-xs text-gray-500 font-light">
                        ${product.price?.original}
                    </span>
                </div>
                <ProductCardModal
                    handleModal={handleModal}
                    isModalOpen={isModalOpen}
                />
            </div>

            {/*Hover effect*/}
            <div className="hidden group-hover:block absolute right-0 w-20 inset-y-0">
                <div className="flex flex-col items-center gap-3 md:gap-5 pt-6 md:pt-20 h-full">
                    <Heart color="red" />
                    <Eye onClick={handleModal} />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24">
                    <div className="w-full h-full relative">
                        <div className="triangle-bottom h-full absolute inset-x-0 bottom-0 bg-yellow-500">
                            <ShoppingCart className="absolute bottom-4 right-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
