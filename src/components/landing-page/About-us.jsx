import React from 'react'
import aboutImg1 from "../../assets/aboutIMG1.svg"
import aboutImg2 from "../../assets/aboutIMG2.svg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const About = () => {
    return (
        <div className='h-200vh flex flex-col justify-evenly items-center pt-20 bg-gradient-to-bl from-black via-blue-950 to-blue-900 '>

            <div className='flex justify-around w-full py-20 '>
                <h1 className='text-4xl'>About Us</h1>
                <div></div>
                <div></div>
            </div>



            <div className='flex  justify-around w-full  '>
                <div className='w-40'></div>
                <div className='bg-white rounded-full relative'>
                    <img src={aboutImg1} alt="" />
                    <div className='absolute left-50 bottom-5 w-20 h-20 opacity-50 rounded-full flex justify-center items-center bg-gray-600 text-white'>
                    <p className='font-bold text-4xl'>in</p>
                </div>
                </div>
                <div className='w-[600px] flex  items-center '>
                    <p>Ashwin is the founder of mobiusengine.ai. He is an accomplished <br />    senior executive with over 20 years
                        of experience in cloud <br /> infrastructure and financial services. With over 2 decades  of <br />experience at Google and JP Morgan,
                        Ashwin held various product <br /> and GTM roles. Ashwin is an MBA holder from Yale University. <br /> <br />
                        Ashwin's vision with Mobius is to give job seekers a significant <br /> advantage in securing the roles of their dreams</p>
                </div>

            </div>

            <div className='flex  justify-around w-full mt-20   '>
                <div className='w-40'></div>
                <div className='bg-white rounded-full relative'>
                    <img src={aboutImg2} alt="" />
                    <div className='absolute left-50 bottom-5 w-20 h-20 opacity-50 rounded-full flex justify-center items-center bg-gray-500 text-white'>
                    <p className='font-bold text-4xl'>in</p>
                </div>
                </div>
                <div className='w-[600px] flex  items-center '>
                    <p>Nicole is an Executive coach at Mobius specializing in resume <br /> builds and career advisory. <br /> <br />
                        With a B.S. in Business Administration from UC Berkeley and 7+ <br /> years of experience in AI-driven product strategy, she has seen <br /> firsthand how the proper positioning opens doors. She takes a <br /> targeted, results-driven approach to help clients confidentl</p>
                </div>
                

            </div>
         <div className=' w-full flex justify-between py-20'>
         <div className='w-7/12'></div>
         <div className='w-6/12'>
         <p>Learn more about our board of advisors <ArrowOutwardIcon/></p>
         <p>Follow us on our Linkedin page <ArrowOutwardIcon/></p>
         </div>
        
         </div>

        </div>
    )
}

export default About
