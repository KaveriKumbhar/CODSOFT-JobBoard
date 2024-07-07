import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader'
const JobDetails = () => {
    const {id} = useParams();
    const [job,setJob] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`)
          .then((res) => res.json())
          .then((data) => setJob(data))
      }, []);

  const handleApply = async() => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Enter Your Resume Link ",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Job Details Page"} path={"signle job"}/>
      <div class="max-w-4xl mx-auto p-4 pt-12 mt-10 bg-white shadow-md rounded flex flex-wrap">
  <div class="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
    <h1 class="text-xl mb-2"><b>Job Title :</b> {job.jobTitle}</h1>
    <h1 class="text-xl  mb-2"><b>Company Name :</b> {job.companyName}</h1>
    <h1 class="text-xl  mb-2"><b>Minimum Salary :</b> {job.minPrice}</h1>
    <h1 class="text-xl  mb-2"><b>Maximum Salary :</b> {job.maxPrice}</h1>
    <h1 class="text-xl  mb-2"><b>Salary Type :</b> {job.salaryType}</h1>
    <h1 class="text-xl  mb-2"><b>Job Location :</b> {job.jobLocation}</h1>
  </div>
  <div class="w-full md:w-1/2 pl-4">
    
    <h1 class="text-xl  mb-2"><b>Posting Date :</b> {job.postingDate}</h1>
    <h1 class="text-xl  mb-2"><b>Experience Level :</b> {job.experienceLevel}</h1>
    <h1 class="text-xl  mb-2"><b>Employment Type :</b> {job.employmentType}</h1>
    <h1 class="text-xl  mb-2"><b>Job Description :</b> {job.description}</h1>
    <h1 class="text-xl  mb-2"><b>Posted By :</b> {job.postedBy}</h1>
  </div>
</div>
        

<div className='flex justify-center mt-4 mb-2'>
  <button className='bg-blue text-white px-8 py-2' onClick={handleApply}>Apply Now</button>
</div>
    </div>
  )
}

export default JobDetails
