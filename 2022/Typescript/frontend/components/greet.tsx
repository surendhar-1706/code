import React from 'react'
type greetprops = {
    name: string
    message_count?: number
}
function Greet(props: greetprops) {
    return (
        <div>
            <div className='text-orange-600 animate-bounce'> hi my name is {props.name} and
                you have {props.message_count} unread </div>
        </div>
    )
}

export default Greet
