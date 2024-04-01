import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import Navbar from './Navbar';

function Profile({ playerList }) {
    return (
      <>
        <h1>Profile Page</h1>
        <div className="container text-center">
          <div className="row row-cols-4">
            {playerList.map((player) => (
              <div key={player.userid}>
                <img
                  className="player-avatar"
                  src={player.avatarURL}
                  alt={`Profile picture of ${player.username}`}
                />
                <br />
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  

export default Profile;