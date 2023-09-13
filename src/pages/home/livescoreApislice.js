import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apislice";




const key = process.env.REACT_APP_APIFOOTBALL_API_KEY
const secret = process.env.REACT_APP_LIVESCORE_SECRET_KEY

const livescoreAdaptor = createEntityAdapter({

})

const initialState = livescoreAdaptor.getInitialState()

const livescoreApislice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getLivescore: builder.query({
            query: () => ({
                method: 'GET',
                url: `/?action=get_events&APIkey=${key}&match_live=1`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),

        }),
        getMatchEvent: builder.query({
            query: (match_id) => ({
                method: 'GET',
                url: `/?action=get_events&match_id=${match_id}&APIkey=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (res) => {
                const newData = res?.map((v, i) => {
                    const allEvents = [...v.cards, ...v.goalscorer].sort(
                        (a, b) => parseInt(a.time) - parseInt(b.time)
                    );
                    return allEvents
                })
                return newData
            }

        }),
        getCountryList: builder.query({
            query: () => ({
                method: 'GET',
                url: `/?action=get_countries&APIkey=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getLeaguesByCountry: builder.query({
            query: (country_id) => ({
                method: 'GET',
                url: `/?action=get_leagues&country_id=${country_id}&APIkey=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getLivescoreByCountry: builder.query({
            query: (country_id, league_id) => ({
                method: 'GET',
                url: `/?action=get_events&country_id=${country_id}&league_id=${league_id}&APIkey=${key}&match_live=1`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getLeagueStanding: builder.query({
            query: (country_id, league_id) => ({
                method: 'GET',
                url: `/?action=get_standings&league_id=${league_id}&key=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getLeagueSchedule: builder.query({
            query: (from, to, league_id) => ({
                method: 'GET',
                url: `/?action=get_events&from=${from}&to=${to}&league_id=${league_id}&key=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),
        getH2H: builder.query({
            query: (firstTeamId, secondTeamId) => ({
                method: 'GET',
                url: `/?action=get_H2H&firstTeamId=${firstTeamId}&secondTeamId=${secondTeamId}&key=${key}`,
                ValidateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        }),

    })
})

export const {
    useGetLivescoreQuery,
    useGetMatchEventQuery,
    useGetCountryListQuery,
    useGetLeaguesByCountryQuery,
    useGetLeagueScheduleQuery,
    useGetLeagueStandingQuery,
    useGetLivescoreByCountryQuery,
    useGetH2HQuery

} = livescoreApislice