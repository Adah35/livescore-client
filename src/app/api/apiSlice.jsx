import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
const baseQuery = fetchBaseQuery(
    {
        baseUrl: `https://apiv3.apifootball.com`,

    }
)


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: builder => ({})
})