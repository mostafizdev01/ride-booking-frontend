import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestRide: builder.mutation({
            query: (data) => ({
                url: "/ride/request",
                method: "POST",
                data,
            }),
            invalidatesTags: ["RIDE"],
        }),
        UpdateRideStatus: builder.mutation({
            query: ({ id, data }) => ({
                url: `/ride/${id}/status`,
                method: "PATCH",
                data,
            }),
            invalidatesTags: ["RIDE"],
        }),
    })
});

export const {
    useRequestRideMutation,
    useUpdateRideStatusMutation
} = rideApi;
