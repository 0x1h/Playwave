import React, {useReducer, useState} from 'react'
import SeacchReducer from "../../Hooks/SearchReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export type SearchReultsType = {
    input: string;
    songs: {
        name: string,
        small_image: string,
        medium_image: string,
        track_Uri: string
    }[]
}

export const searchDefault: SearchReultsType = {
    input: "",
    songs: []
}

interface setComponentProps {
    tranferResult: (data: SearchReultsType["songs"]) => void,
    setLoader: () => void;
    displayResultsTrue: () => void
    displayResultsFalse: () => void
}

const SearchBar:React.FC<setComponentProps> = ({tranferResult, setLoader, displayResultsTrue, displayResultsFalse}) => {
    const [state, dispatch] = useReducer(SeacchReducer, searchDefault)
    const [readyData, setReadyData] = useState([])

    const formHandler = async () => {
        if(!state.input.trim()) return
        setLoader()
        displayResultsTrue()

        await axios.get(`https://api.deezer.com/search?q=${state.input}`)
        .then(resp => {
            const filterResponse = (resp.data.data.map((song: any) => {
                return {
                    name: song.title_short,
                    small_image: song.album.cover_small,
                    medium_image: song.album.cover_medium,
                    track_Uri: song.preview
                }
            }))
            tranferResult!(state.songs)
            displayResultsFalse()
            setLoader()
            setReadyData(filterResponse)
            dispatch({type: "FOUND_SONGS", payload: {input: state.input, songs: readyData}}) 
            
        }).catch(err => console.log(err))
    }
    return (
            <form onSubmit={(e) => {
                e.preventDefault()
                formHandler()
            }}>
                <div className="SearchBar">
                    <FontAwesomeIcon icon={faSearch} size="2x" style={{color: '#FFF', marginLeft: '12px', paddingRight: '10px'}}/>
                    <input type="text" value={state.input} onChange={e => {
                        dispatch({type: "ON_CHANGE", payload: {input: e.target.value, songs: state.songs}})}}/>
                </div>
            </form>
    )
}


export default SearchBar 