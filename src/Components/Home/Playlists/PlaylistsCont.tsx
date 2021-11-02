import Playlists from './Playlists';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom'

const PlaylistsCont = () => {
    let history = useHistory()

    return (
        <div className="playlist-container">
            <div className="wrapper">
                <button className="playList-btn" onClick={() => history.push("/Home")}>
                    <div className="btn-center">
                        <FontAwesomeIcon icon={faHome} size="2x" />
                        <p>Home</p>
                    </div>
                </button>
                <button className="playList-btn" onClick={() => history.push("/Search")}>
                <div className="btn-center">
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                        <p>Search</p>
                    </div>
                </button>
                <div className="create-playlist">
                    <h2>Your Playlists</h2>
                    <button className="playlist-create-btn">Add New</button>
                </div>
                <div className="playlists-box">
                </div>
            </div>
        </div>
    )
}

export default PlaylistsCont
