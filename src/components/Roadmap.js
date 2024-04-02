import Image from "next/image"

const Roadmap = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1380px] mx-auto p-4'>
                <div className=' '>
                    <div className='max-w-[605px] mt-20 mx-auto'>
                        <div className=''>
                            <h1 className='text-3xl md:text-4xl text-center font-medium  tracking-normal text-white '> Roadmap </h1>
                        </div>
                    </div>
                    <div className='max-w-[429px] mx-auto font-light text-tertiary  py-5 text-lg text-center'>
                        See the milestones that brought us here, get a sneak peak of what’s next
                    </div>
                </div>


            </div>
            <div className="w-full h-full">
                <Image draggable="false" src="/roadmap.svg" width={100} height={100} alt="roadmap" objectFit="scale-down" className="w-full py-5 object-cover inset-0 " />
            </div>
        </div>
    )
}

export default Roadmap