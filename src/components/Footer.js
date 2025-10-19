import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
    return (
        <div className='w-full '>


            <div className='mt-[20px] mx-4 md:pt-56 pb-[10px]'>

                {/* <div className='max-w-[1380px] mx-auto p-4'>
                    <div className='max-w-[605px] mt-20 mx-auto'>
                        <div >
                            <h1 className='text-3xl md:text-4xl text-center font-medium  tracking-normal text-white '> Partners </h1>
                        </div>
                    </div>

                    <div className='max-w-[600px] space-y-3 md:flex items-center justify-center md:justify-between mx-auto font-light text-tertiary  py-5 text-lg text-center'>
                        <div className='flex items-center justify-center '>
                            <Image src="/aigent.svg" width={150} height={130} alt="aigent" />
                        </div>
                        <div className='flex items-center justify-center '>
                            <Image src="/solareum.svg" width={220} height={180} alt="aigent" />
                        </div>
                        <div className='flex items-center justify-center '>
                            <Image src="/aitek.svg" width={120} height={100} alt="aigent" />
                        </div>
                    </div>

                </div> */}
                <div className='flex items-center mb-[100px] justify-center relative'>
                    <div className="max-w-lg absolute w-1/2 md:w-[500px] h-72 bg-primary/20 shadow-2xl top-10 rounded-full filter blur-3xl opacity-70"></div>
                </div>



                <div className=' z-20 border-t border-primary footerbgs md:footerbg rounded-[10px] md:h-[300px] px-4'>
                    <div className='relative  md:flex items-center justify-between my-10 py-2 md:px-10'>
                        <div className='space-y-2'>
                            <div className='text-white md:text-left text-center text-3xl md:text-4xl font-medium'>
                                <span className='text-primary'>PRINT</span>  STORAGE
                            </div>
                            <p className='text-tertiary text-center text-xl font-normal'>
                                Use Real World Assets, Store, and Access Your Data Securely.
                            </p>
                        </div>
                        <div className='flex items-center my-5 md:my-0 justify-center text-center'>
                            <button className='hover:shadow-custom hover:bg-black hover:text-primary flex items-center  text-balance justify-center gap-2 bg-primary border border-primary text-black text-[16px] font-medium text-center rounded-[20px] py-2 px-6'>
                                Get $PRINT <GoArrowUpRight size={23} />
                            </button>
                        </div>

                    </div>
                </div>

                <div className='md:flex items-center justify-between px-4'>
                    <Link href="/" className='flex cursor-pointer items-center justify-center gap-2 md:px-10'>
                        <Image src="/logo.svg" alt="logo" width={32} height={36} />
                        <p className='text-white text-[20px] font-medium'>Print Storage</p>
                    </Link>

                    <div className='md:flex items-center py-5 md:py-0 md:px-10 gap-3'>



                        <div className='text-white py-5 md:py-0 flex items-center justify-center space-x-4 text-[16px] leading-4'>

                            <div>
                                <Link href="https://web3-storage-dapp-henna.vercel.app/" className='hover:text-primary text-white'>Product</Link>
                            </div>

                            <div className='flex items-center space-x-3'>

                                <Link href="https://x.com/Kishore40572530?t=pS0WxhT86SvQ0hdIrTXonw&s=09">
                                    <RiTwitterXLine size={35} className='bg-primary hover:opacity-75 cursor-pointer rounded-full p-1 text-black' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
