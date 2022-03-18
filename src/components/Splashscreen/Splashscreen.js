import React, { useEffect } from 'react'
import {init, initScene} from './utility'
import './splash.css'
const Splashscreen = ({setSplash}) => {

  useEffect(() => {
    init();
    initScene();
    setTimeout(()=>{
      setSplash(false)
    },3000)
  }, [])

  return (
    <form className="z-999">
      <div id="page">
        <div className="cover-container">

          {/* <main role="main" className="cover">
            <h1 className="cover-heading">DWELLFOX</h1>
            <p className="lead">
              <button id="trigger" type="submit" className="btn">Enter</button>
            </p>
          </main>

          <footer className="mt-auto mastfoot">
            <div className="inner">
              <p></p>
            </div>
          </footer> */}
        </div>
      </div>

      <canvas id="reveal-effect"></canvas>
      </form>
  )
}

export default Splashscreen