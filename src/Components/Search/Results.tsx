import { useReducer } from "react"
import TopResult from "./TopResult"
import FoundSong from "./FoundSong"
import SearchReducer from "../../Hooks/SearchReducer"
import { searchDefault } from "./SearchBar"

const Results = () => {
    return (
        <div className="Results-Container">
            <TopResult />
            <FoundSong />
        </div>
    )
}

export default Results
