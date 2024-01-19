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
    tagTypes: ["products"],
    endpoints: builder => ({
        getProductInfo: builder.query<Product[], number>({
            query: no => ({
                url: "/product/get",
                method: "GET"
            }),
            providesTags: ["products"]
        }),
        getProductById: builder.query<Product[], string>({
            query: id => ({
                url: `/product/get/${id}`,
                method: "GET"
            }),
            providesTags: ["products"]
        }),
        addProduct: builder.mutation<{}, any>({
            query: productInfo => ({
                url: "/product/addProduct",
                method: "POST",
                body: productInfo
            }),
            providesTags: ["products"]
        }),
        deleteProduct: builder.mutation<{}, string>({
            query: id => ({
                url: `/product/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["products"]
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
    useGetProductByIdQuery,
    useAddOrderMutation,
    useDeleteProductMutation,
    useAddProductMutation,

    useSendMessageMutation
} = apiSlice;
