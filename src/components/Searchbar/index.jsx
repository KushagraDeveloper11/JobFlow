/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types';


function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type:""
    })

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async () => {
        try {
            await props.fetchJobsCustom(jobCriteria);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const clearFilters = () => {
        setJobCriteria({
          title: "",
          location: "",
          experience: "",
          type: ""
        });
      };
    

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Role</option>
            <option value="Software Developer">Software Developer</option>
            <option value="FrontEnd Developer">FrontEnd Developer</option>
            <option value="Data Science Engineer">Data Science Engineer</option>
            <option value="Quality Analyst">Quality Analyst</option>
            <option value="Cloud Engineer">Cloud Engineer</option>
        </select>
        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
        </select>
        <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher">Fresher : 0 years</option>
            <option value="Junior">Junior : 1-5 years</option>
            <option value="Intermediate">Intermediate : 5-10 years</option>
            <option value="Senior">Senior : 10+ years</option>
        </select>
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

SearchBar.propTypes = {
    fetchJobsCustom: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
};

export default SearchBar