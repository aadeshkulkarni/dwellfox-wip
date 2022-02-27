// import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
// import Splashscreen from './common/Splashscreen'
import FadeInWhenVisible from './common/FadeInWhenVisible'
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'
// import whatsappIcon from '../assets/whatsapp.svg'

// const sentence = {
//     hidden: { opacity: 1 },
//     visible: {
//         opacity: 1,
//         transition: {
//             delay: 0.5,
//             staggerChildren: 0.08,
//         },
//     },
// }
// const letter = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0
//     }
// }
const Home = () => {
    return (
        <motion.section  exit={{ opacity: 0 }} id="home">
            <Carousel stopOnHover={false} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} className="relative w-full h-screen bg-transparent" infiniteLoop={true} autoPlay={true} emulateTouch={true} swipeable={true} interval={5000} transitionTime={500}>
                <div className="absolute grid w-full h-screen text-gray-100 lg:grid-cols-2 lg:gap-1">
                    <div className="flex flex-col items-center justify-center ">
                        <FadeInWhenVisible once={false} delay={0}><h1 className="p-4 mt-12 text-5xl font-bold tracking-widest uppercase lg:text-7xl lg:mt-0">LEAD</h1></FadeInWhenVisible>
                        <FadeInWhenVisible once={false} delay={1}><h2 className="p-4 text-4xl font-thin tracking-widest uppercase lg:text-6xl">WITH</h2></FadeInWhenVisible>
                        <FadeInWhenVisible once={false} delay={2}><h1 className="p-4 text-5xl font-bold tracking-widest uppercase lg:text-7xl">CHANGE</h1></FadeInWhenVisible>
                        <FadeInWhenVisible once={false} delay={3}>
                        <motion.button className="px-8 py-4 text-2xl" whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} >
                            Get Started
                        </motion.button>
                        </FadeInWhenVisible>
                    </div>
                    <div className="hidden lg:block">

                    </div>
                </div>
                <div className="grid w-full h-screen text-gray-100 lg:grid-cols-2 lg:gap-1">
                    <div className="flex flex-col items-center justify-center">
                    <FadeInWhenVisible once={false} delay={0}><h1 className="mt-12 mb-4 font-bold tracking-widest uppercase text-7xl lg:mt-0">You're an expert.</h1></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={1}> <h1 className="mt-8 mb-4 font-bold tracking-widest uppercase text-7xl lg:mt-0">So are we</h1></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={2}><p className="p-4 font-light leading-8 tracking-widest">Find a top quality, specialized consultant today</p></FadeInWhenVisible>
                    <FadeInWhenVisible once={false} delay={3}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex items-center justify-center"><span>Let's talk</span></motion.button>
                    </FadeInWhenVisible>
                    </div>
                </div>
            </Carousel>
            {/* <Particles
                params={particle}
            /> */}
            {/* <div className="hidden triggers">
                <span data-disabled="true" data-color="#3D8CD0">CLICK</span>
                <span data-disabled="true" data-color="#D32A7B">TO</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
                <span data-disabled="true" data-color="#2AD37A">SWITCH</span>
            </div> */}

        </motion.section>
    )
}

export default Home