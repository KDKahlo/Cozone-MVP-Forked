import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import "./Profile.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TinderCard from 'react-tinder-card';
import SwipeButtons from './SwipeButtons';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@material-ui/core';

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
    const [likedCards, setLikedCards] = useState([]);
    const tinderCardRef = useRef();
   
     

//function that handles the change in the rank filter
    const handleSubmit = async (e) => {
    e.preventDefault();
    
    const filtered = playerList.filter(player => player.currentRank === rankFilter);
    setFilteredPlayers(filtered);
    setRankFilter("");
    console.log("Rank Filter:", rankFilter);
    
    
}

//  Function to handle swipe depending on direction
const onSwipe = (direction, player) => {
    if (direction === 'right') {
      // Add the swiped card to the liked list
      setLikedCards(prevLikedCards => [...prevLikedCards, player]);
    } else if (direction === 'left') {
      // Ignore left swipes
      return; // Return early from the function
    }
  };
  
  

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

    const restoreCard = async () => {
     
        await tinderCardRef.current.restoreCard();
      };


    return (
        <>
           
            <h1>Player Profiles</h1>
           
            <div className = "" id = "label-input-button">
         <form onSubmit={handleSubmit}>       
          <label htmlFor="exampleDataList" 
          className=""></label>
        <div className = "filterByRank" id = "input-group"> 
             <input className="filterInputField" 
             list="datalistOptions" id="exampleDataList" 
             placeholder="Filter by rank"
             type="text"
             value={rankFilter}
             onChange={(e) => setRankFilter(e.target.value)} />
             <IconButton type="submit" className="filterIcon">
            <FilterListIcon fontSize ="large"/>
             </IconButton>
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
            {/* display will either be full playerlist or filtered by rank display */}
      <div className="">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <TinderCard key={player.userid}
             preventSwipe={["up", "down"]} 
             className="swipe"
              onSwipe={(direction) => onSwipe(direction, player)}
              
              ref={tinderCardRef}
              >
              <div className="card" style={{backgroundImage: `url(${player.avatarURL})`}}>
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            </TinderCard>
          ))
        ) : (
          playerList.map((player) => (
            <TinderCard key={player.userid} 
            preventSwipe={["up", "down"]} 
            className="swipe"
            onSwipe={(direction) => onSwipe(direction, player)}
          
            ref={tinderCardRef}
            >
              <div className="card" style={{backgroundImage: `url(${player.avatarURL})`}}>
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            </TinderCard>
          ))
        )}
         <SwipeButtons restoreCard={restoreCard} />
      </div>
    </div>

            {/* Liked Cards section */}
      <div className="liked-cards">
        <h2>Liked Cards</h2>
        <div className="liked-cards-list">
         
          {likedCards.map((card, index) => (
            <div key={index} className="liked-card">
              {/* Display card details */}
              <p>{card.username}, {card.currentRank}, {card.serverRegion}</p>
            
            </div>
          ))}
        </div>
      </div>


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

