import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

interface Product {
    Id: string;
    name: string;
    price: {
        original: number;
        discount?: number;
        discountPercent?: number;
    };
    image: {
        imgUrl: string;
    };
    tage: {
        isNew: boolean;
    };
}
interface Order {
    productId: string;
    status?: string;
    userInfo: {
        userName: string;
        email?: string;
        phone: string;
        kifleKetema: string;
        location: string;
        city: string;
    };
}

const productAddpter = createEntityAdapter<Product | any>({

});

const initialState = productAddpter.getInitialState();

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    tagTypes: ["products", "orders"],
    endpoints: builder => ({
        getProductInfo: builder.query<Product[], number>({
            query: no => ({
                url: "/product/get",
                method: "GET"
            }),
            transformResponse: (
                response: { products: Product[] },
                meta,
                arg
            ) => {
                return productAddpter.setAll(initialState, response.products);
            },
            providesTags: ["products"]
        }),

        addProduct: builder.mutation<{}, any>({
            query: productInfo => ({
                url: "/product/add",
                method: "POST",
                body: productInfo
            }),
            providesTags: ["products"]
        }),
        updateProduct: builder.mutation<{}, Object>({
            query: product => ({
                url: `/product/update/${product.get("id")}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["products"]
        }),
        deleteProduct: builder.mutation<{}, string>({
            query: ({ id }) => ({
                url: `/product/delete/${id}`,
                method: "DELETE",
                body: { id }
            }),
            invalidatesTags: ["products"]
        }),
        getOrder: builder.query<Order[], null>({
            query: () => ({
                url: "/order/get",
                method: "GET"
            }),
            providesTags: ["orders"]
        }),
        addOrder: builder.mutation<{}, Order>({
            query: orderInfo => ({
                url: "/order/placeOrder",
                method: "POST",
                body: { ...orderInfo }
            }), providesTags: ["orders"]
        }),
        updateOrder: builder.mutation<{}, { id: string; status: string }>({
            query: ({ id, status }) => ({
                url: `/order/update/${id}`,
                method: "PUT",
                body: { id, status }
            }),
            invalidatesTags: ["orders"]
        }),
        deleteOrder: builder.mutation<{}, { id: string }>({
            query: ({ id }) => ({
                url: `/order/delete/${id}`,
                method: "DELETE",
                body: { id }
            }),
            invalidatesTags: ["orders"]
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
                url: "/contact/add",
                method: "POST",
                body: { ...userInfo }
            })
        }),
        getMessage: builder.query<
            {
                name: string;
                email?: string;
                subject: string;
                message: string;
            }[],
            {}
        >({
            query: () => ({
                url: "/contact",
                method: "GET"
            })
        })
    })
});

export const productSelectors = productAddpter.getSelectors<RootState>(
    state => state.products
);

export const {
    useGetProductInfoQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useGetOrderQuery,
    useAddOrderMutation,
    useDeleteOrderMutation,
    useUpdateOrderMutation,
    useSendMessageMutation,
    useGetMessageQuery
} = apiSlice;
