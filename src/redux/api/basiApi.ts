import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1", credentials: "include" }), // creadentials: "include" => backend theke accessToken, refreshToken ami cookie te set korte ditesi.
    tagTypes: ["user", "rider"],
    endpoints: () => ({})
})
