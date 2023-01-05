import React from 'react'
import Parcel from 'single-spa-react/parcel'

function ShowCard({ text }) {
    //const pluginUrl = 'https://alldist.s3.amazonaws.com/sampleorg-fe1.js'
    const pluginUrl = 'https://local-plugins.s3.us-east-1.amazonaws.com/fe1.js'
    return (
        <div>
            <div style={{
                margin: "25px",
                border: '1px solid gray',
                padding: "25px",
                width: "200px",
                height: "200px",
                display: "grid",
                placeItems: "center",
                backgroundColor: "gray"
            }}>
                This is from the root app {text}


            </div>
            <Parcel config={() =>
                window.System.import(pluginUrl)
            } />
        </div>
    )
}

export default ShowCard