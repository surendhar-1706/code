import Image from 'next/image'
import React from 'react'
import BillImage from '../../public/bill.png'
import appleImage from '../../public/apple.svg'
import googleImage from '../../public/google.svg'
function EasyControl() {
    return (
        <div className='text-white flex justify-between'>
            <Image height={400} src={BillImage} />
            <div className='pt-28'>
                <div className='w-[470px] text-3xl font-semibold'>
                    Easily control your
                    <br />
                    <div className='py-2'></div>
                    billing & invoicing.
                </div>
                <div className='py-5 w-[470px] text-gray-400'>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </div>
                <div className='flex space-x-5'>
                    <Image src={appleImage} />
                    <Image src={googleImage} />
                </div>
            </div>
        </div>
    )
}

export default EasyControl