import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className='w-full h-full'>
            <div className='max-w-[1380px] mx-auto p-4'>
                <div className='pt-20 flex items-center justify-center  '>
                    <div className='max-w-[605px] text-center flex items-center justify-center'>
                        <div className='items-center justify-center flex '>
                            <h1 className='md:text-4xl text-3xl font-medium text-balance tracking-normal text-white '> <span className='text-primary mr-2'>Decentralized</span>physical infrastructure network </h1>
                        </div>

                    </div>
                </div>

                <div className='text-tertiary font-normal py-5 text-lg text-center'>Utilized DePIN infrastructure to secure blockchain networks</div>
                <div class='flex flex-col divide-y-2 divide-primary md:flex-row md:divide-x-2 md:divide-y-0 items-center justify-between gap-4 py-20'>
                    <div className='flex items-center gap-3 md:p-5 '>
                        <Image src="/flexibility.svg" className='' alt="flexibility" width={120} height={100} />
                        <h1 className='font-medium text-lg text-white'>$PRINT token represents a gateway <span className='text-tertiary ml-1'>for individuals to access the mining domain</span></h1>
                    </div>
                    <div className='flex items-center gap-3 md:p-5 py-2'>
                        <Image src="/node.svg" className='' alt="node" width={120} height={100} />
                        <h1 className='font-medium text-lg text-white'>
                            Print Mining equipment is powered
                            <span className='text-tertiary ml-1'>
                                through the use of renewable energy sources
                            </span>
                        </h1>

                    </div>
                    <div className='flex items-center gap-3 md:p-5 '>
                        <Image src="/renewable.svg" className='' alt="renewable" width={120} height={100} />
                        <h1 className='font-medium text-lg my-2 text-white'>
                            Print Mining Telegram bot serves as the
                            <span className='text-tertiary ml-1'>
                                central hub within the Print mining protocol
                            </span>
                        </h1>
                    </div>

                </div>

            </div>

        </section >
    )
}

export default Intro