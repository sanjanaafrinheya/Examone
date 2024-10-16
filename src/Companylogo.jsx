import React from 'react'

import logoone from "./assets/logoone.png"
import logotwo from "./assets/logotwo.png"
import logothree from "./assets/logothree.png"
import logofour from "./assets/logofour.png"
import logofive from "./assets/logofive.png"
import Container from './Container'
const Companylogo = () => {
  return (
   <Container>
     <div className="flex justify-between items-center">
        <div className="">
            <img src={logoone} alt="" />
        </div>
        <div className="">
        <img src={logotwo} alt="" />
        </div>
        <div className="">
        <img src={logothree} alt="" />
        </div>
        <div className="">
        <img src={logofour} alt="" />
        </div>
        <div className="">
        <img src={logofive} alt="" />
        </div>
    </div>
   </Container>
  )
}

export default Companylogo