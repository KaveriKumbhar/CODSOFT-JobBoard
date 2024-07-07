import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  {/* for categories---- */ }
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
    .then(res => res.json()).then(data => {
      setJobs(data);
      setIsLoading(false);
    })
  }, []);
  //console.log(jobs);

  {/* for the input field search--- */ }
  const [query, setQuery] = useState("");
  const handlInputChange = (event) => {
    setQuery(event.target.value);
  }

  //console.log(query);

  {/* filter the jobs according to titles */ }

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  //console.log(filteredJobs);

  {/* ------radio button filtering---- */ }
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  {/* ------ button filtering---- */ }
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  {/* -------calculate the index page------------------- */ }
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return { startIndex, endIndex };
  }

  {/* -----function for next page------ */ }
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  {/* -----function for preveious page------ */ }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  {/*------main function------- */ }
  const filteredData = (jobs, seLected, query) => {
    let filteredJobs = jobs;

    //filtering Input Items----
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering---------
    // if(seLected){
    //   filteredJobs = filteredJobs.filter(({jobLocation , maxPrice , experienceLevel , saLaryType,
    //     empLoymentType,postingDate})=>(
    //       jobLocation.toLowerCase() === seLected.toLowerCase()||
    //       parseInt(maxPrice) <= parseInt(seLected) ||
    //       saLaryType.toLowerCase() === seLected.toLowerCase() ||
    //       empLoymentType.toLowerCase() === seLected.toLowerCase()
    //     ));
    //     console.log(filteredJobs);
    // }

    if (seLected && typeof seLected === 'string') {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        (jobLocation && typeof jobLocation === 'string' && jobLocation.toLowerCase() === seLected.toLowerCase()) ||
        (maxPrice && !isNaN(maxPrice) && parseInt(maxPrice) <= parseInt(seLected)) ||
        (salaryType && typeof salaryType === 'string' && salaryType.toLowerCase() === seLected.toLowerCase()) ||
        (employmentType && typeof employmentType === 'string' && employmentType.toLowerCase() === seLected.toLowerCase()) ||
        (experienceLevel && typeof experienceLevel === 'string' && experienceLevel.toLowerCase() === seLected.toLowerCase())
       
        // postingDate>=seLected
       
      ));
      console.log(filteredJobs);
    } else {
      console.error('seLected is not a valid string');
    }
    
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handlInputChange={handlInputChange} />
      {/* main content----------- */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* left side------ */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* job cards----- */}
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? (<p className='font-medium'>Loading.....</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          }
          {/*---pagination here--------*/}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled = {currentPage===1} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled = {currentPage === Math.ceil(filteredItems.length/itemsPerPage)}
                className='hover:underline'>
                 Next</button>
                </div>
                ) : ""
            
          }


              </div>
          
  
        {/* right side-------- */}
          <div className='bg-white p-4 rounded'><NewsLetter/></div>

          
        </div>
      </div>
    
      )
}

      export default Home 