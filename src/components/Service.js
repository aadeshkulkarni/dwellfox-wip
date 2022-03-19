import React from 'react'
// import Splashscreen from './common/Splashscreen';
import analytics from '../assets/analytics.svg';
import consulting from '../assets/consulting.svg';
import appService from '../assets/app-services.svg';
import integration from '../assets/integration.svg';
import bpo from '../assets/bpo.svg';
// import innovation from '../assets/innovation.svg';
import staff from '../assets/staff.svg';
import FadeInWhenVisible from './common/FadeInWhenVisible';
import GradientContainer from './common/GradientContainer';
import star from '../assets/star.png';
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'

function Card({ title, description, img, index }) {
  return (
    <FadeInWhenVisible delay={0}>
      <div className={`rounded-xl grid grid-cols-1 gap-4 lg:p-0 bg-white text-gray-900`}>
      <div className="flex items-center justify-center">
          <img src={img} alt={title} className="h-48 lg:h-72" />
        </div>
        <div className="flex flex-col justify-center p-2 px-4 border-t border-gray-200 lg:pl-8">
          <span className="block mb-4 text-xl uppercase lg:text-2xl">{title}</span>
          <span className="text-sm font-light leading-5 text-justify text-gray-800">{description}</span>
          {/* <a href="#" className="p-2 underline font-extralight underline-offset-4">View more</a> */}
        </div>
        <div className="p-4 border-t border-gray-200 lg:pl-8">
          <span>Client Rating: </span>
          <img src={star} className="inline w-4 h-4 mx-1"/>
          <img src={star} className="inline w-4 h-4 mx-1"/>
          <img src={star} className="inline w-4 h-4 mx-1"/>
          <img src={star} className="inline w-4 h-4 mx-1"/>
          <img src={star} className="inline w-4 h-4 mx-1"/>
        </div>
        </div>
    </FadeInWhenVisible>
  );
}

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: staff,

    },
    {
      title: 'Kronos Consulting',
      description: 'simplifies the tedious tasks involved with monitoring employee time and attendance, labor tracking, and data collection. It is one of the most reliable and majorly used workforce management tool in the companies.',
      img: analytics,

    },
    {
      title: 'Python Development',
      description: 'Python is one of the most powerful programming language. Being a powerful programming language most of the website applications are developed on it. It is also known and majorly used for being one of the secured programming language in the IT sector.',
      img: consulting,

    },
    {
      title: 'Oracle/ERP Consulting',
      description: 'Enterprise Resource Planning training is an essential and vital part of maintenance for the technical experts. To raise the company to the expected heights the basic efforts play a significant role.',
      img: appService,

    },
    {
      title: 'QA Automation Testing',
      description: 'Automation Testing is done for assuring the quality of the software. It saves most of the time by automating. You will get the accuracy in the testing process. In manual testing, the individual has to be physically.',
      img: integration,

    },
    {
      title: 'ETL / DBA Management',
      description: 'The database management is the vital responsibility of the organization. The company should have the assurance and security check for database security. It is the primary duty and responsibility of the company.',
      img: bpo,

    }
  ]
  return (
    <section id="service" className="w-full pt-20 overflow-y-auto bg-gray-900 bg-opacity-50">
      {/* <Splashscreen showText={false} /> */}

      <div className="w-11/12 m-auto lg:w-8/12">
        <h1 className="p-4 text-xl tracking-widest text-center text-white uppercase border-t border-b border-gray-700 lg:text-3xl">Services</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {services.length > 0 && services.map((service, index) => (
          <Card title={service.title} key={service.title} img={service.img} description={service.description} index={index} />
        ))}
        </div>
      </div>
      {/* <Particles
        params={particle}
      /> */}
    </section>
  )
}

export default Service