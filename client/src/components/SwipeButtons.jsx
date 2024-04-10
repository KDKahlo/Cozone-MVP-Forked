import React from 'react'
import "./SwipeButton.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@material-ui/core';

function SwipeButtons({restoreCard, onSwipe, player}) {

  const handleRestoreCardClick = () => {
    // Call restoreCard() when the ReplayIcon button is clicked
    restoreCard();
  };
  


  return (
    <div className ="swipeButtons">
        <IconButton className="swipeButtons_repeat" onClick={handleRestoreCardClick}>
         <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_left">
           {/* For adding to code when debugged ====> onClick={handleLeftSwipe(player)} */}
         <CloseIcon fontSize="large" />
        </IconButton>
         <IconButton className="swipeButtons_right" >
          {/* for adding to code when debugged ====> onClick={handleRightSwipe(player)} */}
          <ThumbUpIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        </div>
  )
}

export default SwipeButtons;