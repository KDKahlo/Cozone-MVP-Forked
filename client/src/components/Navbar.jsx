import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Navbar.css";
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";

function Navbar () {

    return (
        <>
        
          <div className="navbar-header">

               <Link to = "/Profile">
            <IconButton>
             
            <PersonIcon  fontSize="large" className = "profile-icon" />
            </IconButton>
            </Link>
            <h1 className="App-title">cozone.gg</h1>
            <Link to = "/Chats">
            <IconButton>
            <ForumIcon  fontSize="large" className = "chatbox-icon"/>
            </IconButton>
            </Link>
      </div>
      <h3>connect and conquer</h3>
    
        </>
    );
    
}
export default Navbar;