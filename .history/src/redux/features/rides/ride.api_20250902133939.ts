import { baseApi } from "@/redux/api/basiApi";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRides: builder.query({
            query: (params)=> ({
                url: "/ride",
                method: "GET",
                params: params
            })
        })
    })
})