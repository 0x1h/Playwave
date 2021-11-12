import React, {useReducer, useState} from 'react'
import SeacchReducer from "../../Hooks/SearchReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export type SearchReultsType = {
    input: string;
    songs?: any
}

export const searchDefault: SearchReultsType = {
    input: "",
    songs: []
}

function SearchBar() {
    const [state, dispatch] = useReducer(SeacchReducer, searchDefault)
    console.log(state)
    
    const formHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!state.input.trim()) return

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
            dispatch({type: "FOUND_SONGS", payload: {input: state.input, songs: filterResponse}})
    })
    }
    return (
        <form onSubmit={formHandler}>
            <div className="SearchBar">
                <FontAwesomeIcon icon={faSearch} size="2x" style={{color: '#FFF', marginLeft: '12px', paddingRight: '10px'}}/>
                <input type="text" value={state.input} onChange={e => {
                    dispatch({type: "ON_CHANGE", payload: {input: e.target.value, songs: state.songs}})}}/>
            </div>
        </form>
    )
}


export default SearchBar 
