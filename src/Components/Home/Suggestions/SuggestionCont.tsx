import { FC, useEffect, useState } from "react"
import { artists } from "./artists"
import { TopResultProp } from "../../Search/TopResult"
import SuggestedContent from "./Suggested-Cotent"
import LoadingScreen from "../../Search/LoadingScreen"
import axios from "axios"
import "../scss/suggestions-style.css"
import "../../Search/scss/loading.css"

const SuggestionCont: FC<{
  setFalse: () => void
  setState: (song: TopResultProp) => void
}> = ({ setFalse, setState }) => {
  const [suggestions, setSuggestions] = useState<any>([])
  const [selected, setSelcted] = useState<TopResultProp>({
    name: "",
    image: "",
    song_url: "",
    id: "",
  })

  const setSelect = (crrSong: TopResultProp) => {
    setSelcted(crrSong)
  }

  useEffect(() => {
    if(selected.name !== '')setState(selected)
  }, [selected.name])

  const getSuggestions = async () => {
    const randomNumber: number = Math.floor(Math.random() * artists.length)

    await axios
      .post(`https://playwave-server.herokuapp.com/musics`, {
        musicTitle: artists[randomNumber],
      })
      .then((resp) => {
        const filterResponse = resp.data.data.map((song: any) => {
          return {
            name: song.title_short,
            medium_image: song.album.cover_medium,
            track_Uri: song.preview,
            id: song.id,
          }
        })
        setSuggestions(filterResponse)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  return (
    <div className="suggestion-container">
      <h1>Explore</h1>
      <div className="suggested-content">
        {suggestions.length !== 0 ? (
          suggestions.map((e: any) => {
            return (
              <SuggestedContent
                name={e.name}
                imgSrc={e.medium_image}
                setFalse={setFalse}
                songUri={e.track_Uri}
                key={e.id}
                setParentState={setSelect}
              />
            )
          })
        ) : (
          <LoadingScreen />
        )}
      </div>
    </div>
  )
}

export default SuggestionCont
