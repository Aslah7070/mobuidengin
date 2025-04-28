


import React from "react";
import DoneIcon from '@mui/icons-material/Done';
import CustomButtons from "../ui/Buttons";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const plans = [
    {
        title: "April Promo",
        price: "$35",
        per: "/week",
        features: [
            "Curated jobs from 1M+ listings,\n refreshed every 48 hours",
            "Up to 20 human-verified roles per\n week (no bots, no fluff — just real\n company jobs)",
            "Need more? Add extra apps for\n just $15 each",
            "Your own dedicated application\n analyst",
            "Personalized setup with up to 10 filters\n & 5 job titles",
        ],
        popular: false,
    },
    {
        title: "Starter",
        price: "$50",
        per: "/week",
        features: [
            "All the perks of the Promo Plan,\n plus:",
            "Resume review & story-focused\n feedback",
            "Dedicated search specialist\n",
            "Up to 50 job apps/week\n",
            "Extra apps at $15 each\n",
            "Analyst support within 6 hours\n (SLA/PST hours)",
        ],
        popular: true,
    },
    {
        title: "Plus",
        price: "$100",
        per: "/week",
        features: [
            "Everything in Starter, with more\n muscle:",
            "Up to 75 apps/week",
            "Apply to 15 job titles",
            "Analyst + full application team on\n Pacific hours",
        ],
        popular: false,
    },
];

const ServicePlan = () => {
    return (
        <div className="flex flex-col items-center  bg-white min-h-screen ">
            <h1 className="text-start  text-4xl    w-4/5 font-semibold text-blue-700 mb-24">
                Job Application Service Plans
            </h1>

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
                                        {
                                            idx !== 0 || plan.title === "April Promo" ? (
                                                <div><span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                                    <DoneIcon sx={{ fontSize: "12px" }} />
                                                </span></div>
                                            ) : (
                                                <div><span className=" text-white rounded-full flex items-center justify-center w-5 h-5">

                                                </span></div>
                                            )
                                        }
                                        <span className="text-md font-semibold leading-5 whitespace-pre-line">{item}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div><CustomButtons label={<>Get Started <ArrowForwardIcon /></>} backgroundColor="#1738f4" paddingX="22px" paddingY="10px" /></div>
                    </div>
                ))}


            </div>

            
            <div className=" flex justify-between bg-blue-700 w-4/5 h-80 mt-12 rounded-4xl">
                <div className="w-4/7">
                    <div className="p-5 ps-10 ">
                    <h1 className="font-semibold text-4xl">Advance</h1>
                    <span className="text-xl font-semibold">Top-tier support for serious job hunters:</span>
                    <hr className="mt-10" />
                    </div>
                    <div className="flex flex-col items-start p-4 ps-10">
                        <div className="flex justify-evenly p-2 text-[17px] "> 
                           <div className="flex ">
                           <span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                <DoneIcon sx={{ fontSize: "12px" }} />
                            </span>
                          <span>  Everything in Plus</span>
                           </div>

                          <div className="flex ms-10">
                          <span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                <DoneIcon sx={{ fontSize: "12px" }} />
                            </span>
                            <span>Custom Resumes & Cover Letters</span>
                          </div>
                        </div>

                        <div className="flex justify-evenly p-2 text-[17px] "> 
                           <div className="flex">
                           <span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                <DoneIcon sx={{ fontSize: "12px" }} />
                            </span>
                          <span>20 fully customized applications/wee</span>
                           </div>

                          <div className="flex ms-10">
                          <span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                <DoneIcon sx={{ fontSize: "12px" }} />
                            </span>
                            <span>Help with complex job searches</span>
                          </div>
                        </div>

                        <div className="flex justify-evenly p-2 text-[17px]"> 
                           <div className="flex">
                           <span className="bg-green-500 text-white rounded-full flex items-center justify-center w-5 h-5">
                                <DoneIcon sx={{ fontSize: "12px" }} />
                            </span>
                          <span>Access to senior resume experts, Founder & Exec Coaches</span>
                           </div>
                        </div>

                      
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="p-5">
                        <h1 className="text-[50px] text-white font-bold">$150 <span className="text-[25px]">/week</span></h1>
                    </div>
                    <div className="p-5">
                        <CustomButtons color="#1738f4" label={<>Get Started <ArrowForwardIcon /></>}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicePlan;
