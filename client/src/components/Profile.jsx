import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [serverRegion, setServerRegion] = useState(`Europe`);
    const [players, setPlayers] = useState([]);

    // useEffect(() => {
    //   getRegion();
    // }, [serverRegion]);

  async function getRegion() {
    try {
      const response = await fetch(`http://localhost:4000/users/region/${serverRegion}`); // /api/users/region/Europe not working
      const result = await response.json();

      setPlayers(result.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  useEffect(() => {
    getRegion();
  }, []);

  return (
    <>
      <div className="profilepic">
        <p>Hello</p>
      </div>
      <div className="stats"></div>
      <h3>Players in your Region</h3>
      <div className="container text-center">
        <div className="row row-cols-4">
          {players.map((players) => (
          <div key={players.userid}>
            <img
              className="player-avatar"
              src={players.avatarURL}
              alt={`Profile picture of ${players.username}`}
            /><br />
            <p className="membertag">{players.username}, {players.currentRank}</p>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}