// import React from 'react'
// import banner from "./assets/banner.png"
// import flame from "./assets/flame.png"
// const Banner = () => {
//   return (
//     <div className="flex">
//         <div className="w-[50%] bg-[black]">
//            <div className="flex pt-16 pl-24 gap-x-2">
//             <img src={flame} alt="" />
//             <h3 className='text-[#FDF8F8] font-sans italic text-[20px]'>Best Catering Services</h3>
//            </div>
//            <h2 className='text-[#FDF8F8] text-[60px] px-16 '>Special Ocasions
//            Deserve Special Food</h2>
//            <h4 className='text-[#FDF8F8] text-[26px] px-24'>Dolor consect aetur adipisicing pellenqest convallis
//            lorems ipsum nosturd sit amet</h4>
//            <h3 className='text-[#FDF8F8] text-[18px] px-32 py-4'>Need our Services. Call Today! </h3>
//            <h3 className='text-[#FDF8F8] text-[18px] px-32 py-4'>+1(234) 9797 800 </h3>
//         </div>
//         <div className="w-[50%]">
//             <img src={banner} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Banner
import React from 'react';
import banner from "./assets/banner.png";
import flame from "./assets/flame.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Text Section */}
      <div className="w-full md:w-[50%] bg-[black] p-6 md:p-0">
        <div className="flex pt-6 md:pt-16 pl-4 md:pl-24 gap-x-2">
          <img src={flame} alt="Flame Icon" className="w-[20px] md:w-[30px]" />
          <h3 className="text-[#FDF8F8] font-sans italic text-[16px] md:text-[20px]">
            Best Catering Services
          </h3>
        </div>
        <h2 className="text-[#FDF8F8] text-[36px] md:text-[60px] px-4 md:px-16 mt-4 md:mt-0">
          Special Occasions Deserve Special Food
        </h2>
        <h4 className="text-[#FDF8F8] text-[18px] md:text-[26px] px-4 md:px-24 mt-2">
          Dolor consect aetur adipisicing pellenqest convallis lorem ipsum nostrud sit amet
        </h4>
        <h3 className="text-[#FDF8F8] text-[16px] md:text-[18px] px-4 md:px-32 py-2 md:py-4">
          Need our Services? Call Today!
        </h3>
        <h3 className="text-[#FDF8F8] text-[16px] md:text-[18px] px-4 md:px-32 py-2 md:py-4">
          +1(234) 9797 800
        </h3>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%]">
        <img src={banner} alt="Banner" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Banner;
