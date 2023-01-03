import React from 'react'

function ShowCard({ text }) {
    return (
        <div style={{
            margin: "25px",
            border: '1px solid gray',
            padding: "25px",
            width: "200px",
            height: "200px",
            display: "grid",
            placeItems: "center"
        }}>{text}</div>
    )
}

export default ShowCard