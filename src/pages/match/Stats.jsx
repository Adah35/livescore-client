import React from 'react'


const StatsComponent = ({ value, maxValue, team }) => {
    const barWidth = (value / maxValue) * 100 + '%';

    return (
        <div className="w-full bg-gray-800 h-3  relative overflow-hidden">
            <div
                className={`h-full absolute right-0 bg-green-500 ${team == 'A' ? 'right-0' : 'left-0'}`}
                style={{ width: barWidth }}
            ></div>
        </div>)
}
const Stats = ({ data }) => {
    const goalsWidth = (6 - 2) * 10 + '%'; // Assume each goal is worth 10% width
    const cornersWidth = (8 - 3) * 10 + '%'; // Customize as needed
    // const freeKicksWidth = (teamAStats.freeKicks - teamBStats.freeKicks) * 6 + '%'; // Customize as needed

    const content = (
        <div>
            <div className='flex justify-between text-secondary text-sm'>
                <p>6</p>
                <p>shots on target</p>
                <p>2</p>
            </div>
            <div className='flex gap-2'>
                <StatsComponent value={10} maxValue={10} width={goalsWidth} team={'A'} />
                <StatsComponent value={2} maxValue={10} width={goalsWidth} />
            </div>
        </div>
    )
    return (
        <div>
            {content}
        </div>
    )
}

export default Stats