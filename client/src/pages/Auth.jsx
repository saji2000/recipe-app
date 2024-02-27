import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3003/auth/login", {
        username: username,
        password: password,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3003/auth/register", {
        username: username,
        password: password,
      });

      alert("Registration Completed!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="atuh-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password: </label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Auth;
