import "./App.css";
import Profile from "./components/Profile";
import Users from "./components/Users";
import UserByRegion from "./components/UserByRegion";
// import Form from "./components/Form";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [serverRegion, setServerRegion] = useState(`Korea`);
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getUsers();
    }, []);

  async function getUsers() {
    try {
      const response = await fetch(`http://localhost:4000/users/region/${serverRegion}`); // /api/users/region/Europe not working
      const data = await response.json();

      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  return (
    <>
      <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
        <p>Hello</p>
      </div>
        <h1>cozone.gg</h1>
        <h2>connect and conquer</h2>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/userbyregion" element={<UserByRegion />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes> */}
    </>
  )
}

export default App
