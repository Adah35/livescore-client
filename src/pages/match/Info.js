import React from 'react'
import { RiCalendarTodoLine } from 'react-icons/ri'
import { MdStadium } from 'react-icons/md'
import { GiWhistle } from 'react-icons/gi'


const Info = ({ fixture }) => {

    const inputDate = fixture.fixture.date;

    // Create a Date object from the input date string
    const date = new Date(inputDate);

    // Define an array of month names
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
    return (
        <div className='flex items-center justify-between border-[1px] rounded-lg'>

            <div className="p-2"><span className='text-gray-500 inline flex gap-3  text-sm p-2 rounded-xl font-semibold'><RiCalendarTodoLine className='text-2xl' /> - {formattedDate}</span></div>
            <div className="p-2"><span className='text-gray-500 inline flex gap-3  text-sm p-2 rounded-xl font-semibold'><GiWhistle className='text-2xl' />{fixture.fixture.referee} </span></div>
            <div className="p-2"><span className='text-gray-500 inline flex gap-3  text-sm p-2 rounded-xl font-semibold'>
                <MdStadium className='text-2xl' />{fixture.fixture.venue.name}</span></div>
        </div>
    )
}

export default Info