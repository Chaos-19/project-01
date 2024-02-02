import React from "react";
import ProductItem from "./ProductItem";

import {
    useGetProductInfoQuery,

} from "../../app/api/apiSlice";

const ProductList = (/*props: Props*/) => {
    const {
        data: productList,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductInfoQuery(6);

    let content = "";

    if (isLoading) {
    } else if (isSuccess) {
        const list = productList.ids;
        content = productList.ids.map((product, index) => {
            console.log(product);
            return <ProductItem id={product} />;
        });
    } else if (isError) {
        content = <tbody><tr><td>{error}</td></tr></tbody>
    }
    return (
        <div className="py-8 overflow-x-scroll">
            <div>
                <table className="border-collapse border border-slate-400 w-full overflow-x-scroll">
                    <thead>
                        <tr>
                            <th className="border border-slate-400 p-2">
                                Image
                            </th>
                            <th className="border border-slate-400 p-2">
                                Name
                            </th>
                            <th className="border border-slate-400 p-2">
                                Price
                            </th>
                            <th className="border border-slate-400 p-2 whitespace-nowrap">
                                Discount percent
                            </th>
                            <th className="border border-slate-400 p-2">
                                tages
                            </th>
                            <th className="border border-slate-400 p-2">
                                edit
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-x-scroll">{content}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
