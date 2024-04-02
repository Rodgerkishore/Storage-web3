import React from 'react'
import Image from 'next/image'

const Rewards = () => {
    return (
        <div className='w-full h-full'>

            <div className='max-w-[1380px] mx-auto p-4 md:my-20  z-10 introbg '>

                <div className='pt-10 flex items-center justify-center  '>
                    <div className='max-w-[705px] text-center flex items-center justify-center'>
                        <div className='items-center justify-center flex '>
                            <h1 className='md:text-4xl text-3xl font-medium text-balance tracking-normal text-white '> <span className='text-primary mr-2'>Earn Rewards</span>from crypto miners procured and operated by <span className='text-primary mr-2'>Print Mining</span> </h1>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 my-20 space-y-5 md:space-y-0 md:gap-10'>
                    <div className='relative border-[0.5px] border-primary rounded-[20px] maskbg backdrop-blur-2xl '>
                        <div className='p-5'>
                            <div className='md:my-5 my-2'>
                                <h1 className='text-xl leading-[36px] font-medium text-white'>AVG APY</h1>
                            </div>

                            <div className='flex flex-col md:py-10 divide-y divide-primary'>
                                <div className='flex py-5 md:py-10 items-center justify-start gap-5'>
                                    <Image src="/stack.svg" width={40} height={40} alt="stack" />
                                    <h1 className='text-primary text-3xl'>~40%</h1>
                                </div>

                                <div className='md:py-10 py-5'>
                                    <h1 className='text-xl leading-[36px] font-medium text-white'>Workers Online</h1>

                                    <div className='flex  items-center justify-start gap-5'>
                                        <Image src="/Coin.svg" width={40} height={40} alt="stack" />
                                        <h1 className='text-primary text-3xl'>100 +</h1>
                                    </div>
                                </div>

                                <div className='md:py-10 py-5'>
                                    <h1 className='text-xl leading-[36px] font-medium text-white'>Total CPU H/s</h1>

                                    <div className='flex  items-center justify-start gap-5'>
                                        <Image src="/Clock.svg" width={40} height={40} alt="stack" />
                                        <h1 className='text-primary text-3xl'>1.8 Mh/s+</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <div className=' rounded-[20px] border border-primary  bg-[#0d0d0d]/40 backdrop-blur-2xl md:p-5 px-5 pt-5'>
                            <div className='space-y-1'>
                                <Image src="cpumining.svg" className='' width={50} height={50} alt="cpumining" />
                                <h1 className='text-xl font-normal leading-[36px] text-white'>What We Do</h1>
                            </div>

                            <div className='space-y-5 md:my-5 md:mx-2'>
                                <h1 className='md:text-lg text-[15px] my-2 md:my-0 md:inline-block py-1 rewardbg text-center px-2 ml-2 font-medium text-[#E6E6E6] border border-primary rounded-[20px]'>Maintenance</h1>
                                <div className='flex'>
                                    <div className=''>
                                        <Image src="/vector.svg" alt="Vector graphic" width={20} height={10} className='h-[265px] md:h-full' />
                                    </div>
                                    <div className='flex-1 space-y-5 md:space-y-10 py-10 ml-5'>
                                        <h2 className='md:text-lg  text-[15px]  md:py-2 rewardbg px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Miner procurement</h2>
                                        <h2 className='md:text-lg  text-[15px]  md:py-2 rewardbg px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Worker Set up</h2>
                                        <h2 className='md:text-lg  text-[15px]  md:py-2 rewardbg px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Miner Configuration</h2>
                                        <h2 className='md:text-lg  text-[15px]  md:py-2 rewardbg px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Worker Expanasion</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=' space-y-5'>
                        <div className=' rounded-[20px] border border-primary  bg-[#0d0d0d]/40 backdrop-blur-2xl p-5 '>
                            <div className='space-y-1'>
                                <Image src="People.svg" className='' width={50} height={50} alt="cpumining" />
                                <h1 className='text-xl font-normal leading-[36px] text-white'>What You Do</h1>
                            </div>

                            <div className='space-y-5 md:my-5 md:mx-2'>
                                <h1 className='md:text-lg  text-[15px] my-2 md:my-0 md:inline-block py-1 px-2 rewardbg ml-2 text-center font-medium text-[#E6E6E6] border border-primary  rounded-[20px]'>Acquire $PRINT</h1>
                                <div className='flex '>
                                    <div className=''>
                                        <Image src="/vector.svg" alt="Vector graphic" width={20} height={10} className='h-[265px] md:h-full' />
                                    </div>

                                    <div className='flex-1  md:py-10 ml-5'>
                                        <div className='flex flex-col pt-10 justify-between items-start'>
                                            <div className='pb-10 md:inline-block w-full'>
                                                <h2 className='md:text-lg rewardbg text-[15px] md:py-2 px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Stake Token</h2>
                                            </div>
                                            <div className='pb-10 md:inline-block w-full'>
                                                <h2 className='md:text-lg rewardbg text-[15px] md:py-2 px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Generate Yield</h2>
                                            </div>
                                            <div className='md:inline-block w-full'>
                                                <h2 className='md:text-lg rewardbg text-[15px] md:py-2 px-2 font-medium text-[#E6E6E6] border border-primary p-1 rounded-[20px]'>Collect Reward in ETH/USD</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>

        </div>
    )
}

export default Rewards