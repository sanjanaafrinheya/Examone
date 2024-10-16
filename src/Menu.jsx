import React from 'react';
import Container from './Container';
import cardone from "./assets/cardone.png";
import cardtwo from "./assets/cardtwo.png";
import cardthree from "./assets/cardthree.png";
import cardfour from "./assets/cardfour.png";

const Menu = () => {
  return (
    <div className="w-full bg-[black] text-[white]">
      {/* Header Section */}
      <div className="text-center">
        <h4 className="text-[16px] md:text-[18px] italic pt-8">Family owned since 1995</h4>
        <h2 className="text-[32px] md:text-[42px] lg:text-[52px]">Catering Services</h2>
      </div>

      <Container>
        {/* Cards Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Card 1 */}
          <div className="text-center">
            <img src={cardone} alt="Catering Holiday" className="w-full h-auto mb-4" />
            <h3 className="text-[24px] md:text-[30px]">Catering Holiday</h3>
            <h4 className="text-[14px] md:text-[16px]">A blend of delicious and real tasty food</h4>
            <h3 className="text-[16px] md:text-[18px]">Start $62.50/person</h3>
            <button className="text-[white] text-[18px] md:text-[20px] hover:bg-[red] py-2 md:py-4 mt-4">
              View details
            </button>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img src={cardtwo} alt="Social Gathering" className="w-full h-auto mb-4" />
            <h3 className="text-[24px] md:text-[30px]">Social Gathering</h3>
            <h4 className="text-[14px] md:text-[16px]">A blend of delicious and real tasty food</h4>
            <h3 className="text-[16px] md:text-[18px]">Start $62.50/person</h3>
            <button className="text-[white] text-[18px] md:text-[20px] hover:bg-[red] py-2 md:py-4 mt-4">
              View details
            </button>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img src={cardthree} alt="Wedding & Picnic" className="w-full h-auto mb-4" />
            <h3 className="text-[24px] md:text-[30px]">Wedding & Picnic</h3>
            <h4 className="text-[14px] md:text-[16px]">A blend of delicious and real tasty food</h4>
            <h3 className="text-[16px] md:text-[18px]">Start $62.50/person</h3>
            <button className="text-[white] text-[18px] md:text-[20px] hover:bg-[red] py-2 md:py-4 mt-4">
              View details
            </button>
          </div>

          {/* Card 4 */}
          <div className="text-center">
            <img src={cardfour} alt="Catering Holiday" className="w-full h-auto mb-4" />
            <h3 className="text-[24px] md:text-[30px]">Catering Holiday</h3>
            <h4 className="text-[14px] md:text-[16px]">A blend of delicious and real tasty food</h4>
            <h3 className="text-[16px] md:text-[18px]">Start $62.50/person</h3>
            <button className="text-[white] text-[18px] md:text-[20px] hover:bg-[red] py-2 md:py-4 mt-4">
              View details
            </button>
          </div>
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="bg-[red] py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-y-6">
            <div className="w-full md:w-[80%]">
              <h3 className="text-[30px] md:text-[40px] font-bold text-[black]">
                Our Ingredients Are Sustainably Sourced
              </h3>
              <h4 className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
            <div>
              <button className="bg-[#FFF1F1] text-[black] w-[160px] md:w-[200px] py-3 md:py-4 text-bold mt-4 md:mt-0">
                View Menu
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
