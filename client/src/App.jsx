import "./App.css";
import { Route, Routes, useLocation} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile"; 
import Chats from "./components/Chats";  
import SwipeButtons from "./components/SwipeButtons";
import Login from "./components/Login.jsx";
import CreateNewAccountPage from "./components/CreateNewAccountPage.jsx";



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

  // Use React Router's useLocation to get the current path
  // const location = useLocation();

  // Check if the current path is "/login" to determine Navbar visibility
  // const isNavbarVisible = location.pathname !== "/login";


  return (
    <>
 
    {/* Header component */}
    
  

  
   
   
  <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/CreateNewAccountPage" element={<CreateNewAccountPage />} />
      {/* Player Cards */}
  <Route path = "/Profile" element={<Profile playerList={playerList} />}>
     {/* Buttons below Player Cards */}
  <Route path = "SwipeButtons" element={<SwipeButtons />} /> 
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