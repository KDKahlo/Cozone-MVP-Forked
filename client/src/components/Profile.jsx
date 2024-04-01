import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import "./Profile.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import TinderCard from 'react-tinder-card';

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

    async function addPlayer() {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlayer)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Player added successfully:", data);
             
            } else {
                console.error("Failed to add player");
            }
        } catch (error) {
            console.error("Error adding player:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlayer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
           
            <h1>Profiles</h1>
            <div className="container text-center">
                <div className="row row-cols-4">
                    {playerList.map((player) => (
                        <TinderCard key={player.userid} 
                         preventSwipe={["up", "down"]}
                         className="swipe">
                        <div className="card"  >
                               <img
                                className="player-avatar"
                                src={player.avatarURL}
                                alt={`Profile picture of ${player.username}`}
                                 />
                            <br />
                            <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
                        </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
            <div>
                
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
            </div>
        </>
    );
}

export default Profile;

