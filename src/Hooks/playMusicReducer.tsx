import { SearchReultsType } from "../Components/Search/SearchBar";

export type State = {
    addPlayList?: boolean;
    results?: SearchReultsType['songs'];
    isLoading?: boolean;
    displayResults?: boolean;
    selectedSong?: string;
}

type Action = {
    type: string;
    payload:
    | SearchReultsType['songs']
    | string
    | boolean
}

export const plaMusicReducer = (state: State, action: Action): any => {
    switch(action.type){
        case 'FOUND_SONGS': {
            return {
                ...state,
                results: action.payload
            }
        }
        case 'PLAY_SONG': {
            return {
                 ...state,
                  results: action.payload
            }
        }
        case 'SET_SELCTED': {
            return {
                ...state,
                selectedSong: action.payload
            }
        }
        case  'DISPLAY_PLAYLIST': {
            return {
                ...state,
                addPlayList: action.payload
            }
        }
        case 'DISPLAY_LOADING' : {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case 'DISPLAY_RESULTS': {
            return {
                ...state,
                displayResults: action.payload
            }
        }
        case 'ADD_PLAYLIST': {
            return {
                ...state,
                addPlayList: action.payload
            }
        }default: {
            return "That Type Doesn't Exist"
        }
    }
}