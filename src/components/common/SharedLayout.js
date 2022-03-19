import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './SharedLayout.css';
import Maps from '../../utils/Maps'
const API_KEY = 'AIzaSyBYNCambdq0zMxd9OkU0n6LVTM9Rgxunew'

const SharedLayout = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const addressLayout = (address) => (<div className="p-4 text-sm font-extralight">
        {address.split("|").map(item => <div className="py-1">{item}</div>)}
    </div>)
    const contactLayout = (contact) => (<div className="p-4 text-sm font-extralight">
        {contact}
    </div>)
    return (
        <div className="text-gray-100 bg-transparent sharedLayout-window">
            <nav>
                <ul className="grid grid-cols-2 text-center">
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={`text-xl p-4 uppercase tracking-widest font-bold cursor-pointer ${item === selectedTab ? "selected text-primary-400" : ""}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="w-full h-full"
                    >
                        {selectedTab && <div className="grid w-full h-full grid-rows-3 p-2">
                            <div className="row-span-2">
                                <Maps
                                    lat={selectedTab.lat}
                                    lng={selectedTab.lng}
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                    loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
                                    containerElement={<div style={{ height: `100%`, width: '100%' }} />}
                                    mapElement={<div style={{ height: `100%`, width: "100%" }} />}
                                />
                            </div>
                            <div className="row-span-1">
                                <div className="px-4 pt-4 pb-2 text-2xl tracking-wider uppercase min-h-32">{selectedTab.city}</div>
                                {addressLayout(selectedTab.address)}
                                {contactLayout(selectedTab.contact)}
                            </div>
                        </div>}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default SharedLayout