import React from 'react';
import { useState, useEffect } from 'react';

const USER_INITIAL_STATE = {
    username: "",
    birthdate: "",
    email: "",
    password: "",
    serverRegion: "",
    currentRank: "",
    avatarURL: "",
  }

export default function Form() {
    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState(USER_INITIAL_STATE);
  
    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = () => {
      fetch("/api/users")
        .then((response) => response.json())
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const handleInputChange = (event) => {
        const { user, value } = event.target;
        setNewUser((prevState) => ({ ...prevState, [user]: value }));
    }

    const addUser = async () => {
        //POST a new user using fetch to send the request to server
        //requirements: POST method, /api/users, body with values in json format
        try {
          const results = await fetch("/api/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
          const data = await results.json();
          setUser(data);
          setNewUser(USER_INITIAL_STATE);
        } catch (error) {
          console.log(error);
        }
      }

      const handleSubmit = (e) => {  
        e.preventDefault();
        addUser();
    }

    return (
        <>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" onChange={handleInputChange}/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleInputChange}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={handleInputChange}/>
                </div>
                <div class="form-select">
                <select class="form-select" aria-label="Default select example" onSelect={handleInputChange}>
                    <option selected>Select your Region</option>
                    <option value="1">North America</option>
                    <option value="2">Latin America</option>
                    <option value="3">Brazil</option>
                    <option value="4">Europe</option>
                    <option value="5">Korea</option>
                    <option value="6">Asia Pacific</option>
                    </select>
                </div>
                <div class="form-select">
                <select class="form-select" aria-label="Default select example" onSelect={handleInputChange}>
                    <option selected>Select your Rank</option>
                    <option value="1">Iron</option>
                    <option value="2">Bronze</option>
                    <option value="3">Silver</option>
                    <option value="4">Gold</option>
                    <option value="5">Platinum</option>
                    <option value="6">Diamond</option>
                    <option value="7">Ascendant</option>
                    <option value="8">Immortal</option>
                    <option value="9">Radiant</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>

)}