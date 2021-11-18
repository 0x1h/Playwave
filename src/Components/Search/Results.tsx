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

interface ResultProps {
  results: SearchReultsType["songs"];
  load: boolean;
  displayResults: boolean;
  setParentState: (url: TopResultProp) => void
  appearAdding: () => void
}

const Results: FC<ResultProps> = ({ results, load, displayResults, setParentState, appearAdding }) => {
  const [currMusic, setCurrMusic] = useState(defaultState);
  const setMusic = (url: TopResultProp) => {
    setCurrMusic(url);
  };

  //Setting Chosen Music data in parent useState
  useEffect(() => {
      setParentState(currMusic);
  }, [currMusic]);

  const TopResultSet = (url: TopResultProp) => {
    appearAdding()
    setCurrMusic(url)
  }

  return (
    <div className="Results-Container">
      {load ? <LoadingScreen /> : null}
      {displayResults ? (
        <TopResult topresult={results} setMusic={setMusic} appearAdd={TopResultSet}/>
      ) : null}
      {displayResults ? <FoundSong results={results} setMusic={setMusic} appearAdding={appearAdding} /> : null}
    </div>
  );
};

export default Results;
