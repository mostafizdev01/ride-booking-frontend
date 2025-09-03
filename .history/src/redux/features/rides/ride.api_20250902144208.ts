import { baseApi } from "@/redux/api/basiApi";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRides: builder.query({
            query: (params)=> ({
                url: "/rider",
                method: "GET",
                params: params
            }),
        }),
    }),
});

export const {
    useGetAllRidesQuery
} = rideApi;