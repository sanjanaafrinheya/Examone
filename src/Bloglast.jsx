import React from 'react'
import flame from "./assets/flame.png"
import Container from './Container'
import sweetone from "./assets/sweetone.png"
import sweettwo from "./assets/sweettwo.png"
import sweetsix from "./assets/sweetsix.png"
import sweetthree from "./assets/sweetthree.png"
import sweetfour from "./assets/sweetfour.png"
import sweetfive from "./assets/sweetfive.png"
const Bloglast = () => {
  return (
<Container>
<div className="flex">
    <img src={flame} alt="" />
    <h3 className="text-[black] font-sans italic text-[20px] font-normal ">
            Best Catering Services
          </h3>
  </div>
  <div className="">
    <h2 className='text-[52px]'>A Shared Experience</h2>
    <p className='text-[18px] text-normal pb-10'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallislorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet, lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
 lorems ipsum nosturd sit amet.Lorem ipsum dolor sit enim  consect aetur adipisicing  convallislorems ipsum nosturd sit amet 
lorem ipsum dolor sit enim  consect aetur adipisicing  convallis lorems ipsum nosturd sit amet, lorem ipsum dolor sit enim  consect
 aetur adipisicing  convallislorems ipsum nosturd sit amet.</p>
  </div>

<div className="">
<div className="flex justify-between w-full pb-4">
   <img src={sweetone} alt="" />
   <img src={sweettwo} alt="" />
   <img src={sweetthree} alt="" />
</div>

<div className="flex justify-between w-full">
   <img src={sweetfour} alt="" />
   <img src={sweetfive} alt="" />
   <img src={sweetsix} alt="" />
</div>
</div>


</Container>
  )
}

export default Bloglast