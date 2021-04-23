import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Herre");
    const authObject = {
      "Project-Id": "a4183f34-59e5-4795-9341-2e1bcbdac042",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (ex) {
      setError("Invalid Credentials, Try Again!");
    }
  };
  return (
    <div className="wrapper">
      <div className="form" align="centre">
        <h1 className="title">Esoteric Entry Chatter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <button
              type="submit"
              style={{ marginLeft: "20px" }}
              className="button"
            >
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
