import React, { useState, useEffect } from 'react';

function Region() {
    const [serverRegion, setServerRegion] = useState(``);
    const [players, setPlayers] = useState([]);

  
    const getRegion = async () => {

      try {
        const response = await fetch(`/api/users/region/${serverRegion}`);
        const players = await response.json();
        setPlayers(players.data);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    useEffect(() => {
      getRegion();
    }, []);

    return (
      <>
      <h1>Players in {players.serverRegion}</h1>
      <div className="container text-center">
        <div className="row row-cols-4">
          {players.map((players) => (
          <div key={players.userid}>
            <img
              className="player-avatar"
              src={players.avatarURL}
              alt={`Profile picture of ${players.username}`}
            /><br />
            <p className="membertag">{players.username}, {players.currentRank}, {players.serverRegion}</p>
          </div>
          ))}
        </div>
      </div></>
    );
  }

  export default Region;