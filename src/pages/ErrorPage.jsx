import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <section className='flex justify-center items-center min-h-screen'>
                <div className='text-center'>
                    <h3 className='mb-3'>404 | Not Found</h3>
                    <p className='text-xs'>Halaman URL yang kamu masukkan tidak ditemukan!</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ErrorPage