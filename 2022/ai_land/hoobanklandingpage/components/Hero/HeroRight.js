import Image from 'next/image'
import React from 'react'
import RoboImage from '../../public/robot.png'

function HeroRight() {

    return (
        <div  >
            <Image width={'600'} src={RoboImage} className='relative z-[5] h-[100%]' />

            <div className='lol  absolute  z-[0] top-0 ' />

        </div >
    )
}

export default HeroRight