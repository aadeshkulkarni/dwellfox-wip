import React from 'react'
import { motion } from "framer-motion"
import Splashscreen from './common/Splashscreen'
import FadeInWhenVisible from './common/FadeInWhenVisible'
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'
const About = () => {
    return (
        <>
        {/* <Splashscreen showText={false} /> */}
        <motion.section exit={{opacity:0}}  id="about" className="flex flex-col items-center justify-center h-screen p-4 text-white bg-transparent">
        <h1 className="p-4 text-3xl tracking-widest text-center text-white uppercase border-t border-b border-gray-700 lg:hidden">About</h1>
            <div className="block m-16"></div>
            <div className="rounded-md lg:p-8 lg:bg-opacity-60 lg:w-3/5">
                <FadeInWhenVisible>
                    <p className="mb-8 text-sm tracking-wide text-justify lg:text-lg lg:leading-8"><span className="text-xl tracking-widest text-primary-400">Dwellfox</span> - One of the leading IT Consulting firm in USA. We offer a wide range of services with the object of advancement and innovation in the IT industry. We offer enterprise-class IT and software development services to a variety of organisations. We are a technology powerhouse geared to add value to the digital ecosystem via agile web and mobile app development services. Apart from this, we specializes in accounting, recruitment, data management and software training.</p>
                </FadeInWhenVisible>
                
                <FadeInWhenVisible delay={1}>
                <p className="mb-8 text-sm tracking-wide text-justify lg:text-lg lg:leading-8">
                    Technology has supported us in reaching the heights of development at a super-fast pace. Our idea of establishing the best IT company has happened with the keen knowledge of our expertise. At Dwellfox, we want to be your end to end IT service organization, big enough to undertake your largest project, yet small enough to maintain the loyalty and the intimacy of a boutique firm and in turn contribute greatly to your success.</p>
                    </FadeInWhenVisible>
            </div>
            {/* <Particles
        params={particle}
      /> */}
        </motion.section>
        </>
    )
}

export default About