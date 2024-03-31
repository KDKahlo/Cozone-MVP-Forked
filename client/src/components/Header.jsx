import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";

function Header() {

    return (
        <>
        <header className="App-header">
          <div>
            <h1 className="App-title">cozone.gg</h1>
            <h3>connect and conquer</h3>
            <PersonIcon className = "profile-icon" />
            <ForumIcon  className = "chatbox-icon"/>
          {/*  </div>
       <ul className="nav justify-content-center">
          <li className="nav-item">
             <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/profile'>Profile</Link>
          </li>
        </ul> */}
      </div>
        </header>
        </>
    );
    
}
export default Header;