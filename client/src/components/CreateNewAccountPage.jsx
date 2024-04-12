import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@material-ui/core';
import "./CreateNewAccountPage.css";



export default function CreateNewAccountPage() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

const [newPlayer, setNewPlayer] = useState({
        username: "",
        birthdate: "",
        email: "",
        password: "",
        serverRegion: "",
        currentRank: "",
        avatarURL: ""
    });



    useEffect(() => {
      // getUser();
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

   // function to add new player
    async function addPlayer() {
        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlayer)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Player added successfully:", data);
                navigate("./Profile");
             
            } else {
                console.error("Failed to add player");
            }
        } catch (error) {
            console.error("Error adding player:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlayer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      addPlayer();
    }


    // const handleChange = (event) => {
    //     const { user, value } = event.target;
    //     setNewUser((prevState) => ({ ...prevState, [user]: value }));
    // }

    // const addUser = async () => {
    //     //POST a new user using fetch to send the request to server
    //     //requirements: POST method, /api/users, body with values in json format
    //     //Once the request is completed, it should navigate the user to the profile page
    //    //before creating the user in the database we need to make sure all the required fields 
    //    //were completed, it they were not, the user should be alerted to fill in the missing fields.
       
    //     try {
    //       const results = await fetch("/api/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newUser),
    //       });
    //       const data = await results.json();
    //       // setUser(data);
    //       // setNewUser(USER_INITIAL_STATE);
    //        console.log("Player added successfully:", data);
    //        Navigate("/Profile");
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    //   const handleSubmit = (e) => {  
    //     e.preventDefault();
    //     addUser();
    // }


    return (
        <>
          <div>
                
                <h2>Add Player</h2>
                <form onSubmit={handleSubmit}>
                  <div className = "input-fields">
                    <input type="text" className="username" placeholder="Username" onChange={handleChange} />
                    <input type="text" className="birthdate" placeholder="DOB format: 1999-04-25"onChange={handleChange} />
                    <input type="text" className="email" placeholder="your email address" onChange={handleChange} />
                    <input type="text" className="password" placeholder="password" onChange={handleChange} />
                    <input type="text" className="serverRegion" placeholder="your server region"onChange={handleChange}/>
                    <input type="text" className="currentRank" placeholder="your current rank" onChange={handleChange} />
                    <input type="text" className="avatarURL" placeholder="avatar URL" onChange={handleChange} />
                   </div>
             <IconButton>
              <PersonAddIcon type="submit" fontSize="large" className = "profile-icon" />
             
             </IconButton> 
             <p>please click the icon to create new account</p>
                </form>
            </div> 
            
        {/* <div className='form'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="text" class="form-control" id="username" placeholder="Username" onChange={handleChange}/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="your email address" onChange={handleChange}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={handleChange}/>
                </div>
                <div class="form-select">
                <select class="form-select" aria-label="Default select example" onSelect={handleChange}>
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
                <select class="form-select" aria-label="Default select example" onSelect={handleChange}>
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
        </div> */}
        </>

)}