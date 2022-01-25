import React from 'react'
type person_obj = {
    name: {
        first: string
        last: string
    }
}
function Person(props: person_obj) {
    return (
        <div>

            {props.name.first}  {props.name.last}
        </div>
    )
}

export default Person
