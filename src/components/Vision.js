

import Image from 'next/image';
import { projects } from '@/utils/const';







const Card = ({ title, description, subtitle, i }) => {

    return (
        <div className="cardContainer">
            <div
                className="card bg-black max-w-[504px]"
                style={{ top: `calc(-5vh + ${i * 35}px)` }}
            >
                <h2 className='text-white text-[24px] leading-[27px] font-medium items-start'>{title}</h2>
                <h2 className='text-primary text-[16px] mt-1'>{subtitle}</h2>
                <div className="body space-y-5 mt-5">
                    <div className="">
                        <p className='text-tertiary text-[18px] leading-[20px] font-normal '>{description}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}





const Vision = () => {
    return (
        <div className="w-full h-full relative z-20">
            <div className="max-w-[1380px] mx-auto p-4">
                <div className="pt-10 flex items-center justify-center">
                    <div className="max-w-[705px] text-center flex items-center justify-center">
                        <div className="items-center justify-center flex">
                            <h1 className="text-4xl font-medium tracking-normal text-white ">
                                Accessibility, Transparency and Commitment{' '}
                                <span className="text-primary mr-2">Print Mining</span>{' '}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10" id="sections">
                    <div className="md:order-1 order-2 mx-11 relative w-full items-center justify-center">
                        <div className="">
                            {
                                projects.map((project, i) => {

                                    return <Card key={`p_${i}`} {...project} i={i} />

                                })
                            }
                        </div>
                    </div>
                    <div className="relative  order-1 md:order-2">
                        <div className="sticky  top-20 flex items-center justify-center ">
                            <Image
                                src="/vision.svg"
                                alt="image"
                                width={600}
                                height={400}
                                className="object-center h-full py-20 border border-black"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
