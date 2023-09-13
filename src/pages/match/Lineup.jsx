import React from 'react'
import { lineup } from './lineupData'




const LineupComponent = ({ teamName, players, substitutes }) => {
    const content = lineup.response.map((value, index) => {
        return (
            <div className=' w-full '>
                <div className="w-1/2">
                    <h3 className="text-lg font-medium mb-2">Starting XI</h3>
                    <ul>
                        {value.startXI.map((player, index) => (
                            <li key={index} className="mb-2 text-slate-700 flex gap-3 ">
                                <span className='border-[2px] rounded-full p-2 w-6 text-center'>{player.player.number}</span>{player.player.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2">
                    <h3 className="text-lg font-medium mb-2">Substitutes</h3>
                    <ul>
                        {value.substitutes.map((substitute, index) => (
                            <li key={index} className="mb-2 text-slate-700 flex gap-3">
                                <span className='border-[2px] rounded-full p-2 w-6 text-center'>{substitute.player.number}</span> {substitute.player.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className="border p-4">
            <h2 className="text-xl font-semibold mb-2">{teamName} Lineup</h2>
            <div className="flex justify-between items-center">
                {content}
            </div>
        </div>
    );
};



const Lineup = () => {
    const teamName = 'Team A';
    const startingXI = ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];
    const substitutes = ['Substitute 1', 'Substitute 2', 'Substitute 3'];

    return (
        <div>
            <LineupComponent teamName={teamName} players={startingXI} substitutes={substitutes} />
        </div>
    );
}

export default Lineup