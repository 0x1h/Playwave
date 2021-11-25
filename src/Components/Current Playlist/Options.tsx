import { FC, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
interface Options {
    showOptions: () => void,
    deletePlaylist: () => void,
    editPlaylist: () => void
}

const Options: FC<Options> = ({showOptions, deletePlaylist, editPlaylist}) => {
    const optionsRef = useRef<HTMLDivElement>(null)

    const closeBox = (e: any) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            showOptions() 
        }
    }
    
    useEffect(() => {
        document.addEventListener("click", closeBox, true);

        return () =>  document.removeEventListener("click", closeBox, true);   
    }, [])


    return (
        <div className="options-box" ref={optionsRef}>
            <div className="edit-btn" onClick={editPlaylist}>  
                Edit
                <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="delete-btn" onClick={deletePlaylist}>
                Delete
                <FontAwesomeIcon icon={faTrashAlt}  color='#ff5353'/>
            </div>
        </div>
    )
}

export default Options
