import { FC, useState, useEffect } from "react";
import {TopResultProp} from "./TopResult";
import TopResult from "./TopResult";
import FoundSong from "./FoundSong";
import LoadingScreen from "./LoadingScreen";
import { SearchReultsType } from "./SearchBar";

export const defaultState: TopResultProp = {
  name: '',
  image: '',
  song_url: ''
}

const Results: FC<{
  results: SearchReultsType["songs"];
  load: boolean;
  displayResults: boolean;
  setParentState: (url: TopResultProp) => void
}> = ({ results, load, displayResults, setParentState }) => {
  const [currMusic, setCurrMusic] = useState(defaultState);
  const setMusic = (url: TopResultProp) => {
    setCurrMusic(url);
  };

  useEffect(() => {
      setParentState(currMusic);
  }, [currMusic]);

  return (
    <div className="Results-Container">
      {load ? <LoadingScreen /> : null}
      {displayResults ? (
        <TopResult topresult={results} setMusic={setMusic} />
      ) : null}
      {displayResults ? <FoundSong results={results} setMusic={setMusic} /> : null}
    </div>
  );
};

export default Results;
