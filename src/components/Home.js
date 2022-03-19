// import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
// import Splashscreen from './common/Splashscreen'
import FadeInWhenVisible from './common/FadeInWhenVisible'
import downArrow from '../assets/down-arrow.svg'


const Home = () => {
    const handleDown=(e)=>{ 
        e.preventDefault();
        window.location.href='#about';
    }
    return (
        <motion.section  exit={{ opacity: 0 }} id="home" className="relative">
            <Carousel stopOnHover={false} showIndicators={true} showStatus={false} showThumbs={false} showArrows={false} className="relative w-full h-screen bg-transparent" infiniteLoop={false} autoPlay={true} emulateTouch={true} swipeable={true} interval={6000} transitionTime={500}>
                <div className="absolute grid w-full h-screen text-gray-100 lg:grid-cols-2 lg:gap-1">
                    <div className="flex flex-col items-center justify-center ">
                        <FadeInWhenVisible once={false} delay={0}><h1 className="p-4 mt-12 text-5xl font-bold tracking-widest uppercase lg:text-7xl lg:mt-0">LEAD</h1></FadeInWhenVisible>
                        <FadeInWhenVisible once={false} delay={1}><h2 className="p-4 text-4xl font-thin tracking-widest uppercase lg:text-6xl">WITH</h2></FadeInWhenVisible>
                        <FadeInWhenVisible once={false} delay={2}><h1 className="p-4 text-5xl font-bold tracking-widest uppercase lg:text-7xl">CHANGE</h1></FadeInWhenVisible>
                    </div>
                    <div className="hidden lg:block">

                    </div>
                </div>
                <div className="grid w-full h-screen text-gray-100 lg:grid-cols-2 lg:gap-1">
                    <div className="flex flex-col items-center justify-center">
                    <FadeInWhenVisible once={false} delay={0}><h1 className="mt-12 mb-4 text-4xl font-bold tracking-widest uppercase lg:text-5xl lg:mt-0">You're an expert.</h1></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={1}><h1 className="mt-8 mb-4 text-4xl font-bold tracking-widest uppercase lg:text-5xl lg:mt-0">So are we</h1></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={1}><h1 className="p-4 font-light leading-8 tracking-widest text-md">Find a top quality, specialized consultant today</h1></FadeInWhenVisible>
                    </div>
                </div>
                <div className="grid w-full h-screen text-gray-100 lg:grid-cols-2 lg:gap-1">
                    <div className="flex flex-col items-center justify-center">
                    <FadeInWhenVisible once={false} delay={0}><h1 className="mt-12 mb-4 text-4xl font-bold tracking-widest uppercase lg:text-5xl lg:mt-0">Who are we?</h1></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={1}><p className="p-8 font-light leading-8 tracking-widest">Dwellfox's main objective is to support the personnel and provide a high quality of IT services to the clients. Our practical skills with great market knowledge help to analyze the needs and preferences of the customers. Give priority and preference to the talent and skills and provide the relevant platform for the same.</p></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={2}><p className="hidden p-8 font-light leading-8 tracking-widest lg:visible">We aim to provide the perfect platform for the deserving candidates. So that they can refine their skills and prove to be an asset to the development of the company. This is the great contribution of the people towards the growth in the economy of the country. We tend to give sufficient employment opportunities to the people. Our way of working is quite outstanding and we take quick decisions.</p></FadeInWhenVisible>
                    </div>
                </div>
            </Carousel>
            <div className="flex items-center justify-center">
            <motion.img  
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 10 , duration: 1 }} src={downArrow} className="absolute w-8 h-8 p-2 text-white bg-transparent border-2 border-white rounded-full cursor-pointer bottom-24 lg:bottom:12 hover:border" onClick={handleDown} alt="Down arrow" /> 
            </div>
                
        </motion.section>
    )
}

export default Home