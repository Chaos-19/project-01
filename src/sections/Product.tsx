import { ProductCard } from "../components/index";

import { productList } from "../constants";

interface Props {
    // Define your props here
}

const Product = () => {
    return (
        <div className="bg-[rgb(238,238,238)] text-black pt-8 w-full">
            <div className="mx-auto flex flex-col justify-center items-center">
                <h2 className="text-xl uppercase font-medium">
                    popular products
                </h2>
                <p className="text-md">Check out our latest collections</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {productList.map((product, index) => {
                    return (
                        <ProductCard
                            name={product.name}
                            price={product.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Product;
