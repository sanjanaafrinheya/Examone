import React from 'react'
import Container from './Container'
import bottomlogo from "./assets/bottomlogo.png"
const Contact = () => {
  return (
<div className="">
    <div className="text-center">
<h2 className='text-[52px] font-bold mt-24'>Subscribe for office</h2> 
<p className='text-[18px]'>Subscribe for early access offers, discounted rates, and you can cancel at any time.</p>
<button className='text-[red] text-[24px] font-bold'>Enter Your Email....</button>
    </div>

    <div className="bg-[black] py-24 ">
        <Container>
         <div className="flex">
         <div className="w-[20%]">
                <img src={bottomlogo} alt="" />
            </div>
            <div className="w-[40%] px-24">
                  <h3>Service Hours</h3>
                  <h4 className=' font-bold text-[white]'>Monday to Friday : 09:00am to 07:00pm
Saturday : 10:30am to 04:00pm
Sunday : On Demand

We Are Social</h4>
            </div>
            <div className="w-[40%] px-24">
                <h4 className='text-[white]'>Contact Us
25 Avada Avenue, FL 12340 USA
catering@myavada-domain.com


Need our services? Call Today!
1 (900) 123 4567
</h4>
            </div>
         </div>
         <h4 className='text-[white] py-10 text-center'>© 2012 - 2022 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by WordPress</h4>
        </Container>
    </div>
</div>


  )
}

export default Contact