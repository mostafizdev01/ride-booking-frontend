import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["user"],
    endpoints: (builder) => ({
        getusers: builder.query({
            query: () => "/users",
            providesTags: ["user"]
        }),
    })
})


export const { useGetusersQuery } = baseApi