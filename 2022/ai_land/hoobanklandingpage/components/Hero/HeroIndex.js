import Image from 'next/image'
import React from 'react'
import UpArrow from '../../public/arrow-up.svg'
import Discount from '../../public/Discount.svg'
import HeroRight from './HeroRight'
function HeroIndex() {
    return (
        <div className='flex justify-between'>
            <div className='pt-20'>
                <div className='flex items-center text-gray-400 space-x-2'>
                    <Image height={30} width={30} className='m-0' src={Discount} />
                    <div className='text-white'>20%</div>
                    <div>DISCOUNT FOR</div>
                    <div className='text-white'>1 MONTH</div>
                    <div>ACCOUNT</div>
                </div>

                <div className='flex relative pb-8'>
                    <div className='text-white text-[72px] font-semibold  leading-tight '>
                        <div>The Next</div>
                        <div className=' text-transparent  bg-clip-text bg-gradient-to-tr from-cyan-400 to-white'>Generation</div>
                        <div>Payment Method</div>
                    </div>
                    <div className=' absolute left-[400px] top-8 cursor-pointer  bg-gradient-to-tr from-cyan-400 to-white h-32 w-32 rounded-full p-0.5'>
                        <div className=' flex items-center justify-center text-white bg-black rounded-full h-full w-full '>
                            <div>
                                <div className='flex'><div className=' ' >Get</div>
                                    <Image src={UpArrow} /></div>
                                <div>Started</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-gray-400 w-96 font-mono leading-5'>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </div>
            </div>
            <HeroRight />
        </div >
    )
}

export default HeroIndex