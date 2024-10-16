import React from 'react';
import circle from "./assets/circle.png";
import Container from './Container';
import flame from "./assets/flame.png";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between md:flex-row">
        {/* Single Item */}
        <div className="my-14 lg:w-[30%] text-center">
          <div className="ml-40 mb-4 ">
            <img src={circle} alt="Circle" className="w-[50px] h-[50px]"/>
            <img src={flame} alt="Flame" className="ml-2 w-[30px] h-[30px]"/>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Mechelin Star Quality</h3>
            <p className="text-[18px] md:text-[20px] text-[#0F0101]">
              Lorem ipsum dolor sit enim con sect aetur adipisicing convallis
              lorem ipsum nostrud sit amet.
            </p>
          </div>
          <div className="my-8">
            <button className="w-full sm:w-[200px] h-[40px] border-2 bg-[red] text-white font-sans font-bold hover:text-[black] hover:bg-[white] duration-300 ease-in-out">
              View all services
            </button>
          </div>
        </div>

        {/* Repeat the content for the next two sections */}
        <div className="my-14 lg:w-[30%] text-center">
          <div className="ml-40 mb-4">
            <img src={circle} alt="Circle" className="w-[50px] h-[50px]"/>
            <img src={flame} alt="Flame" className="ml-2 w-[30px] h-[30px]"/>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Mechelin Star Quality</h3>
            <p className="text-[18px] md:text-[20px] text-[#0F0101]">
              Lorem ipsum dolor sit enim con sect aetur adipisicing convallis
              lorem ipsum nostrud sit amet.
            </p>
          </div>
          <div className="my-8">
            <button className="w-full sm:w-[200px] h-[40px] border-2 bg-[red] text-white font-sans font-bold hover:text-[black] hover:bg-[white] duration-300 ease-in-out">
              View all menu
            </button>
          </div>
        </div>

        <div className="my-14 lg:w-[30%] text-center">
          <div className="ml-40  mb-4">
            <img src={circle} alt="Circle" className="w-[50px] h-[50px]"/>
            <img src={flame} alt="Flame" className="ml-2 w-[30px] h-[30px]"/>
          </div>
          <div>
            <h3 className="text-[24px] font-semibold">Mechelin Star Quality</h3>
            <p className="text-[18px] md:text-[20px] text-[#0F0101]">
              Lorem ipsum dolor sit enim con sect aetur adipisicing convallis
              lorem ipsum nostrud sit amet.
            </p>
          </div>
          <div className="my-8">
            <button className="w-full sm:w-[200px] h-[40px] border-2 bg-[red] text-white font-sans font-bold hover:text-[black] hover:bg-[white] duration-300 ease-in-out">
              View all story
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
