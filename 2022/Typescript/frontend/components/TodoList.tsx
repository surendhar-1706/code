import React, { useState } from 'react';
type form_type = {
    task_name: string
}
type GreetFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;
type submitFunciton = (e: React.SyntheticEvent) => void;
type Stringinput = (input: string) => void
function TodoList() {
    const [form, setform] = useState<string>('')
    const [tasklist, settasklist] = useState<string[]>([] as string[])
    const handlechange: GreetFunction = (event) => {
        let hi: string = event.target.value
        setform(hi)

    }
    const handlesubmit: submitFunciton = (e) => {

        settasklist(
            [...tasklist, form]
        )
        console.log(tasklist)
    }
    return <div>
        from list
        <input type='text' name='task_form' onChange={handlechange} />
        <button type='submit' onClick={handlesubmit}>submit</button>
        {form}
    </div>;
}

export default TodoList;
