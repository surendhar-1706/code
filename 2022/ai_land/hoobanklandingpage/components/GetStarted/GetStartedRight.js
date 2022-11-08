import Image from 'next/image'
import React from 'react'
import StarImage from '../../public/Star.svg'
function GetStartedRight() {
    return (
        <div>
            <div className='flex text-white items-center '>
                <div>
                    <Image height={64} width={24} src={StarImage} />
                </div>
                <div>
                    <div className='font-semibold text-md'>
                        Rewards
                    </div>
                    <div className='w-[366px] text-gray-400 text-md'>
                        The best credit cards offer some tantalizing combinations of promotions and prizes
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetStartedRight