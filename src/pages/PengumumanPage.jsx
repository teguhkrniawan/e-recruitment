import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Breadcumps from '../components/elements/Breadcumps'
import Footer from '../components/fragments/Footer'

const PengumumanPage = () => {
    return (
        <>
            <div className="flex flex-col homepage hidden sm:flex">
                {/* Navbar */}
                <Navbar />

                <section className="h-100 mt-[60px]">
                    <div className="container mx-auto px-[80px] py-[20px]">
                        {/* Breadcump */}
                        <Breadcumps text={'Pengumuman'} />

                        {/* Card Container */}
                        <div className="max-w-full w-full sm:flex sm:max-w-full flex-col mt-5 py-5 px-5 shadow-b shadow-e shadow-md">
                            <h3>Pengumuman</h3>

                            <div className="flex flex-col">
                                <p className='text-xs mt-5 text-gray-500'>
                                    Otoritas Jasa Keuangan (OJK) berkerja sama dengan Teguh Kurniawan untuk kegiatan Rekrutmen Calon Tenaga Kerja PKWT 2023.
                                    Adapun kegiatan rekrutmen dilakukan secara <b>Online</b> dalam beberapa tahap sebagai berikut :
                                </p>
                                <table className="min-w-full bg-white mt-3">
                                    <thead className='text-white bg-gray-700 text-xs'>
                                        <tr>
                                            <th className='text-left py-3 px-4 w-[10px]'>No</th>
                                            <th className='text-left py-3 px-4'>Kegiatan</th>
                                            <th className='text-left py-3 px-4'>Tanggal Pelaksanaan</th>
                                            <th className='text-left py-3 px-4'>Keterangan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='text-sm'>
                                            <td class="text-left py-3 px-4">1</td>
                                            <td class="text-left py-3 px-4">Pendaftaran Lowongan Perkerjaan</td>
                                            <td class="text-left py-3 px-4">16-19 November 2023</td>
                                            <td class="text-left py-3 px-4">Silakan Anda melakukan register atau pendaftaran untuk melamar posisi yang sesuai di <a href="#">https://ojk.experd.com/    </a></td>
                                        </tr>
                                        <tr class="bg-gray-100 text-sm">
                                            <td class="text-left py-3 px-4">2</td>
                                            <td class="text-left py-3 px-4">Seleksi Psikologi, Wawancara Psikologi dan LGD</td>
                                            <td class="text-left py-3 px-4">Desember 2023</td>
                                            <td class="text-left py-3 px-4">Peserta yang lulus Seleksi Administrasi akan diinformasikan melalui aplikasi mengenai jadwal dan persiapan untuk Seleksi Psikologi, Wawancara Psikologi, dan LGD.</td>
                                        </tr>
                                        <tr className='text-sm'>
                                            <td class="text-left py-3 px-4">3</td>
                                            <td class="text-left py-3 px-4">Seleksi Wawancara User</td>
                                            <td class="text-left py-3 px-4">Desember 2023</td>
                                            <td class="text-left py-3 px-4">Peserta yang lulus Seleksi Psikologi, Wawancara Psikologi dan LGD akan diinformasikan melalui status aplikasi mengenai jadwal dan persiapan untuk Seleksi Wawancara User.</td>
                                        </tr>
                                        <tr class="bg-gray-100 text-sm">
                                            <td class="text-left py-3 px-4">4</td>
                                            <td class="text-left py-3 px-4">Seleksi Tes Kesehatan</td>
                                            <td class="text-left py-3 px-4">-</td>
                                            <td class="text-left py-3 px-4">Peserta yang lulus Seleksi Interview User akan diinformasikan kemudian.</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='w-full mt-5'>
                                    <ul className='list-disc list-inside space-y-1 text-xs'>
                                        <li className='pl-5'>Hanya kandidat dengan kualifikasi terbaik yang akan diikutsertakan dalam tahap seleksi</li>
                                        <li className='pl-5'>Keputusan panitia rekrutmen bersifat mutlak dan tidak dapat diganggu gugat</li>
                                        <li className='pl-5'>OJK tidak memungut biaya apapun dalam proses rekrutmen ini</li>
                                        <li className='pl-5'>Penempatan di kantor pusat Jakarta</li>
                                    </ul>

                                    <p className='mt-5 text-xs text-gray-500'>
                                        Jika Anda menemui kendala selama proses seleksi, Anda dapat menghubungi kami di email : ojk.experd.com (24 jam selama pembukaan pendaftaran) atau nomor <b>CS 1 : 0822-1075-6181 / CS 2 : 0858-1949-3886 pukul 08.00 - 17.00 WIB (pada hari kerja). Email pertanyaan akan kami respons dalam 1 X 24 jam.</b>
                                    </p>
                                </div>
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

export default PengumumanPage