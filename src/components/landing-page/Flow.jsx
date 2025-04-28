import React from 'react'

const Flow = () => {
    return (
        <div className='flex justify-center h-96 bg-white'>
            <div className='flex flex-col items-start   justify-center w-3/4'>
                <h3>How we work?</h3>
                <div className='flex justify-between w-full '>

                    <div className='flex flex-col justify-between h-36 w-60 items-start space-y-3'>
                        <div className='w-20 h-32 font-bold text-[20px]  flex justify-center items-center rounded-full border border-blue-700 text-black'>  1 </div>
                        <div className='w-full h-[2px] bg-blue-700'></div>
                        <div className='text-blue-700  h-20'>  
                            <p>Submit Intake Form</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between h-36 w-60 items-start space-y-3'>
                        <div className='w-20 h-32 font-bold text-[20px] flex justify-center items-center rounded-full border border-blue-700  text-black '>2</div>
                        <div className='w-full h-[2px] bg-blue-700'></div>
                        <div  className='text-blue-700  h-20' >
                            <p>We do the search and curation for list of jobs</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between h-36 w-60 items-start space-y-3'>
                        <div className='w-20 h-32 font-bold text-[20px] flex justify-center items-center rounded-full border border-blue-700  text-black '>3</div>
                        <div className='w-full h-[2px] bg-blue-700'></div>
                        <div className='text-blue-700 h-20' ><p>
                        You approve, we do the tedious part (applying)</p></div>
                    </div>
                    <div className='flex flex-col justify-between h-36 w-60 items-start space-y-3'>
                        <div className='w-20 h-32 font-bold text-[20px] flex justify-center items-center rounded-full border border-blue-700  text-black '>4</div>
                        <div className='w-full h-[2px] bg-blue-700'></div>
                        <div className='text-blue-700 h-20' >
                            <p>You get the interviews</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Flow
