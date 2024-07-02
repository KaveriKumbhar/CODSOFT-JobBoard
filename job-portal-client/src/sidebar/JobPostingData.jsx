import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const twentyFourHourAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    //convert date to string
    const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const thirtDaysAgoDate = thirtDaysAgo.toISOString().slice(0,10);

    //console.log(twentyFourHourAgoDate);

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
        <label className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>
            All Time
        </label>

        <InputField handleChange={handleChange} value={twentyFourHourAgoDate} title="Last 24 Hours" name="test"/>
        <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 Days" name="test"/>
        <InputField handleChange={handleChange} value={thirtDaysAgoDate} title="Last 30 Days" name="test"/>
        
      </div>
    </div>
  )
}

export default JobPostingData
