import React from 'react'
import footerLogo from "../../assets/footerLogo.svg"
const Footer = () => {
  return (
    <div className='bg-white  '>
     <div className='p-20 '>
     <div>
        <img src={footerLogo} alt="" />
      </div>
      <hr className='mt-8' />
      <div className='flex'>
      <div className=' w-3/5 flex text-blue-800 justify-between '>
      <div class="inline-block">
  <p class="font-bold border-b-1 border-black inline-block pb-1">Address</p>
  <p class="mt-4">
    1875 Mission St Ste 103 #450 <br />
    San Francisco, CA 94103
  </p>
</div>
      <div>
        <p class="font-bold border-b-1 border-black inline-block pb-1">Email</p><br />
       
        <a href="mailto:finance@mobiusengine.ai" class="underline">
  finance@mobiusengine.ai
</a>
        
      </div>
      <div>
        <p class="font-bold border-b-1 border-black inline-block pb-1">Telephone</p>
    
        <p>650-889-6026</p>
        
      </div>    
      </div>
      <div className=' w-2/6 flex flex-col items-end '>
      <a className='text-blue-800 font-bold me-5' href="mailto:finance@mobiusengine.ai" class="underline text-blue-800 font-bold ">
  Socials
</a> <br />
<div className='flex space-x-2 justify-end'>
    <p className='border borderder-2 rounded-full w-10 h-10 flex items-center justify-center font-bold bg-white text-blue-700'>in</p>
    <p className='border borderder-2 rounded-full w-10 h-10 flex items-center justify-center font-bold bg-white text-blue-700'>in</p>
</div>

      </div>
      </div>
     
     </div>

      <div className='bg-blue-700 flex justify-between px-16 items-center w-full h-14'>
           <div className=''>
            <h1>
            © 2023 Mobiusservices LLC
            </h1>
           </div>

           <div className='flex '>
            <p className='mr-10'>Terms & Conditions</p>
            <p>Privacy Policy</p>
           </div>
      </div>
    </div>
  )
}

export default Footer
