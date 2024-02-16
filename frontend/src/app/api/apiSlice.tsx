import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
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
    selectId: product => product._id
});

const initialState = productAddpter.getInitialState();

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3500",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            console.log(headers, token)
            return headers;
        }
    })
    ,
    tagTypes: ["products", "orders", "message"],
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
            invalidatesTags: ["products"]
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
        getOrder: builder.query<Order[], {}>({
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
            }),
            providesTags: ["orders"]
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
            , invalidatesTags: ["message"]
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
            }),
            providesTags: ["message"]
        }),
        deleteMessage: builder.mutation<
            {
            },
            { _id: string }
        >({
            query: ({ _id }) => ({
                url: `/contact/delete/${_id}`,
                method: "DELETE"
            }), invalidatesTags: ["message"]
        }),
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
    useGetMessageQuery,
    useDeleteMessageMutation
} = apiSlice;



const selectProductData = createSelector(
    (state: RootState) => state.products,
    products => products
);

export const {
    selectAll: selectAllProducts
} = productSelectors