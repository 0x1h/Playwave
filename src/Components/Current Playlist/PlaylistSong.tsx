import {FC} from 'react'

interface PlaylistSongProps {
    index: number;
    img_url: string;
    song_name: string;
    song_uri: string;
}

const PlaylistSong: FC<PlaylistSongProps> = ({index, img_url, song_name}) => {
    return (
        <div className='Playlist_Song'>
            <div className="song-main-info">
                <div id="index" style={{color: '#FFF'}}>
                    <p>{index}</p>
                    <span className='triangle'></span>
                </div>
                <div id="img-box">
                    <img src={img_url} alt="" />
                </div>
                <div id="song-name" style={{color: '#FFF'}}>{song_name}</div>
            </div>
            <div className="options"></div>
        </div>
    )
}

export default PlaylistSong
