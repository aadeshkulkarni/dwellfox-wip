import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
    const [location, setLocation] = useState('home');
    // const location = useLocation();
    // const {pathname}=location
    //console.log(pathname)
    const [isOpen, setMenuState] = useState(false)
    const menuClicked = () => {
        setMenuState(!isOpen)
    }
    return (
        <>
            {isOpen ? <nav className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden text-white bg-gray-900 sm:block lg:hidden">
                <div className="absolute pr-4 text-4xl top-4 right-8 font-extralight" onClick={menuClicked}>X</div>
                <h1 className="p-4 m-4 text-3xl font-bold uppercase">Dwellfox</h1>
                <ul className="w-4/5">
                    <li className="block p-4 m-4 tracking-widest text-center uppercase border-b border-gray-800">
                        <a href="#home" onClick={() => { menuClicked(); setLocation('home') }}>Home</a>
                    </li>
                    <li className="block p-4 m-4 tracking-widest text-center uppercase border-b border-gray-800">
                        <a href="#about" onClick={() => { menuClicked(); setLocation('about') }}>About</a>
                    </li>
                    <li className="block p-4 m-4 tracking-widest text-center uppercase border-b border-gray-800">
                        <a href="#service" onClick={() => { menuClicked(); setLocation('service') }}>Service</a>
                    </li>
                    <li className="block p-4 m-4 tracking-widest text-center uppercase border-b border-gray-800">
                        <a href="#career" onClick={() => { menuClicked(); setLocation('career') }}>Career</a>
                    </li>
                    <li className="block p-4 m-4 tracking-widest text-center uppercase border-b border-gray-800">
                        <a href="#contact" onClick={() => { menuClicked(); setLocation('contact') }}>Contact</a>
                    </li>
                </ul>
            </nav> :
                <nav className="fixed top-0 left-0 z-10 flex items-center w-full p-4 text-white bg-gray-900 sm:block lg:hidden backdrop-opacity-90">
                    <div className="inline-block w-2/4 p-4 text-xl tracking-widest uppercase">Dwellfox</div>
                    <div className="flex justify-end w-2/4 mr-4">
                        <svg onClick={menuClicked} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" /></svg>
                    </div>
                </nav>}
            <nav className="fixed top-0 left-0 z-10 hidden w-full text-white bg-slate-900 bg-opacity-90 sm:block ">
                <div className="flex items-center ">
                    <div className="inline-block w-2/4 p-4 text-3xl font-bold tracking-widest uppercase">Dwellfox</div>
                    <div className="flex justify-end w-2/4">
                        <span className={`px-6 m-2 tracking-widest text-center uppercase ${location === 'home' && 'text-primary-400 font-extrabold'}`}>
                            {/* <Link to="" onClick="return loadHome();">Home</Link> */}
                            <a href="#home" onClick={() => setLocation('home')}>Home</a>
                        </span>
                        <span className={`px-6 m-2 tracking-widest text-center uppercase ${location === 'about' && 'text-primary-400 font-extrabold'}`}>
                            {/* <Link to="about">About</Link> */}
                            <a href="#about" onClick={() => setLocation('about')}>About</a>
                        </span>
                        <span className={`px-6 m-2 tracking-widest text-center uppercase ${location === 'service' && 'text-primary-400 font-extrabold'}`}>
                            {/* <Link to="service" onClick="return loadService();">Service</Link> */}
                            <a href="#service" onClick={() => setLocation('service')}>Service</a>
                        </span>
                        <span className={`px-6 m-2 tracking-widest text-center uppercase ${location === 'career' && 'text-primary-400 font-extrabold'}`}>
                            {/* <Link to="career" onClick="return loadService();">Career</Link> */}
                            <a href="#career" onClick={() => setLocation('career')}>Career</a>
                        </span>
                        <span className={`px-6 m-2 tracking-widest text-center uppercase ${location === 'contact' && 'text-primary-400 font-extrabold'}`}>
                            {/* <Link to="contact">Contact</Link> */}
                            <a href="#contact" onClick={() => setLocation('contact')}>Contact</a>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav