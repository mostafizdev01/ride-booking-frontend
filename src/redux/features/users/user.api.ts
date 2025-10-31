import { baseApi } from "@/redux/api/basiApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: "/user/all-ride",
                method: "GET"
            }),
            providesTags: ["user"]
        }),

        // login user
        loginUser: builder.mutation({
            query: (userData) => ({
                url: `/auth/login`,
                method: "POST",
                body: userData
            })
        }),

        // get myProfile
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            })
        })

    }),
});

export const { 
    useGetAllUsersQuery,
    useLoginUserMutation,
    useGetMeQuery
} = userApi;