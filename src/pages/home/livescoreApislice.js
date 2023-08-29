import { apiSlice } from "../../app/api/apislice";

const livescoreApislice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLivescoreData: builder.query({
            query: () => ({
                method: 'GET',
                url: ``,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        })
    })
})