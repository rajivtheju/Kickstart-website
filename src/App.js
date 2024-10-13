import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';
import Ctutorial from './data/Ctutorial';
import Pythontutorial from './data/Python';
import Javatutorial from './data/Java';
import Cplus from './data/Cplus';
import Compiler from './components/Compiler/Compiler';
import Features from './components/Mainpage/Features';
import Footer from './components/Mainpage/Footer';
import Trpage from './components/TRquestions/TRpage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Mainpage/>} />
        <Route path="/page1" element={<Ctutorial />} />
        <Route path="/page2" element={<Pythontutorial />} />
        <Route path="/page3" element={<Javatutorial />} />
        <Route path="/page4" element={<Cplus />} />
        <Route path="/compiler" element={<Compiler/>}/>
        <Route path='/trquestions' element={<Trpage/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
