import { baseApi } from "@/redux/baseApi";

export const sosApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSOSRequest: builder.mutation({
            query: (data) => ({
                url: `/sos`,
                method: 'POST',
                body: data
            }),
        }),
        getActiveSOSRequests: builder.query({
            query: () => ({
                url: `/sos/active`,
                method: 'GET'
            }),
        }),
        resolveSOSRequest: builder.mutation({
            query: (id) => ({
                url: `/sos/resolve/${id}`,
                method: 'PATCH'
            }),
        }),
    })
});

export const {
    useCreateSOSRequestMutation,
    useGetActiveSOSRequestsQuery,
    useResolveSOSRequestMutation
} = sosApi;



