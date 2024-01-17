import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
    Id: string;
    name: string;
    price: {
        original: number;
        discount?: number;
        discountPercent?: number;
    };
    image: string;
    tage: {
        isNew: boolean;
    };
}
interface Order {
    productId: string;
    userInfo: {
        userName: string;
        email?: string;
        phone: string;
        kifleKetema: string;
        location: string;
        city: string;
    };
}

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    endpoints: builder => ({
        getProductInfo: builder.query<Product[], number>({
            query: no => ({
                url: "/product/get",
                method: "GET"
            })
        }),
        addProduct: builder.mutation<{}, any>({
            query: productInfo => ({
                url: "/product/addProduct",
                method: "POST",
                body: productInfo
            })
        }),
        addOrder: builder.mutation<{}, Order>({
            query: orderInfo => ({
                url: "/placeOrder",
                method: "POST",
                body: { ...orderInfo }
            })
        }),
        sendMessage: builder.mutation<
            {},
            {
                name: string;
                email?: string;
                subject: string;
                message: string;
            }
        >({
            query: userInfo => ({
                url: "/product",
                method: "POST",
                body: { ...userInfo }
            })
        })
    })
});

export const {
    useGetProductInfoQuery,
    useAddOrderMutation,
    useAddProductMutation,
    useSendMessageMutation
} = apiSlice;
