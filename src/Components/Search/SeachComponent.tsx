import React, { useState, FC, useEffect } from "react";
import CreatePlayList from "../Home/Playlists/createPlayList";
import PlaylistsCont from "../Home/Playlists/PlaylistsCont";
import SearchBar from "./SearchBar";
import Results from "./Results";
import { SearchReultsType } from "./SearchBar";
import { defaultState } from "./Results";
import { TopResultProp } from "./TopResult";
import AddToPlaylist from "../Home/Suggestions/AddToPlaylist";
import "./scss/search.css";

const SeachComponent: FC<{ setSelectedState: (url: string) => void }> = ({
  setSelectedState,
}) => {
  //Todo: Change that states to useReducer
  //Todo: Makes Big Confusion!
  const [addPlayList, setAddPlayList] = useState<boolean>(true);
  const [results, setResults] = useState<SearchReultsType["songs"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayResults, setDisplayResults] = useState<boolean>(false);
  const [selectedSong, setSelctedSong] = useState<TopResultProp>(defaultState);
  const [addToPlaylist, setAddToPlaylist] = useState<boolean>(false);

  const setResultsState = (results: SearchReultsType["songs"]): void => {
    setResults(results);
  };

  const setSelcted = (url: TopResultProp) => {
    setSelctedSong({
      name: url.name,
      image: url.image,
      song_url: url.song_url,
    });
  };

  useEffect(() => {
    setSelectedState(selectedSong.song_url);
  }, [selectedSong]);

  return (
    <React.Fragment>
      {addToPlaylist ? (
        <AddToPlaylist
          songname={selectedSong.name}
          setFalse={() => setAddToPlaylist(false)}
          song_data={selectedSong}
        />
      ) : null}
      {!addPlayList ? (
        <CreatePlayList close={() => setAddPlayList(true)} />
      ) : null}
      <div className="home-container">
        <PlaylistsCont addPlayListLayout={() => setAddPlayList(false)} />
        <div className="search-component">
          <SearchBar
            Work={results}
            //Todo: Can be reduce states and use less
            tranferResult={setResultsState}
            setLoaderTrue={() => setIsLoading(true)}
            setLoaderFalse={() => setIsLoading(false)}
            displayResultsTrue={() => setDisplayResults(false)}
            displayResultsFalse={() => setDisplayResults(true)}
          />
          <Results
            results={results!}
            load={isLoading}
            displayResults={displayResults}
            setParentState={setSelcted}
            appearAdding={() => setAddToPlaylist(true)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SeachComponent;
