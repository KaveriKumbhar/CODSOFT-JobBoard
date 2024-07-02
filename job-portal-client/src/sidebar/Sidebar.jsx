import React from 'react'
import Location from './Location'
import Salary from './Salary'
import WorkExperienceLevel from './WorkExperienceLevel'
import EmploymentType from './EmploymentType'
//import JobPostingData from './JobPostingData'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div>
      <Location handleChange={handleChange}/>
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      {/*<JobPostingData handleChange={handleChange}/>*/}
      <WorkExperienceLevel handleChange={handleChange}/>
      <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
