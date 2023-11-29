import React from 'react'
import ButtonCustom from './ButtonCustom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeModal } from '../../redux/slice/LowonganSlice'

const ModalLowongan = (props) => {

    const { lowongan } = props

    const isShow = useSelector((state) => state.modal.modalShow)
    const dispatch = useDispatch()

    if(!isShow) {
        return null
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center'>
            <div className="bg-white p-5 rounded w-[60vw] mb-[30px] mt-[80px]">
                <div className="flex justify-between">
                    <h4 className='font-bold text-[#9e1e21]'>Digital Marketing</h4>
                    <div className='cursor-pointer' onClick={(e) => dispatch(changeModal(false))}>X</div>
                </div>
                <hr className='mt-3 border ' />
                <div className="requirement py-3 overflow-auto max-h-[80%]">
                    <h3 className='font-bold'>Lokasi</h3>
                    <p className='text-xs'>Bagansiapiapi, Riau, Indonesia</p>

                    <h3 className='font-bold mt-3'>Kualifikasi Umum</h3>
                    <ul className='text-xs list-disc list-inside space-y-2 pl-3 py-3'>
                        <li>Warga Negara Indonesia</li>
                        <li>Pria/Wanita</li>
                        <li>Maks 22 Tahun (usia per 1 Januari 2024)</li>
                        <li>Sehat Jesmani dan Rohani</li>
                        <li>Bersedia ditempatkan diseluruh wilayah Indonesia</li>
                        <li>Menguasai Bahasa Pemrograman PHP, JS, JAVA, C++, dan .NET, iya 5 bahasa sekaligus</li>
                        <li>Memiliki Prestasi di Bidang Olahraga dan Seni akan dijadikan nilai plus</li>
                    </ul>

                    <h3 className='font-bold mt-3'>Pendidikan</h3>
                    <ul className='text-xs list-disc list-inside space-y-2 pl-3 py-3'>
                        <li>Minimal S2 Jurusan Teknologi Informasi</li>
                        <li>Akreditasi Perguruan Tinggi Wajib A (BAN-PT)</li>
                        <li>IPK Minimal 3.90</li>
                        <li>Sertifikat TOEFL Minimal 550 / IELTS 3.5</li>
                    </ul>
                </div>
                <div className="flex justify-center mt-2">
                    <ButtonCustom text={'Apply'} />
                </div>
            </div>
        </div>
    )
}

export default ModalLowongan