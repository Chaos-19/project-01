import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import {
    useGetProductInfoQuery,
    useDeleteProductMutation
} from "../../app/api/apiSlice";

interface Props {
    // Define your props here
    id: string;
}

const ProductItem = (props: Props) => {
    const { id: productId } = props;

    const { product } = useGetProductInfoQuery(6, {
        selectFromResult: ({ data: any }) => ({
            product: data?.entities[productId]
        })
    });


    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = async () => {
        try {
            await deleteProduct({ id: product?._id }).unwrap();
            toast.success("product deleted Successfully.");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong. please try again !");
        }
    };

    return (
        <tr>
            <td className="data">
                <img
                    src={product.image.imgUrl}
                    alt={product.name + " image"}
                    className="w-full h-16 bg-cover"
                />
            </td>
            <td className="data">{product.name}</td>
            <td className="data">{product.price.original}</td>
            <td className="data">{product.price.discount}%</td>
            <td className="data">{product.tage ?? "empty"}</td>
            <td className="data space-x-2 text-center">
                <Link to={`/product/edite/${productId}`}>
                    <button className="border py-1 md:py-2 px-3 rounded group hover:bg-yellow-400">
                        <Pencil className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white group-hover:scale-125" />
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(productId)}
                    className="border py-1 md:py-2 px-3 rounded hover group hover:bg-red-500"
                >
                    <Trash2 className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white group-hover:scale-125" />
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
