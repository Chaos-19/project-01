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
            <div className="flex items-center gap-4 h-44 overflow-y-hidden">
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
        </div>
    );
};

export default OrderListItem;
