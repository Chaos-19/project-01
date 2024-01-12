import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
});
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
    endpoints: builder => ({})
});
