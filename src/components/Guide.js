import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const Guide = () => {
    return (
        <div className='w-full h-full'>
            <div className='max-w-[1380px] mx-auto p-4'>
                <div className='flex items-center justify-center '>
                    <div className='max-w-[702px] space-y-10'>
                        <h1 className='items-center  text-center text-white font-medium text-xl leading-7'>
                            The <span className='text-xl font-medium text-primary'>Print Storage</span> serves as the data storage solution for PRINT Users, offering a seamless integration with IPFS and a user-friendly interface tailored to meet the needs of the <span className='text-xl font-medium text-primary'>PRINT</span> Community
                        </h1>Print Storage serves as the data storage solution for PRINT Users,

                        <h2 className='items-center text-balance text-center text-tertiary font-medium text-xl leading-7'>
                            Its primary function is to simplify the process of storing data in a secure manner.
                        </h2>
                    </div>
                </div>

                <div className="flex items-center justify-center my-12">
                    <Link href="https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/" className='flex hover:shadow-custom items-center bg-[#121212] text-balance justify-center gap-2 border border-[#393939] text-[#BBBBBB] text-[16px] font-medium text-center rounded-[20px] py-2 px-6'>
                        Read more about our mission <GoArrowUpRight size={23} className='text-[#BBBBBB]' />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Guide