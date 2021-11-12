import { SearchReultsType } from "../Components/Search/SearchBar"

type Action = {
    type: string;
    payload?: string;
}

const SearchReducer = (State: SearchReultsType, action: Action): any => {
    switch (action.type) {
        case "ON_CHANGE": {
            return {
                input: action.payload
            }
        }
    }
}

export default SearchReducer
