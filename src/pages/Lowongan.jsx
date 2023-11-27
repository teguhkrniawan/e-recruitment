import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'
import { Link } from 'react-router-dom'
import Breadcumps from '../components/elements/Breadcumps'
import ModalLowongan from '../components/elements/ModalLowongan'
import { useDispatch } from 'react-redux'
import { changeModal } from '../redux/slice/LowonganSlice'

const Lowongan = () => {

    const dispatch = useDispatch()
    
    return (
        <>
            <div className="flex flex-col homepage hidden sm:flex">
                {/* Navbar */}
                <Navbar />

                <section className="h-screen mt-[60px]">
                    <div className="container mx-auto px-[80px] py-[20px]">
                        {/* Breadcump */}
                        <Breadcumps text={'Lowongan'} />

                        {/* Card Container */}
                        <div className="max-w-full w-full sm:flex sm:max-w-full flex-col mt-5 py-5 px-5 shadow-b shadow-e shadow-md">
                            <h3>Lowongan</h3>

                            <div className="flex justify-center items-center flex-col">
                                <h3 className='text-sm'>Masa Pendaftaran</h3>
                                <p className='font-medium'>23 Oktober 2023 s.d 29 Oktober 2023</p>

                                {/* Table */}
                                <div className="w-[80%] mt-5 px-3 py-3">
                                    <div className="bg-gray-100 border-b border-gray-500 px-3 py-3 text-center">
                                        <h3 className='font-bold hover:text-[#9e1e21] cursor-pointer' onClick={(e) => dispatch(changeModal(true))}>HR Supervisor</h3>
                                        <div className="flex gap-[3px] justify-center mt-3">
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>S1</p>
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>Contract</p>
                                        </div>
                                        <p className='pt-1'>Dumai, Riau, Indonesia</p>
                                    </div>
                                    <div className="border-b border-gray-500 px-3 py-3 text-center">
                                        <h3 className='font-bold hover:text-[#9e1e21] cursor-pointer' onClick={(e) => dispatch(changeModal(true))}>Fullstack Developer</h3>
                                        <div className="flex gap-[3px] justify-center mt-3">
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>D3</p>
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>Contract</p>
                                        </div>
                                        <p className='pt-1'>Remote Full WFH, Indonesia</p>
                                    </div>
                                    <div className="bg-gray-100 border-b border-gray-500 px-3 py-3 text-center">
                                    <h3 className='font-bold hover:text-[#9e1e21] cursor-pointer' onClick={(e) => dispatch(changeModal(true))}l>Accountant FAX</h3>
                                        <div className="flex gap-[3px] justify-center mt-3">
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>D3</p>
                                            <p className='bg-[#9e1e21] py-1 px-3 rounded-full text-white text-xs'>Contract</p>
                                        </div>
                                        <p className='pt-1'>Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

                {/* Modal */}
                <ModalLowongan lowongan={{}} />
            </div>
            <section className="homepage-mobile sm:hidden">
                <div className="flex justify-center items-center min-h-screen text-xl">
                    Please open in desktop mode
                </div>
            </section>
        </>
    )
}

export default Lowongan