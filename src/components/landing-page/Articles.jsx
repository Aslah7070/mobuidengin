import React from 'react'
import articleImg from "../../assets/articleIMG.svg"
import CustomButtons from '../ui/Buttons'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SouthWestIcon from '@mui/icons-material/SouthWest';
const Articles = () => {
    return (
        <div className='flex flex-col md:flex-row  justify-evenly items-start relative   w-full'>
            <div>
                <h1 className='font-semibold text-[80px] leading-[1]'>Land job interviews <br />10x faster</h1><br />
                <h4 className='text-[20px] leading-[1] '> Custom-built resumes that match your goals, keywords, and <br /> recruiter expectations</h4><br />
                <CustomButtons label={<>Get Start <ArrowForwardIcon /></>} color='#022183' />
            </div>
         
          <div className='relative bg-amber-600'>
                <img src={articleImg} alt="" />
                <div class="text-[50px] absolute top-80 left-58 bg-opacity-50 rounded-full w-[120.54px] h-30 flex justify-center items-center backdrop-blur-sm border border-white">
                    📖

                </div>
                <div className='bg-white text-blue-600 absolute right-10 top-102 rounded-full border border-white'>
                <SouthWestIcon className='' />
                </div>
             
            </div>
            <div className='absolute top-110 right-60'>
              <span >Download Free E-Book</span>
              </div>
          
        </div>
    )
}

export default Articles
