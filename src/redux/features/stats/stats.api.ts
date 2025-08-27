import { baseApi } from "@/redux/baseApi";

export const statsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserStats: builder.query({
            query: () => ({
                url: `/stats/user`,
                method: 'GET'
            }),
        }),
        getEarningsStats: builder.query({
            query: () => ({
                url: `/stats/earnings`,
                method: 'GET'
            }),
        }),
        getAdminAnalytics: builder.query({
            query: (range) => ({
                url: `/stats/analytics?range=${range}`,
                method: 'GET'
            }),
        }),
    })
});

export const {
    useGetUserStatsQuery,
    useGetEarningsStatsQuery,
    useGetAdminAnalyticsQuery
} = statsApi;


