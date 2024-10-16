import React from 'react'
import Container from './Container'
import blogone from "./assets/blogone.png"
import blogtwo from "./assets/blogtwo.png"
import line from "./assets/line.png"
const Blog = () => {
  return (
   <div className="">
    <h2 className='text-[52px] font-bold text-center'>News & Articles</h2>
    <div className="">
        <Container>
            <div className="flex items-center justify-between gap-x-4">
                <div className="w-[50%]">
                    <img src={blogone} alt="" />
                    <h3 className='text-[30px] font-bold'>Outdoor Catering Discounts</h3>
                    <p className='text-[18px] font-normal'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
lorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet.</p>
                </div>
                <div className="w-[50%]">
                <img src={blogtwo} alt="" />
                <h3 className='text-[30px] font-bold'>Events Management Company</h3>
                <p className='text-[18px] font-normal'>Lorem ipsum dolor sit enim  consect aetur adipisicing  convallis
lorems ipsum nosturd sit amet lorem ipsum dolor sit enim  cons
ect aetur adipisicing  convallis lorems ipsum nosturd sit amet.</p>
                </div>
            </div>
            <div className="text-center p-4 ">
        <button className='text-[20px] text-[red]'>Read More News</button>
        <div className="">
            <img src={line} alt="" />
        </div>
    </div>
        </Container>

    

    </div>
   
   </div>
  )
}

export default Blog