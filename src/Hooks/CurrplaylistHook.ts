import { State as PlaylistType} from '../Components/Home/Playlists/createPlayList'

export type State = {
    curr_playlist: PlaylistType,
    showAddPlaylist: boolean,
    showOptions: boolean,
    showDelete: boolean;
    showEdit: boolean
}

type Action = {
    type: string,
    payload?: 
    | boolean 
    | PlaylistType 
}

export const playlistReducer = (state: State, action: Action): any => {
    switch(action.type){
        case 'SHOW_ADD_PLAYLIST': {
            return {
                ...state,
                showAddPlaylist: action.payload
            }
        }
        case 'SET_PLAYLIST': {
            return {
                ...state,
                curr_playlist: action.payload
            }
        }
        case 'SHOW_OPTIONS': {
            return {
                ...state,
                showOptions: action.payload
            }
        }
        case 'SHOW_DELETE': {
            return {
                ...state,
                showDelete: action.payload
            }
        }
        case 'SHOW_EDIT': {
            return {
                ...state,
                showEdit: action.payload
            }
        }
    }
}