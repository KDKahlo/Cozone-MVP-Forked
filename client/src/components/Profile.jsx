import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"
import Navbar from './Navbar';
import "./Profile"

function Profile({ playerList }) {
    // 3. Define a functional component named Profile that takes a prop called playerList
    //    - Inside the component, useState and useRef hooks are used to manage state and refs
    const [currentIndex, setCurrentIndex] = useState(playerList.length - 1); // 4. Declare state variables
    const [lastDirection, setLastDirection] = useState(); // 4. Declare state variables
    const childRefs = useRef([]); // 5. Initialize a ref to hold references to child elements (player profile cards)
  
    // 6. Define a function swiped, which updates lastDirection and currentIndex when a swipe occurs
    const swiped = (direction, player, index) => { 
      setLastDirection(direction); // 6. Updates lastDirection with the direction of the swipe
      setCurrentIndex(index - 1); // 6. Updates currentIndex to the index of the next player profile
    };
  
    // 7. Define a function outOfFrame, which logs a message when a player profile card leaves the screen
    const outOfFrame = (player, idx) => { 
      console.log(`${player.username} (${idx}) left the screen!`); // 7. Outputs a console log indicating the player username and index
    };
  
    // 8. Define a function swipe, which handles swiping actions (left or right)
    const swipe = (dir) => {
      const newIndex = currentIndex - 1; // 8. Calculates the index of the next player profile based on the current index and direction
      if (newIndex >= 0 && newIndex < playerList.length) { // 8. Bounds check
        swiped(dir, playerList[newIndex], newIndex); // 8. Calls the swiped function with the direction, next player, and next index if it's within bounds
      }
    };
  
    // 9. Define a function goBack, which allows undoing a swipe action
    const goBack = () => {
      if (currentIndex < playerList.length - 1) { // 9. Checks if there are previous player profiles to go back to
        const newIndex = currentIndex + 1; // 9. Calculates the index of the previous player profile
        setCurrentIndex(newIndex); // 9. Updates currentIndex to the index of the previous player profile
      }
    };
  
    // 10. Render JSX:
    return (
      <>
        <h1>Profiles</h1> {/* Title: Profiles */}
        <div className="container text-center"> {/* Container for cards and buttons */}
          <div className="cardContainer"> {/* Map through playerList to render player profile cards */}
            {playerList.map((player, index) => (
              <div
                key={player.userid}
                className='card'
                ref={(ref) => (childRefs.current[index] = ref)} // 5. Initialize a ref to hold references to child elements (player profile cards)
              >
                <img className="player-avatar" src={player.avatarURL} alt={`Profile picture of ${player.username}`} />
                <p className="membertag">{player.username}, {player.currentRank}, {player.serverRegion}</p>
              </div>
            ))}
          </div>
          <div className='buttons'> {/* Buttons for swiping left, undoing swipe, and swiping right */}
            <button onClick={() => swipe('left')}>Swipe left!</button>
            <button onClick={() => goBack()}>Undo swipe!</button>
            <button onClick={() => swipe('right')}>Swipe right!</button>
          </div>
          {/* InfoText displaying the last swipe direction or a default message */}
          {lastDirection ? (
            <h2 className='infoText'>You swiped {lastDirection}</h2>
          ) : (
            <h2 className='infoText'>Swipe a card or press a button to get Restore Card button visible!</h2>
          )}
        </div>
      </>
    );
  }
  

export default Profile;