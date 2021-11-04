import {FC} from 'react'

export interface PlayListProps {
    name: string;
    imageUri: string | undefined
    key?: string
    hideContainer?: () => void
}

const Playlists: FC<PlayListProps> = ({name, imageUri}) => {
    return (
        <div className="playlist">
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
