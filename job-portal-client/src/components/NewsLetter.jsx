import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <div>
        {/*email part--------- */}
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText/>
            Email me for Jobs
        </h3>
        <p className='text-primary/75 text-base mb-4'>
            Send email if you have to get a good job . We will respond to your email very soon.
        </p>
        <div className='w-full space-y-4'>
            <input type="email" name='email' id='email' placeholder='email@gmail.com' className='w-full py-2
            pl-3 border focus:outline-none'/>
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none
            bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>
      </div>

        {/*resume upload part------ */}
      <div className='mt-24'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket/>
           Get Noticed Faster
        </h3>
        <p className='text-primary/75 text-base mb-4'>
            Here upload your Resume
        </p>
        <div className='w-full space-y-4'>
            <input type='submit' value={"Upload your Resume"} className='w-full block py-2 pl-3 border focus:outline-none
            bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
