import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Intropage from './Intropage';
import About from './About';
import Ctutorial from '../../data/Ctutorial';
import Pythontutorial from '../../data/Python';
import Javatutorial from '../../data/Java';
import Cplus from '../../data/Cplus';
import './Mainpage.css';

// Import your images
import img1 from './images/c.jpg';
import img2 from './images/A Quick Way to Build Applications in Python.jpg';
import img3 from './images/Why you should go to java bootcamp.jpg';
import img4 from './images/Introduction to C++ Programming - For beginners.jpg';
import img5 from './images/editor-bro.png'
import img6 from './images/tr.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import Features from './Features';
import template1 from './images/t1.png';
import template2 from './images/t2.png';
import template3 from './images/t3.png';
import Button from './Button';
import Contact from './Contact';

const tutorials = [
  { path: '/page1', imgSrc: img1, altText: 'C Tutorial', heading: "Basics of C programming for beginners" },
  { path: '/page2', imgSrc: img2, altText: 'Python Tutorial', heading: "Basics of Python programming for beginners" },
  { path: '/page3', imgSrc: img3, altText: 'Java Tutorial', heading: "Basics of Java programming for beginners" },
  { path: '/page4', imgSrc: img4, altText: 'C++ Tutorial', heading: 'Basics of C++ programming for beginners' },
];

const Mainpage = () => {
  return (
    <div>
      <Navbar />
      <Intropage />
      
{/* _______________________________________________________services______________________________________________________ */}
<Features/>
      {/* _________________________________________course page_____________________________________________ */}
      <div className='course'>
     <div>
        <div className="image-gallery">
        <div className='c-info'style={{width:'83%'}}>
        <h1 className='mainhead' style={{fontSize:'40px'}}>Our courses</h1>
        <p className='mainpara'>don't let go this opurtunity to see how you can upgrade your skills-set<br/>from the scracth , learn and practice in a one place</p>
      </div>
          {tutorials.map((tutorial, index) => (
            <div className='course-box' key={index}>
              <img src={tutorial.imgSrc} alt={tutorial.altText} className='c-image' />
              <p className='c-heading'>{tutorial.heading}</p>
              <Link to={tutorial.path}>
                <div className='c-icon'>
                  <div className='c-icon1'>
                    <MDBIcon fas icon="users" />
                    <p className='c-icontext'>easy to learn</p>
                  </div>
                </div>
                <button className='c-button'>Learn More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* ___________________________________________________tillu_________________________________________________ */}
   
    <div className='compiler'>
      <div className='c-box'>
      <img src={img5} className='tillu'/>
      </div>
      <div className='c-box'>
        <h1 className='c-head'>Meet "TILLU" our code editor</h1>
        <p>Tillu is an online code editor that allows users to write, compile,
           and run C, C++, Python, and Java programs seamlessly.
        </p>
        <li className='c-li'>Multi-language Support</li>
        <p>Tillu supports C, C++, Python, and Java, enabling users to code and compile programs in multiple programming languages within a single platform</p>

        <li className='c-li'>Real-time Collaboration</li>
        <p>Users can collaborate in real-time, allowing multiple developers to work together on the same codebase, enhancing productivity and teamwork.</p>
<Link to='/compiler'>
<button className='compiler-button'>Practice coding</button></Link>
        </div>
    </div>
    
   {/* -----------------------------------------------------interview questions-------------------------------------------------------- */}
    <div className='interview'>
      <div className='ibox1'>
        <h1 className=''>Have a look on <br/> interview questions</h1>
        <p style={{color:'whitesmoke'}}>Prepare for your next technical interview with our 
          curated set of 100 questions across C, C++, Java, JavaScript, SQL, HTML, and CSS, designed to enhance your coding skills and boost your confidence.</p>
         <Link to='/trquestions'>
          <button className='ibutton'> prepare now</button>
          </Link>
      </div>
      <div className='ibox2'> 
<img src={img6} className='i-img'/>

      </div>
    </div>
    
    {/* __________________________________________________________resume__________________________________________________________________ */}
    <div className='resume'>
    <center> <h1>Make your Resume ATS friendly</h1>
       <p style={{textAlign:'center'}}>In nowadays ATS resumes are most demanding  ones , make your resume ats friendly with this Overleaf resume templates ,<br/>
       Overleaf is an online collaborative LaTeX editor that allows users to write, edit, and publish scientific documents seamlessly.
       </p>
       </center>
      <div className='templatebox'>
     
        <div className='template1'>
          <img  src={template1} className='resume-img'/>
          <center>
          <Button url="https://www.overleaf.com/latex/templates/ats-friendly-technical-resume/yrhtcnjyzgsf
" buttonText="Edit here" />
</center>
        </div>
        <div className='template1'>
        
        <img  src={template2} className='resume-img'/>
       <center>
        <Button url="https://www.overleaf.com/latex/templates/design-your-cv/kmdhhtckdwkm
" buttonText="Edit here" />
</center>
        </div>
        <div className='template1'>
        <center>
        <img  src={template3} className='resume-img'/>
        <Button url="https://www.overleaf.com/latex/templates/70-plus-ats-rating-resume-template/ssprfsctyddz" buttonText="Edit here" />
        </center>
        </div>
      </div>
    </div>
    <Contact/>
    </div>
  );

}

export default Mainpage;
