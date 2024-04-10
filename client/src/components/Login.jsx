import { useState } from "react";
import axios from "axios";

function Login({onLogin}) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      //send the request to the login
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });
       //receive the token and store it in local storage
       console.log(data);
      localStorage.setItem("token", data.token);
     

    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    //remove the token from local storage
    localStorage.removeItem("token");
    setData(null)
  };

  const requestData = async () => {
    //get the token from local storage
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("/api/auth/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setData(data);
    }catch (err) { 
      console.log(err);
      setData(null);
    }

  };

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
          <button className="btn btn-primary" onClick={login}>
            Log in
          </button>
          <button className="btn btn-outline-dark ml-2" onClick={logout}>
            Log out
          </button>
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
