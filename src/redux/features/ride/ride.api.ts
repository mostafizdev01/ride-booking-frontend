/* eslint-disable @typescript-eslint/no-explicit-any */
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
        acceptRide: builder.mutation({
            query: ({ id, status }) => ({
                url: `/ride/${id}/accept`,
                method: "PATCH",
                status,
            }),
            invalidatesTags: ["RIDE"],
        }),
        nearbyRides: builder.mutation({
            query: (data) => ({
                url: `/ride/nearby`,
                method: "POST",
                data,
            }),
            invalidatesTags: ["RIDE"],
        }),
        getActiveRide: builder.query<any, void>({
            query: () => ({
                url: `/ride/driver/active-ride`,
                method: "GET",
            }),
        }),
        getRideHistory: builder.query({
            query: () => ({
                url: `/ride/me/history`,
                method: "GET",
            }),
        }),
        cancelRide: builder.mutation<any, { rideId: string; reason: string }>({
            query: ({ rideId, reason }) => ({
                url: `/ride/${rideId}/cancel`,
                method: "PATCH",
                data: { reason },
            }),
            invalidatesTags: ["RIDE"],
        }),
        rateRide: builder.mutation<any, { rideId: string; score: number; feedback: string }>({
            query: ({ rideId, score, feedback }) => ({
                url: `/ride/${rideId}/rate`,
                method: "PATCH",
                data: { score, feedback },
            }),
            invalidatesTags: ["RIDE"],
        }),
    })
});

export const {
    useRequestRideMutation,
    useUpdateRideStatusMutation,
    useNearbyRidesMutation,
    useAcceptRideMutation,
    useGetActiveRideQuery,
    useGetRideHistoryQuery,
    useCancelRideMutation,
    useRateRideMutation
} = rideApi;
