// import React from 'react'

// const Client = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Client


import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomButtons from './ui/Buttons';
const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">

   <div className=' w-9/12 flex items-center justify-start '>
   <h2 className="text-2xl font-semibold text-blue-700 mb-10 text-center">
        What our clients have to say
      </h2>
   </div>

      <div className="flex flex-wrap gap-8 justify-center mb-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-80 h-96 bg-blue-700 border border-blue-700 rounded-2xl flex flex-col justify-between  relative overflow-hidden"
          >

            <div className="flex-1 flex items-center justify-center rounded-b-4xl bg-white w-full">
              <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl">
                <PlayArrowIcon/>
              </div>
            </div>

           <div className='h-40'>
           <div className="bg-blue-700 text-white p-4 rounded-b-2xl text-sm">
              Holly is a <strong>senior executive</strong> who got over 
              <strong> 10 job interviews </strong>and an offer she accepted
            </div>

            <div className="absolute bottom-4 right-4">
              <div className="w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center shadow-md">
                <ArrowOutwardIcon/>
              </div>
            </div>
           </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="border border-blue-700 text-blue-700 rounded-full px-6 py-2 flex items-center gap-2 text-sm">
          More customer testimonials <ArrowOutwardIcon/>
        </button>
        <CustomButtons backgroundColor='#0a5ce9' paddingX="12px" paddingY="2px" label={<>Get Started <ArrowForwardIcon/></>} />
      </div>
    </div>
  );
};

export default Testimonials;
