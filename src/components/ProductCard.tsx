import React from "react";

interface Props {
    name: string;
    price: {
        original: number;
        discount?: number;
        discountPercent?: number;
    };
    image: string;
    tage: {
        isNew: boolean;
    };
}

const ProductCard = (props: Props) => {
    const { name, price, image, tage } = props;

    console.log(tage);

    return (
        <div className="relative flex flex-col bg-white shadow-xl md:pb-2 rounded">
            <div className="order-3  md:relative absolute top-2.5 left-2.5 md:top-0 md:left-0">
                <div className="md:absolute md:-top-8 md:p-2.5 md:w-full">
                    {price?.discountPercent && (
                        <span className="text-xs px-1 py-0.5 bg-sky-500 rounded">
                            {price?.discountPercent}%
                        </span>
                    )}
                    {tage?.isNew && (
                        <span className="text-xs text-white capitalize p-1 bg-red-700 rounded">
                            New
                        </span>
                    )}
                </div>
            </div>
            <img
                src={image}
                alt={`${name} image`}
                className="order-2 bg-cover"
            />
            <div className="p-2.5 md:pb-0 order-3 md:order-1">
                <h3 className="text-md font-mono uppercase text-gray-600 font-black">
                    {name}
                </h3>
                <div className="flex items-center gap-3">
                    {price?.discount && (
                        <span className="text-xs text-gray-500 font-light line-through">
                            ${price?.discount}
                        </span>
                    )}
                    <span className="text-xs text-gray-500 font-light">
                        ${price?.original}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
