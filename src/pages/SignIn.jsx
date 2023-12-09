import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRotate } from "react-icons/fa6";

const SignIn = () => {

    const [captcha, setCaptcha] = useState('');

    const generateCaptcha = () => {
        let captchaText = ""
        const allCharacters = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
                                        .concat(Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i)))
                                        .concat(Array.from({ length: 10 }, (_, i) => i.toString()));
        for (let index = 0; index < 6; index++) {
            const randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)]
            captchaText = captchaText + randomChar
        }

        setCaptcha(captchaText)
    }

    const refreshCaptcha = (e) => {
        e.preventDefault()
        generateCaptcha()
    }

    useEffect(() => {
        generateCaptcha()
    }, [])

    return (
        <div className="flex items-center justify-center bg-teal-400 h-screen background-login">
            <div className="overlay"></div>
            <form className='z-10'>
                <div className="bg-white md:w-96 sm:w-32 p-5 rounded shadow-sm">
                    <div className="flex justify-center items-center mb-4">
                        <Link to={'/'}><img src="/images/logo-ojk.png" alt="logo-ojk" className='w-24 cursor-pointer'/></Link>
                    </div>
                    <div className="group-input">
                        <label htmlFor="email" className='text-gray-700'>Email </label>
                        <input type="email" className='w-full outline-none bg-gray-100 text-gray-500 py-2 px-2 mt-2' placeholder='user@gmail.com'/>
                    </div>
                    <div className="group-input mt-2">
                        <label htmlFor="password" className='text-gray-700'>Password</label>
                        <input type="password" className='w-full outline-none bg-gray-100 text-gray-500 py-2 px-2 mt-2' placeholder='password'/>
                    </div>
                    <div className="group-captcha w-full mt-5 relative ">
                        <img src="/images/captcha-bg.png" alt="bg-captcha" className='h-16 w-full object-cover' />
                        <p className='text-white font-bold absolute bottom-2 text-[30px] left-0 w-full text-center captcha-text italic'>{captcha}</p>
                    </div>
                    <div className="group-captcha-input flex mt-2">
                        <input type="text" className='w-full outline-none bg-gray-100 text-gray-500 py-2 px-2 me-2' placeholder='captcha'/>
                        <button className='bg-blue-500 rounded py-2 px-3' onClick={(e) => refreshCaptcha(e)}>
                            <FaRotate className='text-white' />
                        </button>
                    </div>

                    <button className='bg-blue-500 w-full text-gray-100 rounded py-2 mt-5 hover:bg-blue-600 transition-colors'>Masuk</button>
                    <div className="group-account mt-3 text-center">
                        <p>Belum Punya Akun ? <span className='text-blue-500 font-bold cursor-pointer'><Link to={'/signup'}>Daftar</Link></span></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn