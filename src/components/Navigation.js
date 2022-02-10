import React, { useState } from 'react'

const Navigation = () => {
    const [isOpen, setMenuState] = useState(false);
    const menuClicked = () => {
        setMenuState(!isOpen)
    }
    return (
        <>
            {isOpen ? <nav className="sm:block lg:hidden bg-gray-900 h-screen w-full text-white flex flex-col justify-center items-center fixed top-0 left-0 overflow-hidden z-50">
                <div className="absolute top-4 right-6 text-4xl font-extralight" onClick={menuClicked}>X</div>
                <h1 className="text-3xl p-4 m-4">Dwellfox</h1>
                <ul className="w-4/5">
                    <li className="block m-4 p-4 text-center tracking-widest uppercase border-b border-gray-800"><a href="#home" onClick={menuClicked}>Home</a></li>
                    <li className="block m-4 p-4 text-center tracking-widest uppercase border-b border-gray-800"><a href="#about" onClick={menuClicked}>About</a></li>
                    <li className="block m-4 p-4 text-center tracking-widest uppercase border-b border-gray-800"><a href="#service" onClick={menuClicked}>Service</a></li>
                    <li className="block m-4 p-4 text-center tracking-widest uppercase border-b border-gray-800"><a href="#contact" onClick={menuClicked}>Contact</a></li>
                </ul>
            </nav> :
                <nav className="sm:block lg:hidden bg-gray-900 w-full text-white flex items-center fixed top-0 left-0 z-10 backdrop-opacity-90">
                    <div className="text-xl inline-block p-4 uppercase tracking-widest w-2/4">Dwellfox</div>
                    <div className="flex justify-end w-2/4 mr-4">
                        <svg onClick={menuClicked} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" /></svg>
                    </div>
                </nav>}
            <nav className="hidden sm:block bg-gray-900 w-full text-white fixed top-0 left-0 z-10 backdrop-opacity-90">
                <div className="flex items-center ">
                    <div className="text-3xl inline-block p-4 uppercase tracking-widest w-2/4">Dwellfox</div>
                    <div className="flex justify-end w-2/4">
                        <span className="m-2 px-6 text-center tracking-widest uppercase"><a href="#home" onclick="return loadHome();">Home</a></span>
                        <span className="m-2 px-6 text-center tracking-widest uppercase"><a href="#about">About</a></span>
                        <span className="m-2 px-6 text-center tracking-widest uppercase"><a href="#service" onclick="return loadService();">Service</a></span>
                        <span className="m-2 px-6 text-center tracking-widest uppercase"><a href="#contact">Contact</a></span>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navigation