import { FC, useState, useReducer } from "react";
import "../scss/createPlaylist.css";
import { reducer } from "../../../Hooks/reducer";
import NoImage from "./NoImage";

export type State = {
  playlistUri: string;
  playlistName: string;
  playlist_id: string;
  songs?: { 
    name: string;
    albumUri: string;
    artist: string;
    id?: string
  }[];
};

export const defaultState: State = {
  playlistUri: "",
  playlistName: "",
  playlist_id: "",
  songs: []
};

const CreatePlayList: FC<{ close: () => void, setData: (data: State[]) => void }> = ({ close, setData }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addPlayList = () => {
    if(!localStorage.getItem("playlists")){
        localStorage.setItem("playlists", "[]")
    }
    if(state.playlistName === ''){
      alert("you cannot create playlist with empty name")
    }else{
      
    const currPlayLists = JSON.parse(localStorage.getItem("playlists")!)
    const updatePlayList: State[] = [...currPlayLists, {...state, playlist_id: new Date().getTime().toString()}]
    
    localStorage.setItem("playlists", JSON.stringify(updatePlayList))
    setData!(updatePlayList)

    close!()
    }
  };

    //converting uploaded img in dataURL
    const getBase64 = (file: File, cb: (arg: string | ArrayBuffer | null) => void) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          cb(reader.result)
      };
      reader.onerror = (error) => {
          console.log('Error: ', error);
      };
    }
  
    const fileUploadHandler = (e: any) => {
      //uploaded file size
      const fileSize: number = parseFloat(((e.target.files![0].size / 1024) /1024).toFixed(3))
      
      if(fileSize > .150){
        alert("File size is higher than 150Kb please choose somthing lower")
      }else getBase64((e.target.files![0]), (result: any): void => {
        dispatch({
          type: "ON_CHANGE",
          payload: { ...state, playlistUri: result},
        });
      });
    }

  return (
    <div className="createPlaylist">
      <div className="createPlayList-container">
        <div className="text-bar">
          <h3 style={{ color: "#FFF", paddingTop: "20px" }}>Create Playlist</h3>
        </div>
        <div className="circle">
        <input accept="image/*" type='file' id="imgInp" onChange={fileUploadHandler}/>
          {state.playlistUri ? (
            <img src={state.playlistUri} alt="" />
          ) : (
            <NoImage />
          )}
        </div>
        <form>
          <input
            type="text"
            value={state.playlistName}
            onChange={(e) =>
              dispatch({
                type: "ON_CHANGE",
                payload: { ...state, playlistName: e.target.value },
              })
            }
            placeholder="Playlist name"
            maxLength={12}
          />
        <div className="save-container">
          <button onClick={close} type="button">Cancel</button>
          <button onClick={() => addPlayList()} type="submit">Create</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlayList;
