import Image from 'next/image'
import React from 'react'
import StarImage from '../../public/Star.svg'
import ShieldImage from '../../public/Shield.svg'
import SendImage from '../../public/Send.svg'
function GetStartedRight() {
    return (
        <div className='flex flex-col space-y-3'>
            <div className='flex text-white items-center '>
                <div className='pr-5'>
                    <Image height={64} width={24} src={StarImage} />
                </div>
                <div>
                    <div className='font-semibold text-md'>
                        Rewards
                    </div>
                    <div className='pt-1 w-[366px] text-gray-400 text-md leading-5'>
                        The best credit cards offer some tantalizing combinations of promotions and prizes
                    </div>
                </div>

            </div>
            <div className='flex text-white items-center  '>
                <div className='pr-5'>
                    <Image height={64} width={24} src={ShieldImage} />
                </div>
                <div>
                    <div className='font-semibold text-md'>
                        100% Secured
                    </div>
                    <div className='pt-1 w-[366px] text-gray-400 text-md leading-5'>
                        We take proactive steps make sure your information and transactions are secure.
                    </div>
                </div>

            </div>
            <div className='flex text-white items-center '>
                <div className='pr-5'>
                    <Image height={64} width={24} src={SendImage} />
                </div>
                <div>
                    <div className='font-semibold text-md'>
                        Balance Transfer
                    </div>
                    <div className='pt-1 w-[366px] text-gray-400 text-md leading-5'>
                        A balance transfer credit card can save you a lot of money in interest charges.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GetStartedRight