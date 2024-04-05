import "./App.css";
import { Route, Routes} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile"; 
import Chats from "./components/Chats";  
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
      {/* Player Cards */}
  <Route path="/Profile" element={<Profile playerList={playerList} />}>
     {/* Buttons below Player Cards */}
  <Route path="SwipeButtons" element={<SwipeButtons />} /> 
  </Route>
    {/*Chat screen from top right icon  */}
 <Route path = "/Chats" element={<Chats />} />
    {/* Individual Chat screen */}
  
  </Routes>

       
      <hr />
    
    
    </>
  );
}


export default App