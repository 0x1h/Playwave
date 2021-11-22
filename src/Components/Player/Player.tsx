import ReactJkMusicPlayer from 'react-jinke-music-player'
import { FC } from "react";
import { TopResultProp } from "../Search/TopResult";
import 'react-jinke-music-player/assets/index.css'
import "./scss/player.css"

const Player: FC<{ curr_song: TopResultProp}> = ({curr_song}) => {  
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
      />
    </div>
  );
};

export default Player;
