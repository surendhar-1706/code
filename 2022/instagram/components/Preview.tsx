import React, { useState } from 'react'

function Preview({ file }: any) {
    const [preview, setpreview] = useState(null)
    const reader: any = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => [
        setpreview(reader.result)
    ]
    return (
        <div>
            {preview ? <img src={preview} alt='preview' /> : 'loading'}

        </div>
    )
}

export default Preview