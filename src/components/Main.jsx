import React from 'react'
import Navbar from './landing-page/Navbar'
import Articles from './Articles'
import Flow from './landing-page/Flow'
import About from './landing-page/About-us'
import Testimonials from './Client'
import Benifits from './Benifits'
import ServicePlan from './servicePlan'
import Resumebuilding from './Resumebuilding'
import ContactUs from './ContactUs'
import Footer from './Footer'


const Main = () => {
  return (
    <div className=' '>
     <div className=' h-screen flex flex-col  justify-between'
    style={{
        background: "linear-gradient(to top left, blue, black), linear-gradient(to top right, #60a5fa, black)",
        backgroundBlendMode: "screen"
      }}
     >
   
    <Navbar/>
   
      <div className=' flex justify-center '>
      <Articles/>
      </div>
      
      <div></div>
     </div>

     <div>
        <Flow/>
     </div>

     <div>
     <About/>
     </div>


     <div>
     <Testimonials/>
     </div>

     <div>
    <Benifits/>
     </div>
     <div>
      <ServicePlan/>
     </div>

    <div>
    <Resumebuilding/>
    </div>

    <div >
   <ContactUs/>
    </div>
    <Footer/>
    </div>
  )
}

export default Main
