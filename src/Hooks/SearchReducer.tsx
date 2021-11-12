import { SearchReultsType } from "../Components/Search/SearchBar"

type Action = {
    type: string;
    payload?: {
        input: string,
        songs: any
    };
}

const SearchReducer = (State: SearchReultsType, action: Action): any => {
    switch (action.type) {
        case "ON_CHANGE": {
            return {
                input: action.payload?.input,
                songs: action.payload?.songs
            }
        }
        case "FOUND_SONGS": {
            return {
                input: action.payload?.input,
                songs: action.payload?.songs
            }
        }
    }
}

export default SearchReducer
