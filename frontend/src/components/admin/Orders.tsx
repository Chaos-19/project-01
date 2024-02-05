import { OrderListItem, Message } from "./index";
import { useGetOrderQuery, useGetMessageQuery } from "../../app/api/apiSlice";

const Orders = () => {
    const {
        data: order,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetOrderQuery();

    const {
        data: message,
        isLoading: isMessage,
        isSuccess: isMessageSuccess,
        isError: isMessageError,
        error: messageError
    } = useGetMessageQuery();

    let content: any = "";

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = order.orderList.map((order: any) => {
            console.log(order);
            return (
                <OrderListItem
                    key={order._id}
                    id={order._id}
                    status={order.status}
                    productId={order.productId}
                    userInfo={order.userInfo}

                />
            );
        });
    } else if (isError) {
        content = <p>{"somthing went wrong....."}</p>;
    }

    let messagess: any = ""
    if (isMessage) {
        messagess = <p>Message Loading ....</p>
    } else if (isMessageSuccess) {
        messagess = message.messages.map((data: any) => {
            return <Message data={data} />

        })
    } else if (isError) {
        console.log(messageError)
    }

    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="py-16 flex flex-col gap-2 px-2 md:px-5 col-span-12 md:col-span-7">
                <div className="flex items-center gap-20 md:gap-20 px-2 overflow-x-scroll">
                    <div className="w-44 text-center">Produt Image</div>
                    <div>Price</div>
                    <div>status</div>
                    <div>set status</div>
                    <div>Delete</div>
                </div>
                {content}
            </div>
            <div className="col-span-12 md:col-span-5 py-16">
                {messagess}
            </div>
        </div>
    );
};

export default Orders;
