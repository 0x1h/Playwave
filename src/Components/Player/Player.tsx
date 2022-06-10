import ReactJkMusicPlayer from 'react-jinke-music-player'
import { FC, useEffect, useState } from "react";
import { TopResultProp } from "../Search/TopResult";
import 'react-jinke-music-player/assets/index.css'
import "./scss/player.css"

const Player: FC<{ curr_song: TopResultProp}> = ({curr_song}) => {  
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth)
  
    const audioStuff = [{ 
      name: curr_song.name,
      singer: '',
      cover: curr_song.image,
        musicSrc: () => {
          return Promise.resolve(
            curr_song.song_url!,
          )
        },
    }]

    const windowResize = () => {
      setWindowSize(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener("resize", windowResize)
    
      return () => window.removeEventListener("resize", windowResize)
    })

  return (
    <div className="song-player">
      <ReactJkMusicPlayer 
      showDownload={false}
      showThemeSwitch={false}
      glassBg={true}
      audioLists={audioStuff[0].name === '' ? [] : audioStuff}
      defaultPosition={{right: 0,bottom: 0}}
      quietUpdate={true}
      showReload={false}
      drag={false}
      defaultVolume={0.5}
      spaceBar={true}
      preload={true}
      mode={windowSize >= 768 ? 'full' : "mini"}
      />
    </div>
  );
};

export default Player;
