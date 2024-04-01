import "./App.css";
import { Route, Routes} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ChairAltTwoTone, ChatBubble, ChatBubbleOutlineTwoTone } from "@mui/icons-material";
import Profile from "./components/Profile"; 
import Chat from "./components/Chat";  
import TinderCard from "react-tinder-card";
import SwipeButtons from "./components/SwipeButtons";


function App() {
 
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  async function getPlayers() {
  
    try {
      const response = await fetch(`/api/users`);
      console.log('this is my fetch response for allusers', response);

      const playerList = await response.json();
      console.log('this is my fetch response for playerlist:', playerList);

      setPlayerList(playerList);
    } catch (error) {
      console.error(error.message);
  }
  }

  return (
    <>
    {/* Header component */}
    <Navbar />

  <Routes>
    
  <Route path="/Profile" element={<Profile playerList={playerList}/>}>
  <Route path="SwipeButtons" element={<SwipeButtons />} /> 
  </Route>
    <Route path = "/Chat" element={<Chat />} />
  
    {/* Player Cards */}
    {/* Buttons below Player Cards */}


    {/*Chat screen from top right icon  */}

    {/* Individual Chat screen */}
  
  </Routes>

       
      <hr />
    
    
    </>
  );
}


export default App