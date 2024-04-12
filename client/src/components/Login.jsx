import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";


function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState("");
  const navigate = useNavigate();

  const { username, password } = credentials;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    //I want to see first if the username exists in the database
    if (!username) {
      alert("Please create an account first");
      navigate("/CreateNewAccountPage");
    }  else if (username === "" || password === "") {
      alert("Please fill in all fields");
    } else {
    //if it doesn't exist, I want the user to be prompted to register
    //if it does exist, I want to continue with the rest of the code below.
    try {
      //send the request to the login
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
       //receive the token and store it in local storage
      //  console.log(data);
      localStorage.setItem("token", data.token, data.user);
     const userData = data.user;
     
      console.log("THIS IS MY USER DATA", userData.username);
     // navigate from here to the profile page
     setData(userData);
     navigate("./Profile");
    } catch (err) {
      let errorMessage = "An error occurred. Please try again."; // Default error message
  if (err.code === "INVALID_PASSWORD") {
    errorMessage = "Incorrect password. Please try again.";
  } else if (err.code === "USER_NOT_FOUND") {
    errorMessage = "Username not found. Please create an account.";
  }
  // Display the error message on the screen
  alert(errorMessage); // Using alert for simplicity, you can use other UI methods
    }
    }
  };

  const logout = () => {
    //remove the token from local storage
    localStorage.removeItem("token");
    setData(null)
  };

  // const requestData = async () => {
  //   //get the token from local storage
  //   const token = localStorage.getItem("token");
  //   try {
  //     const { data } = await axios.get("/api/auth/profile", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(data);
  //     setData(data);
  //   }catch (err) { 
  //     console.log(err);
  //     setData(null);
  //   }
  // };

  const handleNavigateToCreateNewAccountPage = () => {
    navigate("/CreateNewAccountPage");
    console.log("Navigating to Create New Account Page");
  }

  return (
    <div>
      <div className="login-fields">
        <div className="input-fields">
        <input
          value={username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
          
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
         
        />
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn login-button" onClick={login}>
            Log in
          </button>
          <button className="btn btn-outline-dark ml-2 logout-button" onClick={logout}>
            Log out
          </button>
        </div>
        <div className = "new-user-link">
        {/* need to handle adding new user link to CreateNewAccountpage */}
    <p>
        Don't have a Login and Password? <br></br>
        <Link to="./CreateNewAccountPage" onClick={handleNavigateToCreateNewAccountPage} className="link-to-add-new-acct">Click to create new account</Link> 
    </p>
        </div>
        </div>
      {/* <div className="text-center p-4">
        <button className=" btn btn-outline-primary" onClick={requestData}>
          Request protected data
        </button>
      </div> */}

      {data && (
        <div className="text-center p-4">
          <div className="alert">{data.username}</div>
        </div>
      )}
   <div>
  
      {data && <Profile data={data} />} {/* Pass data as a prop to Profile component */}
    </div>
    </div>
    
  );
}

export default Login;
