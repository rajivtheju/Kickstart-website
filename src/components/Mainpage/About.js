import React, { Fragment } from 'react'
import './About.css'
import rajiv from './rajiv.jpg'
const About = () => {
  return (
    <Fragment>
            <center>  <h1 className='heading'>ABOUT</h1></center>

    <div className='about ap' style={{display:'flex'}}>
<div className='about1'>
<img src={rajiv} className='about-i'/>
</div>
<div className='about2'>
<p className="about-bio">
            I am <span style={{color:"darkblue", fontSize:"30px" ,}}>Rajiv Muddukuppam</span> <br/> an aspiring Frontend Developer in my final year of BTech in Electrical and 
            Communication Engineering at Chadalawada Ramanamma Engineering College, Tirupati. Fueled by a passion 
            for crafting stunning, user-centric web experiences, I thrive on turning complex problems into elegant
             solutions. With a knack for innovative design and a relentless drive to stay ahead of the tech curve,
              I'm eager to take on new 
            challenges and contribute to transformative projects. Let's build the future of the web together!
            </p>
</div>

      
    </div>
    </Fragment>
  )
}

export default About
