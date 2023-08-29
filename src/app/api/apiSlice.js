import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery(
    {
        baseUrl: 'http://localhost:3500/api/v1',
        //     credentials: 'include',
        //     prepareHeaders: (headers, { getState }) => {
        //         const token = getState().auth.token
        //         if (token) {
        //             headers.set("authorization", `Bearer ${token}`)
        //         }
        //         return headers
        //     }
    }
)


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: builder => ({})
})