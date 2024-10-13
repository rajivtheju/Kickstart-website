import React from 'react';
import img1 from './images/Code typing-bro (1).png';
import img2 from './images/Code typing-pana.png';
import img3 from './images/Interview-bro.png';
import img4 from './images/Online resume.png';
import img5 from './images/Business merger-amico.png'; // Add new image imports
import img6 from './images/Creative writing-pana.png';

import './Mainpage.css';

const features = [
  { imgSrc: img1, heading: 'Learning', description: 'Kickstart is specially designed for beginners to start your journey from scratch in programming.' },
  { imgSrc: img2, heading: 'Practice', description: 'Providing you the platform to practice coding and improve your skills.' },
  { imgSrc: img3, heading: 'Interview Preparation', description: 'Prepare for technical interviews with our top 100 hundred questions in each language.' },
  { imgSrc: img4, heading: 'Resume Building', description: 'Get help for building a strong resume with our editable resume templates from overleaf' },
  { imgSrc: img5, heading: 'Doubt Clarification', description: 'one to one doubt clarification  through whatsapp and telegram groups' },
  { imgSrc: img6, heading: 'Content writting', description: ' kickstart provides content writting service  from experts with minimal charges' },
 
];
const Features = () => {
  return (
    <div className='features'>
      <center>
        <h1 className='mainhead' >About us</h1>
        <p className='mainpara' style={{textAlign:'center'}}>
        Kickstart is the ultimate destination for aspiring programmers looking to embark on their coding journey. <br/>Designed with beginners in mind, Kickstart offers a comprehensive and engaging platform to help you start from scratch<br/> and reach new heights in the world of programming.
        </p>
        <div className='f-box-container'>
          {features.map((feature, index) => (
            <div className='f-box' key={index}>
              <img src={feature.imgSrc} alt={feature.heading} />
              <h2 style={{color:'darkblue'}}>{feature.heading}</h2>
              <p style={{textAlign:'center'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Features;
