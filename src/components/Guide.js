import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const Guide = () => {
    return (
        <div className='w-full h-full'>
            <div className='max-w-[1380px] mx-auto p-4'>
                <div className='flex items-center justify-center '>
                    <div className='max-w-[702px] space-y-10'>
                        <h1 className='items-center  text-center text-white font-medium text-xl leading-7'>
                            The <span className='text-xl font-medium text-primary'>Print Mining Telegram bot</span> serves as the central hub within the Print mining protocol, offering an intuitive and user-friendly interface tailored for <span className='text-xl font-medium text-primary'>$PRINT</span> token holders.
                        </h1>

                        <h2 className='items-center text-balance text-center text-tertiary font-medium text-xl leading-7'>
                            Its primary function is to simplify the process of initiating crypto mining rewards through staking $PRINT token
                        </h2>
                    </div>
                </div>

                <div className="flex items-center justify-center my-12">
                    <Link href="https://docs.printmining.com/" className='flex hover:shadow-custom items-center bg-[#121212] text-balance justify-center gap-2 border border-[#393939] text-[#BBBBBB] text-[16px] font-medium text-center rounded-[20px] py-2 px-6'>
                        Read more about our mission <GoArrowUpRight size={23} className='text-[#BBBBBB]' />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Guide