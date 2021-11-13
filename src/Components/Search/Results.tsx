import {FC} from 'react'
import TopResult from "./TopResult"
import FoundSong from "./FoundSong"
import LoadingScreen from "./LoadingScreen"
import { SearchReultsType } from './SearchBar'

const Results: FC<{results: SearchReultsType['songs'], load: boolean, displayResults: boolean}> = ({results, load, displayResults}) => {
    return (
        <div className="Results-Container">
            {load ? <LoadingScreen /> : null}
            {displayResults ? <TopResult topresult={results}/>: null}
            {displayResults ? <FoundSong results={results}/> : null}
        </div>
    )
}

export default Results 
