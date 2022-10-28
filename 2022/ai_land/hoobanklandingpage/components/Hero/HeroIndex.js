import React from 'react'

function HeroIndex() {
    return (
        <div>
            <div className='flex text-gray-400 space-x-2'>
                <div className='text-white'>20%</div>
                <div>DISCOUNT FOR</div>
                <div className='text-white'>1 MONTH</div>
                <div>ACCOUNT</div>
            </div>
            <div className='text-white text-[72px] font-semibold '>
                <div>The Next</div>
                <div className=' text-transparent  bg-clip-text bg-gradient-to-tr from-cyan-400 to-white'>Generation</div>
                <div>Payment Method</div>
            </div>
            <div className='cursor-pointer flex items-center justify-center bg-gradient-to-tr from-cyan-400 to-white h-32 w-32 rounded-full p-0.5'>
                <div className='flex items-center justify-center text-white bg-black rounded-full h-full w-full '>
                    <div className=' ' >Get</div>
                    <div>Started</div>
                </div>
            </div>
        </div >
    )
}

export default HeroIndex