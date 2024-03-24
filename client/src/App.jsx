import "./App.css";
import Profile from "./components/Profile";
// import Users from "./components/Users";
// import Region from "./components/Region";
// import Form from "./components/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [allPlayers, setAllPlayers] = useState(``);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  async function getPlayers() {
  
    try {
      const response = await fetch(`http://localhost:4000/users`);
      const playerList = await response.json();
      setPlayerList(playerList);
    } catch (error) {
      console.error(error.message);
  }
  }

  return (
    <>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
             <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
        <h1>cozone.gg</h1>
        <h3>connect and conquer</h3>
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
