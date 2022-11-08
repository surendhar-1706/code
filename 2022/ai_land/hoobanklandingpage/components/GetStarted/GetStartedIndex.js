import React from 'react'
import GetStartedRight from './GetStartedRight'

function GetStartedIndex() {
    return (
        <div className='flex justify-between' >
            <div className='text-white'>
                <div className='w-[600px] text-4xl semi-bold'>
                    You do the business,<br />
                    <div className='py-1'></div>
                    we’ll handle the money.
                    <div className='py-1'></div>
                </div>
                <div className='w-[400px] text-gray-400 text-md leading-snug'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</div>
                <button className='text-sm mt-6 gradient_button text-black font-semibold py-2 px-4 rounded-lg'>Get Started</button>
            </div>
            <GetStartedRight />



        </div>
    )
}

export default GetStartedIndex