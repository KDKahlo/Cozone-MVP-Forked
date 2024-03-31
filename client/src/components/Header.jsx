import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";

function Header() {

    return (
        <>
        <header >
          <div className="header">
            
            <PersonIcon className = "profile-icon" />
            <h1 className="App-title">cozone.gg</h1>
            <ForumIcon  className = "chatbox-icon"/>
      </div>
      <h3>connect and conquer</h3>
        </header>
        </>
    );
    
}
export default Header;