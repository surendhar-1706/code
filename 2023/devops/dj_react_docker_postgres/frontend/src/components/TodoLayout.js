import React, { useEffect, useState } from 'react'
import { getTodo } from '../services/todoService'
import AddTasks from './AddTasks'
import TaskList from './TaskList'
import WelcomText from './WelcomText'

const TodoLayout = () => {

    const [tasks, setTasks] = useState([])
    useEffect(() => {

        getTodo()
            .then((res) => {
                setTasks(res)
                console.log(res)
            })


    }, [])

    return (
        <div>
            <WelcomText />
            <div>Tasks to do</div>
            <div className='flex flex-col  space-y-3 md:w-[450px] w-[300px] mt-5  border px-2 py-2'>
                <AddTasks tasks={tasks} setTasks={setTasks} />
                <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}

export default TodoLayout