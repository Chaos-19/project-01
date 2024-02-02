import { apiSlice } from "../../app/api/apiSlice";

interface userInfo {
    username?: string;
    email: string;
    password: string;
}
interface userCridentials {
    accessToken: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<userCridentials, userInfo>({
            query: credentials => ({
                url: "/auth/login",
                method: "POST",
                body: { ...credentials }
            })
        }),
    })
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
