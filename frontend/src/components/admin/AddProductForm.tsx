import React, { useState} from "react";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../app/api/apiSlice";
import {  useNavigate } from "react-router-dom";

const AddProductForm = () => {

const navigate = useNavigate();

const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>();
    const [file, setFile] = useState<{}>();
    const [discount, setDiscount] = useState<number>();

    const [addProduct, { isLoading }] = useAddProductMutation();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", file.file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("discount", discount);

        try {
            if (price && name && discount && file?.file) {
                console.log(formData?.values);
                await addProduct(formData).unwrap();
                toast.success("Product added Successfully");
                setName("");
                setPrice(0);
                setDiscount(0);
                setFile({});
                navigate("/list");
            }
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
                                htmlFor="name"
                                className="capitalize text-white"
                            >
                                Product name
                            </label>
                            <input
                                type="text"
                                value={name}
                                name="name"
                                onChange={e => setName(e.target.value)}
                                required
                                className="py-3 px-2  capitalizetext-sm rounded placeholder-gray-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="large_size"
                            >
                                product image
                            </label>
                            <input
                                class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
                                required
                            />
                            <img
                                src={file?.img}
                                alt="uploaded image"
                                className="w-10 h-10 object-cover rounded border"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label
                                htmlFor="name"
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
                                htmlFor="name"
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
                        {isLoading ? "adding..." : "add Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
