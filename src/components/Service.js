import React from 'react'

const Service = () => {
    const services = [
        {
            title: 'Web development',
            description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
            img: 'https://media.istockphoto.com/photos/adapting-a-brand-strategy-to-suit-her-companys-target-market-picture-id1283021188?s=2048x2048'
        },
        {
            title: 'Web development',
            description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
            img: 'https://media.istockphoto.com/photos/adapting-a-brand-strategy-to-suit-her-companys-target-market-picture-id1283021188?s=2048x2048'
        }, 
        {
            title: 'Web development',
            description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
            img: 'https://media.istockphoto.com/photos/adapting-a-brand-strategy-to-suit-her-companys-target-market-picture-id1283021188?s=2048x2048'
        },
        {
            title: 'Web development',
            description: 'Web development is the result of the most innovative and creative minds. Also, it plays a major role in growing the business online. Today, many IT companies in the market are providing training services in this particular area.',
            img: 'https://media.istockphoto.com/photos/adapting-a-brand-strategy-to-suit-her-companys-target-market-picture-id1283021188?s=2048x2048'
        }

    ]
    return (
        <section id="service" className="service-section">
            <div className="p-2 lg:grid lg:grid-cols-3 lg:gap-4 sm-flex sm:flex-wrap sm:m-auto">
                {services.length > 0 && services.map(service =>
                    <div className="w-full text-white flex flex-col justify-center items-center border-2 border-gray-700 rounded-lg bg-gray-900 mb-2">
                        {/* <img className="w-48 p-2" src={service.img} alt={service.title}/> */}
                        <h1 className="text-xl p-2 tracking-widest">{service.title}</h1>
                        <p className="text-md p-2 px-6 tracking-wider">{service.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Service