import React, {useReducer} from 'react'
import SeacchReducer from "../../Hooks/SearchReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export type SearchReultsType = {
    input: string;
    songs?: any
}

const searchDefault: SearchReultsType = {
    input: "",
    songs: []
}

function SearchBar() {
    const [state, dispatch] = useReducer(SeacchReducer, searchDefault)

    return (
        <div className="SearchBar">
            <FontAwesomeIcon icon={faSearch} size="2x" style={{color: '#FFF', marginLeft: '12px', paddingRight: '10px'}}/>
            <input type="text" value={state.input} onChange={e => dispatch({type: "ON_CHANGE", payload: e.target.value})}/>
        </div>
    )
}

export default SearchBar
