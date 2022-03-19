import { useEffect, useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Career from './components/Career';
import Splashscreen from './components/Splashscreen/Splashscreen';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Service from './components/Service';
import execute3DCode from './utils/three'
import Toast from './components/common/Toast';
// import { AnimatePresence } from "framer-motion";
// import {
//   // BrowserRouter as Router,
//   // Routes,
//   // Route
// } from "react-router-dom";
function App() {
  const [splash,setSplash]=useState(true);
  const [showToast,setShowToast]=useState(false);
  const canvasRef = useRef(null);
  useEffect(() => {
    if(!splash){
      execute3DCode(canvasRef);
    }
  }, [splash])
  return (
    <>
    {splash ? <Splashscreen setSplash={setSplash}/>:
    <>
    { showToast ? <Toast show={showToast} setShowToast={setShowToast}/>:''}
    <div ref={canvasRef} className="absolute top-0 left-0" id="shapes"></div>
    
      {/* <Router> */}
      <div className="absolute top-0 left-0 z-10 w-full"  >
          <Nav />

          {/* <AnimatePresence exitBeforeEnter> */}
          {/* <Routes>
            <Route path="/" element={<Home canvasRef={canvasRef} />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}

          <Home />
          <About />
          <Service />
          <Career setShowToast={setShowToast}/>
          <Contact setShowToast={setShowToast}/>

          <footer className="p-4 text-sm tracking-wide text-center text-white border-t border-gray-800">
            Copyright 2022 | Dwellfox | All rights reserved
          </footer>

          {/* </AnimatePresence>  */}
        </div>
        {/* <Particles
        params={particle}
      /> */}
      {/* </Router> */}
      </>
    }
    </>

  );
}

export default App;
