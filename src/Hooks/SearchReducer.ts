import { SearchReultsType } from "../Components/Search/SearchBar"

type Action = {
    type: string;
    payload?: {
        input: string
    };
}

export const searchreducer = (State: SearchReultsType, action: Action): any => {
    switch (action.type) {
        case "ON_CHANGE": {
            return {
                input: action.payload?.input
            }
        }
    }
}
