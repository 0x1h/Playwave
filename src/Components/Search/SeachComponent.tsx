import React, { useState, FC, useEffect } from "react";
import CreatePlayList from "../Home/Playlists/createPlayList";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { SearchReultsType } from "./SearchBar";
import "./scss/search.css";

const SeachComponent: FC<{setSelectedState: (url: string) => void}> = ({setSelectedState}) => {
  const [addPlayList, setAddPlayList] = useState<boolean>(true);
  const [results, setResults] = useState<SearchReultsType["songs"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [selectedSong, setSelctedSong] = useState('')

  const setResultsState = (results: SearchReultsType["songs"]): void => {
    setResults(results);
  };

  const setSelcted = (url: string) => {
    setSelctedSong(url)
  }

  useEffect(() => {
    setSelectedState(selectedSong)
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
            tranferResult={setResultsState}
            setLoaderTrue={() => setIsLoading(true)}
            setLoaderFalse={() => setIsLoading(false)}
            displayResultsTrue={() => setDisplayResults(false)}
            displayResultsFalse={() => setDisplayResults(true)}
          />
          <Results results={results} load={isLoading} displayResults={displayResults} setParentState={setSelcted}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeachComponent;
