import { State } from "../Components/Home/Playlists/createPlayList"; 

export type Action = {
    type: string;
    payload?: {
        playlistUri: string;
        playlistName: string;
    };
}

export const reducer =  (state: State, action: Action): any => {
    switch(action.type){
        case "ON_CHANGE":{
            const nameInput = action.payload?.playlistName
            const imgInput =  action.payload?.playlistUri

            return {
                ...state, 
                playlistName: nameInput,
                playlistUri: imgInput,
            }
        }
        case "UPDATE_PLAYLISTS": {
            const playlists = action.payload

            return {
                USER_PLAYLISTS: playlists 
            }
        }
    }
}