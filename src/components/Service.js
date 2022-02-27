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
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'

function Card({ title, description, img, index }) {
  return (
    <FadeInWhenVisible delay={0}>
      <GradientContainer index={index}>
        <div className="flex flex-col justify-center p-4 text-white lg:pl-8">
          <span className="block p-2 mb-4 text-2xl tracking-wider uppercase">{title}</span>
          <span className="p-2 text-sm leading-5 tracking-widest text-justify">{description}</span>
          {/* <a href="#" className="p-2 underline font-extralight underline-offset-4">View more</a> */}
        </div>
        <div className="flex items-center justify-center">
          <img src={img} alt={title} className="h-48 p-4 lg:h-72" />
        </div>
      </GradientContainer>
    </FadeInWhenVisible>
  );
}

const Service = () => {
  const services = [
    {
      title: 'IT Staffing',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: staff,

    },
    {
      title: 'Automation',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: analytics,

    },
    {
      title: 'Technology Consulting',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: consulting,

    },
    {
      title: 'End-to-end Application Services',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: appService,

    },
    {
      title: 'Systems integration',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: integration,

    },
    {
      title: 'Business process outsourcing',
      description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
      img: bpo,

    }
  ]
  return (
    <section id="service" className="w-full pt-20 overflow-y-auto bg-gray-900 bg-opacity-50">
      {/* <Splashscreen showText={false} /> */}

      <div className="w-11/12 m-auto z-999">
        <h1 className="p-4 text-3xl tracking-widest text-center text-white uppercase border-t border-b border-gray-700 lg:hidden">Our Services</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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