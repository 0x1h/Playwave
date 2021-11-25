import { useState, Fragment, FC, useEffect } from "react"
import PlaylistsCont from "./Playlists/PlaylistsCont"
import { State } from "./Playlists/createPlayList"
import SuggestionCont from "./Suggestions/SuggestionCont"
import { TopResultProp } from "../Search/TopResult"
import AddToPlaylist from "./Suggestions/AddToPlaylist"
import CreatePlayList from "./Playlists/createPlayList"
import "./scss/home-style.css"

const Home: FC<{
  setData: (data: State[]) => void
  playlists: State[]
  addPlaylist: boolean
  changeState: () => void
  changeStateFalse: () => void
  setParentState :(song: TopResultProp) => void
}> = ({ setData, playlists, addPlaylist, changeState, changeStateFalse, setParentState }): JSX.Element => { 
    const [hideAddPlaylist, setHidePlaylist] = useState<boolean>(true)
    const [chosenSong, setChosenSong] = useState<TopResultProp>({
      name: "",
      image: "",
      song_url: "",
      id: ""
    })
    
  const setSong = (song: TopResultProp): void => {
    setChosenSong(song)
  }

  useEffect(() => {
    setParentState(chosenSong)
  }, [chosenSong])

  return (
    <Fragment>
      {!hideAddPlaylist ? <AddToPlaylist songname={chosenSong.name} setFalse={() => setHidePlaylist(true)} song_data={chosenSong}/>: null}
      {addPlaylist ? (
        <CreatePlayList close={changeStateFalse} setData={setData} />
      ) : null}
      <div className="home-container">
        <PlaylistsCont
          addPlayListLayout={changeState}
          newAdded={playlists}
        />
        <SuggestionCont setFalse={() => setHidePlaylist(false)} setState={setSong}/>
      </div>
    </Fragment>
  )
}

export default Home
