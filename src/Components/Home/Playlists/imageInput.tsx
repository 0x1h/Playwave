import React from 'react'

interface ImageInputProps {
    value: string | undefined
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    close: () => void
}

const ImageInput: React.FC<ImageInputProps> = ({value, inputHandler, close}) => {
    return (
        <div className="image-input">
            <input type="text" value={value} onChange={inputHandler} placeholder="Image URL"/>
            <button onClick={close}>Done</button>
        </div>
    )
}

export default ImageInput
