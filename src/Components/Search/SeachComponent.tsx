import React, { useState } from "react";
import CreatePlayList from "../Home/Playlists/createPlayList";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { SearchReultsType } from "./SearchBar";
import "./scss/search.css";

interface DrillingProps {
  results: SearchReultsType["songs"];
}

function SeachComponent() {
  const [addPlayList, setAddPlayList] = useState<boolean>(true);
  const [results, setResults] = useState<SearchReultsType["songs"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);

  const setResultsState = (results: SearchReultsType["songs"]): void => {
    setResults(results);
  };

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
            setLoader={() => setIsLoading(!isLoading)}
            displayResultsTrue={() => setDisplayResults(false)}
            displayResultsFalse={() => setDisplayResults(true)}
          />
          <Results results={results} load={isLoading} displayResults={displayResults}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeachComponent;
