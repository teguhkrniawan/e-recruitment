import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center bg-teal-400 h-screen background-login">
            <div className="overlay"></div>
            <form className='z-10'>
                <div className="bg-white w-96 p-5 rounded shadow-sm">
                    <div className="flex justify-center items-center mb-4">
                        <img src="/images/logo-ojk.png" alt="logo-ojk" className='w-24' />
                    </div>
                    <div className="group-input">
                        <label htmlFor="email" className='text-gray-700'>Email</label>
                        <input type="email" className='w-full outline-none bg-gray-100 text-gray-500 py-2 px-2 mt-2' placeholder='user@gmail.com' />
                    </div>
                    <div className="group-input mt-2">
                        <label htmlFor="password" className='text-gray-700'>Password</label>
                        <input type="password" className='w-full outline-none bg-gray-100 text-gray-500 py-2 px-2 mt-2' placeholder='password' />
                    </div>
                    <button className='bg-blue-500 w-full text-gray-100 rounded py-2 mt-5 hover:bg-blue-600 transition-colors'>Daftar</button>
                    <div className="group-account mt-3 text-center">
                        <p>Sudah Punya Akun ? <span className='text-blue-500 font-bold cursor-pointer'><Link to={'/signin'}>Masuk</Link></span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp