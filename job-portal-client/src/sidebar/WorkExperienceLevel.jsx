import React from 'react'
import InputField from '../components/InputField'

const WorkExperienceLevel = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Worl Experience Level</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>
            Any Experience
        </label>

        <InputField handleChange={handleChange} value="internship" title="Internship" name="test"/>
        <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>
      </div>
    </div>
  )
}

export default WorkExperienceLevel
