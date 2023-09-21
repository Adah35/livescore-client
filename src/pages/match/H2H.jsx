import React from 'react'
import Livescore from '../home/Livescore'
import { useGetH2HQuery } from '../home/livescoreApislice'


const H2H = ({ data }) => {
    const { data: h2hData,
        isLoading,
        isSuccess,
        isError, } = useGetH2HQuery(data.match_hometeam_id, data.match_awayteam_id)
    let content
    if (isSuccess) {
        console.log(h2hData, 'h2hdata')
        content = h2hData.firstTeam_VS_secondTeam.map((v, i) => {
            return (
                <Livescore data={v} />
            )
        })
    }

    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-2xl font-semibold mb-4">Head-to-Head Comparison</h1>
            {content}
        </div>
    )
}

export default H2H