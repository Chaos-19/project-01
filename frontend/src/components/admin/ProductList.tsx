import React from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

import {
    useGetProductInfoQuery,
    useDeleteProductMutation
} from "../../app/api/apiSlice";

interface Props {
    // Define your props here
    id: any | {} | string;
    name: string;
    imgUrl: string;
    price: number;
    discount?: number;
    tage?: any;
}

const ProductItem = (props: Props) => {
    const { id, name, imgUrl, price, discount = 0, tage } = props;
    const [deleteProduct, { isLoading }] = useDeleteProductMutation();

    const handleDelete = id => {
        try {
            deleteProduct(id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <tr>
            <td className="data">
                <img
                    src={imgUrl}
                    alt={name + " image"}
                    className="w-full h-16 bg-cover"
                />
            </td>
            <td className="data">{name}</td>
            <td className="data">{price}</td>
            <td className="data">{discount}%</td>
            <td className="data">{tage ?? "empty"}</td>
            <td className="data space-x-2 text-center">
                <Link to={`/product/edite/${id}`}>
                    <button className="border py-1 md:py-2 px-3 rounded group hover:bg-yellow-400">
                        <Pencil className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white group-hover:scale-125" />
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(id)}
                    className="border py-1 md:py-2 px-3 rounded hover group hover:bg-red-500"
                >
                    <Trash2 className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white group-hover:scale-125" />
                </button>
            </td>
        </tr>
    );
};

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
        const list = productList.products;
        content = list.map((product, index) => {
            console.log(product);
            return (
                <ProductItem
                    imgUrl={product.image.imgUrl}
                    name={product.name}
                    price={product.price.original}
                    discount={product.price?.discount}
                    tage={product?.tage}
                    id={product._id}
                />
            );
        });
    } else if (isError) {
        content = <p>{error}</p>;
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
