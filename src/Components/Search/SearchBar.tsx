import React, { useReducer, useEffect } from "react";
import { searchreducer } from "../../Hooks/SearchReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export type SearchReultsType = {
  input: string;
  songs: {
    name: string;
    small_image: string;
    medium_image: string;
    track_Uri: string;
  }[];
};

export const searchDefault: SearchReultsType = {
  input: "",
  songs: [],
};

interface setComponentProps {
  tranferResult: (data: SearchReultsType["songs"]) => void;
  setLoaderTrue: () => void;
  setLoaderFalse: () => void;
  displayResultsTrue: () => void;
  displayResultsFalse: () => void;
  Work: SearchReultsType['songs']
}



const SearchBar: React.FC<setComponentProps> = ({
  tranferResult,
  setLoaderTrue,
  displayResultsTrue,
  displayResultsFalse,
  setLoaderFalse,
}) => {
  const [state, dispatch] = useReducer(searchreducer, searchDefault);

  const formHandler = async () => {
    if (!state.input.trim()) return;
    setLoaderTrue();
    displayResultsTrue();

    await axios
      .post(`https://playwave-server.herokuapp.com/musics`, {
        musicTitle: state.input
      })
      .then((resp) => {
        const filterResponse = resp.data.data.map((song: any) => {
          return {
            name: song.title_short,
            small_image: song.album.cover_small,
            medium_image: song.album.cover_medium,
            track_Uri: song.preview,
          };
        });
        tranferResult!(filterResponse);
        displayResultsFalse();
        setLoaderFalse();
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formHandler();
      }}
    >
      <div className="SearchBar">
        <FontAwesomeIcon
          icon={faSearch}
          size="2x"
          style={{ color: "#FFF", marginLeft: "12px", paddingRight: "10px" }}
        />
        <input
          type="text"
          value={state.input}
          onChange={(e) => {
            dispatch({
              type: "ON_CHANGE",
              payload: { input: e.target.value },
            });
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
