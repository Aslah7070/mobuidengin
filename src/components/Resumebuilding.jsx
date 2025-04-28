


import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import CustomButtons from "./ui/Buttons";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const plans = [
    {
      title: "Resume Rebuild",
      price: "$1000",
      per: "one time",
      features: [
        "3× 30–min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex–Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request",
      ],
      popular: false,
    },
    {
      title: "Interview Prep",
      price: "$500",
      per: "one time",
      features: [
        "2× 45–min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical",
      ],
      popular: false,
    },
  ];

const Resumebuilding = () => {
    return (
        <div className="flex flex-col items-center  bg-white min-h-screen ">
            <hr className="text-black" />
           <div className="flex  flex-col w-9/12 mb-10 mt-20">
           <h1 className="text-start  text-4xl    w-4/5 font-semibold text-blue-700 mb-5">
            Resume Building & Coaching
            </h1>
            <p className= " text-start text-blue-700">Let’s talk about where you’re headed — and how your resume can get you there. <br /> Schedule a call to get started.</p>

           </div>
            <div className="flex flex-wrap justify-center  gap-8 relative  w-full">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative border-2 ${plan.popular ? "bg-[#f5f7f8]" : "bg-white"}  border-blue-400 rounded-2xl p-4 w-96 flex flex-col justify-between min-h-[450px] hover:shadow-xl transition`}
                    >
                        {plan.popular && (
                            <div className="absolute top-[20px] right-4 bg-[#dae4e7] text-white text-xs font-semibold py-1 px-5 rounded-full">
                                Popular
                            </div>
                        )}

                        <div>
                            <h2 className="text-3xl font-semibold text-blue-700 mb-2">{plan.title}</h2>
                            <p className="text-[55px] font-bold text-blue-700 mb-4">
                                {plan.price}
                                <span className="text-[18px] font-normal text-blue-700 ml-1">{plan.per}</span>
                            </p>
                            <hr className="text-gray-400" />
                            <ul className="space-y-2 p-5 ">
                                {plan.features.map((item, idx) => (

                                    <div key={idx} className="flex items-start gap-2 p-1   text-blue-700 w-full">
                                        
                                        
                                                <div><span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                                    <DoneIcon sx={{ fontSize: "12px" }} />
                                                </span></div>
                                            
                                        
                                        <span className="text-md font-semibold leading-5 whitespace-pre-line">{item}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div><CustomButtons label={<>Get Started <ArrowForwardIcon /></>} backgroundColor="#1738f4" paddingX="22px" paddingY="10px" /></div>
                    </div>
                ))}


            </div>
           
        </div>
           );
        };
        
        export default Resumebuilding;