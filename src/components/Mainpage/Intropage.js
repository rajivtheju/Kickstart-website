import React, { Fragment } from 'react'
import Button from './Button'
import code from './Coding workshop-amico.png'
import { MDBIcon } from 'mdb-react-ui-kit'
import './About.css'
const Intropage = () => {
  return (
    <Fragment>
      <div className='intropage'>
        <div className='intro-heding'>
            <center>
               <h1> "A perfect Student Should be a Proper User"</h1> 
               <p style={{textAlign:'center'}} className='par'>
               Kickstart is specially designed for beginners to start your journey from scratch in programming.<br/>
Not only for learning, Kickstart also provides a platform to practice coding, prepare for technical interviews, and build resumes.<br/>Stay connected with us 
               </p>
               <Button url="https://chat.whatsapp.com/LL9XADlpATjIIcYQIVgg4U" buttonText="join us in Whatsapp "  />
      <Button url="https://t.me/+-6DEjOBnFrQ0MDhl" buttonText="join us in Telegram " /><br/>
      <img src={code} className='mainimg'/>
            </center>
        </div>
        <center>
        {/* <div className='service-div'>
            <div className='service'>
            <MDBIcon fas icon="file-code" />
            <p className='desc'> code & practice</p>
            </div>

            <div className='service'>
            <MDBIcon fas icon="file-code" />
            <p className='desc'> code & practice</p>
            </div>

            <div className='service'>
            <MDBIcon fas icon="file-code" />
            <p className='desc'> code & practice</p>
            </div>
        </div> */}
        </center>
        </div>
        </Fragment>
   
  )
}

export default Intropage
