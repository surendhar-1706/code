import React, { useState } from 'react';

function Todo() {
    const [counter, setcounter] = useState(0)
    const [state_value, set_state_value] = useState('')
    const [todo_list, set_todo_list] = useState<string[]>([])
    const Addcount = () => {
        console.log('add count clicked')
        setcounter(counter + 1)
    }
    const handlesubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        set_todo_list(
            [...todo_list, state_value]
        )

        console.log('submit clicked')
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        set_state_value(e.currentTarget.value)
        console.log('value changed')

    }
    return (<div>
        hi

        The current count is {counter}

        <button onClick={Addcount}>Add 1</button>
        <form onSubmit={handlesubmit}>
            <input type='text' name='todo' onChange={handleChange}></input>
            <button type='submit'>submit</button>
        </form>
        {todo_list && todo_list.map((d) => {
            return (
                <div key={d}>
                    {d}
                </div>
            )
        })}
    </div>);
}

export default Todo;
