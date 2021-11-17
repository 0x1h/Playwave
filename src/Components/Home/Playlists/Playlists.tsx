import {FC} from 'react'
import { useHistory } from 'react-router-dom'

export interface PlayListProps {
    name: string;
    imageUri: string | undefined
    hideContainer?: () => void
    playlist_id: string
    addToPlayList?: (id: string) => void
}

const Playlists: FC<PlayListProps> = ({name, imageUri, playlist_id}) => {
    let hisotry = useHistory()

    return (
        <div className="playlist" onClick={() => hisotry.push(`/Playlist/${playlist_id}`)}>
            <div className="main-info">
                <div className="playlist-albumUri">
                    <img src={imageUri} alt="" />
                </div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Playlists
