import React from 'react'
import { deleteTodo, updateTodo } from '../services/todoService'

function TaskList({ tasks, setTasks }) {

    return (
        <div id='task-list' className='flex flex-col  space-y-3 '>
            {tasks.length > 0 &&
                tasks.map((task) => {
                    return (
                        <div key={task.id} className='flex border items-center justify-between py-3 px-3'>
                            <div className=''>
                                <div
                                    onClick={() => {
                                        updateTodo(task.id, { completed: !task.completed })
                                            .then((res) => {
                                                setTasks(tasks => tasks.map(task => {
                                                    if (task.id === res.id) {
                                                        task.id = res.id
                                                        task.completed = res.completed
                                                    }
                                                    return task
                                                }))
                                            })
                                            .catch((err) => console.log(err))
                                    }}
                                    className={`${task.completed && 'line-through'} overflow-x-auto md:w-[350px] w-[220px]  cursor-pointer focus:outline-none bg-gradient-to-r  from-teal-50 via-purple-50 to-pink-50`}
                                    onChange={() => { }}
                                >
                                    {task.todo}
                                </div>
                            </div>
                            <div
                                onClick={async () => {
                                    const id = task.id
                                    deleteTodo(task.id)
                                        .then((res) => {
                                            if (res) {
                                                setTasks(tasks => tasks.filter(task => task.id !== id))
                                            }
                                        })
                                }}
                                className='cursor-pointer '>
                                <svg data-testid='delete-button' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border rounded-full p-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default TaskList