import React from 'react'

function Exercises({data}:any) {
    console.log(data)
    return (
        <div>Exercises
{data.map((exercise:any,id:any)=>{
    return (
        <div key={id}>
{exercise.name}
        </div>
    )
})}


        </div>
    )
}

export default Exercises