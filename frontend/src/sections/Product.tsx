import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../components/index";
import { useGetProductInfoQuery } from "../app/api/apiSlice";




const Product = () => {
    const location = useLocation()

    const path: string = location.pathname.replace("/", "");

    const {
        data: productList,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductInfoQuery(6);


    let content: any = "";

    if (isLoading) {
        content = (
            <table>
                <tbody>
                    <tr>
                        <td className="w-full text-2xl text-red-600 text-center animate-pulse">
                            Loading1....
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    } else if (isError) {
        content = (
            <table>
                <tbody>
                    <tr>
                        <td>{JSON.stringify(error)}</td>;
                    </tr>
                </tbody>
            </table>
        );
    } else if (isSuccess) {
        if (path == "products") {
            content = productList.ids.map((product: any) => {
                return <ProductCard key={product} id={product} />;
            })
        } else {
            content = productList.ids.map((product: any) => {
                return <ProductCard key={product} id={product} />;
            }).splice(0, 6)
        }
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
                    {content}
                </div>
                <div className="mt-14 flex items-center justify-center">
                    <Link to="/products">
                        <button className="capitalize bg-yellow-500 text-white px-2.5 py-1.5 rounded">
                            View store
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
