import React from 'react';

const LeagueTable = ({ data }) => {
    return (
        <div className="w-full rounded-xl border-[1px] border-gray-400">
            <table className="w-full  border-collapse  rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4">Index</th>
                        <th className="py-2 px-4">Teams</th>
                        <th className="py-2 px-4">P</th>
                        <th className="py-2 px-4">W</th>
                        <th className="py-2 px-4">D</th>
                        <th className="py-2 px-4">L</th>
                        <th className="py-2 px-4">F</th>
                        <th className="py-2 px-4">A</th>
                        <th className="py-2 px-4">GD</th>
                        <th className="py-2 px-4">PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{row.team}</td>
                            <td className="py-2 px-4">{row.P}</td>
                            <td className="py-2 px-4">{row.W}</td>
                            <td className="py-2 px-4">{row.D}</td>
                            <td className="py-2 px-4">{row.L}</td>
                            <td className="py-2 px-4">{row.F}</td>
                            <td className="py-2 px-4">{row.A}</td>
                            <td className="py-2 px-4">{row.GD}</td>
                            <td className="py-2 px-4">{row.PTS}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeagueTable;
