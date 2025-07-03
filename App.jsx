import React, { useState } from "react";
import logo from "./assests/logo.png";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
//import Dashboard from "./features/dashboard.jsx";

function App() {
  const [userNameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleVisibility = () => setVisible((prev) => !prev);

  const handleLogin = () => {
    setError("");
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userNameText,
        password: passwordText,
      }),
    })
      .then(async (res) => {
        if (!res.ok) 
        {
          const errorData = await res.json();
          // console.log(errorData);
          throw new Error(errorData.message || "Login failed");
          // alert('Login not successful, please try again!');
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);

        //alert('Login successful!');
        // console.log("Login response:", data);
        navigate("/dashboard", { state: { user: data } });
      })
      .catch((err) => {
        setError("Error, please try again!");
        // return res.status(401).json;
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex flex-col space-y-4">
          <Input
            placeholder="Username"
            value={userNameText}
            onChange={(e) => setUsernameText(e.target.value)}
          />

          <div className="relative">
            <Input
              placeholder="Password"
              type={visible ? "text" : "password"}
              value={passwordText}
              onChange={(e) => setPasswordText(e.target.value)}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleVisibility}
            >
              {visible ? (
                <FiEyeOff size={20} color="#00285D" />
              ) : (
                <FiEye size={20} color="#00285D" />
              )}
            </div>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button onClick={handleLogin}>LOGIN</Button>
         <Link to="/create-account" style={{ fontSize: "0.8rem" }}>
  Don't have an account? Create one here...
</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
