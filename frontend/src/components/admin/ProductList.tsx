import React from "react";

interface Props {
    // Define your props here
}

const ProductItem = () => {
    return (
        <tbody className="overflow-x-scroll">
            {Array(10).map((value, index) => {
                return (
                    <tr>
                        {Array(5).map((value, index) => {
                            return (
                                <td className="border border-slate-400 p-2 whitespace-nowrap">
                                    simple row data take sum
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

const ProductList = (/*props: Props*/) => {
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
                </table>
            </div>
        </div>
    );
};

export default ProductList;
