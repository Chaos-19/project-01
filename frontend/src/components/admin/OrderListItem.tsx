import React from "react";

interface Props {
    // Define your props here
}

const OrderListItem = (/*props: Props*/) => {
    return (
        <div className="py-8 overflow-x-scroll">
            <div>
                <table className="border-collapse border border-slate-400 w-full overflow-x-scroll">
                    <thead>
                        <tr>
                            <th className="border border-slate-400 p-2">Id</th>
                            <th className="border border-slate-400 p-2">
                                status
                            </th>
                            <th className="border border-slate-400 p-2">
                                Product
                            </th>
                            <th className="border border-slate-400 p-2 whitespace-nowrap">
                                Discount percent
                            </th>
                            <th className="border border-slate-400 p-2">
                                price
                            </th>
                            <th className="border border-slate-400 p-2">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-x-scroll">{content}</tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderListItem;
