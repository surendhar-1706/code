import React, { useState } from 'react'
import { addTodo } from '../services/todoService'

function AddTasks({ tasks, setTasks }) {
    const [input, setInput] = useState('')
    return (
        <div className='flex border items-center justify-between py-3 px-3'>
            <div>
                <input
                    value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    className=' bg-gradient-to-r  from-teal-50 via-purple-50 to-pink-50 focus:outline-none  w-full'
                    data-testid='task-input'
                />
            </div>
            <svg
                onClick={() => {
                    if (input !== '') {
                        addTodo(input)
                            .then((res) => {
                                setTasks([...tasks, res])
                                setInput('')
                            })

                    }
                }}
                data-testid='add-button'
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" cursor-pointer  w-6 h-6 border rounded-full p-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>
    )
}

export default AddTasks