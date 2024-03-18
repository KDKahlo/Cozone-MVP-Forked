import "./App.css"
import { useState } from "react"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Matches from "./components/Matches"
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/matches" elements={<Matches />}></Route>
      </Routes>
    </>
  )
}

export default App
