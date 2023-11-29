import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCustom from '../elements/ButtonCustom'

const Navbar = () => {
    return (
        <nav className='fixed left-0 right-0 bg-white flex justify-between pl-[50px] pe-[50px] shadow-b shadow-lg z-10'>
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
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'>
                    <Link to={'/pengumuman'}>PENGUMUMAN</Link>
                </li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'><a href="#">BANTUAN</a></li>
                <li className='hover:bg-[#9e1e21] hover:text-white py-5 px-2'>
                    <Link to={'/contact'}>HUBUNGI KAMI</Link>
                </li>
            </ul>
            <div>
                <ButtonCustom text={'Sign In'} />
            </div>
        </nav>

    )
}

export default Navbar