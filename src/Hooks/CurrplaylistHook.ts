import { SearchReultsType } from '../Components/Search/SearchBar'

export type State = {
    playlist_songs: SearchReultsType['songs'],
    showAddPlaylist: boolean
}

type Action = {
    type: string,
    payload?: any
}

export const playlistReducer = (state: State, action: Action): any => {
    switch(action.type){
        case 'SHOW_ADD_PLAYLIST': {
            return {
                
            }
        }
    }
}