import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='fixed left-0 right-0 bg-white flex justify-between pl-[50px] pe-[50px] shadow-b shadow-lg'>
            <div>
                <img src="/images/logo-ojk.png" alt="logo-web" className='w-32 py-2 px-2' />
            </div>
            <ul className='flex gap-[2vw] text-sm font-bold text-[#E02222]'>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'>
                    <Link to={'/'}>BERANDA</Link>
                </li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'>
                    <Link to={'/lowongan'}>LOWONGAN</Link>
                </li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'><a href="#">PENGUMUMAN</a></li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'><a href="#">BANTUAN</a></li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'><a href="#">HUBUNGI KAMI</a></li>
            </ul>
            <div>
                <button className='bg-[#9e1e21] text-sm text-white px-4 py-2 rounded-full hover-bg-[] mt-3'>Sign In</button>
            </div>
        </nav>

    )
}

export default Navbar