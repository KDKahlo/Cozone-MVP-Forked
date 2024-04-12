import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";


function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState(null);
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
    }  else {

   }
    //if it doesn't exist, I want the user to be prompted to register
    //if it does exist, I want to continue with the rest of the code below.
    try {
      //send the request to the login
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
       //receive the token and store it in local storage
       console.log(data);
      localStorage.setItem("token", data.token);
     //do the navigate here to the profile page
     navigate("./Profile");
    } catch (err) {
      console.log(err);
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
    navigate("./CreateNewAccountPage");
    console.log("Navigating to Create New Account Page");
  }

  return (
    <div>
      <div>
        <input
          value={username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control mb-2"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
        />
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
        Don't have a Login and Password? 
        <span onClick={handleNavigateToCreateNewAccountPage} 
          style={{ cursor: 'pointer', textDecoration: 'underline' }}>Click to create new account</span>
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
    </div>
    
  );
}

export default Login;
