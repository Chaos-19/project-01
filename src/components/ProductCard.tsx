import React from "react";

interface Props {
    name: string;
    price: {
        original: number;
        discount?: number;
        discountPersont?: number;
    };
    image: string;
    tage: {
        isNew: boolean;
    };
}

const ProductCard = (props: Props) => {
    const { name, price, image, tage } = props
    
    return <div>ProductCard</div>;
};

export default ProductCard;
