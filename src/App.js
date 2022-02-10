import { useEffect, useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Service from './components/Service';
import execute3DCode from './utils/three'

function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    execute3DCode(canvasRef);
  }, [])
  return (
    <div class="app-container relative">
      <Navigation />
      <Home canvasRef={canvasRef} />
      <About />
      <Service/>
      <Contact/>
    </div>
  );
}

export default App;
