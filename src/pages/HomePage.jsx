import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const HomePage = () => {
    return (
        <>
            <div className="flex flex-col homepage hidden sm:flex">
                {/* Navbar */}
                <Navbar />

                <section className="h-100">
                    <img src="/images/content.png" alt="gambar-content" className='' />
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

export default HomePage