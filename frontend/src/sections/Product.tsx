import { ProductCard } from "../components/index";

import { useGetProductInfoQuery } from "../app/api/apiSlice";
//import { productList } from "../constants";

interface Props {
    // Define your props here
}

const Product = () => {
    const {
        data: productList,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductInfoQuery(6);
    // console.log(data.products);
    //const productList = product.products;

    let content = "";
    if (isLoading) {
        content = (
            <p className="w-full text-2xl text-red-600 text-center animate-pulse">
                Loading1....
            </p>
        );
    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    } else if (isSuccess) {
        content = productList.products.map((product, index) => {
            return (
                <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    tage={product.tage}
                />
            );
        });
    }
    return (
        <div className="relative bg-[rgb(238,238,238)] text-black pt-8 w-full border-b">
            <div className="mx-auto md:w-[760px] lg:w-[1020px] my-5 md:px-8 px-0.5 pt-5 pb-7">
                <div className="mx-auto flex flex-col justify-center items-center">
                    <h2 className="text-xl uppercase font-medium">
                        popular products
                    </h2>
                    <p className="text-md">Check out our latest collections</p>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-10 gap-1 md:gap-7">
                    {
                        content /*isSuccess &&
                        productList.map((product, index) => {
                            return (
                                <ProductCard
                                    key={product.name}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    tage={product.tage}
                                />
                            );
                        })*/
                    }
                </div>
                <div className="mt-14 flex items-center justify-center">
                    <button className="capitalize bg-yellow-500 text-white px-2.5 py-1.5 rounded">
                        View store
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
