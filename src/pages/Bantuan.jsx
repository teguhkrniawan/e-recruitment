import React, { useState } from 'react'
import Footer from '../components/fragments/Footer'
import Navbar from '../components/fragments/Navbar'
import Breadcumps from '../components/elements/Breadcumps'
import faqData  from '../data/faqData'
import ListContent from '../components/fragments/bantuan/ListContent'

const Bantuan = () => {

    // state untuk navbar di sisi kiri
    const [toggleState, setToggleState] = useState(1)
    const changeToogle = (toggle) => {
        setToggleState(toggle)
    }

    // state untuk accrodion
    const [accordionState, setAccordionState] = useState(null)
    const handleAccordion = (id) => {
        if(accordionState === id){
            setAccordionState(null)
            return false
        }

        setAccordionState(id)
    }

    return (
        <>
            <div className="flex flex-col homepage hidden sm:flex">
                {/* Navbar */}
                <Navbar />

                <section className="mt-[60px]">
                    <div className="container mx-auto px-[80px] py-[20px]">
                        {/* Breadcump */}
                        <Breadcumps text={'Bantuan'} />

                        {/* Card Container */}
                        <div className="w-full grid grid-cols-12 gap-2 mt-5">
                            <div className='col-span-4 p-1'>
                                <table className='w-full text-xs'>
                                    <tbody>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 1 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p className='cursor-pointer' onClick={() => changeToogle(1)} >Persiapan Pedaftaran <i>Online</i></p>
                                                &gt;
                                            </td>
                                        </tr>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 2 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p className='cursor-pointer' onClick={() => changeToogle(2)} >Kelengkapan Dokumen</p>
                                                &gt;
                                            </td>
                                        </tr>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 3 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p className='cursor-pointer' onClick={() => changeToogle(3)} >Informasi Lanjutan</p>
                                                &gt;
                                            </td>
                                        </tr>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 4 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p className='cursor-pointer' onClick={() => changeToogle(4)} >Cara melihat pengumuman</p>
                                                &gt;
                                            </td>
                                        </tr>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 5 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p  className='cursor-pointer' onClick={() => changeToogle(5)}  >Menghadapi Kendala</p>
                                                &gt;
                                            </td>
                                        </tr>
                                        <tr className='border-gray-300 border'>
                                            <td className={`p-3 flex justify-between ${toggleState == 6 ? 'bg-red-500 text-white' : 'text-black'}`}>
                                                <p  className='cursor-pointer' onClick={() => changeToogle(6)}  >Lain-Lain</p>
                                                &gt;
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='border shadow-b shadow-md col-span-8 h-screen'>
                                <h3 className='p-3'>Bantuan</h3>
                                {toggleState == 1 && <ListContent data={faqData} handleClick={handleAccordion} stateAccordion={accordionState} />}
                                {toggleState != 1 && <h1 className='p-3 text-sm'>Saat ini jawaban belum tersedia</h1>}
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

export default Bantuan