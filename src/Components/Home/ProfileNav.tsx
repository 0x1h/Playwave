import {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import Logo from "../../Assets/Logo/Logo.png"
import { State } from '../../Hooks/Reducer'
import "./scss/nav-style.css"

const ProfileNav = () => {
    const [profileImg, setProfileImage] = useState<State | null>()

    useEffect(() => {
        if(!profileImg) {
            setProfileImage(JSON.parse(localStorage.getItem("user-data")!))
        }
    }, [profileImg])

    let history = useHistory()

    const redirectToHome = () => {
        history.push("/Home")
    }

    return (
        <div className="Profile-Navbar">
            <div className="Redirect-Home" onClick={redirectToHome}>
                <div className="img-container">
                    <img src={Logo} alt="" />
                </div>
                <h3>Playwave</h3>
            </div>
            <div className="Redirect-Profile">
                <div className="img-and-Profile">
                    <div className="profile-image">
                        <img src={profileImg?.imgSrc ?? ""} alt="" />
                    </div>
                    <p>Profile</p>
                </div>
                
                <span className="triangle activ"></span>
            </div>
        </div>
    )
}

export default ProfileNav