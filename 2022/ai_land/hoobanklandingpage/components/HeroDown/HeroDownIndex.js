import React from 'react'

function HeroDownIndex() {
    return (
        <div className='flex items-center space-x-10'>
            <div className='flex items-center space-x-5'>
                <div className='text-3xl uppercase font-semibold text-white'>3800+</div>
                <div className='uppercase font-semibold text-transparent  bg-clip-text bg-gradient-to-t from-cyan-400 to-white'>user active</div>
            </div>
            <div className='bg-white h-5 w-[1px]'></div>
            <div className='flex items-center space-x-5'>
                <div className='text-3xl uppercase font-semibold text-white'>230+</div>
                <div className='uppercase font-semibold text-transparent  bg-clip-text bg-gradient-to-b from-cyan-400 to-white'>trusted by company</div>
            </div>
            <div className='bg-white h-5 w-[1px]'></div>
            <div className='flex items-center space-x-5'>
                <div className='text-3xl uppercase font-semibold text-white'>$230M+</div>
                <div className='uppercase font-semibold text-transparent  bg-clip-text bg-gradient-to-t from-cyan-400 to-white'>transaction</div>
            </div>
        </div>
    )
}

export default HeroDownIndex