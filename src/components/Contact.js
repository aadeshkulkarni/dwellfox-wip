import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div class="w-full h-full grid lg:grid-cols-2 sm:grid-cols-1">
                <div class="flex flex-col justify-center items-center text-white">
                    <p className="tracking-widest text-md">Address:</p>
                    <p className="tracking-widest text-md">99 Wall Street Suite 4449</p>
                    <p className="tracking-widest text-md">New York, NY 10005</p>
                    <p className="tracking-widest text-md">United States</p>
                    <p className="tracking-widest text-md">Phone: (989) 848-4999 Ext - 402</p>
                    <p className="tracking-widest text-md">Email: info@dwellfox.com</p>
                </div>
                <div class="flex flex-col justify-center items-center p-2">
                    <h1 className="text-xl p-2 tracking-widest text-white">Let's connect</h1>
                    <input className="lg:p-4 p-3 lg:w-3/5 w-full m-2 rounded-lg outline-none border border-gray-300" placeholder="Your name" />
                    <input className="lg:p-4 p-3 lg:w-3/5 w-full m-2 rounded-lg outline-none border border-gray-300" placeholder="Your email" />
                    <input className="lg:p-4 p-3 lg:w-3/5 w-full m-2 rounded-lg outline-none border border-gray-300" placeholder="Subject" />
                    <textarea className="lg:p-4 p-3 lg:w-3/5 w-full m-2 rounded-lg outline-none border border-gray-300" placeholder="Message"></textarea>
                    <button className="z-60 py-4 lg:w-3/5 w-full m-2 text-white px-6 rounded-lg bg-pink-600 tracking-widest uppercase font-light shadow-lg cursor-pointer outline-none border-0">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Contact