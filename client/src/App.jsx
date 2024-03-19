import "./App.css";
import { useState } from "react";
import Profile from "./components/Profile";
import Users from "./components/Users";
import UserByRegion from "./components/UserByRegion";
import Form from "./components/Form";
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Profile</Link></li>
                <li><Link to='/userbyregion'>Connections</Link></li>
            </ul>
        </nav>
        <h1>cozone.gg</h1>
        <h3>connect and conquer</h3>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/userbyregion" element={<UserByRegion />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  )
}

export default App
