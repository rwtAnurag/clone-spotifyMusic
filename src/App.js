import React, {useEffect} from "react";
import './App.css';
import Player from "./Player";
import spotifyWebApi from "spotify-web-api-js";
import SpotifyWebApi from 'spotify-web-api-js';
import { useState } from 'react';
import {getTokenFromUrl} from "./Spotify";
// import { useStateValue } from "./StateProvider";
import { useDataLayerValue} from "./DataLayer";

const spotify=new SpotifyWebApi();

function App() {
  // const [token, setToken]=useState(null);
  const [{token}, dispatch] =useDataLayerValue();
  useEffect(() => {
    // Update the document title using the browser API
    const hash =getTokenFromUrl();
    window.location.hash ="";
    const _token =hash.access_token; 
    if(_token){
      spotify.setAccessToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      });
      spotify.setAccessToken(_token);
   
  
    spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
        });
    });
  }
   
    
  },[]);
  return (
    <div className="App">
     <Player spotify={spotify}/>
    </div>
  );
}

export default App;
