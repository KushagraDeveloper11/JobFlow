/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types';

function Jobcard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className='mx-40 mb-4'>
        <div className='flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex items-center gap-2'>
                    {props.skills.map((skill,i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500'>Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} day`} ago</p>
                <a href={props.job_link} target="_blank" rel="noopener noreferrer">
                <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md hover:bg-blue-500 hover:text-white'>Apply</button>

                </a>
                
            </div>
        </div>
    </div>
  )
}
Jobcard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    postedOn: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    job_link: PropTypes.string.isRequired,
}

export default Jobcard