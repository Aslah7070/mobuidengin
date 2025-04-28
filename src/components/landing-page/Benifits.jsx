import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import StarIcon from '@mui/icons-material/Star';

const Benifits = () => {
  const benefitsData = [
    {
      icon: <HeartBrokenIcon
      sx={{
        fontSize:"75px"
      }}
      className=" text-blue-900" />,
      title: 'Tried, Tested, Trusted',
      description: `Built by folks with 40+ years in tech\n  and hiring — we know the game, and\n we’ve got your back.`,
    },
    {
      icon: <PersonIcon   
      sx={{
        fontSize:"75px"
      }}
      className="text-blue-900" />,
      title: 'Real People, Real Help',
      description: 'A hands-on team that actually cares \n — guiding you through every twist in \n your career path.',
    },
    {
      icon: <StarIcon 
      sx={{
        fontSize:"75px"
      }}
      className="text-blue-900" />,
      title: 'Beat the Line',
      description: 'We search, shortlist, and apply for\n you, so your name shows up first —\n every single day.',
    },
  ];

  return (
    <div className="flex flex-col  items-center gap-8 p-6 bg-white h-[700px]">
      <div className='flex flex-wrap justify-around w-full '>
         <h1 className="text-2xl  font-bold text-blue-900 mb-6 ms-5">Why Choose Us?</h1>
         <div></div>
         <div></div>
         <div></div>
         </div>

      <div className="flex  justify-center gap-8">
   
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="border-3 rounded-[35px] border-blue-900  p-6 flex flex-col items-start justify-evenly text-center w-[350px] h-[300px]"
          >
            <div className='text-2xl'>{item.icon}</div>
          <div className='text-start'>
          <h2 className="text-lg font-semibold mt-4 mb-2 text-blue-900">{item.title}</h2>
          <p className=" text-blue-900 whitespace-pre-line">{item.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
