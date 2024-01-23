import React from "react";
import { OrderListItem } from "./index";
import { useGetOrderQuery } from "../../app/api/apiSlice";

interface Props {
    // Define your props here
}

const Orders = (/*props: Props*/) => {
    const {
        data: order,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetOrderQuery();

    let content = "";

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = order.orderList.map((order, index) => {
            console.log(order);
            return (
                <OrderListItem
                    key={order._id}
                    productId={order.productId}
                    userInfo={order.userInfo}
                />
            );
        });
    } else if (isError) {
        content = <p>{"somthing went wrong....."}</p>;
    }
    return (
        <div className="py-16 flex flex-col gap-2 px-2 md:px-5">
            <div className="flex items-center gap-20 md:gap-5 px-2 overflow-x-scroll">
                <div className="w-44 text-center">Produt Image</div>
                <div>Price</div>
                <div>status</div>
                <div>Delete</div>
            </div>
            {content}
        </div>
    );
};

export default Orders;
