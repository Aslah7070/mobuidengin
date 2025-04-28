import React from 'react'
import whitelogo from "../../assets/white-logo2.svg"
import CustomButtons from '../ui/Buttons'
const Navbar = () => {
  return (
    <div className='flex  justify-around h-20  '>
      <div 
      className='flex '
      >
      <img className='w-24' src={whitelogo}  alt="" />
      </div>
      <div className='flex   w-2/5 justify-between items-center '>
        <span>Home</span>
        <span>Abouts</span>
        <span>Plans</span>
        <span>Testimonials</span>
        <span>Privecy Policy</span>
        <span>More</span>
      </div>
      <div className='flex items-center '>
        <CustomButtons paddingX="50px" label="Get start" color='#022183'/>
      </div>
    </div>
  )
}

export default Navbar
