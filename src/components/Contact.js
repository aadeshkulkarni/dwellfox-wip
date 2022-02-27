import React, { useState } from 'react'
import { motion } from "framer-motion"
// import Splashscreen from './common/Splashscreen'
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'
import SharedLayout from './common/SharedLayout'
import whatsappIcon from '../assets/whatsapp.svg'
import mailIcon from '../assets/mail.svg'

const tabs = [
    { city: 'Indore', contact: '+91 9757247020', label: 'India', address: `405, Apollo Premier, Vijay Nagar Square, |Indore, Madhya Pradesh 452010 , |India` },
    { city: 'New York', contact: '+91 9757247020', label: 'USA', address: `99 Wall Street Suite 4449|New York, NY 10005|United States` },
    { city: 'Abu Dhabi', contact: '+91 9757247020', label: 'UAE', address: `Coming soon` }
]
const Contact = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [error, setError] = useState({
        name: 0,
        email: 0,
        subject: 0,
        message: 0
    })
    const inputChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (e.target.value !== '') {
            setError({ ...error, [name]: 0 })
        }
        setData({ ...data, [name]: value })
    }

    const submitForm = async () => {
        let newError = {}
        if (data.name === '') newError.name = 1;
        if (data.email === '') newError.email = 1;
        if (data.subject === '') newError.subject = 1;
        if (data.message === '') newError.message = 1;
        setError(newError)
        // const response = await fetch('http://localhost:4000/api/contactForm', {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
        // console.log(response.json());
    }
    return (
        <motion.section className="pt-16 bg-gray-900 bg-opacity-50" exit={{ opacity: 0 }} id="contact">
            {/* <Splashscreen showText={false} /> */}
            {/* <Particles
                params={particle}
            /> */}
            <h1 className="p-4 text-3xl tracking-widest text-center text-white uppercase border-t border-b border-gray-700 lg:hidden">Contact us</h1>
            <div className="grid w-full h-full grid-cols-1 lg:p-8 lg:grid-cols-2">
                <div className="flex flex-col items-center justify-center p-4 text-gray-100 bg-transparent">
                    <SharedLayout tabs={tabs} />
                </div>

                <div className="flex flex-col items-center justify-center lg:p-2">
                    <h1 className="text-xl tracking-widest text-white">Let's get in touch</h1>
                    <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                        <label className="px-2 text-white">Name</label>
                        <input name='name' onChange={inputChanged} value={data.name} />
                        {error.name && <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* Name is mandatory</label>}
                    </div>
                    <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                        <label className="px-2 text-white">Email</label>
                        <input name='email' onChange={inputChanged} value={data.email} />
                        {error.email && <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* email is mandatory</label>}
                    </div>
                    <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                        <label className="px-2 text-white">Subject</label>
                        <input name='subject' onChange={inputChanged} value={data.subject} />
                        {error.subject && <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* Subject is mandatory</label>}
                    </div>
                    <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                        <label className="px-2 text-white">Message</label>
                        <textarea name='message' onChange={inputChanged} value={data.message} rows="4"></textarea>
                        {error.message && <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* Message is mandatory</label>}
                    </div>
                    <button onClick={submitForm} >Submit</button>
                    <div className="flex items-center justify-center w-full py-4 my-2 border-t border-gray-700">
                        <button className="flex items-center justify-between"><img src={whatsappIcon} alt="letstalk" className='inline w-6 h-6 mr-2'/> <span>Whatsapp</span></button>
                        <button className="flex items-center justify-between"><img src={mailIcon} alt="letstalk" className='inline w-6 h-6 mr-2'/> <span>Email</span></button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact