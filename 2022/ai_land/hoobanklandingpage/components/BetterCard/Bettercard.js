import Image from 'next/image'
import React from 'react'
import CardImage from '../../public/card.png'
function Bettercard() {
    return (
        <div className='flex justify-between'>
            <div >
                <div className='text-white font-semibold text-3xl'>
                    Find a better card deal in
                    <br />
                    <div className='py-1'></div>
                    few easy steps.
                </div>
                <div className='w-[500px] text-gray-300 pt-10'>
                    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                </div>
                <button className='mt-10 gradient_button text-sm font-semibold rounded-lg text-black px-3 py-2'>
                    Get Started
                </button>
            </div>
            <div>
                <Image height={300} src={CardImage} />
            </div>
        </div>
    )
}

export default Bettercard