import React from 'react'
type person_list_obj = {
    name: {
        first: string
    }[]
}
function Personlist(props: person_list_obj) {
    return (
        <div>
            {props.name.map((data) => {
                return (
                    <div key={data.first}>
                        {data.first}
                    </div>
                )
            })}
        </div>
    )
}

export default Personlist
