"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/utils/const'
import { GoArrowUpRight } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <div className='w-full h-full relative'>
            <div className='relative z-10 md:max-w-[98%] md:p-4 p-2 mx-auto'>
                <div className='border border-primary herobg overflow-hidden w-full h-[638px] md:h-screen rounded-[20px]'>
                    <div className={`${openMenu ? 'bg-[#121212] py-5 overflow-hidden' : 'bg-transparent py-5'}`}>
                        <div className="flex z-10 items-center  justify-between mx-5">
                            <Link href="/">
                                <Image src="/logo.svg" alt="logo" className='w-[55px] h-[55px] cursor-pointer' width={100} height={100} />
                            </Link>
                            <div className=' hidden md:flex items-center justify-between space-x-5'>
                                {
                                    navItems.map((item, index) => (
                                        <Link href={item.links} key={index}>
                                            <button className='text-white hover:text-primary leading-4 font-medium text-[16px]'>{item.items}</button>
                                        </Link>

                                    ))
                                }

                                <Link target="_blank" href="https://x.com/Kishore40572530?t=pS0WxhT86SvQ0hdIrTXonw&s=09" className='hover:shadow-custom border border-primary text-primary text-[16px] font-medium text-center rounded-[20px] py-2 px-6'>
                                    Connect
                                </Link>


                            </div>
                            <div className=" flex md:hidden">
                                {openMenu ? <IoMdClose onClick={toggleMenu} size={30} className="cursor-pointer text-white" /> : <LuMenu onClick={toggleMenu} size={30} className="cursor-pointer text-white" />
                                }

                            </div>


                        </div>
                    </div>

                    {openMenu && (
                        <div className="md:hidden bg-[#121212] relative z-10">
                            {navItems.map((item, index) => (
                                <Link
                                    href={item.links}
                                    key={index}
                                    className="flex items-center justify-center flex-col py-1 px-4 text-[14px] leading-[22px] text-center text-gray-700 hover:bg-gray-100"
                                >
                                    <h1 className=" hover:text-primary text-[20px] leading-[24px] font-medium text-[#DDDDDD] ">
                                        {item.items}
                                    </h1>
                                </Link>
                            ))}
                            <div className='mx-10 my-5 pb-5 flex items-center justify-center'>


                                <Link target='_blank' href="https://x.com/Kishore40572530?t=pS0WxhT86SvQ0hdIrTXonw&s=09" className='flex items-center w-full bg-[#000000] justify-center   border border-primary text-primary text-[16px] font-medium  rounded-[20px]  py-1 px-1'>
                                    Connect<GoArrowUpRight size={23} className='text-primary' />
                                </Link>

                            </div>

                        </div>
                    )}



                    <div className='items-center  z-10' >
                        <div className='md:pt-[100px]'>
                            <div className=' flex items-center text-center justify-center text-[50px] md:text-[64px] font-medium leading-[72px]'>
                                <h1 className='text-primary'>Web3 <span className='text-white'>Storage</span></h1>
                            </div>
                            <p className=' text-center mt-3 text-tertiary text-[18px] md:text-[20px] leading-7 font-normal'>
                                Use Real World Assets, Store, and Access Your Data Securely.
                            </p>

                            <div className='z-10 my-10 flex items-center justify-center space-x-3 md:gap-10'>
                                <Link target='_blank' href="https://x.com/Kishore40572530?t=pS0WxhT86SvQ0hdIrTXonw&s=09" className='hover:shadow-custom flex items-center justify-center gap-2 border border-primary text-white text-[16px] font-medium text-center rounded-[20px] md:py-2 py-1 px-3 md:px-6'>
                                    Community <GoArrowUpRight size={23} className='text-white' />
                                </Link>
                                <Link href="https://web3-storage-dapp-henna.vercel.app/" target='_blank' className='hover:shadow-custom flex items-center  text-balance justify-center gap-2 border border-primary text-white text-[16px] font-medium text-center rounded-[20px] md:py-2 py-1 px-3 md:px-6'>
                                    Launch <GoArrowUpRight size={23} className='text-white' />
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <div className="absolute inset-0 top-0 h-[70%] z-0">
                <Canvas>
                    <Stars radius={100} count={4000} factor={6} fade speed={2} />
                </Canvas>
            </div>
        </div >
    )
}

export default Navbar
