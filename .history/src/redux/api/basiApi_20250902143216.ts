import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["user", "ride"],
    endpoints: (builder) => ({
        getusers: builder.query({
            query: () => "/users",
            providesTags: ["user"]
        }),
        getRides: builder.query({
            query: () => "/rider/all-ride",
            providesTags: ["ride"]
        }),
    })
})


export const { useGetusersQuery } = baseApi