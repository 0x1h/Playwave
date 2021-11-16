import { FC, useRef, useEffect } from "react";
import "./scss/player.css"

const Player: FC<{ curr_song: string | undefined}> = ({curr_song}) => {
  const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
      if(curr_song?.trim() === '') return 

      audioRef.current!.pause()
      audioRef.current!.load()
      audioRef.current!.play()
    }, [curr_song])

  return (
    <div className="song-player">
      <audio controls ref={audioRef}>
        <source src={curr_song} type="audio/mp3"/>
      </audio>
    </div>
  );
};

export default Player;
