import React from 'react'
import Image from 'next/image'

const Tables = () => {
    return (
        <div className='w-full'>




            <div className='max-w-[1380px] mx-auto p-4  z-10 introbg '>
                <div className='md:pt-20 pt-10'>
                    <div className='max-w-[605px] mx-auto'>
                        <div className=''>
                            <h1 className='md:text-4xl text-3xl text-center font-medium  tracking-normal text-white '> Hire CPU <span className='text-primary mr-2'>Miners</span> </h1>
                        </div>
                    </div>
                    <div className='text-tertiary font-normal py-5 text-lg text-center'>
                        Customise your CPU miners to suit your needs
                    </div>
                </div>

                <div className="overflow-x-auto border-2 border-primary rounded-[20px] mt-[50px]">
                    <table className=" text-primary w-full  bg-[#0d0d0d]/40 backdrop-blur-2xl">
                        <thead className=''>
                            <tr>
                                <th className="border px-4 py-2 text-[20px]">CPU</th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>Ryzen 5800x</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$75 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>Ryzen 5950x</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$100 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>Ryzen 7950x3D</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$150 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='p-2'>
                                <th className="border px-4 py-2 text-[20px]">RAM</th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>16GB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$29 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>32GB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$40 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>64GB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$60 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">

                                </th>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-[20px]">STORAGE</th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>1 TB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$10 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>2 TB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$20 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>8 TB</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$80 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">

                                </th>
                            </tr>
                            <tr>
                                <th className="border px-4 py-2 text-[20px]">BANDWIDTH</th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px] text-nowrap'>10 / 100</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$5 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px] text-nowrap'>100 / 1000</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$10 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px] text-nowrap'>200 / 2000</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$20 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px] text-nowrap'>800 / 8000</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$80 USD</p>
                                </th>
                            </tr>
                            <tr className=''>
                                <th className="border px-4 py-2 text-[20px]">GPU</th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>5800XT</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$100 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>6800XT</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$150 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">
                                    <p className='text-[20px] leading-[22px]'>6800XT</p>
                                    <p className='text-[16px] text-center leading-[17px] text-white'>$150 USD</p>
                                </th>
                                <th className="border px-4 py-6 space-y-2 ">

                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Tables