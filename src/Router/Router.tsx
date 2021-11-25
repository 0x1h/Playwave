import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"
import { TopResultProp } from "../Components/Search/TopResult"
import { UpdatedProps } from "../Components/Current Playlist/EditComponent"
import { State } from "../Components/Home/Playlists/createPlayList"
import About from "../Components/Landing/Others/About"
import Landing from "../Components/Landing/Landing"
import Setup from "../Components/Setup/Setup"
import Home from "../Components/Home/Home"
import ProfileNav from "../Components/Home/ProfileNav"
import SearchComponent from "../Components/Search/SeachComponent"
import CurrPlaylist from "../Components/Current Playlist/CurrPlaylist"
import Profile from "../Components/Profile/Profile"
import Player from "../Components/Player/Player"
import ProfileEdit from "../Components/Profile/Edit/ProfileEdit"

const Playwave = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false)
  const [hideAddPlaylist, setHidePlaylist] = useState<boolean>(false)
  const [selectedSong, setSelctedSong] = useState<TopResultProp>({
    name: "",
    image: "",
    song_url: "",
  })
  const [playlists, setPlaylists] = useState<State[]>([])
  const [redirect, setRedirect] = useState(false)
  const [changed, setChanged] = useState(false)
  const [showHome, setShowHome] = useState(false)

  const setData = (data: State[]): void => {
    setPlaylists(data)
  }

  const deletePlaylist = (playlist: string): void => {
    const currPlaylist: State[] = JSON.parse(localStorage.getItem("playlists")!)
    const removedData = currPlaylist.filter((e) => e.playlist_id !== playlist)
    setPlaylists(removedData)
    localStorage.setItem("playlists", JSON.stringify(removedData))
    setRedirect(true)
  }

  const updatePlaylist = (newData: UpdatedProps, id: string) => {
    const currPlaylist: State[] = JSON.parse(localStorage.getItem("playlists")!)

    const findIndex = currPlaylist.findIndex((each) => each.playlist_id === id)
    currPlaylist[findIndex].playlistName = newData.newTitle
    currPlaylist[findIndex].playlistUri = newData.newImage

    setPlaylists(currPlaylist)
    localStorage.setItem("playlists", JSON.stringify(currPlaylist))
  }

  useEffect(() => {
    setTimeout(() => setRedirect(false), 10)
  }, [redirect])

  const deleteSong = (id: string, playlist_id: string) => {
    const currPlaylist: State[] = JSON.parse(localStorage.getItem("playlists")!)

    const findPlaylist = currPlaylist.findIndex(
      (playlist) => playlist.playlist_id === playlist_id
    )
    const filteredSongs = currPlaylist[findPlaylist].songs?.filter(
      (song) => song.id !== id
    )

    currPlaylist[findPlaylist].songs = filteredSongs

    localStorage.setItem("playlists", JSON.stringify(currPlaylist))
    setChanged(true)
    setTimeout(() => setChanged(false), 10)
  }

  useEffect(() => {
    const logined: string | null = localStorage.getItem("isAuth")
    logined && setDisplayNav(true)
  }, [displayNav])

  const setMusicState = (url: TopResultProp) => {
    if (url.song_url !== "") setSelctedSong({ ...url })
  }

  return (
    <Router>
      {displayNav && (
        <ProfileNav
          showPlaylist={() => setHidePlaylist(true)}
          showHome={showHome}
          changeStateFalse={() => setShowHome(false)}
          changeStateTrue={() => setShowHome(true)}
        />
      )}
      <Switch>
        <Route exact path="/">
          {<Redirect to="/Welcome" />}
        </Route>
        {displayNav ? <Redirect exact from="/Welcome" to="/Home" /> : null}
        <Route path="/Welcome">
          <Landing />
        </Route>
          <Route path="/About">
            <About />
          </Route>
        <Route path="/callback">{<Redirect to="/Setup" />}</Route>
        <Route exact path="/Setup">
          <Setup appearComponent={() => setDisplayNav(true)} />
        </Route>
        <Route
          path="/Playlist/:id"
          children={
            <CurrPlaylist
              showAdd={hideAddPlaylist}
              changeStateFalse={() => setHidePlaylist(false)}
              changeState={() => setHidePlaylist(true)}
              changed={changed}
              playSong={setMusicState}
              deleteSong={deleteSong}
              setData={setData}
              newAdded={playlists}
              deleteAction={deletePlaylist}
              redirect={redirect}
              updateState={updatePlaylist}
            />
          }
        ></Route>
        )
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Profile-Edit">
          <ProfileEdit />
        </Route>
        <Route exact path="/Home">
          <Home
            setData={setData}
            setParentState={setMusicState}
            playlists={playlists}
            addPlaylist={hideAddPlaylist}
            changeState={() => setHidePlaylist(true)}
            changeStateFalse={() => setHidePlaylist(false)}
          />
        </Route>
        <Route path="/Search">
          <SearchComponent
            changeState={() => setHidePlaylist(true)}
            changeStateFalse={() => setHidePlaylist(false)}
            showAdd={hideAddPlaylist}
            setSelectedState={setMusicState}
            setData={setData}
            newAdded={playlists}
          />
        </Route>
      </Switch>
      {displayNav ? <Player curr_song={selectedSong} /> : null}
    </Router>
  )
}

export default Playwave
