import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    useUpdateProductMutation,
    useGetProductInfoQuery
} from "../../app/api/apiSlice";

import toast from "react-hot-toast";

const EditeProduct = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const {
        product,
        isLoading: isFullyLoad,
        isSuccess
    } = useGetProductInfoQuery(0, {
        selectFromResult: ({ data, isLoading, isSuccess }) => ({
            product: data?.entities[id],
            isLoading,
            isSuccess
        })
    });
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [file, setFile] = useState<{}>({});
    const [discount, setDiscount] = useState<number>(0);

    useEffect(() => {
        if (isSuccess) {
            setName(product?.name);
            setPrice(product?.price.original);
            setDiscount(product?.price.discount);
            setFile({ img: product?.image.imgUrl });
        }
    }, [
        isSuccess,
        product?.name,
        product?.price.original,
        product?.price.discount,
        product?.image.imgUrl
    ]);

    const [updateProduct, { isLoading }] = useUpdateProductMutation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("id", id);
        if (file?.file) formData.append("file", file?.file);
        if (product.name != name) formData.append("name", name);
        if (product.price.original != price) formData.append("price", price);
        if (product.price.discount != discount)
            formData.append("discount", discount);

        try {
            await updateProduct(formData).unwrap();
            toast.success("product updated Successfully .");
            setName("");
            setPrice(0);
            setDiscount(0);
            setFile({});
            navigate("/list");
           
        } catch (e) {
            console.log(e);
            toast.error("Something went wrong. please try again !");

        }
    };

    return (
        <div className="w-full ">
            <div className="w-full mx-auto max-w-screen-md bg-gray-700 my-20 py-8 rounded shadow">
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-center  gap-3 px-3  text-black"
                >
                    <div className="flex flex-col gap-1.5  ">
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                for="name"
                                className="capitalize text-white"
                            >
                                Product name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="large_size"
                            >
                                product image
                            </label>
                            <input
                                class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="large_size"
                                type="file"
                                name="file"
                                onChange={e =>
                                    setFile({
                                        file: e.target.files[0],
                                        img: URL.createObjectURL(
                                            e.target.files[0]
                                        )
                                    })
                                }
                            />
                            <img
                                src={file?.img}
                                alt="uploaded image"
                                className="w-10 h-10 object-cover rounded border"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                for="name"
                                className="capitalize text-white"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                required
                                className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                for="name"
                                className="capitalize text-white"
                            >
                                discount %
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    name="discount"
                                    value={discount}
                                    onChange={e => setDiscount(e.target.value)}
                                    className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full flex-[2]"
                                />
                                <input
                                    type="number"
                                    value={discount}
                                    onChange={e => setDiscount(e.target.value)}
                                    className="flex-1 py-1.5 px-1 capitalizetext-sm rounded placeholder-gray-500 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="my-10 text-white py-2 px-2.5 rounded border max-w-30 capitalize"
                    >
                        {isLoading ? "pudating..." : "Update Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditeProduct;
