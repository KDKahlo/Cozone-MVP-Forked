import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import "./Profile.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import TinderCard from 'react-tinder-card';
import SwipeButtons from './SwipeButtons';

function Profile({ playerList }) {
    const [newPlayer, setNewPlayer] = useState({
        username: "",
        birthdate: "",
        email: "",
        password: "",
        serverRegion: "",
        currentRank: "",
        avatarURL: ""
    });

    const [rankFilter, setRankFilter] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState([]);

//function that handles the change in the rank filter
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const filtered = playerList.filter(player => player.currentRank === rankFilter);
    setFilteredPlayers(filtered);

    console.log("Rank Filter:", rankFilter);
    

}

//function to add new player
    // async function addPlayer() {
    //     try {
    //         const response = await fetch("/api/users", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(newPlayer)
    //         });
    //         if (response.ok) {
    //             const data = await response.json();
    //             console.log("Player added successfully:", data);
             
    //         } else {
    //             console.error("Failed to add player");
    //         }
    //     } catch (error) {
    //         console.error("Error adding player:", error);
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlayer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
           
            <h1>Player Profiles</h1>
           
            <div className = "" id = "label-input-button">
         <form onSubmit={handleSubmit}>       
          <label htmlFor="exampleDataList" 
          className="form-label protest-strike-regular">Search by rank:</label>
        <div className = "" id = "input-group"> 
             <input className="form-control" 
             list="datalistOptions" id="exampleDataList" 
             placeholder="Choose a rank"
             type="text"
             value={rankFilter}
             onChange={(e) => setRankFilter(e.target.value)} />
             <button className="btn mb-3 protest-strike-regular" 
             type="submit">Submit</button>
        </div>
        </form> 
        </div>
          <datalist id="datalistOptions">
              <option value="Immortal"/>
              <option value="Diamond"/>
              <option value="Silver"/>
              <option value="Gold"/>
              <option value="Platinum"/>
              <option value="Ascendant"/>
          </datalist>


          <div className="playerCards_cardContainer">
      <div className="">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <TinderCard key={player.userid} preventSwipe={["up", "down"]} className="swipe">
              <div className="card" style={{backgroundImage: `url(${player.avatarURL})`}}>
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            </TinderCard>
          ))
        ) : (
          playerList.map((player) => (
            <TinderCard key={player.userid} preventSwipe={["up", "down"]} className="swipe">
              <div className="card" style={{backgroundImage: `url(${player.avatarURL})`}}>
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            </TinderCard>
          ))
        )}
        <SwipeButtons/>
      </div>
    </div>

            {/* <div className="playerCards_cardContainer">
                <div className="">
                    {playerList.map((player) => (
                        <TinderCard key={player.userid} 
                         preventSwipe={["up", "down"]}
                         className="swipe">
                        <div className="card"  style={{backgroundImage: `url(${player.avatarURL})`}}>
                            <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
                        </div>
                        </TinderCard>
                       
                    ))}
                     <SwipeButtons/>
                </div>
            </div> */}
            {/* <div>
                
                <h2>Add Player</h2>
                <form onSubmit={addPlayer}>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                    <input type="text" name="birthdate" placeholder="DOB format: 1999-04-25" onChange={handleChange} />
                    <input type="text" name="email" placeholder="your email address" onChange={handleChange} />
                    <input type="text" name="password" placeholder="password" onChange={handleChange} />
                    <input type="text" name="serverRegion" placeholder="your server region" onChange={handleChange} />
                    <input type="text" name="currentRank" placeholder="your current rank" onChange={handleChange} />
                    <input type="text" name="avatarURL" placeholder="avatar URL" onChange={handleChange} />
                   
             <IconButton>
              <PersonAddIcon type="submit" fontSize="large" className = "profile-icon" />
             </IconButton>
                </form>
            </div> */}
        </>
    );
}

export default Profile;

