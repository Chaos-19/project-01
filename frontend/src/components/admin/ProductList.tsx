import React from "react";

interface Props {
    // Define your props here
}

const ProductList = (/*props: Props*/) => {
    return (
        <div className="py-8">
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
                            <th className="border border-slate-400 p-2">
                                Discount percent
                            </th>
                            <th className="border border-slate-400 p-2">
                                tages
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-x-scroll">
                        {Array(10)
                            .fill(0)
                            .map((value, index) => {
                                return (
                                    <tr>
                                        {Array(5)
                                            .fill(0)
                                            .map((value, index) => {
                                                return (
                                                    <td className="border border-slate-400 p-2 whitespace-nowrap">
                                                        simple row data take sum
                                                        more sapce
                                                    </td>
                                                );
                                            })}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
