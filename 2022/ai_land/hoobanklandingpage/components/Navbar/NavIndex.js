import Image from 'next/image'
import React from 'react'
import HooBank from '../../public/HooBank.png'
function NavIndex() {
    return (
        <div className='flex justify-between '>
            <div className='flex space-x-1'>
                <Image height={20} width={25} src={HooBank} />
                <div className='flex'>
                    <div className='text-white'>
                        Hoo
                    </div>
                    <div className='text-[#5CE1E6]'>
                        Bank
                    </div>
                </div>
            </div>
            <div className='flex text-white space-x-8'>
                <div>Home</div>
                <div>About Us</div>
                <div>Features</div>
                <div>Solutions</div>
            </div>
        </div>
    )
}

export default NavIndex