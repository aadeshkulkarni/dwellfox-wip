import React from 'react'

const Home = ({ canvasRef }) => {
    return (
        <section id="home">
            <div ref={canvasRef} id="shapes"></div>
            <div className="w-full h-screen absolute text-white grid lg:grid-cols-2 lg:gap-1">
                <div className="brand-container bg-gray-900 bg-opacity-20 ">
                    <h1>LEAD</h1>
                    <h2>WITH</h2>
                    <h1>CHANGE</h1>
                        
                    <button className="z-60 py-4 px-6 rounded-lg bg-pink-600 tracking-widest uppercase font-light shadow-lg cursor-pointer outline-none border-0">
                        Get Started
                    </button>
                    <div className="m-4 p-4 sm:bg-gray-900 lg:bg-transparent bg-opacity-20rounded-md">
                    <p className='tracking-widest font-light lg:p-4 lg:leading-8'>Leading IT staffing, consulting, business solution and systems integration firm with a unique blend of services. </p>
                    <p className='tracking-widest font-light lg:p-4 lg:leading-8 mt-4'>Dwellfox offers a broad range of IT services such as:
                        <ul className="mt-4">
                            <li className="text-md tracking-widest text-justify inter">Global IT staffing</li>
                            <li className="text-md tracking-widest text-justify inter">Professional consulting</li>
                            <li className="text-md tracking-widest text-justify inter">Systems analysis & development</li>
                            <li className="text-md tracking-widest text-justify inter">Systems integration</li>
                            <li className="text-md tracking-widest text-justify inter">Application Maintainence & support</li>
                        </ul>
                    </p>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
            <div className="triggers">
                <span data-disabled="true" data-color="#3D8CD0">CLICK</span>
                <span data-disabled="true" data-color="#D32A7B">TO</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
            </div>
        </section>
    )
}

export default Home