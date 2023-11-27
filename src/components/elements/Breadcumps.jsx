import React from 'react'
import { Link } from 'react-router-dom'

const Breadcumps = () => {
    return (
        <ol className='list-reset flex gap-[1vw] text-xs'>
            <li>
                <Link to={'/'}>Beranda</Link>
            </li>
            <li>
                &gt;
            </li>
            <li className='text-[#9e1e21] font-semibold'>
                <a href="">Lowongan</a>
            </li>
        </ol>
    )
}

export default Breadcumps