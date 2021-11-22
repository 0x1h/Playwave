import { FC } from "react";
import "./scss/player.css"
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { TopResultProp } from "../Components/Search/TopResult";

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
      audioLists={audioStuff}
      defaultPosition={{right: 0,bottom: 0}}
      quietUpdate={true}
      />
    </div>
  );
};

export default Player;
