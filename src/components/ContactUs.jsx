import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const ContactUs = () => {
  return (
    <div className=' bg-white flex justify-center pt-20' >
     <div className='h-72 w-3/4 bg-blue-700 rounded-4xl flex justify-between p-10 items-center'>
     <div >
        <h1 className='text-4xl'>STILL HAVE <br />
        DOUBTS?</h1>
      </div>
      <div >
        <h1 className='font-bold text-6xl'>Contact Us</h1>
      </div>
      <div className='w-20 h-20 text-blue-700 bg-white rounded-full flex justify-center items-center'>
      <ArrowForwardIcon />
      </div>
     </div>
    </div>
  )
}

export default ContactUs
