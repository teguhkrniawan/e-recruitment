import React, { useState } from 'react'
import Navbar from '../components/fragments/Navbar'
import Breadcumps from '../components/elements/Breadcumps'
import Footer from '../components/fragments/Footer'
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl';
import { Marker } from 'react-map-gl';
import { FaPhone, FaEnvelopeOpen, FaHouse, FaInstagram, FaFacebookF, FaInternetExplorer } from "react-icons/fa6";

const ContactPage = () => {

    const token = import.meta.env.VITE_MAPBOX_TOKEN;
    const [viewPortMap, setViewPortMap] = useState({
        latitude: 28.6448,
        longitude: 77.216,
        zoom: 6
    })

    return (
        <>
            <div className="flex flex-col homepage hidden sm:flex">
                {/* Navbar */}
                <Navbar />

                <section className="h-100 mt-[60px]">
                    <div className="container mx-auto px-[80px] py-[20px]">
                        {/* Breadcump */}
                        <Breadcumps text={'Hubungi Kami'} />

                        {/* Card Container */}
                        <div className="max-w-full w-full sm:flex sm:max-w-full flex-col mt-5 py-5 px-5 shadow-b shadow-e shadow-md">
                            <h3>Hubungi Kami</h3>

                            <div className="flex flex-col h-screen">
                                <div className="w-full h-[60%] mt-5 map-container">
                                    <Map
                                        mapboxAccessToken='pk.eyJ1IjoidGVndWhrcm5pYXdhbiIsImEiOiJja2hmd25md28wd2oyMnhwaml3b3RjNzg3In0.XHEpejPFIX5feWbRVMyvxg'
                                        initialViewState={{
                                            latitude: -6.234616506306485,
                                            longitude: 106.82281529932852,
                                            zoom: 16
                                        }}
                                        style={{ position: 'relative' }}
                                        mapStyle="mapbox://styles/mapbox/streets-v9"
                                    >
                                        <Marker
                                            latitude={-6.234616506306485}  // Ganti dengan nilai latitude yang diinginkan
                                            longitude={106.82281529932852}  // Ganti dengan nilai longitude yang diinginkan
                                        >
                                            <img src="/images/location.png" alt="lokasi" width={'30px'} />
                                        </Marker>
                                    </Map>

                                    {/* Contact Page */}
                                    <div className='p-5 bg-gray-200 w-[50%] mt-5'>
                                        <h3 className='font-medium'>HUBUNGI KAMI MELALUI CONTACT DIBAWAH INI</h3>
                                        <div className='text-sm mt-3 gap-[5px] flex flex-col'>
                                            <div className="flex items-center">
                                                <FaPhone className='me-3' /> 0382 82387 11
                                            </div>
                                            <div className="flex items-center">
                                                <FaEnvelopeOpen className='me-3' /> help@ojk.go.id
                                            </div>
                                            <div className="flex items-center">
                                                <FaHouse className='me-3' /> Kemang 89 Building, Jalan Raya Kemang 89, Jakarta
                                            </div>
                                            <div className="flex items-center mt-5">
                                                <div className="me-5 flex items-center">
                                                    <FaInstagram className='me-2'/> ojkindonesia
                                                </div>

                                                <div className="me-5 flex items-center">
                                                    <FaFacebookF className='me-2'/> ojkindonesia
                                                </div>

                                                <div className="me-5 flex items-center">
                                                    <FaInternetExplorer className='me-2'/> ojk.go.id
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            <section className="homepage-mobile sm:hidden">
                <div className="flex justify-center items-center min-h-screen text-xl">
                    Please open in desktop mode
                </div>
            </section>
        </>
    )
}

export default ContactPage