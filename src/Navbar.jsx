// import React from 'react'
// import Container from './Container'
// import logo from "./assets/mainlogo.png"
// import logoend from "./assets/logoend.png"
// const Navbar = () => {
//   return (
//     <Container>
//         <div className="flex justify-between items-center">
//             <div className="">
//                 <img src={logo} alt="" />
//             </div>
//             <div className="bg-[#D9D9D9] p-5 my-4">
//                 <ul className='lg:flex gap-x-6 text-[18px]'>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>Home</li>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>About Us</li>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>Services</li>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>Our Menus</li>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>Blog</li>
//                     <li className='hover:text-[red] text-bold cursor-pointer duration-500 ease-in-out'>Contact</li>
//                 </ul>
//             </div>
//             <div className="">
//                 <button className='className="w-[300px] h-[40px] border-2 bg-[red]  font-sans font-bold hover:text-[black] hover:bg-[white] text-[#fff] duration-300 ease-in-out"'>
//                     <div className="flex gap-x-2">
//                         <img className="w-[20px]" src={logoend} alt="" />
//                         <h3>Order Today!</h3>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     </Container>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import Container from './Container';
import logo from "./assets/mainlogo.png";
import logoend from "./assets/logoend.png";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo Section */}
        <div className="w-1/2 sm:w-auto">
          <img src={logo} alt="Main Logo" className="w-[120px] sm:w-[150px]" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <RxCross2 /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`bg-[#D9D9D9] p-2 sm:p-5 my-2 sm:my-4 w-full sm:w-auto ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <ul className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-[16px] sm:text-[18px]">
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">Home</li>
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">About Us</li>
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">Services</li>
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">Our Menus</li>
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">Blog</li>
            <li className="hover:text-[red] font-bold cursor-pointer duration-500 ease-in-out">Contact</li>
          </ul>
        </div>

        {/* Order Button */}
        <div className="w-1/2 sm:w-auto text-right sm:text-left">
          <button className="w-full sm:w-[200px] h-[40px] border-2 bg-[red] text-white font-sans font-bold hover:text-[black] hover:bg-[white] duration-300 ease-in-out">
            <div className="flex justify-center sm:justify-center gap-x-2 items-center">
              <img className="w-[20px]" src={logoend} alt="Order Icon" />
              <h3>Order Today!</h3>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
