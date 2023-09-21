import React from 'react'
import LeagueTable from './LeagueTable';


const leagueTableData = [
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    {
        team: 'Team A',
        P: 5,
        W: 3,
        D: 1,
        L: 1,
        F: 10,
        A: 5,
        GD: 5,
        PTS: 10,
    },
    // Add more data as needed
];
const Table = () => {
    return (
        <div className="container mx-auto mt-4">
            <h1 className="text-2xl font-semibold mb-4">League Table</h1>
            <LeagueTable data={leagueTableData} />
        </div>
    )
}

export default Table