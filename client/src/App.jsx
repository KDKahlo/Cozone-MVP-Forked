import "./App.css";
import { Route, Routes} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile"; 
import Chats from "./components/Chats";  
import SwipeButtons from "./components/SwipeButtons";
import Login from "./components/Login.jsx";
import axios from "axios";

function App() {
 
  const [playerList, setPlayerList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await axios.get("/api/auth/profile", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setIsLoggedIn(true);
          await getPlayers();
        } catch (err) {
          console.error(err);
          setIsLoggedIn(false);
        }
      }
    };

    checkLoggedInStatus();
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

  const handleLogin = () => {
    setIsLoggedIn(true);
    getPlayers();
  };

  return (
    <>
 
    {/* Header component */}
    <Navbar />
   <div className="login-fields">
     {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
          ) : (
          <Navigate to="/profile" />
          )}
   </div>

  <Routes>
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