import "./App.css";
import { Route, Routes} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ChairAltTwoTone, ChatBubble, ChatBubbleOutlineTwoTone } from "@mui/icons-material";
import Profile from "./components/Profile"; 
import Chat from "./components/Chat";  


function App() {
  const [allPlayers, setAllPlayers] = useState(``);
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
    
    <Route path = "/Profile" element={<Profile />} />
    <Route path = "/Chat" element={<Chat />} />
  
    {/* Player Cards */}
    {/* Buttons below Player Cards */}


    {/*Chat screen from top right icon  */}

    {/* Individual Chat screen */}
  
  </Routes>

       
      <hr />
      <div className="container text-center">
        <div className="row row-cols-4">
          {playerList.map((playerList) => (
          <div key={playerList.userid}>
            <img
              className="player-avatar"
              src={playerList.avatarURL}
              alt={`Profile picture of ${playerList.username}`}
            /><br />
            <p className="membertag">{playerList.username}, {playerList.currentRank}, {playerList.serverRegion}</p>
          </div>
          ))}
        </div>
      </div>

    
    </>
  );
}


export default App