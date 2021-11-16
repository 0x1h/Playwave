import React, { useState, FC, useEffect } from "react";
import CreatePlayList from "../Home/Playlists/createPlayList";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { SearchReultsType } from "./SearchBar";
import { defaultState } from "./Results";
import { TopResultProp } from "./TopResult";
import "./scss/search.css";

const SeachComponent: FC<{setSelectedState: (url: string) => void}> = ({setSelectedState}) => {
  //Todo: Change that states to useReducer
  //Todo: Makes Big Confusion! 
  const [addPlayList, setAddPlayList] = useState<boolean>(true);
  const [results, setResults] = useState<SearchReultsType["songs"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [selectedSong, setSelctedSong] = useState(defaultState)

  const setResultsState = (results: SearchReultsType["songs"]): void => {
    setResults(results);
  };

  const setSelcted = (url: TopResultProp) => {
    setSelctedSong({
      name: url.name,
      image: url.image,
      song_url: url.song_url
    })
  }

  useEffect(() => {
    setSelectedState(selectedSong.song_url)
  }, [selectedSong])

  return (
    <React.Fragment>
      {!addPlayList ? (
        <CreatePlayList close={() => setAddPlayList(true)} />
      ) : null}
      <div className="home-container">
        <PlaylistsCont addPlayListLayout={() => setAddPlayList(false)} />
        <div className="search-component">
          <SearchBar
            Work={results}
            //Todo: Can be reduce states and use
            tranferResult={setResultsState}
            setLoaderTrue={() => setIsLoading(true)}
            setLoaderFalse={() => setIsLoading(false)}
            displayResultsTrue={() => setDisplayResults(false)}
            displayResultsFalse={() => setDisplayResults(true)}
          />
          <Results results={results!} load={isLoading} displayResults={displayResults} setParentState={setSelcted}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeachComponent;
