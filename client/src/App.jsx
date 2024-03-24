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
  const [serverRegion, setServerRegion] = useState(``);
  const [playerByRegion, setPlayerByRegion] = useState([]);

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

  async function getRegion() {

    try {
      const response = await fetch(`http://localhost:4000/users/region/${serverRegion}`); // /api/users/region/Europe not working
      const result = await response.json();
      setPlayerByRegion(result.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } return (
      playerByRegion.filter()
    )
  }

  useEffect(() => {
    getRegion();
  }, []);

  const filteredPlayers = playerList.filter((playerList) =>
    playerList.toLowerCase().includes(serverRegion.toLowerCase())
    );

    setPlayerByRegion(playerByRegion);
  }

  const handleInputChange = (event) => {
    const { serverRegion } = event.target.value;
    setServerRegion((prevState) => ({ ...prevState, [serverRegion]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRegion();
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
      <div className="form"><form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="search" class="form-label">Search by region</label>
          <input type="text" id="search" value={serverRegion.value} onChange={handleInputChange}/>
      </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
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
