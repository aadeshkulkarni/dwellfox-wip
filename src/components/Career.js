import React, { useState } from 'react'
import { motion } from "framer-motion"
// import Splashscreen from './common/Splashscreen'
//import sendEmail from '../utils/email';
// import Particles from 'react-tsparticles';
// import particle from '../particles/particles.json'

const Career = ({setShowToast}) => {
    const [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        file: null,
        information: ''
    })
    const [error, setError] = useState({
        fullName: 0,
        email: 0,
        phone: 0,
        file: 0,
        information: 0
    })

    const inputChanged = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }

    const submitForm = async () => {
        let newError = {}
        let hasError = false;
        if (data.fullName === '') {
            newError.fullName = 1; hasError = true;
        }
        if (data.email === '') {
            newError.email = 1; hasError = true;
        }
        if (data.phone === '') {
            newError.phone = 1; hasError = true;
        }
        if (data.information === '') {
            newError.information = 1; hasError = true;
        }
        if (hasError) {
            setError(newError)
        }
        else {
            setShowToast(true)
        }
    }
    return (
        <>
            {/* <Particles
                className='fixed -z-0'
                params={particle}
            /> */}
            <motion.section exit={{ opacity: 0 }} id="career" className="pt-16">
                {/* <Splashscreen showText={false} /> */}
                <h1 className="p-4 text-3xl tracking-widest text-center text-white uppercase border-t border-b border-gray-700 lg:hidden">Careers</h1>
                <div className="grid w-full h-full text-black bg-gray-900 bg-opacity-50 lg:p-8 lg:grid-cols-2 sm:grid-cols-1 z-999">
                    <div className="flex flex-col items-center justify-center text-white">
                        <h1 className="p-4 text-3xl tracking-widest">Shine, and rise.</h1>
                        <p className="w-4/5 leading-8 text-justify lg:w-3/5 text-md">We aspire to push the boundaries, creating significant ideas, products and services at the forefront, in an environment where our people can thrive and are not constrained by convention. Thanks to successful collaborations with many of the world’s most prestigious organisations, Dwellfox is entrusted with business across products and services, communications and commerce.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full lg:p-8">
                        <p className="p-2 text-lg text-white">Apply</p>
                        <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                            <label className="px-2 text-white">Full Name</label>
                            <input name='fullName' autocomplete="off" onChange={inputChanged} value={data.firstName} />
                            {error.name ? <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* First name is mandatory</label> : ""}
                        </div>
                        <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                            <label className="px-2 text-white">E-mail</label>
                            <input name='email' autocomplete="off" onChange={inputChanged} value={data.email} />
                            {error.email ? <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* email is mandatory</label> : ""}
                        </div>
                        <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                            <label className="px-2 text-white">Phone</label>
                            <input name='phone' autocomplete="off" onChange={inputChanged} value={data.phone} />
                            {error.phone ? <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* Phone is mandatory</label> : ""}
                        </div>
                        <div className="flex flex-col w-4/5 pt-2 lg:w-3/5">
                            <label className="px-2 text-white">Document upload</label>
                            <input name='file' onChange={(e) => { setData({ ...data, file: e.target.files[0] }) }} className="w-full p-3 my-2 tracking-wide text-white border border-gray-300 rounded-sm outline-none text-md" type="file" />
                            {error.file ? <label className="p-2 pt-1 pb-4 text-xs font-light text-red-500">* Document is mandatory</label> : ""}
                        </div>
                        <div className="grid w-4/5 grid-cols-1 lg:w-3/5 lg:gap-4 lg:grid-cols-1">
                            <label className="px-2 text-white">Additional Information</label>
                            <textarea name='information' onChange={inputChanged} value={data.information} className="w-full p-3 my-2 border border-gray-300 rounded-sm outline-none text-md" />
                        </div>
                        <div className="px-4 my-2 lg:gap-4">
                            <button onClick={submitForm}>Send Application</button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Career