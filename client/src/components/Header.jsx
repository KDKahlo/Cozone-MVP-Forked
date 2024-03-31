import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";
import IconButton from '@mui/material/IconButton';


function Header() {

    return (
        <>
        <header >
          <div className="header">
            <IconButton>
            <PersonIcon  fontSize="large" className = "profile-icon" />
            </IconButton>
            <h1 className="App-title">cozone.gg</h1>
            <IconButton>
            <ForumIcon  fontSize="large" className = "chatbox-icon"/>
            </IconButton>
      </div>
      <h3>connect and conquer</h3>
        </header>
        </>
    );
    
}
export default Header;