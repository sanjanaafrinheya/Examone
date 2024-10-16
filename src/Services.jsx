import React from 'react';
import chef from "./assets/chef.png";
import Container from './Container';
import flame from "./assets/flame.png";

const Services = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-[50%] mb-6 md:mb-0">
          <img src={chef} alt="Chef" className="w-full h-auto object-cover" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <div className="flex pt-6 md:pt-16 pl-4 md:pl-24 gap-x-2 justify-center md:justify-start">
            <img src={flame} alt="Flame Icon" className="w-[20px] md:w-[30px]" />
            <h3 className="text-black font-sans italic text-[16px] md:text-[20px]">
              Best Catering Services
            </h3>
          </div>

          <div className="text-center md:text-left px-4 md:px-16 mt-4">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-sans font-bold">
              Our Ingredients Are Sustainably Sourced
            </h2>
            <p className="font-normal text-[16px] sm:text-[18px] text-[#0F0101] mt-4 px-2 md:px-0">
              Lorem ipsum dolor sit enim consect aetur adipisicing convallis
              lorem ipsum nostrud sit amet lorem ipsum dolor sit enim cons
              ect aetur adipisicing convallis lorems ipsum nostrud sit amet, lo-
              rem ipsum dolor sit enim consect aetur adipisicing convallis
              lorems ipsum nostrud sit amet.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;

