import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'

interface inputInterface {
    imgSrc: string | undefined
    name: string
    surname: string
    nickname: string
    bio: string | undefined
}

const formState: inputInterface = {
    imgSrc: "",
    name: "",
    surname: "",
    nickname: "",
    bio: ""
}

const Form = () => {
    const [formHandle, setFormHandle] = useState<inputInterface>(formState)
    
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const name: string = e.target.name
        const value: string = e.target.value

        setFormHandle({...formHandle, [name]: value})
        console.log(formHandle)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-box">
                <div className="base-inputs">
                    <div className="img-circle">
                        <FontAwesomeIcon icon={faCamera} size='3x' style={{color: "#FFF"}}/>
                        <p style={{color: "#FFF"}}>Upload Photo</p>
                    </div>
                    <div className="user-inputs">
                        <input type="text" name="name" placeholder="Name" value={formHandle.name} onChange={inputHandler}/>
                        <input type="text" name="surname" placeholder="Surname" value={formHandle.surname} onChange={inputHandler}/>
                    </div>
                </div>
                <div className="secondary-inputs">
                    <input type="text" placeholder="Nickname" name="nickname" value={formHandle.nickname} onChange={inputHandler}/>
                    <textarea name="bio" cols={30} rows={10} placeholder="About Me" value={formHandle.bio} onChange={inputHandler}></textarea>
                </div>
                <div className="button-box">
                    <button>I'm Ready! 🔥</button>
                </div>
            </form>          
        </div>
    )
}

export default Form
